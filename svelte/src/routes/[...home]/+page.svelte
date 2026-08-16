<script lang="ts">
  import SummaryView from "$lib/components/SummaryView.svelte";

  const { data } = $props();
</script>

<svelte:head>
  <title>lopa.to</title>
</svelte:head>

<section class="w-content">
  <p>Hello! My name is Justin Lopato, and I'm a CS student and passionate roboticist.</p>
  <p>
    Here I exhibit my love for all things robotics, programming, and music. Whether molding parts in
    CAD, authoring code, and composing questionable tunes, I always dedicate myself to delivering
    the best thing possible.
  </p>
  <div id="projects" class="scroll-mt-24">
    <p>Here are some projects I've worked on:</p>
    <div class="-mt-2 mb-2 flex min-h-8 flex-col items-center gap-4">
      {#each data.projects as summary (summary.slug)}
        <SummaryView {...summary} type="project" />
      {/each}
    </div>
  </div>
  <div id="blog" class="scroll-mt-24">
    <p>And here are some things I've written:</p>
    <div class="-mt-2 mb-2 flex min-h-8 flex-col items-center gap-4">
      {#each data.blogs as summary (summary.slug)}
        <SummaryView {...summary} type="blog" />
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  p {
    margin-bottom: 1rem;
  }
</style>
