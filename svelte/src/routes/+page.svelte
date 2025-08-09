<script lang="ts">
  const { data } = $props();

  import SummaryView from "./SummaryView.svelte";
  import { pageEnum } from "sanity/schemaTypes/pageType";

  const categories = new Map(pageEnum.map((t) => [t, data.pages.filter((p) => p.type === t)]));
</script>

<svelte:head>
  <title>lopa.to</title>
</svelte:head>

<div>
  <h2 id="project" class="text-3xl font-medium my-4 text-stone-600">Projects</h2>
  <div class="flex flex-col gap-4 items-center">
    {#each categories.get("project")! as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
  <h2 id="etc" class="text-3xl font-medium my-4 text-stone-600">More stuff!</h2>
  <div class="flex flex-col gap-4 items-center">
    {#each categories.get("etc")! as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
</div>
 