<script lang="ts">
  import { themeProvider } from "$lib/theme.svelte";
  import Icon from "./Icon.svelte";

  const { ...rest } = $props();
</script>

<button
  {...rest}
  type="button"
  onclick={() => themeProvider.toggleTheme()}
  class="cursor-pointer transition-all duration-200 ease-in-out hover:opacity-70 active:opacity-40"
>
  <Icon icon={themeProvider.currentTheme()} large />
</button>
