<script lang="ts">
  import {
    PUBLIC_RESUME_IMAGE_URL,
    PUBLIC_RESUME_PDF_URL,
  } from "$env/static/public";
</script>

<svelte:head>
  <link
    rel="preload"
    as="image"
    href={PUBLIC_RESUME_IMAGE_URL}
    fetchpriority="high"
  />
</svelte:head>

<abbr title="Click to download">
  <a href={PUBLIC_RESUME_PDF_URL} class="my-6 flex flex-col items-center">
    <img
      src={PUBLIC_RESUME_IMAGE_URL}
      alt="Justin's Resume"
      class="bg-white p-10 box-content shadow-xl dark:shadow-black rounded-md"
    />
  </a>
</abbr>
