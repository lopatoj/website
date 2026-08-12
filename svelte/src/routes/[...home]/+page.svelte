<script lang="ts">
import SummaryView from "$lib/components/SummaryView.svelte";

const { data } = $props();
</script>

<svelte:head>
  <title>lopa.to</title>
</svelte:head>

<header class="flex flex-row mb-8 h-55 bg-bg-a mt-6 rounded-sm">
  <div class="flex flex-col justify-center gap-4 grow">
    <h2
      class="block px-4 py-2 -skew-x-6 rounded-sm -translate-x-2 w-fit text-3xl scroll-mt-28 sm:scroll-mt-16 dark:bg-emerald-700 bg-emerald-700 text-stone-50"
    >
      hello, i'm <span class="font-medium">justin lopato</span>
    </h2>
    <p class="text-xl pl-5 font-light dark:text-stone-50 text-emerald-950">
      I'm a CS undergrad at Rice University. You can find my projects and other
      stuff I'm interested in below.
    </p>
  </div>
  <div class="flex justify-end items-center">
    <img
      src="https://github.com/lopatoj.png"
      alt="Justin Lopato's Face"
      style="image-rendering: crisp-edges;"
      class="translate-x-2 rounded-full w-85"
    />
  </div>
</header>
<section class="w-content">
  <h2
    class="text-2xl w-fit scroll-mt-28 font-medium sm:scroll-mt-16 underline underline-offset-12 decoration-fg-b decoration-2 mb-4"
  >
    projects
  </h2>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each data.projects as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
</section>
<section class="w-content">
  <h2
    class="text-2xl w-fit scroll-mt-28 font-medium sm:scroll-mt-16 underline underline-offset-12 decoration-fg-b decoration-2 mb-4"
  >
    blog
  </h2>
  <div class="flex flex-col gap-4 items-center min-h-8">
    {#each data.blogs as summary (summary.slug)}
      <SummaryView {...summary} />
    {/each}
  </div>
</section>

<!-- <style lang="postcss">
  @reference "../../app.css";

  .br-border {
    @apply border-r-[3px] border-b-[3px];
  }
</style> -->
