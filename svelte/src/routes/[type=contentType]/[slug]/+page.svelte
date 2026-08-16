<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import Text from "$lib/components/Text.svelte";
  import { dateFrom } from "$lib/utils/dates";

  const { data } = $props();
  const { title, date, thumbnail, body, repository } = $derived(data.page);
  const formattedDate = $derived(dateFrom(date));
</script>

<svelte:head>
  <title>lopa.to | {data.type} | {title}</title>
</svelte:head>

<div class="flex w-full flex-row items-end font-sans">
  {#if repository}
    <a
      href={repository}
      target="_blank"
      rel="noopener noreferrer"
      class="mr-auto text-lg font-semibold text-blue-500 hover:underline"
    >
      {title}<Icon icon="link" inline class="text-fg-a ml-0.5 translate-y-[-0.05rem]" />
    </a>
  {:else}
    <h1 class="mr-auto text-lg font-semibold">{title}</h1>
  {/if}
  {#if formattedDate}
    <p class="mb-[0.05rem] ml-6 min-w-fit font-light">
      <span class="max-sm:hidden">published on</span>
      {formattedDate}
    </p>
  {/if}
</div>
<hr class="mb-6 w-full" />
<img src={thumbnail.url} alt={thumbnail.caption} class="h-48 w-full rounded-xs object-cover" />
<p class="text-fg-b oblique mt-1 mb-6 ml-auto text-sm">{thumbnail.caption}</p>
<article class="prose-lg w-content text-fg-a mb-6 font-serif leading-7">
  <Text value={body} />
</article>
