<script lang="ts">
  import "../app.css";
  import { thisYear } from "$lib/utils/dates";
  import Icon from "$lib/components/Icon.svelte";
  import { setScroll, scrollTo } from "$lib/utils/dom";
  import Face from "$lib/components/Face.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";

  let { children } = $props();
  let theme = "light";
</script>

<svelte:window onscroll={setScroll} />
<svelte:body {@attach setScroll} />

<header class="w-full flex flex-col items-center z-10 top-0 sticky bg-bg">
  <nav
    class="w-content box-border flex min-h-20 items-center text-lg flex-col sm:flex-row"
  >
    <a class="flex h-full items-center w-max gap-[.4rem] mr-auto" href="/">
      <Face />
      justin lopato
    </a>
    <div class="flex h-full items-center gap-4 ml-auto">
      <a href="/">about</a>
      <a href="/projects" onclick={scrollTo}>projects</a>
      <a href="/resume">resume</a>
      <a href="/blog" onclick={scrollTo}>blog</a>
    </div>
  </nav>
</header>
<section class="w-content flex flex-col items-center">
  {@render children()}
</section>
<footer
  class="w-content min-h-20 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 justify-center"
>
  <a href="mailto:justin@lopa.to" target="_blank">justin@lopa.to</a>
  <a
    href="https://www.linkedin.com/in/lopatoj"
    target="_blank"
    class="flex flex-row items-center gap-0.5"
  >
    <Icon icon="linkedin" inline large /> lopatoj
  </a>
  <a
    href="https://www.github.com/lopatoj"
    target="_blank"
    class="flex flex-row items-center gap-0.5"
  >
    <Icon icon="github" inline large /> lopatoj
  </a>
  <ThemeSwitcher class="sm:mr-auto" />
  <p class="sm:ml-auto font-light">© Justin Lopato {thisYear()}</p>
</footer>

<style type="text/css" lang="postcss">
  @reference "../app.css";

  header {
    box-shadow: 0px -0.5rem 2rem clamp(0rem, var(--scroll), 3rem) var(--bg);
  }

  section {
    min-height: calc(100vh - 40 * var(--spacing));
  }
</style>
