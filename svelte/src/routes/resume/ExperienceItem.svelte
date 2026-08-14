<script lang="ts">
  import type { Experience } from "$lib/sanity.svelte";

  const {
    title,
    company,
    description,
    location,
    startDate,
    endDate,
    current,
    bullets,
  }: Experience = $props();

  const startAsDate = $derived(new Date(startDate));
  const endAsData = $derived(new Date(endDate));

  const start = $derived(`${startAsDate.getMonth() + 1}/${startAsDate.getFullYear()}`);
  const end = $derived(
    current ? "Present" : `${endAsData.getMonth() + 1}/${endAsData.getFullYear()}`,
  );
</script>

<section class="mb-1 flex flex-col">
  <div class="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
    <span class="min-w-0 font-semibold text-pretty">{title}</span>
    <span class="text-fg-a sm:text-fg shrink-0 text-sm sm:text-base">
      {start}
      <span class="ligatures ml-0.5 align-text-top font-mono text-sm"> -> </span>
      {end}
    </span>
  </div>
  <div
    class="text-fg-a oblique flex flex-col gap-x-4 text-sm sm:flex-row sm:items-baseline sm:justify-between"
  >
    <span class="min-w-0 text-pretty">{company}</span>
    <span class="shrink-0">{location}</span>
  </div>
  <p class="text-pretty">{description}</p>
  <ul class="text-fg-a marker:text-fg-a mt-1 ml-4 list-outside list-disc space-y-1">
    {#each bullets as bullet (bullet)}
      <li class="text-sm text-pretty">{bullet}</li>
    {/each}
  </ul>
</section>

<style>
  .ligatures {
    font-variant-ligatures: contextual common-ligatures;
    font-feature-settings:
      "calt" 1,
      "liga" 1;
    text-rendering: optimizeLegibility;
  }
</style>
