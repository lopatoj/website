<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import type { InputValue } from "@portabletext/svelte";

	let { text }: { text: InputValue } = $props();
</script>

<div class="flex flex-col gap-4">
<PortableText value={text} components={{

}}/>
</div>