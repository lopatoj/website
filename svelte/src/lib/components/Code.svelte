<script lang="ts">
  import type { CustomBlockComponentProps } from "@portabletext/svelte";
  import hljs from "highlight.js";

  type Props = {
    portableText: CustomBlockComponentProps<{
      _type: "code";
      code: string;
      lang: string;
    }>;
  };

  const { portableText }: Props = $props();

  const code = portableText.value.code;
  const lines = code.split("\n").map((l) => hljs.highlightAuto(l).value);
  const numLinesPlaces = Math.ceil(Math.log10(lines.length));
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/monokai.min.css"
  />
</svelte:head>

<pre
  class="tracking-normal rounded-lg bg-stone-700 text-stone-50 p-4 pb-3 relative"
  style={`--num-width: ${numLinesPlaces}ch;`}><button
    class="absolute text-xs top-2 right-2 select-none hover:bg-stone-800 active:bg-stone-900 rounded p-1 pb-0 transition-all duration-[.2s] ease-in-out"
    >{portableText.value.lang}</button
  ><code lang={portableText.value.lang} class="block font-light"
    >{#each lines as line}<span>{@html line}
</span>{/each}</code></pre>

<style>
  code {
    font-family: "CommitMono", monospace;
    counter-reset: line;
    overflow-y: hidden;
    scrollbar-color: #78716c #44403c;
    scrollbar-width: auto;
  }

  code span:before {
    @apply text-stone-500;
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: var(--num-width);
    text-align: right;
    margin-right: 1rem;
  }

  code[lang="bash"] span:before {
    content: "$";
  }
</style>
