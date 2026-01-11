<script lang="ts">
	import SummaryView from '$lib/components/SummaryView.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>lopa.to</title>
</svelte:head>

<header class="flex flex-col justify-center gap-2 mb-8 h-70">
	<h2
		id="about-me"
		class="text-3xl w-max mb-1 pb-3 pr-3 rounded-br-2xl br-border scroll-mt-28 sm:scroll-mt-16 font-text"
	>
		hello, i'm justin lopato
	</h2>
	<p class="text-xl">
		I'm a CS student at Rice University. You can find my projects and other stuff I'm interested in
		below.
	</p>
</header>
<section>
	<h2
		id="projects"
		class="text-2xl w-max mb-1 pb-2 pr-2 rounded-br-xl br-border scroll-mt-40 sm:scroll-mt-24"
	>
		projects
	</h2>
	<div class="flex flex-col gap-4 items-center min-h-8">
		{#each data.projects as summary (summary.slug)}
			<SummaryView {...summary} />
		{/each}
	</div>
</section>
<section>
	<h2
		id="blog"
		class="text-2xl w-max mb-1 mt-4 pb-2 pr-2 rounded-br-xl br-border scroll-mt-40 sm:scroll-mt-24"
	>
		blog
	</h2>
	<div class="flex flex-col gap-4 items-center min-h-8">
		{#each data.blogs as summary (summary.slug)}
			<SummaryView {...summary} />
		{/each}
	</div>
</section>

<style lang="postcss">
	@reference "../../app.css";

	.br-border {
		@apply border-r-[3px] border-b-[3px];
	}
</style>
