import type { InputValue } from '@portabletext/svelte';
import { client } from './sanity';

// PageSource Types

/**
 * Summary is a type containing the summary information of a page.
 */
export type Summary = {
	slug: string;
	type: string;
	title: string;
	thumbnail: {
		url: string;
		caption: string;
	};
	description: string;
	date: string;
};

/**
 * Page is a type containing the summary information of a page, and also the body of the page.
 */
export type Page = Summary & {
	body: InputValue;
};

const pageTypes = ['project', 'blog'] as const;

export type PageType = (typeof pageTypes)[number];

// PageSource Interfaces

/**
 * Client is an interface which supports fetching pages via GROQ queries. Implemented by SanityClient.
 */
interface Client {
	fetch(query: string): Promise<Summary | Page | Summary[] | Page[]>;
}

/**
 * PageSource is a class that implements GROQ queries for fetching CMS pages.
 */
class PageSource {
	private client: Client;

	/**
	 * Constructs an instance of PageSource.
	 *
	 * @param client the client to use for fetching pages
	 */
	constructor(client: Client) {
		this.client = client;
	}

	/**
	 * Fetches the summary information of a page.
	 *
	 * @param type the page type
	 * @param slug the page slug
	 * @returns the Summary, or null if not found
	 */
	public async fetchSummary(type: PageType, slug: string): Promise<Summary | null> {
		const result = (await this.client.fetch(`*[_type == "${type}" && slug.current == "${slug}"]{
   	  "slug": slug.current,
   	  "type": _type,
   	  title,
   	  thumbnail {
   			caption,
   			"url": image.asset -> url
   	  },
   	  description,
   	  "date": publishedAt
   	}[0]`)) as Summary;

		if (!result) return null;

		return result;
	}

	/**
	 * Fetches the full information of a page.
	 *
	 * @param type the page type
	 * @param slug the page slug
	 * @returns the Page, or null if not found
	 */
	public async fetchPage(type: PageType, slug: string): Promise<Page | null> {
		const result = (await this.client.fetch(`*[_type == "${type}" && slug.current == "${slug}"]{
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
   	}[0]`)) as Page;

		if (!result) return null;

		return result;
	}

	/**
	 * Fetches the pinned summaries of a page type.
	 *
	 * @param type the page type
	 * @param count the number of summaries to fetch
	 * @returns the Summary[], or empty array if none found
	 */
	public async fetchPinnedSummaries(type: PageType, count: number): Promise<Summary[]> {
		return (await this.client.fetch(`*[_type == "${type}" && pinned == true]{
  	  "slug": slug.current,
  	  "type": _type,
  	  title,
  	  thumbnail {
  			caption,
  			"url": image.asset -> url
  	  },
  	  description,
  	  "date": publishedAt
  	}[0...${count}] | order(date desc)`)) as Summary[];
	}

	/**
	 * Checks if a string is a valid page type.
	 *
	 * @param type the string to check
	 * @returns true if the string is a valid page type, false otherwise
	 */
	public isPageType(type: string): type is PageType {
		return pageTypes.includes(type as PageType);
	}
}

/**
 * Singleton instance of PageSource.
 */
export const pageSource = new PageSource(client);
