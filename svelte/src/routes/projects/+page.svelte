<script lang="ts">
  import SummaryView from "./SummaryView.svelte";

  const { data } = $props();
</script>

<div class="flex flex-col gap-4">
	{#each data.projects as project (project.number)}
		<SummaryView {...project} />
	{/each}
</div>