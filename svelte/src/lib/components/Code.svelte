<script lang="ts">
  import type { CustomBlockComponentProps } from "@portabletext/svelte";
  import hljs from "highlight.js";
  import { delay } from "$lib/utils/dom";
  import Icon, { type IconType } from "./Icon.svelte";

  type Props = {
    portableText: CustomBlockComponentProps<{
      _type: "code";
      code: string;
      lang: string;
    }>;
  };

  const { portableText }: Props = $props();

  const code = $derived(portableText.value.code);
  const lines = $derived(
    code.split("\n").map((l) => hljs.highlight(l, { language: portableText.value.lang }).value),
  );
  const numLinesPlaces = $derived(Math.ceil(Math.log10(lines.length)));

  let icon: IconType = $state("copy");

  const copy = async () => {
    icon = "check";
    navigator.clipboard.writeText(code);

    await delay(2000);
    icon = "copy";
  };
</script>

<pre
  class="relative p-0! font-mono tracking-normal"
  style={`--num-width: ${numLinesPlaces}ch;`}><button
    type="button"
    onclick={copy}
    class="bg-bg hover:bg-bg-a active:bg-bg-b absolute top-1 right-1 cursor-pointer rounded-sm p-1 text-xs transition-all duration-200 ease-in-out select-none"
    ><Icon {icon} /></button
  ><code lang={portableText.value.lang} class="block"
    >{#each lines as line, i (i)}<!-- eslint-disable-next-line svelte/no-at-html-tags -- line is highlight.js-sanitized markup, not user input --><span
        >{@html line}
</span>{/each}</code
  ></pre>

<style lang="postcss">
  @reference "../../app.css";

  code {
    counter-reset: line;
    overflow-y: hidden;
    scrollbar-color: var(--color-fg-b) transparent;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
    line-height: 1.4rem;
    color: var(--fg);
  }

  /* Line numbers hang in the margin to the left of the body text column. */
  code > span:before {
    @apply text-fg-b max-sm:hidden;
    counter-increment: line;
    content: counter(line);
    position: absolute;
    left: calc(-1 * (var(--num-width) + 0.75rem));
    width: var(--num-width);
    text-align: right;
  }

  code[lang="bash"]:before {
    content: "$";
  }

  /*
   * Warm syntax theme built from the site's stone/emerald palette.
   * Must be :global() — highlighted markup is injected via {@html}.
   */
  :global(.hljs-comment),
  :global(.hljs-quote) {
    color: var(--color-stone-500);
    font-style: italic;
  }
  :global(.hljs-keyword),
  :global(.hljs-selector-tag) {
    color: var(--color-emerald-700);
  }
  :global(.hljs-string),
  :global(.hljs-regexp),
  :global(.hljs-addition) {
    color: var(--color-amber-800);
  }
  :global(.hljs-number),
  :global(.hljs-literal) {
    color: var(--color-amber-700);
  }
  :global(.hljs-title),
  :global(.hljs-section),
  :global(.hljs-name) {
    color: var(--color-stone-900);
    font-weight: 600;
  }
  :global(.hljs-attr),
  :global(.hljs-attribute),
  :global(.hljs-variable),
  :global(.hljs-template-variable) {
    color: var(--color-emerald-800);
  }
  :global(.hljs-built_in),
  :global(.hljs-type),
  :global(.hljs-deletion) {
    color: var(--color-red-700);
  }

  :global(:where(.dark) .hljs-comment),
  :global(:where(.dark) .hljs-quote) {
    color: var(--color-stone-500);
  }
  :global(:where(.dark) .hljs-keyword),
  :global(:where(.dark) .hljs-selector-tag) {
    color: var(--color-emerald-400);
  }
  :global(:where(.dark) .hljs-string),
  :global(:where(.dark) .hljs-regexp),
  :global(:where(.dark) .hljs-addition) {
    color: var(--color-amber-300);
  }
  :global(:where(.dark) .hljs-number),
  :global(:where(.dark) .hljs-literal) {
    color: var(--color-amber-400);
  }
  :global(:where(.dark) .hljs-title),
  :global(:where(.dark) .hljs-section),
  :global(:where(.dark) .hljs-name) {
    color: var(--color-stone-100);
  }
  :global(:where(.dark) .hljs-attr),
  :global(:where(.dark) .hljs-attribute),
  :global(:where(.dark) .hljs-variable),
  :global(:where(.dark) .hljs-template-variable) {
    color: var(--color-emerald-300);
  }
  :global(:where(.dark) .hljs-built_in),
  :global(:where(.dark) .hljs-type),
  :global(:where(.dark) .hljs-deletion) {
    color: var(--color-red-400);
  }
</style>
