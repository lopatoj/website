import { sanityRepository } from "$lib";
import type { Experience } from "$lib/sanity.svelte";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (): Promise<{
  experiences: Experience[];
}> => {
  return { experiences: await sanityRepository.fetchResumeExperiences() };
};
