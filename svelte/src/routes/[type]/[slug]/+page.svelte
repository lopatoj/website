<script lang="ts">
  import Text from "$lib/components/Text.svelte";
  import { dateFrom } from "$lib/dates.js";

  const { data } = $props();

  const { name, type, date, thumbnail, body } = data.page;
</script>

<svelte:head>
  <title>lopa.to | {type} | {name}</title>
</svelte:head>

<div class="flex flex-row items-center mb-1">
  <h1 class="text-3xl font-semibold flex-grow">{name}</h1>
  <p>{dateFrom(date)}</p>
</div>
<div class="py-4 h-30 flex flex-col gap-2">
  <img src={thumbnail.url} alt={thumbnail.caption} class="w-full h-30 object-cover rounded" />
</div>
<Text value={body} />
