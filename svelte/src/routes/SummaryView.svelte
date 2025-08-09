<script lang="ts">
  import type { Summary } from "./+page.js";

  const { name, slug, type, thumbnail, description, date }: Summary = $props();

  const color = type === "project" ? "4338ca" : "dc2626";
</script>

<a
  href="/{type}/{slug}"
  id="summary"
  class="w-full box-content flex gap-6 hover:opacity-100 bg-[--bg] hover:scale-[102%] p-4 rounded-3xl"
>
  <div class="h-full flex-grow flex flex-col gap-2">
    <p class="text-xl font-medium">
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
    class="h-32 max-w-56 object-cover rounded-lg"
  />
</a>

<style>
  #summary {
    box-shadow: 0 0rem 1.5rem -1.5rem rgba(0, 0, 0, 0);
  }

  #summary:hover {
    box-shadow: 0rem 1.5rem 1rem -1rem rgba(0, 0, 0, 0.1);
  }

  #summary:active {
    transform: translateY();
  }
</style>
