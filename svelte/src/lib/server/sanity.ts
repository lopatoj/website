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

/**
 * Fetches the full data of a content page.
 *
 * @param type the content type
 * @param slug the page slug
 * @returns the Page, or null if not found
 */
export async function fetchPage(type: ContentType, slug: string): Promise<Page | null> {
  return client.fetch(`*[_type == $type && slug.current == $slug]{ ${SUMMARY_FIELDS}, body }[0]`, {
    type,
    slug,
  });
}

/**
 * Fetches the pinned summaries of a content type, most recent first.
 *
 * @param type the content type
 * @param count the number of summaries to fetch
 * @returns the Summary[], or empty array if none found
 */
export async function fetchPinnedSummaries(type: ContentType, count: number): Promise<Summary[]> {
  return client.fetch(
    `*[_type == $type && pinned == true]{ ${SUMMARY_FIELDS} }[0...$count] | order(date desc)`,
    { type, count },
  );
}

/**
 * Fetches all resume experiences, most recent first.
 */
export async function fetchResumeExperiences(): Promise<Experience[]> {
  return client.fetch(`*[_type == "experience"]{
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
}
