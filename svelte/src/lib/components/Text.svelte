<!-- @component A block of text derived from the Sanity PortableText component. -->

<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import type { InputValue } from "@portabletext/svelte";
  import Image from "./Image.svelte";
  import Code from "./Code.svelte";
  import LinkMark from "./LinkMark.svelte";

  let { value = [] }: { value: InputValue } = $props();
</script>

<PortableText
  {value}
  components={{
    types: {
      image: Image,
      code: Code,
    },
    marks: {
      link: LinkMark,
    },
  }}
/>
