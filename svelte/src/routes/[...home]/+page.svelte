<script lang="ts">
	import SummaryView from '$lib/components/SummaryView.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>lopa.to</title>
</svelte:head>

<header class="hero-section mb-16 scroll-mt-28 sm:scroll-mt-16" id="about-me">
	<!-- Main intro with headshot -->
	<div class="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8 md:mb-10">
		<div class="headshot-container relative shrink-0">
			<div class="headshot-frame w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden flex items-center justify-center">
				<img 
					src="/me_transparent.png" 
					alt="Justin Lopato" 
					class="w-full h-full object-contain p-2"
				/>
			</div>
			<div class="status-badge absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full text-xs font-medium">
				open to work
			</div>
		</div>
		
		<div class="flex flex-col gap-3 md:gap-4 flex-1">
			<div>
				<p class="text-fg-a text-xs md:text-sm uppercase tracking-wider mb-1">hey there, i'm</p>
				<h1 class="text-3xl md:text-5xl font-text font-medium">Justin Lopato</h1>
			</div>
			<p class="text-base md:text-lg text-fg-a leading-relaxed">
				Computer Science student at <span class="text-fg font-medium">Rice University</span> passionate about building elegant software solutions. Currently exploring systems programming, web development, and machine learning.
			</p>
			<div class="flex flex-wrap gap-2 md:gap-3 mt-1">
				<a href="mailto:hello@lopa.to" class="contact-link">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
					<span class="hidden sm:inline">hello@lopa.to</span>
					<span class="sm:hidden">email</span>
				</a>
				<a href="https://github.com/lopatoj" target="_blank" rel="noopener" class="contact-link">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
					github
				</a>
				<a href="https://linkedin.com/in/justinlopato" target="_blank" rel="noopener" class="contact-link">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
					linkedin
				</a>
			</div>
		</div>
	</div>
	
	<!-- Skills/Tools section -->
	<div class="skills-section p-4 md:p-6 rounded-2xl mb-6 md:mb-8">
		<h3 class="text-xs md:text-sm uppercase tracking-wider text-fg-a mb-3 md:mb-4">tools & technologies</h3>
		<div class="flex flex-wrap gap-2">
			{#each ['Python', 'TypeScript', 'Rust', 'Go', 'React', 'Svelte', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Linux'] as skill}
				<span class="skill-tag px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm">{skill}</span>
			{/each}
		</div>
	</div>
	
	<!-- Quick stats/highlights -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
		<div class="stat-card p-3 md:p-4 rounded-xl text-center">
			<p class="text-xl md:text-2xl font-medium">3+</p>
			<p class="text-xs md:text-sm text-fg-a">Years Coding</p>
		</div>
		<div class="stat-card p-3 md:p-4 rounded-xl text-center">
			<p class="text-xl md:text-2xl font-medium">10+</p>
			<p class="text-xs md:text-sm text-fg-a">Projects Built</p>
		</div>
		<div class="stat-card p-3 md:p-4 rounded-xl text-center">
			<p class="text-xl md:text-2xl font-medium">Rice</p>
			<p class="text-xs md:text-sm text-fg-a">University</p>
		</div>
		<div class="stat-card p-3 md:p-4 rounded-xl text-center">
			<p class="text-xl md:text-2xl font-medium">2026</p>
			<p class="text-xs md:text-sm text-fg-a">Expected Grad</p>
		</div>
	</div>
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

	/* Hero Section Styles */
	.headshot-frame {
		background: color-mix(in srgb, var(--bg-a) 60%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid color-mix(in srgb, var(--bg-b) 50%, transparent);
		box-shadow: 
			0 8px 32px -8px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease-out;
	}

	.headshot-container:hover .headshot-frame {
		transform: translateY(-2px);
		box-shadow: 
			0 16px 48px -12px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
	}

	.headshot-frame img {
		transition: transform 0.3s ease-out;
	}

	.headshot-container:hover .headshot-frame img {
		transform: scale(1.05);
	}

	.status-badge {
		background: color-mix(in srgb, var(--fg) 10%, var(--bg));
		color: var(--fg);
		border: 1px solid color-mix(in srgb, var(--fg) 20%, transparent);
		box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.1);
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.4rem 0.75rem;
		border-radius: 0.75rem;
		background: color-mix(in srgb, var(--bg-a) 60%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid color-mix(in srgb, var(--bg-b) 50%, transparent);
		color: var(--fg-a);
		font-size: 0.75rem;
		min-height: 2.25rem;
		transition: all 0.3s ease-out;
	}

	@media (min-width: 640px) {
		.contact-link {
			padding: 0.5rem 1rem;
			font-size: 0.875rem;
		}
	}

	.contact-link:hover {
		background: color-mix(in srgb, var(--bg-a) 80%, transparent);
		border-color: color-mix(in srgb, var(--bg-c) 60%, transparent);
		color: var(--fg);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.1);
	}

	.contact-link svg {
		flex-shrink: 0;
	}

	.skills-section {
		background: color-mix(in srgb, var(--bg-a) 50%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid color-mix(in srgb, var(--bg-b) 40%, transparent);
	}

	.skill-tag {
		background: color-mix(in srgb, var(--bg-b) 60%, transparent);
		color: var(--fg-a);
		border: 1px solid color-mix(in srgb, var(--bg-c) 30%, transparent);
		transition: all 0.2s ease-out;
	}

	.skill-tag:hover {
		background: color-mix(in srgb, var(--bg-b) 80%, transparent);
		color: var(--fg);
		transform: translateY(-1px);
	}

	.stat-card {
		background: color-mix(in srgb, var(--bg-a) 50%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid color-mix(in srgb, var(--bg-b) 40%, transparent);
		transition: all 0.3s ease-out;
	}

	.stat-card:hover {
		background: color-mix(in srgb, var(--bg-a) 70%, transparent);
		border-color: color-mix(in srgb, var(--bg-c) 50%, transparent);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.1);
	}

	/* Dark mode adjustments */
	:global(.dark) .headshot-frame {
		box-shadow: 
			0 8px 32px -8px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	:global(.dark) .headshot-container:hover .headshot-frame {
		box-shadow: 
			0 16px 48px -12px rgba(0, 0, 0, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	:global(.dark) .stat-card:hover {
		box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.3);
	}

	/* Section Header Styles */
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
