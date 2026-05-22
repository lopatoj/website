<script lang="ts">
	import SummaryView from '$lib/components/SummaryView.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>lopa.to</title>
</svelte:head>

<header class="flex flex-col justify-center gap-3 mb-12 h-70">
	<h2
		id="about-me"
		class="text-3xl w-max scroll-mt-28 sm:scroll-mt-16 font-text"
	>
		hello, i'm justin lopato
	</h2>
	<p class="text-xl text-fg-a leading-relaxed max-w-prose">
		I'm a CS student at Rice University. You can find my projects and other stuff I'm interested in
		below.
	</p>
</header>

<section class="mb-12">
	<div class="section-header group mb-6">
		<h2
			id="projects"
			class="text-2xl font-medium scroll-mt-40 sm:scroll-mt-24"
		>
			projects
		</h2>
		<div class="header-line"></div>
	</div>
	<div class="flex flex-col gap-5 items-center min-h-8">
		{#each data.projects as summary (summary.slug)}
			<SummaryView {...summary} />
		{/each}
	</div>
</section>

<section class="mb-12">
	<div class="section-header group mb-6">
		<h2
			id="blog"
			class="text-2xl font-medium scroll-mt-40 sm:scroll-mt-24"
		>
			blog
		</h2>
		<div class="header-line"></div>
	</div>
	<div class="flex flex-col gap-5 items-center min-h-8">
		{#each data.blogs as summary (summary.slug)}
			<SummaryView {...summary} />
		{/each}
	</div>
</section>

<style lang="postcss">
	@reference "../../app.css";

	.section-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.section-header h2 {
		position: relative;
		padding-right: 0.5rem;
	}

	.header-line {
		flex: 1;
		height: 1px;
		background: linear-gradient(
			to right,
			var(--bg-c),
			transparent 80%
		);
		opacity: 0.6;
		transition: opacity 0.3s ease-out;
	}

	.section-header:hover .header-line {
		opacity: 1;
	}

	/* Animated dot accent */
	.section-header h2::before {
		content: '';
		position: absolute;
		left: -1rem;
		top: 50%;
		transform: translateY(-50%);
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--fg-b);
		transition: all 0.3s ease-out;
	}

	.section-header:hover h2::before {
		background: var(--fg);
		box-shadow: 0 0 8px color-mix(in srgb, var(--fg) 40%, transparent);
	}
</style>
