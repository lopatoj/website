import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { pageSource, type Page } from "$lib/pageSource";

export const load: PageLoad = async ({ params }): Promise<{ page: Page }> => {
  if (params.slug.length === 0) {
    error(404, `Page slug ${params.slug} does not exist.`);
  }

  const page = await pageSource.fetchPage(params.type, params.slug);

  if (!page) {
    error(404, `Page ${params.type}/${params.slug} does not exist.`);
  }

  return { page };
};
