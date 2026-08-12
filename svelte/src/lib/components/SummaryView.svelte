<script lang="ts">
import type { Summary } from "$lib/pageSource";
import { dateFrom } from "$lib/utils/dates";

const { title, slug, type, thumbnail, description, date }: Summary = $props();
</script>

<a
  href="/{type}/{slug}"
  id="summary"
  class="w-full flex box-content gap-6 hover:bg-bg-a hover:opacity-100! active:opacity-70! p-3 rounded-md"
>
  <div class="h-full grow flex flex-col gap-2">
    <p class="text-xl flex flex-row font-medium gap-3 items-center">
      {title}<span class="text-[.8em] font-light">{dateFrom(date)}</span>
    </p>
    <p>{description}</p>
  </div>
  <img
    src={thumbnail.url}
    alt={thumbnail.caption}
    class="max-h-24 max-w-56 object-cover rounded-sm"
  />
</a>
