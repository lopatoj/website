<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	type Props = {
		portableText: MarkComponentProps<{
			href: string;
		}>;
		children?: import('svelte').Snippet;
	};

	let { portableText, children }: Props = $props();
</script>

<a href={portableText.value.href} target="_blank" class="underline!">
	{@render children?.()}
</a>
