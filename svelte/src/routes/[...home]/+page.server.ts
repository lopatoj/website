import { redirect } from "@sveltejs/kit";
import { sanityRepository } from "$lib";
import type { BlogSummary, ProjectSummary } from "$lib/sanity.svelte";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  params,
}): Promise<{
  projects: ProjectSummary[];
  blogs: BlogSummary[];
}> => {
  if (!["", "projects", "blog"].includes(params.home ?? "")) {
    redirect(303, "/");
  }

  return {
    projects: await sanityRepository.fetchPinnedProjectSummaries(3),
    blogs: await sanityRepository.fetchPinnedBlogSummaries(3),
  };
};
