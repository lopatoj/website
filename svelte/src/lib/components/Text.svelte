<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import type { InputValue } from "@portabletext/svelte";
  import Image from "./Image.svelte";
  import Code from "./Code.svelte";
  import Block from "./Block.svelte";

  let { value }: { value: InputValue } = $props();

  value = value || [];
</script>

<div class="flex flex-col gap-8">
  <PortableText {value} components={{
    block: Block,
    types: {
      image: Image,
      code: Code
    }
  }} />
</div>