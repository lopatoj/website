<script lang="ts">
  import Text from "$lib/components/Text.svelte";
  import { dateFrom } from "$lib/utils/dates";

  const { data } = $props();
  const { title, date, thumbnail, body } = $derived(data.page);
</script>

<svelte:head>
  <title>lopa.to | {data.type} | {title}</title>
</svelte:head>

<div class="mt-6 mb-4 flex w-full flex-row items-center">
  <h1 class="mr-auto text-2xl">{title}</h1>
  <p class="ml-auto min-w-fit font-light">published on {dateFrom(date)}</p>
</div>
<img src={thumbnail.url} alt={thumbnail.caption} class="mb-6 h-48 w-full rounded-sm object-cover" />
<article class="prose-lg w-content mb-6 font-serif text-xl">
  <Text value={body} />
</article>
