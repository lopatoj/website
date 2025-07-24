import { client } from "$lib/sanity";
import type { PageLoad } from "./$types";
import { pageEnum } from "sanity/schemaTypes/pageType";

export type Summary = {
	slug: string,
	type: typeof pageEnum[number],
	name: string,
	thumbnail: {
		url: string,
		caption: string
	},
	description: string,
	date: string
};

export const load: PageLoad = async (): Promise<{ pages: Summary[] }> => {
	let pages = await client.fetch(`*[_type == "page"]{ 
	  "slug": slug.current, 
	  type,
	  name, 
	  thumbnail {
			caption,
			"url": image.asset -> url
	  },
	  description,
	  "date": publishedAt
	} | order(date desc)`);

	return {
		pages
	};
};