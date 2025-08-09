<script lang="ts">
  import type { Summary } from "./+page.js";

  const { name, slug, type, thumbnail, description, date }: Summary = $props();

  const color = type === "project" ? "4338ca" : "dc2626";
</script>

<a
  href="/{type}/{slug}"
  id="summary"
  class="w-full box-content flex gap-6 hover:opacity-100 bg-[--bg] hover:scale-[101%] pb-4 px-4 mt-4 duration-[.3s]"
>
  <div class="h-full flex-grow flex flex-col gap-2">
    <p class="text-2xl font-bold -mt-2">
      {name.toLowerCase()}
    </p>
    <p class="text-sm">
      {new Date(date).toLocaleDateString("en-US")}
    </p>
    <p>{description}</p>
  </div>
  <img
    src={thumbnail.url}
    alt={thumbnail.caption}
    class="h-36 max-w-48 object-cover rounded"
  />
</a>

<style>
  #summary {
    box-shadow: 0 0rem 1.5rem -1.5rem rgba(0, 0, 0, 0);
  }

  #summary:hover {
    box-shadow: 0 2rem 1.5rem -1.5rem rgba(0, 0, 0, 0.2);
  }

  #summary:active {
    transform: translateY();
  }
</style>
