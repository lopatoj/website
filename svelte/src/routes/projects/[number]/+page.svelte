<script lang="ts">
	import Text from "$lib/components/Text.svelte";
	import { dateFrom } from "$lib/dates.js";

	let { data } = $props();
	let { number, name, date, images, body } = data.project;
</script>

<svelte:head>
	<title>justin lopato | {name}</title>
</svelte:head>

<h1 class="text-3xl mb-2 mt-4 font-bold">{name}</h1>
<p>{dateFrom(date)}</p>
<div class="py-4 h-30">
</div>
<Text text={body} />
