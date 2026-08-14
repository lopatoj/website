<script lang="ts">
import ExperienceItem from "./ExperienceItem.svelte";

const { data } = $props();

const workExperiences = $derived(
  data.experiences
    .filter((experience) => experience.type === "work")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()),
);
const activities = $derived(
  data.experiences
    .filter((experience) => experience.type === "project")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()),
);
</script>

<svelte:head>
  <title>lopa.to | resume</title>
</svelte:head>

<div class="w-full font-sans">
  <h2 class="text-lg font-semibold">Education</h2>
  <hr>
  <div class="flex flex-row w-full text-md pt-2">
    <span class="mr-auto font-semibold"
      >Rice University, George R. Brown School of Engineering</span
    >
    <span>Expected 5/2027</span>
  </div>
  <div class="flex flex-row w-full text-sm pb-3 oblique">
    <span class="mr-auto">Computer Science</span>
    <span>GPA: 3.75</span>
  </div>

  <h2 class="text-lg font-semibold">Work Experience</h2>
  <hr>
  <div class="flex flex-col w-full gap-2 py-2 text-md">
    {#each workExperiences as experience (experience.startDate)}
      <ExperienceItem {...experience} />
    {/each}
  </div>

  <h2 class="text-lg font-semibold">Activities</h2>
  <hr>
  <div class="flex flex-col w-full gap-2 py-2 text-md">
    {#each activities as experience (experience.startDate)}
      <ExperienceItem {...experience} />
    {/each}
  </div>
</div>

<style lang="postcss">
@reference "@app.css";

hr {
  @apply bg-stone-200/20 h-0.5 border-none rounded-full;
}
</style>

<!-- <svelte:head>
  <link
    rel="preload"
    as="image"
    href={PUBLIC_RESUME_IMAGE_URL}
    fetchpriority="high"
  />
</svelte:head>

<abbr title="Click to download">
  <a
    href={PUBLIC_RESUME_PDF_URL}
    class="my-6 flex flex-col items-center dark:hover:opacity-90!"
  >
    <img
      src={PUBLIC_RESUME_IMAGE_URL}
      alt="Justin's Resume"
      class="bg-white p-10 box-content shadow-xl dark:shadow-black rounded-sm"
    />
  </a>
</abbr> -->
