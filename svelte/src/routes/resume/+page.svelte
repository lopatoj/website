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
  <h2 class="section-heading">Education</h2>
  <hr />
  <div class="split-row pt-2">
    <span class="split-row-title">Rice University, George R. Brown School of Engineering</span>
    <span class="split-row-meta">Expected 5/2027</span>
  </div>
  <div class="oblique split-row pb-3 text-sm">
    <span class="min-w-0">Computer Science</span>
    <span class="shrink-0">GPA: 3.76</span>
  </div>

  <h2 class="section-heading">Work Experience</h2>
  <hr />
  <div class="flex w-full flex-col gap-2 py-2">
    {#each workExperiences as experience (experience.startDate)}
      <ExperienceItem {...experience} />
    {/each}
  </div>

  <h2 class="section-heading">Activities</h2>
  <hr />
  <div class="flex w-full flex-col gap-2 py-2">
    {#each activities as experience (experience.startDate)}
      <ExperienceItem {...experience} />
    {/each}
  </div>
</div>

<style lang="postcss">
  @reference "@app.css";
</style>
