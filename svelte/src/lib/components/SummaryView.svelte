<script lang="ts">
  import { resolve } from "$app/paths";
  import type { BlogSummary, ProjectSummary } from "$lib/sanity.svelte";
  import { dateFrom } from "$lib/utils/dates";

  type Props = (BlogSummary | ProjectSummary) & { type: "blog" | "project" };

  const { title, slug, type, thumbnail, description, date }: Props = $props();

  const href = $derived(
    type === "blog" ? resolve("/blog/[slug]", { slug }) : resolve("/project/[slug]", { slug }),
  );
</script>

<a
  {href}
  id="summary"
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
