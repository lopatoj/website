import { createClient } from "@sanity/client";
import type { ContentType, Experience, Page, Summary } from "$lib/types";

const client = createClient({
  projectId: "so7l8egj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2026-01-04",
});

const SUMMARY_FIELDS = `
  "slug": slug.current,
  title,
  thumbnail {
    caption,
    "url": image.asset -> url
  },
  description,
  "date": publishedAt
`;

type SummaryShape = Partial<Summary> & {
  thumbnail?: Partial<Summary["thumbnail"]> | null;
};

type PageShape = SummaryShape & {
  body?: Page["body"] | null;
  repository?: Page["repository"] | null;
};

function normalizeSummary(summary: SummaryShape): Summary | null {
  const slug = summary.slug?.trim();
  const title = summary.title?.trim();

  if (!slug || !title) {
    return null;
  }

  return {
    slug,
    title,
    thumbnail: {
      url: summary.thumbnail?.url ?? "",
      caption: summary.thumbnail?.caption ?? title,
    },
    description: summary.description ?? "",
    date: summary.date ?? new Date().toISOString(),
  };
}

function normalizePage(page: PageShape | null): Page | null {
  if (!page) {
    return null;
  }

  const summary = normalizeSummary(page);
  if (!summary) {
    return null;
  }

  return {
    ...summary,
    body: page.body ?? [],
    repository: page.repository ?? undefined,
  };
}

/**
 * Fetches the full data of a content page.
 *
 * @param type the content type
 * @param slug the page slug
 * @returns the Page, or null if not found
 */
export async function fetchPage(type: ContentType, slug: string): Promise<Page | null> {
  try {
    const page = await client.fetch<PageShape | null>(
      `*[_type == $type && slug.current == $slug]{ ${SUMMARY_FIELDS}, body${type === "project" ? ", repository" : ""} }[0]`,
      {
        type,
        slug,
      },
    );

    return normalizePage(page);
  } catch (error) {
    console.error("Failed to fetch page from Sanity", { type, slug, error });
    return null;
  }
}

/**
 * Fetches the pinned summaries of a content type, most recent first.
 *
 * @param type the content type
 * @param count the number of summaries to fetch
 * @returns the Summary[], or empty array if none found
 */
export async function fetchPinnedSummaries(type: ContentType, count: number): Promise<Summary[]> {
  try {
    const summaries = await client.fetch<SummaryShape[]>(
      `*[_type == $type && pinned == true] | order(publishedAt desc) [0...$count] { ${SUMMARY_FIELDS} }`,
      { type, count },
    );
    return summaries
      .map((summary) => normalizeSummary(summary))
      .filter((summary): summary is Summary => summary !== null);
  } catch (error) {
    console.error("Failed to fetch pinned summaries from Sanity", { type, count, error });
    return [];
  }
}

/**
 * Fetches all resume experiences, most recent first.
 */
export async function fetchResumeExperiences(): Promise<Experience[]> {
  try {
    return await client.fetch(`*[_type == "experience"]{
      title,
      type,
      company,
      location,
      startDate,
      endDate,
      current,
      description,
      bullets
    } | order(startDate desc)`);
  } catch (error) {
    console.error("Failed to fetch resume experiences from Sanity", { error });
    return [];
  }
}
