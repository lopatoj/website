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

<div class="w-[40rem] flex flex-col items-center min-h-screen -mb-[200px]">
	<div id="banner" class="fade relative z-20 bg-red-500 h-[1.4rem] text-[--bg] w-[115%] text-nowrap transition-opacity overflow-hidden ease-in-out duration-100">
		<span>hi! find out about my work @ my github</span>
	</div>
	<div id="header" class="box-border z-10 top-0 sticky w-full grid columns-2 pt-4 mb-4 bg-[--bg] h-28 text-lg tracking-tighter">
		<a class="links left" href="/">
			<img src="/me.png" class="head" alt="Justin" />
			justin lopato
		</a>
		<div class="links right">
			<a href="/">about</a>
			<a href="/projects">projects</a>
			<a href="/resume">resume</a>
		</div>
	</div>
	<div id="content">
		{@render children()}
	</div>
	<div class="h-[200px]"></div>
</div>
<div id="footer">
	<p>email: <a href="mailto:justin@lopato.org">justin@lopato.org</a></p>
	<p>linkedin: <a href="https://www.linkedin.com/in/lopatoj">lopatoj</a></p>
	<p>github: <a href="https://www.github.com/in/lopatoj">lopatoj</a></p>
	<br />
	<p>© Justin Lopato {thisYear()}</p>
</div>
