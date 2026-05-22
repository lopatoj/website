<script lang="ts">
	import type { Summary } from '$lib/pageSource';
	import { dateFrom } from '$lib/utils/dates';

	const { title, slug, type, thumbnail, description, date }: Summary = $props();
</script>

<a
	href="/{type}/{slug}"
	class="summary-card group w-full box-content flex gap-6 hover:opacity-100 p-5 rounded-xl transition-all duration-300 ease-out"
>
	<div class="h-full grow flex flex-col gap-2">
		<p class="text-xl font-medium flex flex-row gap-2 items-center">
			{title}<span class="text-[.8em] font-light text-fg-a">{dateFrom(date)}</span>
		</p>
		<p class="text-fg-a leading-relaxed">{description}</p>
	</div>
	<div class="image-container relative overflow-hidden rounded-xl">
		<img 
			src={thumbnail.url} 
			alt={thumbnail.caption} 
			class="h-32 max-w-56 object-cover transition-transform duration-300 ease-out group-hover:scale-105" 
		/>
	</div>
</a>

<style type="text/css" lang="postcss">
	@reference "../../app.css";

	.summary-card {
		background: color-mix(in srgb, var(--bg-a) 60%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid color-mix(in srgb, var(--bg-b) 50%, transparent);
		box-shadow: 
			0 4px 24px -8px rgba(0, 0, 0, 0.05),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.summary-card:hover {
		transform: translateY(-4px);
		background: color-mix(in srgb, var(--bg-a) 80%, transparent);
		border-color: color-mix(in srgb, var(--bg-c) 60%, transparent);
		box-shadow: 
			0 20px 40px -12px rgba(0, 0, 0, 0.12),
			0 8px 16px -8px rgba(0, 0, 0, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
	}

	.image-container {
		box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease-out;
	}

	.summary-card:hover .image-container {
		box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.15);
	}

	:global(.dark) .summary-card {
		box-shadow: 
			0 4px 24px -8px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	:global(.dark) .summary-card:hover {
		box-shadow: 
			0 20px 40px -12px rgba(0, 0, 0, 0.4),
			0 8px 16px -8px rgba(0, 0, 0, 0.25),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}
</style>
