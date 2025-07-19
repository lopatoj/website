import { client } from "$lib/sanity";
import type { PageLoad } from "./$types";

export type Summary = {
	number: number,
	type: boolean,
	name: string,
	thumbnail: {
		url: string,
		caption: string
	},
	description: string,
	date: string
};

export const load: PageLoad = async (): Promise<{ projects: Summary[] }> => {
	let projects = await client.fetch(`*[_type == "project"]{ 
	  number,
	  type,
	  name, 
	  thumbnail {
		"url": image.asset -> url,
		caption
	  },
	  description,
	  "date": publishedAt
	} | order(date desc)`);

	return {
		projects
	};
};