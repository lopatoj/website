<script lang="ts">
  import { onMount } from 'svelte';
	import '../app.css';
	import { thisYear } from '$lib/dates';

	let { children } = $props();

	onMount(() => {
		window.addEventListener('scroll', () => {
			document.body.style.setProperty('--scroll', window.scrollY + "px");
		}, {
			passive: true
		});
	});
</script>

<div class="w-content flex flex-col items-center min-h-screen -mb-[7rem]">
	<nav id="header" class="z-10 top-0 sticky w-full flex mb-5 bg-stone-50 h-16 px-8 box-content text-lg tracking-tighter">
		<a class="flex h-full items-center gap-[.4rem]" href="/">
			<img src="/me.png" class="h-[1.3em] mb-1" alt="Justin" />
			<span>justin</span>
			<span>lopato</span>
		</a>
		<div class="flex-grow"></div>
		<div class="flex h-full items-center gap-4">
			<a href="/">about</a>
			<a href="/#project">projects</a>
			<a href="/resume">resume</a>
			<a href="/#etc">etc</a>
		</div>
	</nav>
	<div class="w-content mb-10">
		{@render children()}
	</div>
	<div class="h-[7rem]"></div>
</div>
<div class="w-content py-10 flex h-[7rem] items-center">
	<div class="w-1/2 p-0 m-0">
		<p>email: <a href="mailto:justin@lopato.org">justin@lopato.org</a></p>
		<p>linkedin: <a href="https://www.linkedin.com/in/lopatoj">lopatoj</a></p>
		<p>github: <a href="https://www.github.com/lopatoj">lopatoj</a></p>
	</div>
	<div class="w-1/2 text-right">
		<p>© Justin Lopato {thisYear()}</p>
	</div>
</div>

<style type="text/css">
	#header {
		box-shadow: 0px -.5rem 2rem clamp(0rem, var(--scroll), 3rem) #fafaf9;
	}
</style>