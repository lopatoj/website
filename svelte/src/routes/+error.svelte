<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="flex h-40 w-full flex-col items-center justify-center">
  <p class="text-4xl text-red-500">{page.status}</p>
  <p class="text-xl">{page.error?.message}</p>
</div>
