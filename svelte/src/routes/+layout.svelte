<script lang="ts">
  import "../app.css";
  import { thisYear } from "$lib/dates";
  import { goto, pushState } from "$app/navigation";
  import Fa from "svelte-fa";
  import {
    faSquareLinkedin,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

  let { children } = $props();

  const setScroll = () =>
    document.body.style.setProperty(
      "--scroll",
      `${-document.body.getBoundingClientRect().top}px`,
    );

  const scrollTo = (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLAnchorElement;
    },
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

<div class="w-content flex flex-col items-center min-h-screen -mb-48 sm:-mb-16">
  <nav
    id="header"
    class="z-10 box-border top-0 sticky w-full flex mb-5 bg-stone-300 min-h-16 gap-4 py-3 items-center text-lg tracking-tighter flex-col sm:flex-row"
  >
    <a class="flex h-full items-center gap-[.4rem] flex-grow" href="/">
      <img
        src="/me_transparent.png"
        class="h-[1.3em] mb-1"
        id="logo"
        alt="Justin"
      />
      <span>justin</span>
      <span>lopato</span>
    </a>
    <div class="flex h-full items-center gap-4">
      <a href="/">about</a>
      <a href="/#project" onclick={scrollTo}>projects</a>
      <a href="/resume">resume</a>
      <a href="/#etc" onclick={scrollTo}>etc</a>
    </div>
  </nav>
  <div class="w-content mb-48 sm:mb-16">
    {@render children()}
  </div>
  <div class="h-48 sm:h-16"></div>
</div>
<div
  class="w-content min-h-16 py-3 flex flex-col sm:flex-row items-center gap-2 sm:justify-between tracking-tighter font-light"
>
  <a href="mailto:justin@lopato.org">justin@lopato.org</a>
  <!-- <div class="hidden sm:block text-stone-500">|</div> -->
  <a
    href="https://www.linkedin.com/in/lopatoj"
    class="flex flex-row items-center gap-1"
    ><Fa icon={faSquareLinkedin} class="mb-[2px]" /> lopatoj</a
  >
  <!-- <div class="hidden sm:block text-stone-500">|</div> -->
  <a
    href="https://www.github.com/lopatoj"
    class="flex flex-row items-center gap-1"
    ><Fa icon={faGithub} class="mb-[2px]" /> lopatoj</a
  >
  <!-- <div class="hidden sm:block text-stone-500">|</div> -->
  <p>© Justin Lopato {thisYear()}</p>
</div>

<style type="text/css">
  #header {
    box-shadow: 0px -0.5rem 2rem clamp(0rem, var(--scroll), 3rem) #d6d3d1;
  }

  #logo {
    /*image-rendering: crisp-edges;*/
  }
</style>
