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
  <div class="flex min-h-8 flex-col items-center gap-4">
    {#each data.projects as summary (summary.slug)}
      <SummaryView {...summary} type="project" />
    {/each}
  </div>
  <p>And here are some things I've written:</p>
  <div class="flex min-h-8 flex-col items-center gap-4">
    {#each data.blogs as summary (summary.slug)}
      <SummaryView {...summary} type="blog" />
    {/each}
  </div>
</section>

<style lang="postcss">
  p {
    margin-bottom: 1rem;
  }
</style>
