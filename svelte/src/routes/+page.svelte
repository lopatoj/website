<script lang="ts">
  import SummaryView from "./SummaryView.svelte";
  import { pageEnum } from "sanity/schemaTypes/pageType";

  const { data } = $props();

  const categories = new Map(
    pageEnum.map((t) => [t, data.pages.filter((p) => p.type === t)]),
  );
</script>

<svelte:head>
  <title>lopa.to</title>
</svelte:head>

<div>
  <div class="flex flex-col gap-2 mb-8">
    <h2
      id="about-me"
      class="text-4xl w-max mb-1 pb-3 pr-3 rounded-br-2xl br-border scroll-mt-28 sm:scroll-mt-16"
    >
      hi, i'm justin!
    </h2>
    <p class="text-lg">
      I'm a CS student at Rice University. You can find my projects and other
      stuff I'm interested in below.
    </p>
  </div>
  <h2
    id="project"
    class="text-2xl w-max font-medium mb-1 pb-2 pr-2 rounded-br-xl br-border scroll-mt-40 sm:scroll-mt-24"
  >
    projects
  </h2>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each categories.get("project")! as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
  <h2
    id="etc"
    class="text-2xl w-max font-medium mb-1 pb-2 pr-2 rounded-br-xl br-border scroll-mt-40 sm:scroll-mt-24"
  >
    more stuff!
  </h2>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each categories.get("etc")! as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
</div>

<style lang="postcss">
  .br-border {
    @apply border-r-[3px] border-b-[3px] border-b-black/50 border-r-black/50;
  }
</style>
