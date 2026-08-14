<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="flex h-40 w-full flex-col items-center justify-center">
  <p class="text-danger text-4xl">{page.status}</p>
  <p class="text-xl">{page.error?.message}</p>
</div>
