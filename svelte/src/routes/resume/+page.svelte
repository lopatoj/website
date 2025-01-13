<script lang="ts">
	import type { PageData } from "../$types";

	const { data: resume }: { data: PageData } = $props();

	console.log(resume);
</script>