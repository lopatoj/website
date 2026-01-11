<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BlockComponentProps } from '@portabletext/svelte';

	type DefaultBlockProps = {
		portableText: BlockComponentProps;
		children?: Snippet;
	};

	let { portableText, children }: DefaultBlockProps = $props();

	let style = $derived(portableText.value.style || 'normal');
</script>

{#if ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].includes(style)}
	<svelte:element this={style} class="font-serif">{@render children?.()}</svelte:element>
{:else if style === 'normal'}
	<p class="font-serif text-xl">{@render children?.()}</p>
{:else}
	{@render children?.()}
{/if}
