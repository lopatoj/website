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
  code
    .split("\n")
    .map((l) => hljs.highlight(l, { language: portableText.value.lang }).value),
);
const numLinesPlaces = $derived(Math.ceil(Math.log10(lines.length)));

let icon: IconType = $state("copy");

const copy = async (_: MouseEvent & { currentTarget: HTMLButtonElement }) => {
  icon = "check";
  navigator.clipboard.writeText(code);

  await delay(2000);
  icon = "copy";
};
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/stackoverflow-light.css"
  />
</svelte:head>

<pre
  class="tracking-normal bg-bg-a font-mono p-4 pb-3 relative rounded-sm"
  style={`--num-width: ${numLinesPlaces}ch;`}><button
    onclick={copy}
    class="absolute text-xs top-1 right-1 select-none hover:bg-bg-b text-fg-a cursor-pointer active:bg-bg-c rounded-sm p-1 transition-all duration-200 ease-in-out"
    ><Icon {icon} /></button
  ><code lang={portableText.value.lang} class="block"
    >{#each lines as line}<span
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
  }

  code > span:before {
    @apply text-fg-b;
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: var(--num-width);
    text-align: right;
    margin-right: 1rem;
  }

  code[lang="bash"]:before {
    content: "$";
  }
</style>
