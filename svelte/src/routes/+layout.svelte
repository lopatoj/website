<script lang="ts">
import { afterNavigate } from "$app/navigation";
import { fly } from "svelte/transition";
import "../app.css";
import { Face, Icon, ThemeToggle } from "$lib/components";
import { thisYear } from "$lib/utils/dates";
import { scrollTo, setScroll } from "$lib/utils/dom";

let { children } = $props();

let menuOpen = $state(false);

afterNavigate(() => {
  menuOpen = false;
});

function toggleMenu() {
  menuOpen = !menuOpen;
}

function closeMenu() {
  menuOpen = false;
}

function onNavLink(
  e: MouseEvent & {
    currentTarget: EventTarget & HTMLAnchorElement;
  },
) {
  closeMenu();
  scrollTo(e);
}

function onWindowKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") closeMenu();
}
</script>

<svelte:window onscroll={setScroll} onkeydown={onWindowKeydown} />
<svelte:body {@attach setScroll} />

{#snippet navLinks()}
  <a href="/" onclick={closeMenu}>about</a>
  <a href="/projects" onclick={onNavLink}>projects</a>
  <a href="/resume" onclick={closeMenu}>resume</a>
  <a href="/blog" onclick={onNavLink}>blog</a>
{/snippet}

<header class="w-full flex flex-col items-center z-10 top-0 mt-20 max-sm:mt-0 sticky bg-bg font-display">
  <nav class="w-content box-border flex min-h-20 items-center text-lg gap-2">
    <a class="flex h-full items-center w-max gap-[0.3rem]" href="/" onclick={closeMenu}>
      <Face />
      <span>justin</span><span>lopato</span>
    </a>

    <span class="text-emerald-300 translate-y-[0.1rem] text-md max-sm:hidden" aria-hidden="true"
      >✺</span
    >

    <div class="hidden sm:flex items-center gap-2">
      {@render navLinks()}
    </div>

    <div class="relative ml-auto sm:hidden">
      <button
        type="button"
        class="relative z-30 text-emerald-300 translate-y-[0.1rem] text-4xl transition-transform duration-200 ease-in-out {menuOpen
          ? 'rotate-90'
          : ''}"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onclick={toggleMenu}
      >
        ✺
      </button>

      {#if menuOpen}
        <button
          type="button"
          class="fixed inset-0 z-10 cursor-default"
          aria-label="Close menu"
          onclick={closeMenu}
        ></button>
        <div
          id="nav-links"
          class="menu-panel absolute top-full right-0 z-20 mt-1 flex w-max flex-col items-end gap-1 rounded-bl-4xl bg-bg px-0.5 py-1"
          transition:fly={{ y: -10, duration: 200, opacity: 0 }}
        >
          {@render navLinks()}
        </div>
      {/if}
    </div>
  </nav>
</header>
<section class="w-content flex flex-col items-center">
  {@render children()}
</section>
<footer
  class="w-content min-h-20 font-display flex flex-col sm:flex-row items-center gap-2 sm:gap-6 justify-center"
>
  <a href="mailto:justin@lopa.to" target="_blank">justin@lopa.to</a>
  <a
    href="https://www.linkedin.com/in/lopatoj"
    target="_blank"
    class="flex flex-row items-center gap-0.5"
  >
    <Icon icon="linkedin" inline large />
    lopatoj
  </a>
  <a
    href="https://www.github.com/lopatoj"
    target="_blank"
    class="flex flex-row items-center gap-0.5"
  >
    <Icon icon="github" inline large />
    lopatoj
  </a>
  <ThemeToggle class="sm:mr-auto" />
  <p class="sm:ml-auto font-light">© Justin Lopato {thisYear()}</p>
</footer>

<style type="text/css" lang="postcss">
@reference "../app.css";

header {
  box-shadow: 0px -0.5rem clamp(0rem, calc(var(--scroll) * 6), 2rem)
    clamp(0rem, calc(var(--scroll) * 4), 3rem) var(--bg);
}

.menu-panel {
  box-shadow: 0px -0.5rem 2rem 3rem var(--bg);
}

section {
  min-height: calc(100vh - 40 * var(--spacing));
}
</style>
