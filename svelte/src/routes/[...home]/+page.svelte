<script lang="ts">
import SummaryView from "$lib/components/SummaryView.svelte";

const { data } = $props();
</script>

<svelte:head>
  <title>lopa.to</title>
</svelte:head>

<section class="w-content text-md mt-4">
  <p>Hello! My name is Justin Lopato, and you have found my portfoliresumlog.</p>
  <p>Here are some projects I've worked on:</p>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each data.projects as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
  <p>And here are some things I've written:</p>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each data.blogs as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
</section>

<style lang="postcss">
p {
  margin-bottom: 1rem;
}
</style>
