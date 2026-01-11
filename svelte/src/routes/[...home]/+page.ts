import type { PageLoad } from "./$types";
import { pageSource, type Summary } from "$lib/pageSource";
import { redirect } from "@sveltejs/kit";

export const load: PageLoad = async ({
  params,
}): Promise<{
  projects: Summary[];
  blogs: Summary[];
}> => {
  if (!["", "projects", "blog"].includes(params.home)) {
    redirect(303, "/");
  }

  return {
    projects: await pageSource.fetchPinnedSummaries("project", 3),
    blogs: await pageSource.fetchPinnedSummaries("blog", 3),
  };
};
