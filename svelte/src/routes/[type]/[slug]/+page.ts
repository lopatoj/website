import { client } from "$lib/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { InputValue } from "@portabletext/svelte";
import { pageEnum } from "sanity/schemaTypes/pageType";
import type { Summary } from "../../+page";

export type Page = Summary & {
	body: InputValue
};

export const load: PageLoad = async ({ params }): Promise<{ page: Page }> => {
	if (pageEnum.indexOf(params.type) === -1) {
		error(403, `Page type ${params.type} does not exist.`);
	}

	const page: Page = await client.fetch(`*[_type == "page" && slug.current == "${params.slug}"]{ 
	  "slug": slug.current, 
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

	if (!page) {
		error(404, `Page ${params.slug} does not exist.`);
	}

	return { page };
};