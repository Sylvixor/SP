import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

// Get all entries from the `docs` content collection.
const entries = await getCollection("docs");

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ slug, data }) => [slug, data]));
export const { getStaticPaths, GET } = OGImageRoute({
	// Pass down the documentation pages.
	pages,
	// Define the name of the parameter used in the endpoint path, here `paths`
	// as the file is named `[...paths].ts`.
	param: "path",
	// Define a function called for each page to customize the generated image.
	getImageOptions: (path, page) => ({
		title: page.title,
		description: page.description,
		logo: {
			// This is actually transparent
			// The logo is embedded in the BG image to control positioning
			path: "./src/assets/og-logo.png",
		},
		bgImage: {
			path: "./src/assets/og-bg.png",
			fit: "none",
		},
		font: {
			title: {
				weight: "Black",
			},
			description: {
				weight: "Medium",
				size: 32,
			},
		},
	}),
});
