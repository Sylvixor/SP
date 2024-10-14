// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://homebrew.sylvixor.com',
	integrations: [
		starlight({
			title: "SP",
			description: "Homebrew Guide",
			customCss: [
				"./src/styles/custom.css",
			],
			logo: {
				src: "./src/assets/favicon.png",
			},
			social: {
				github: "https://github.com/sylvixor/sp",
				discord: "https://discord.gg/zc2CmJWbz8",
				telegram: "https://t.me/sylvixor",
			},
			sidebar: [
				{
					label: "Introduction",
					autogenerate: { directory: "introduction" },
				},
				{
					label: "Homebrewing",
					autogenerate: { directory: "homebrewing" },
				},
				{
					label: "Miscellaneous",
					autogenerate: { directory: "miscellaneous"},
				},
			],
		}),
	],
});