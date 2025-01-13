import { client } from "$lib/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { PortableTextBlock } from "@portabletext/types";

export type Project = {
	number: number,
	name: string,
	images: {
		caption: string,
		src: string
	}[],
	description: string,
	date: string,
	body: PortableTextBlock[]
};

export const load: PageLoad = async ({ params }): Promise<{ project: Project }> => {
	const number = parseInt(params.number);

	if(Number.isNaN(number)) {
		error(404, `Project #${params.number} does not exist.`);
	}

	const project: Project = await client.fetch(`*[_type == "project" && number == ${number}]{ 
	  number, 
	  name, 
	  "images": images[] {
			caption,
			"src": image.asset -> url
	  },
	  description,
	  "date": publishedAt,
	  body
	}[0]`);

	if(!project) {
		error(404, `Project #${params.number} does not exist.`);
	}

	return {
		project
	}
};