<script lang="ts">
  import type { CustomBlockComponentProps } from "@portabletext/svelte";

  type Props = {
    portableText: CustomBlockComponentProps<{
      _type: "code";
      code: string;
      lang: string;
    }>;
  };

  const { portableText }: Props = $props();

  const lines = portableText.value.code.split("\n");
  const numLinesPlaces = Math.ceil(Math.log10(lines.length));
</script>

<pre class="tracking-normal rounded-lg bg-stone-200 text-stone-700 p-4 pb-3 relative" style={`--num-width: ${numLinesPlaces}ex;`}><button class="absolute text-xs top-2 right-2 select-none hover:bg-stone-300 active:bg-stone-400 rounded p-1 pb-0 transition-all duration-[.2s] ease-in-out">{portableText.value.lang}</button><code lang={portableText.value.lang} class="block">{#each lines as line}<span>{line}</span>
{/each}</code></pre>

<style>
  code {
    @apply font-light;
    font-family: 'CommitMono', monospace;
    counter-reset: line;
    overflow-y: hidden;
    scrollbar-color: #78716c #e7e5e4;
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
