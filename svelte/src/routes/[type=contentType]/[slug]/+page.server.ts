import { error } from "@sveltejs/kit";
import { fetchPage } from "$lib/server/sanity";
import type { ContentType, Page } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  params,
}): Promise<{ page: Page; type: ContentType }> => {
  const type = params.type as ContentType;
  const page = await fetchPage(type, params.slug);

  if (!page) {
    error(404, `Page ${type}/${params.slug} does not exist.`);
  }

  return { page, type };
};
