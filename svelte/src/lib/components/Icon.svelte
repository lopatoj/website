<script lang="ts">
	import Icon from '@iconify/svelte';

	export type IconType = 'linkedin' | 'github' | 'copy' | 'check' | 'light' | 'dark';

	const {
		icon,
		inline = false,
		large = false,
		...rest
	}: { icon: IconType; inline?: boolean; large?: boolean } = $props();

	const def = () => {
		switch (icon) {
			case 'linkedin':
				return 'mdi:linkedin';
			case 'github':
				return 'mdi:github';
			case 'copy':
				return 'lucide:copy';
			case 'check':
				return 'lucide:check';
			case 'light':
				return 'eva:sun-fill';
			case 'dark':
				return 'eva:moon-fill';
		}
	};
</script>

<Icon icon={def()} class={inline ? 'inline' : ''} height={large ? '1.2em' : '1em'} {...rest} />
