import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "so7l8egj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2026-01-04",
});

const builder = createImageUrlBuilder(client);

/**
 * A utility function to get an image URL from a SanityImageSource.
 *
 * @param source the SanityImageSource to use
 * @returns the image URL
 */
export const urlFor = (source: SanityImageSource) =>
  builder.image(source).url();
