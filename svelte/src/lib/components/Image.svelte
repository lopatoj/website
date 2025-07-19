<script lang="ts">
  import type { CustomBlockComponentProps } from "@portabletext/svelte";
  import type { SanityAsset } from "@sanity/image-url/lib/types/types";
  import { urlFor } from "$lib/sanity";

  type Props = {
    portableText: CustomBlockComponentProps<{
      _type: "image";
      asset: SanityAsset;
    }>;
  };

  let { portableText }: Props = $props();
</script>

<img src={urlFor(portableText.value.asset)} alt="" class="max-h-30 max-w-full object-cover"/>

