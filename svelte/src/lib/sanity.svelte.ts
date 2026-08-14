import type { InputValue } from "@portabletext/svelte";

/**
 * Summary information of a blog post.
 */
export type BlogSummary = {
  slug: string;
  title: string;
  thumbnail: {
    url: string;
    caption: string;
  };
  description: string;
  date: string;
};

/**
 * Blog post data with body text.
 */
export type BlogPage = BlogSummary & {
  body: InputValue;
};

/**
 * Summary information of a project.
 */
export type ProjectSummary = {
  slug: string;
  title: string;
  thumbnail: {
    url: string;
    caption: string;
  };
  description: string;
  date: string;
};

/**
 * Project data with body text.
 */
export type ProjectPage = ProjectSummary & {
  body: InputValue;
};

/**
 * Resume experience data.
 */
export type Experience = {
  title: string;
  type: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  bullets: string[];
};

type FetchReturn =
  | BlogSummary
  | BlogSummary[]
  | BlogPage
  | ProjectSummary
  | ProjectSummary[]
  | ProjectPage
  | Experience
  | Experience[]
  | null;

// PageSource Interfaces

/**
 * Client is an interface which supports fetching pages via GROQ queries.
 */
interface GroqClient {
  fetch(query: string): Promise<FetchReturn>;
}

/**
 * Implements GROQ queries for retrieving from Sanity CMS data.
 */
export class SanityRepository {
  /**
   * Data client used for fetching data via GROQ queries.
   */
  private client: GroqClient;

  /**
   * Constructs an instance of SanityRepository.
   *
   * @param client the client to use for fetching pages
   */
  public constructor(client: GroqClient) {
    this.client = client;
  }

  /**
   * Fetches the summary information of a blog post.
   *
   * @param type the page type
   * @param slug the page slug
   * @returns the Summary, or null if not found
   */
  public async fetchBlogSummary(slug: string): Promise<BlogSummary | null> {
    const result = (await this.client.fetch(`*[_type == "blog" && slug.current == "${slug}"]{
   	  "slug": slug.current,
   	  "type": _type,
   	  title,
   	  thumbnail {
   			caption,
   			"url": image.asset -> url
   	  },
   	  description,
   	  "date": publishedAt
   	}[0]`)) as BlogSummary;

    if (!result) return null;

    return result;
  }

  /**
   * Fetches the full information of a page.
   *
   * @param slug the page slug
   * @returns the Page, or null if not found
   */
  public async fetchBlogPage(slug: string): Promise<BlogPage | null> {
    const result = (await this.client.fetch(`*[_type == "blog" && slug.current == "${slug}"]{
   	  "slug": slug.current,
   	  "type": _type,
   	  title,
   	  thumbnail {
   			caption,
   			"url": image.asset -> url
   	  },
   	  description,
   	  "date": publishedAt,
      body
   	}[0]`)) as BlogPage;

    if (!result) return null;

    return result;
  }

  /**
   * Fetches the pinned summaries of a page type.
   *
   * @param count the number of summaries to fetch
   * @returns the BlogSummary[], or empty array if none found
   */
  public async fetchPinnedBlogSummaries(count: number): Promise<BlogSummary[]> {
    return (await this.client.fetch(`*[_type == "blog" && pinned == true]{
  	  "slug": slug.current,
  	  "type": _type,
  	  title,
  	  thumbnail {
  			caption,
  			"url": image.asset -> url
  	  },
  	  description,
  	  "date": publishedAt
  	}[0...${count}] | order(date desc)`)) as BlogSummary[];
  }

  /**
   * Fetches the summary information of a project.
   *
   * @param type the page type
   * @param slug the page slug
   * @returns the ProjectSummary, or null if not found
   */
  public async fetchProjectSummary(slug: string): Promise<ProjectSummary | null> {
    const result = (await this.client.fetch(`*[_type == "project" && slug.current == "${slug}"]{
   	  "slug": slug.current,
   	  "type": _type,
   	  title,
   	  thumbnail {
   			caption,
   			"url": image.asset -> url
   	  },
   	  description,
   	  "date": publishedAt
   	}[0]`)) as ProjectSummary;

    if (!result) return null;

    return result;
  }

  /**
   * Fetches the full information of a page.
   *
   * @param slug the page slug
   * @returns the Page, or null if not found
   */
  public async fetchProjectPage(slug: string): Promise<ProjectPage | null> {
    const result = (await this.client.fetch(`*[_type == "project" && slug.current == "${slug}"]{
   	  "slug": slug.current,
   	  "type": _type,
   	  title,
   	  thumbnail {
   			caption,
   			"url": image.asset -> url
   	  },
   	  description,
   	  "date": publishedAt,
      body
   	}[0]`)) as ProjectPage;

    if (!result) return null;

    return result;
  }

  /**
   * Fetches the pinned summaries of a page type.
   *
   * @param count the number of summaries to fetch
   * @returns the ProjectSummary[], or empty array if none found
   */
  public async fetchPinnedProjectSummaries(count: number): Promise<ProjectSummary[]> {
    return (await this.client.fetch(`*[_type == "project" && pinned == true]{
  	  "slug": slug.current,
  	  title,
  	  thumbnail {
  			caption,
  			"url": image.asset -> url
  	  },
  	  description,
  	  "date": publishedAt
  	}[0...${count}] | order(date desc)`)) as ProjectSummary[];
  }

  public async fetchResumeExperiences(): Promise<Experience[]> {
    return (await this.client.fetch(`*[_type == "experience"]{
      title,
      type,
      company,
      location,
      startDate,
      endDate,
      current,
      description,
      bullets
    }`)) as Experience[];
  }
}
