<script lang="ts">
  import type { Summary } from "./+page.js";

  const { name, slug, type, thumbnail, description, date }: Summary = $props();
</script>

<a
  href="/{type}/{slug}"
  id="summary"
  class="w-full box-content flex gap-6 hover:opacity-100 bg-[--bg] hover:scale-[102%] py-4 px-8"
>
  <div class="h-full flex-grow flex flex-col gap-2">
    <p class="text-xl font-bold">
      {name}
    </p>
    <p class="text-sm">
      {new Date(date).toLocaleDateString("en-US")}
    </p>
    <p>{description}</p>
  </div>
  <img
    src={thumbnail.url}
    alt={thumbnail.caption}
    class="h-44 max-w-56 object-cover rounded"
  />
</a>

<style>
  #summary {
    box-shadow: 0 1rem 1rem -1rem rgba(0, 0, 0, 0);
  }

  #summary:hover {
    box-shadow: 0 2rem 1.5rem -1.5rem rgba(0, 0, 0, 0.2);
  }

  #summary:active {
    transform: translateY();
  }
</style>
