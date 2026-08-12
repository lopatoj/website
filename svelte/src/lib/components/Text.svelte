<!-- @component A block of text derived from the Sanity PortableText component. -->

<script lang="ts">
import type { InputValue } from "@portabletext/svelte";
import { PortableText } from "@portabletext/svelte";
import Code from "./Code.svelte";
import Image from "./Image.svelte";
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
