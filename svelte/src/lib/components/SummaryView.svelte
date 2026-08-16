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
  class="hover:bg-bg-a box-content flex w-full items-start gap-3 rounded-md p-3 hover:opacity-100! active:opacity-70!"
>
  <img
    src={thumbnail.url}
    alt={thumbnail.caption}
    class="h-20 w-20 shrink-0 rounded-sm object-cover"
  />
  <div class="flex min-w-0 grow flex-col gap-1">
    <p class="text-fg-b text-xs">{dateFrom(date)}</p>
    <p class="leading-tight font-medium text-pretty">{title}</p>
    <p class="text-fg-a line-clamp-2 text-sm leading-snug text-pretty">{description}</p>
  </div>
</a>
