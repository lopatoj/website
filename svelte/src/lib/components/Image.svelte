<script lang="ts">
import type { CustomBlockComponentProps } from "@portabletext/svelte";
import type { SanityAsset } from "@sanity/image-url";
import { urlFor } from "$lib";

type Props = {
  portableText: CustomBlockComponentProps<{
    _type: "image";
    asset: SanityAsset;
  }>;
};

let { portableText }: Props = $props();
</script>

<img src={urlFor(portableText.value.asset)} alt="" class="max-w-full object-cover">
