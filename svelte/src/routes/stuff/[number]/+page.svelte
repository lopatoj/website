<script lang="ts">
	import Text from "$lib/components/Text.svelte";
	import { dateFrom } from "$lib/dates.js";

	let { data } = $props();
	let { number, name, date, thumbnail, body } = data.project;
</script>

<svelte:head>
	<title>justin lopato | {name}</title>
</svelte:head>

<a href="/stuff">{"<-"} back to stuff</a>
<h1 class="text-3xl mb-2 mt-7 font-bold">{name}</h1>
<p>{dateFrom(date)}</p>
<div class="py-4 h-30 flex flex-col gap-2">
	<img src={thumbnail.url} alt={thumbnail.caption} class="w-full h-30 object-cover" />
	<p class="text-gray-800 text-sm">{thumbnail.caption}</p>
</div>
<Text value={body} />