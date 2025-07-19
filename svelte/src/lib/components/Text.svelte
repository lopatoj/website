<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import type { InputValue } from "@portabletext/svelte";
  import Image from "./Image.svelte";

  let { value }: { value: InputValue } = $props();

  value = value || [];
</script>

<div class="flex flex-col gap-4">
  <PortableText {value} components={{
    types: {
      image: Image
    }
  }} />
</div>