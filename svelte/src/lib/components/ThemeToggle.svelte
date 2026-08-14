<script lang="ts">
  import { themeProvider } from "$lib/theme.svelte";
  import Icon from "./Icon.svelte";

  const { ...rest } = $props();
</script>

<button {...rest} type="button" onclick={() => themeProvider.toggleTheme()} class="interactive">
  <Icon icon={themeProvider.currentTheme()} large />
</button>
