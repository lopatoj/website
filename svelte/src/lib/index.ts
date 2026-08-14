import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { SanityRepository } from "./sanity.svelte.ts";
import { ThemeProvider } from "./theme.svelte.ts";

const sanityClient = createClient({
  projectId: "so7l8egj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2026-01-04",
});

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source).url();

export const themeProvider = new ThemeProvider();

export const sanityRepository = new SanityRepository(sanityClient);
