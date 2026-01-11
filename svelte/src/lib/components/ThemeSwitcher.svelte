<script lang="ts">
	import { theme } from '$lib/theme.svelte';
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	const { ...rest } = $props();

	onMount(() => {
		theme.initTheme();
	});
</script>

<button
	{...rest}
	onclick={() => theme.toggleTheme()}
	class="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-70 active:opacity-40"
>
	<Icon icon={theme.currentTheme()} large />
</button>
