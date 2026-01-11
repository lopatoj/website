<script lang="ts">
  import Text from "$lib/components/Text.svelte";
  import { dateFrom } from "$lib/utils/dates.js";

  const { data } = $props();
  const { title, type, date, thumbnail, body } = $derived(data.page);
</script>

<svelte:head>
  <title>lopa.to | {type} | {title}</title>
</svelte:head>

<div class="w-full flex flex-row items-center mt-6 mb-4">
  <h1 class="text-2xl mr-auto">{title}</h1>
  <p class="min-w-fit ml-auto font-light">published on {dateFrom(date)}</p>
</div>
<img
  src={thumbnail.url}
  alt={thumbnail.caption}
  class="w-full h-48 object-cover rounded-md mb-6"
/>
<article class="prose-lg w-content mb-6 font-serif! text-lg!">
  <Text value={body} />
</article>
