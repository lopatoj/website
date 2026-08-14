import { goto, pushState } from "$app/navigation";

/**
 * Sets the `--scroll` css variable to the current scroll position on the page.
 */
export function setScroll() {
  document.body.style.setProperty("--scroll", `${-document.body.getBoundingClientRect().top}px`);
}

/**
 * MouseEvent callback to intercept a link meant to navigate to a heading on the current page,
 * and smooth scrolls the heading whose id matches the href attribute.
 *
 * @param e
 */
export function scrollTo(
  e: MouseEvent & {
    currentTarget: EventTarget & HTMLAnchorElement;
  },
) {
  e.preventDefault();
  const id = new URL(e.currentTarget.href).pathname.split("/").pop() ?? "";
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    // Shallow routing to a same-page section; not a statically-resolvable route.
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    pushState(`/${id}`, {});
  } else {
    // `href` is already a fully-resolved absolute URL from the anchor element.
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    goto(e.currentTarget.href);
  }
}

/**
 * Asynchronous delay function via setTimeout.
 *
 * @param ms the delay time in milliseconds
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
