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
  <hr />
  <div class="text-md flex flex-col gap-x-4 pt-2 sm:flex-row sm:items-baseline sm:justify-between">
    <span class="min-w-0 font-semibold text-pretty"
      >Rice University, George R. Brown School of Engineering</span
    >
    <span class="text-fg-a sm:text-fg shrink-0 text-sm sm:text-base">Expected 5/2027</span>
  </div>
  <div
    class="oblique flex flex-col gap-x-4 pb-3 text-sm sm:flex-row sm:items-baseline sm:justify-between"
  >
    <span class="min-w-0">Computer Science</span>
    <span class="shrink-0">GPA: 3.75</span>
  </div>

  <h2 class="text-lg font-semibold">Work Experience</h2>
  <hr />
  <div class="text-md flex w-full flex-col gap-2 py-2">
    {#each workExperiences as experience (experience.startDate)}
      <ExperienceItem {...experience} />
    {/each}
  </div>

  <h2 class="text-lg font-semibold">Activities</h2>
  <hr />
  <div class="text-md flex w-full flex-col gap-2 py-2">
    {#each activities as experience (experience.startDate)}
      <ExperienceItem {...experience} />
    {/each}
  </div>
</div>

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

<style lang="postcss">
  @reference "@app.css";

  hr {
    @apply h-0.5 rounded-full border-none bg-stone-200/20;
  }
</style>
