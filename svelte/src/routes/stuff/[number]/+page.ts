import { client } from "$lib/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { InputValue } from "@portabletext/svelte";

export type Project = {
	number: number,
	name: string,
	type: boolean,
	thumbnail: {
		caption: string,
		url: string
	},
	description: string,
	date: string,
	body: InputValue
};

export const load: PageLoad = async ({ params }): Promise<{ project: Project }> => {
	const number = parseInt(params.number);

	if (Number.isNaN(number)) {
		error(404, `Project #${params.number} does not exist.`);
	}

	const project: Project = await client.fetch(`*[_type == "project" && number == ${number}]{ 
	  number, 
	  type,
	  name, 
	  thumbnail {
		caption,
		"url": image.asset -> url
	  },
	  description,
	  "date": publishedAt,
	  body
	}[0]`);

	if (!project) {
		error(404, `Project #${params.number} does not exist.`);
	}

	return { project };
};