<script lang="ts">
  import ExperienceItem from "./ExperienceItem.svelte";

  const { data } = $props();

  // Experiences arrive pre-sorted by startDate descending from the server.
  const workExperiences = $derived(data.experiences.filter((e) => e.type === "work"));
  const activities = $derived(data.experiences.filter((e) => e.type === "project"));
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

<style lang="postcss">
  @reference "@app.css";

  hr {
    @apply h-0.5 rounded-full border-none bg-stone-200/20;
  }
</style>
