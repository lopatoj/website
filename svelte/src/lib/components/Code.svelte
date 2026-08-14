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

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/stackoverflow-light.css"
  />
</svelte:head>

<pre
  class="bg-bg-a relative rounded-sm p-4 pb-3 font-mono tracking-normal"
  style={`--num-width: ${numLinesPlaces}ch;`}><button
    type="button"
    onclick={copy}
    class="hover:bg-bg-b text-fg-a active:bg-bg-c absolute top-1 right-1 cursor-pointer rounded-sm p-1 text-xs transition-all duration-200 ease-in-out select-none"
    ><Icon {icon} /></button
  ><code lang={portableText.value.lang} class="block"
    >{#each lines as line (line)}<!-- eslint-disable-next-line svelte/no-at-html-tags -- line is highlight.js-sanitized markup, not user input --><span
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
