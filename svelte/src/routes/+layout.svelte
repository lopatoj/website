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

<div class="w-[44rem] flex flex-col items-center min-h-screen -mb-[200px]">
	<!-- <div id="banner" class="fade relative z-20 bg-red-500 h-[1.4rem] text-[--bg] w-[115%] text-nowrap transition-opacity overflow-hidden ease-in-out duration-200">
		<span>hi! find out about my work @ my github</span>
	</div> -->
	<nav id="header" class="box-border z-10 top-0 sticky w-full grid columns-2 pt-4 mb-4 bg-[--bg] h-28 text-lg tracking-tighter">
		<a class="links left" href="/">
			<img src="/me.png" class="head" alt="Justin" />
			Justin Lopato
		</a>
		<div class="links right">
			<a href="/">about</a>
			<a href="/stuff">stuff</a>
			<a href="/resume">resume</a>
		</div>
	</nav>
	<div id="content">
		{@render children()}
	</div>
	<div class="h-[200px]"></div>
</div>
<div class="w-[44rem] py-10 flex flex-row h-[200px] items-center">
	<div class="w-1/2 p-0 m-0">
		<p>email: <a href="mailto:justin@lopato.org">justin@lopato.org</a></p>
		<p>linkedin: <a href="https://www.linkedin.com/in/lopatoj">lopatoj</a></p>
		<p>github: <a href="https://www.github.com/lopatoj">lopatoj</a></p>
	</div>
	<div class="w-1/2 text-right">
		<p>© Justin Lopato {thisYear()}</p>
	</div>
</div>
