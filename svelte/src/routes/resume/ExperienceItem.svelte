<script lang="ts">
  import type { Experience } from "$lib/types";

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
  const endAsDate = $derived(new Date(endDate));

  const start = $derived(`${startAsDate.getMonth() + 1}/${startAsDate.getFullYear()}`);
  const end = $derived(
    current ? "Present" : `${endAsDate.getMonth() + 1}/${endAsDate.getFullYear()}`,
  );
</script>

<section class="mb-1 flex flex-col">
  <div class="split-row">
    <span class="split-row-title">{title}</span>
    <span class="split-row-meta">
      {start}
      <span class="ligatures ml-0.5 align-text-top font-mono text-sm"> -> </span>
      {end}
    </span>
  </div>
  <div class="text-fg-a oblique split-row text-sm">
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
