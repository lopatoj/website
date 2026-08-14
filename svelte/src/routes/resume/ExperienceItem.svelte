<script lang="ts">
import type { Experience } from "$lib/sanity.svelte";

const { title, company, description, location, startDate, endDate, current, bullets }: Experience =
  $props();

const startAsDate = $derived(new Date(startDate));
const endAsData = $derived(new Date(endDate));

const start = $derived(`${startAsDate.getMonth() + 1}/${startAsDate.getFullYear()}`);
const end = $derived(
  current ? "Present" : `${endAsData.getMonth() + 1}/${endAsData.getFullYear()}`,
);
</script>

<section class="flex flex-col mb-1">
  <div class="flex flex-row w-full">
    <span class="mr-auto font-semibold">{title}</span>
    <span>
      {start}
      <span class="text-sm font-mono ligatures align-text-top ml-0.5"> -> </span>
      {end}
    </span>
  </div>
  <div class="flex flex-row w-full text-sm text-fg-a oblique">
    <span class="mr-auto">{company}</span>
    <span>{location}</span>
  </div>
  <p>{description}</p>
  <ul class="list-outside ml-4 list-disc mt-1 space-y-1 text-fg-a marker:text-fg-a">
    {#each bullets as bullet}
      <li class="text-sm">{bullet}</li>
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
