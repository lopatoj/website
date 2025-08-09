<script lang="ts">
  import SummaryView from "./SummaryView.svelte";
  import { pageEnum } from "sanity/schemaTypes/pageType";

  const { data } = $props();

  const categories = new Map(pageEnum.map((t) => [t, data.pages.filter((p) => p.type === t)]));
</script>

<svelte:head>
  <title>lopa.to</title>
</svelte:head>

<div>
  <h2 id="project" class="text-2xl w-max font-bold mb-1 pb-2 pr-2 bg-slate-50 rounded-br-xl text-violet-700 scroll-mt-28 sm:scroll-mt-16">projects</h2>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each categories.get("project")! as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
  <h2 id="etc" class="text-2xl w-max font-bold mb-1 pb-2 pr-2 bg-slate-50 rounded-br-xl text-red-600 scroll-mt-40 sm:scroll-mt-24">more stuff!</h2>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each categories.get("etc")! as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
  <div class="h-96"></div>
</div>

<style>
  #project {
    border-bottom: solid 3px #6d28d980;
    border-right: solid 3px #6d28d980;
  }

  #etc {
    border-bottom: solid 3px #dc262680;
    border-right: solid 3px #dc262680;
  }
</style>