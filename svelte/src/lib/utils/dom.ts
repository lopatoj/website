import { pushState, goto } from '$app/navigation';

/**
 * Sets the `--scroll` css variable to the current scroll position on the page.
 */
export function setScroll() {
	document.body.style.setProperty('--scroll', `${-document.body.getBoundingClientRect().top}px`);
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
	}
) {
	e.preventDefault();
	const hash = e.currentTarget.href.lastIndexOf('/');
	const id = e.currentTarget.href.substring(hash + 1);
	const el = document.getElementById(id);

	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
		pushState(`/${id}`, {});
	} else {
		goto(e.currentTarget.href);
	}
}

type ClearOnCallback = (fn: () => void) => void;

/**
 * Asynchronous delay function via setTimeout.
 *
 * Example:
 * ```ts
 * // calls callback when component is removed from DOM
 * const onDestroy = (fn: () => void) => void
 *
 * // async delay call, which is essentially canceled if
 * // parent component is destroyed according to onDestroy
 * await delay(1000, onDestroy);
 * ```
 *
 * @param ms the delay time in milliseconds
 * @param clearOn function with a callback paramater which recieves a function that clears the timeout
 * @returns an empty promise (</3)
 */
export async function delay(ms: number, clearOn?: ClearOnCallback): Promise<void> {
	return new Promise((resolve) => {
		const id = window.setTimeout(resolve, ms);
		if (clearOn)
			clearOn(() => {
				window.clearInterval(id);
			});
	});
}
