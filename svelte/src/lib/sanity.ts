import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "so7l8egj",
	dataset: "production",
	useCdn: true,
	apiVersion: "2025-01-07"
});