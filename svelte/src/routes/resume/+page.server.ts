import { fetchResumeExperiences } from "$lib/server/sanity";
import type { Experience } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (): Promise<{
  experiences: Experience[];
}> => {
  return { experiences: await fetchResumeExperiences() };
};
