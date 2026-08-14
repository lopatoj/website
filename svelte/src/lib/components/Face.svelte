<script lang="ts">
  import { themeProvider } from "$lib/theme.svelte";
</script>

<img
  src={themeProvider.currentTheme() === "light" ? "/face.svg" : "/face_inverted.svg"}
  alt=""
  class="h-[1.5em]"
/>
