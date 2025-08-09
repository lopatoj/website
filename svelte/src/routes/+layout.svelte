<script lang="ts">
  import "../app.css";
  import { thisYear } from "$lib/dates";
  import { goto, pushState } from "$app/navigation";
  import Fa from "svelte-fa";
  import {faSquareLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

  let { children } = $props();

  const setScroll = () => document.body.style.setProperty("--scroll", `${-document.body.getBoundingClientRect().top}px`);

  const scrollTo = (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLAnchorElement;
    }
  ) => {
    e.preventDefault();
    const hash = e.currentTarget.href.lastIndexOf("#");
    const id = e.currentTarget.href.substring(hash + 1);
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      pushState(`/#${id}`, {});
    } else {
      goto(e.currentTarget.href);
    }
  };
</script>

<svelte:window onscroll={setScroll} /> 
<svelte:body {@attach setScroll} />

<div class="w-content flex flex-col items-center min-h-screen -mb-16">
	<nav id="header" class="z-10 top-0 sticky w-full flex mb-5 bg-stone-50 h-16 px-8 box-content text-lg tracking-tighter">
		<a class="flex h-full items-center gap-[.4rem]" href="/">
			<img src="/me.png" class="h-[1.3em] mb-1" alt="Justin" />
			<span>justin</span>
			<span>lopato</span>
		</a>
		<div class="flex-grow"></div>
		<div class="flex h-full items-center gap-4">
			<a href="/">about</a>
			<a href="/#project" onclick={scrollTo}>projects</a>
			<a href="/resume">resume</a>
			<a href="/#etc" onclick={scrollTo}>etc</a>
		</div>
	</nav>
	<div class="w-content mb-10">
		{@render children()}
	</div>
	<div class="h-16"></div>
</div>
<div class="w-content min-h-16 py-3 flex flex-col sm:flex-row items-center gap-2 sm:justify-between tracking-tighter font-light">
  <a href="mailto:justin@lopato.org">justin@lopato.org</a>
  <div class="hidden sm:block">|</div>
  <a href="https://www.linkedin.com/in/lopatoj" class="flex flex-row items-center gap-1"><Fa icon={faSquareLinkedin}/> lopatoj</a>
  <div class="hidden sm:block">|</div>
  <a href="https://www.github.com/lopatoj" class="flex flex-row items-center gap-1"><Fa icon={faGithub}/> lopatoj</a>
  <div class="hidden sm:block">|</div>
  <p>© Justin Lopato {thisYear()}</p>
</div>

<style type="text/css">
	#header {
		box-shadow: 0px -.5rem 2rem clamp(0rem, var(--scroll), 3rem) #fafaf9;
	}
</style>
