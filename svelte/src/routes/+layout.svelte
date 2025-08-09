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

<svelte:window on:scroll={setScroll} /> 
<svelte:body {@attach setScroll} />

<div class="w-content flex flex-col items-center min-h-screen -mb-12">
  <nav id="header" class="box-border z-10 top-0 sticky w-full flex flex-col items-center sm:flex-row mb-5 bg-slate-50 py-3 gap-3 text-lg tracking-tighter">
    <a class="flex h-full items-center gap-2" href="/">
      <img src="/me.png" class="h-[1.2em]" alt="Justin" />
      justin.lopa.to
    </a>
    <div class="flex-grow"></div>
    <div class="flex h-full items-center gap-4">
      <a href="/">about</a>
      <a href="/#project" onclick={scrollTo}>projects</a>
      <a href="/resume">resume</a>
      <a href="/#etc" onclick={scrollTo}>...</a>
    </div>
  </nav>
  <div class="w-content mb-12">
    {@render children()}
  </div>
  <div class="h-12"></div>
</div>
<div class="w-content min-h-12 py-3 flex flex-col sm:flex-row items-center gap-2 sm:justify-between tracking-tighter text-gray-800">
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
    box-shadow: 0px calc(-4.5rem + clamp(1rem, var(--scroll), 4rem)) 2rem 3rem #f8fafc;
  }
</style>
