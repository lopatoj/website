<script lang="ts">
  import Text from "$lib/components/Text.svelte";
  import { dateFrom } from "$lib/dates.js";

  const { data } = $props();

  const { name, type, date, thumbnail, body } = data.page;
</script>

<svelte:head>
  <title>lopa.to | {type} | {name}</title>
</svelte:head>

<div class="flex flex-row items-center">
  <h1 class="text-2xl flex-grow font-medium tracking-tighter">{name}</h1>
  <p>{dateFrom(date)}</p>
</div>
<div class="py-8 h-30 flex flex-col gap-2">
  <img src={thumbnail.url} alt={thumbnail.caption} class="w-full h-48 object-cover rounded-lg" />
</div>
<Text value={body} />