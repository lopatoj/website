import { error } from "@sveltejs/kit";
import { sanityRepository } from "$lib";
import type { ProjectPage } from "$lib/sanity.svelte";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }): Promise<{ page: ProjectPage }> => {
  if (params.slug.length === 0) {
    error(404, `Page slug ${params.slug} does not exist.`);
  }

  const page = await sanityRepository.fetchProjectPage(params.slug);

  if (!page) {
    error(404, `Page project/${params.slug} does not exist.`);
  }

  return { page };
};
