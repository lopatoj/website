<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import "../app.css";
  import Face from "$lib/components/Face.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { themeProvider } from "$lib/theme.svelte";
  import { thisYear } from "$lib/utils/dates";
  import { scrollTo, setScroll } from "$lib/utils/dom";

  let { children } = $props();

  let menuOpen = $state(false);

  onMount(() => {
    themeProvider.initTheme();
  });

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
  <a href={resolve("/")} onclick={closeMenu}>about</a>
  <a href={resolve("/projects")} onclick={onNavLink}>projects</a>
  <a href={resolve("/resume")} onclick={closeMenu}>resume</a>
  <a href={resolve("/blog")} onclick={onNavLink}>blog</a>
{/snippet}

<header class="bg-bg font-display sticky top-0 z-10 flex w-full flex-col items-center">
  <nav class="w-content box-border flex min-h-20 items-center gap-2 text-lg">
    <a class="flex h-full w-max items-center gap-[0.3rem]" href={resolve("/")} onclick={closeMenu}>
      <Face />
      <span>justin</span><span>lopato</span>
    </a>

    <span class="text-accent translate-y-[0.1rem] max-sm:hidden" aria-hidden="true">✺</span>

    <div class="hidden items-center gap-2 sm:flex">
      {@render navLinks()}
    </div>

    <div class="relative ml-auto sm:hidden">
      <button
        type="button"
        class="text-accent relative z-30 translate-y-[0.1rem] text-4xl transition-transform duration-200 ease-in-out {menuOpen
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
          class="menu-panel bg-bg absolute top-full right-0 z-20 mt-1 flex w-max flex-col items-end gap-1 rounded-bl-4xl px-0.5 py-1"
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
  class="w-content font-display flex min-h-20 flex-col-reverse items-center justify-between gap-3 py-6 text-sm sm:flex-row"
>
  <p class="font-light">© Justin Lopato {thisYear()}</p>
  <div class="flex items-center gap-4">
    <a href="mailto:justin@lopa.to">justin@lopa.to</a>
    <a href="https://www.linkedin.com/in/lopatoj" target="_blank" aria-label="LinkedIn">
      <Icon icon="linkedin" large />
    </a>
    <a href="https://www.github.com/lopatoj" target="_blank" aria-label="GitHub">
      <Icon icon="github" large />
    </a>
    <ThemeToggle />
  </div>
</footer>

<style type="text/css" lang="postcss">
  @reference "../app.css";

  header {
    /* Space above the navbar on desktop; the shadow only starts once the
       header has scrolled past this offset and is actually stuck. */
    --header-offset: 0rem;
    margin-top: var(--header-offset);
    box-shadow: 0px -0.5rem clamp(0rem, calc((var(--scroll) - var(--header-offset)) * 6), 2rem)
      clamp(0rem, calc((var(--scroll) - var(--header-offset)) * 4), 3rem) var(--bg);

    /* Matches Tailwind's sm breakpoint (media query rem ignores :root font-size). */
    @media (min-width: 40rem) {
      --header-offset: 5rem;
    }
  }

  .menu-panel {
    box-shadow: 0px -0.5rem 2rem 3rem var(--bg);
  }

  section {
    min-height: calc(100vh - 40 * var(--spacing));
  }
</style>
