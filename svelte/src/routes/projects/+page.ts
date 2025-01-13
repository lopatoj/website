import { client } from "$lib/sanity";
import type { PageLoad } from "./$types";

export type Summary = {
	number: number,
	name: string,
	thumbnail: string
	description: string,
	date: string
};

export const load: PageLoad = async (): Promise<{ projects: Summary[] }> => {
	let projects = await client.fetch(`*[_type == "project"]{ 
	  number, 
	  name, 
	  "thumbnail": images[0].image.asset -> url,
	  description,
	  "date": publishedAt
	} | order(date desc)`);

	return {
		projects
	};
};