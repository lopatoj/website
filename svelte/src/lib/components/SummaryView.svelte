<script lang="ts">
  import { resolve } from "$app/paths";
  import type { ContentType, Summary } from "$lib/types";
  import { dateFrom } from "$lib/utils/dates";

  type Props = Summary & { type: ContentType };

  const { title, slug, type, thumbnail, description, date }: Props = $props();

  const href = $derived(resolve("/[type=contentType]/[slug]", { type, slug }));
</script>

<a
  {href}
  class="hover:bg-bg-a -mt-1.5 box-content flex w-full gap-2 rounded-md p-1.5 hover:opacity-100! active:opacity-70!"
>
  <img
    src={thumbnail.url}
    alt={thumbnail.caption}
    class="mr-0.5 h-12 w-12 rounded-xs object-cover"
  />
  <div class="flex h-full grow flex-col gap-1">
    <p class="flex flex-row gap-2 align-text-top">
      {title}<span class="text-fg-b ml-auto min-w-max text-sm">{dateFrom(date)}</span>
    </p>
    <p class="text-sm">{description}</p>
  </div>
</a>
