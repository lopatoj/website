<script lang="ts">
  import type { Summary } from "./+page.ts";

  let { number, name, thumbnail, description, date, type }: Summary = $props();
</script>

<svelte:head>
  <title>justin lopato | projects</title>
</svelte:head>

<a
  href="/stuff/{number}"
  id="summary"
  class="w-full flex gap-6 hover:opacity-100 bg-[--bg] hover:scale-[102%] py-4"
>
  <div id="number" class="text-9xl h-44 -z-10 flex items-center">
    <p class={type ? "text-red-600" : "text-blue-600"}>
      {type ? "B" : "P"}{number}
    </p>
  </div>
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
    class="max-h-44 max-w-64 object-cover"
  />
</a>

<style>
  #summary {
    box-shadow: 0 1rem 1rem -1rem rgba(0, 0, 0, 0);
  }

  #number {
    position: absolute;
    transition: 0.25s;
    transform: translateX(-70%);
    opacity: 0;
  }

  #summary:hover {
    box-shadow: 0 1rem 1rem -1rem rgba(0, 0, 0, 0.2);

    #number {
      transform: translateX(calc(-3rem - 90%));
      opacity: 1;
    }
  }
</style>
