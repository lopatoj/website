import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
	projectId: "so7l8egj",
	dataset: "production",
	useCdn: true,
	apiVersion: "2025-01-07"
});

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source).url()