import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const builder = createImageUrlBuilder({
  projectId: "so7l8egj",
  dataset: "production",
});

export const urlFor = (source: SanityImageSource) => builder.image(source).url();
