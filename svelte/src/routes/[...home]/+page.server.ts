import { redirect } from "@sveltejs/kit";
import { fetchPinnedSummaries } from "$lib/server/sanity";
import type { Summary } from "$lib/types";
import type { PageServerLoad } from "./$types";

// This catch-all route renders the home page for "/", "/projects" and "/blog".
// The latter two exist so the nav links can smooth-scroll to their sections
// (see scrollTo in $lib/utils/dom.ts); anything else redirects home.
export const load: PageServerLoad = async ({
  params,
}): Promise<{
  projects: Summary[];
  blogs: Summary[];
}> => {
  if (!["", "projects", "blog"].includes(params.home ?? "")) {
    redirect(303, "/");
  }

  return {
    projects: await fetchPinnedSummaries("project", 3),
    blogs: await fetchPinnedSummaries("blog", 3),
  };
};
