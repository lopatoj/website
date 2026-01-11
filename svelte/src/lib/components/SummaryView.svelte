<script lang="ts">
	import type { Summary } from '$lib/pageSource';
	import { dateFrom } from '$lib/utils/dates';

	const { title, slug, type, thumbnail, description, date }: Summary = $props();
</script>

<a
	href="/{type}/{slug}"
	id="summary"
	class="w-full box-content flex gap-6 hover:opacity-100 bg-[--bg] hover:-translate-y-1 will-change-transform p-4"
>
	<div class="h-full grow flex flex-col gap-2">
		<p class="text-xl font-medium flex flex-row gap-2 items-center">
			{title}<span class="text-[.8em] font-light">{dateFrom(date)}</span>
		</p>
		<p>{description}</p>
	</div>
	<img src={thumbnail.url} alt={thumbnail.caption} class="h-32 max-w-56 object-cover rounded-lg" />
</a>

<style type="text/css" lang="postcss">
	#summary {
		box-shadow: 0 0rem 1.5rem -1.5rem rgba(0, 0, 0, 0);
	}

	#summary:hover {
		box-shadow: 0rem 1.5rem 1rem -1rem rgba(0, 0, 0, 0.1);
	}
</style>
