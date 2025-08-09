<script lang="ts">
  import type { BlockComponentProps } from "@portabletext/svelte";

  type Props = {
    portableText: BlockComponentProps;
  };

  const { portableText }: Props = $props();
</script>

<p>{portableText.value.children.map(b => b.text).join("")}</p>