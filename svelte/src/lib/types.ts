import type { InputValue } from "@portabletext/svelte";

/**
 * The kinds of content pages served by the site.
 */
export type ContentType = "blog" | "project";

/**
 * Summary information of a content page (blog post or project).
 */
export type Summary = {
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
 * Full content page data with body text.
 */
export type Page = Summary & {
  body: InputValue;
  repository?: string;
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
