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
  class="hover:bg-bg-a box-content flex w-full gap-6 rounded-md p-3 hover:opacity-100! active:opacity-70!"
>
  <div class="flex h-full grow flex-col gap-2">
    <p class="flex flex-row items-center gap-3 text-xl font-medium">
      {title}<span class="text-[.8em] font-light">{dateFrom(date)}</span>
    </p>
    <p>{description}</p>
  </div>
  <img
    src={thumbnail.url}
    alt={thumbnail.caption}
    class="max-h-24 max-w-56 rounded-sm object-cover"
  />
</a>
