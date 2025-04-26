// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: "https://homebrew.sylvixor.com",
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: "SP",
			description: "Homebrew Guide",
			customCss: ["./src/styles/custom.css"],
			// credits: true,
			favicon: "/favicon.ico",
			components: {
				Head: "./src/components/Head.astro",
			},
			logo: {
				src: "./src/assets/SP-logo-nav.png",
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/sylvixor/sp' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/zc2CmJWbz8' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/switchSP' },
				{ icon: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/r/SwitchPirates' },
				],
			sidebar: [
				{
					label: "Introduction",
					items: [
						{ label: "FAQ", link: "/introduction/faq" },
						{ label: "Common issues", link: "/introduction/issues" },
						{ label: "Homebrewable?", link: "/introduction/homebrewable" },
						{ label: "Avoid bans", link: "/introduction/avoid-ban" },
					],
				},
				{
					label: "Homebrewing",
					items: [
						{ label: "Unpatched", link: "/homebrewing/unpatched" },
						{ label: "Possibly Patched", link: "/homebrewing/possibly-patched" },
						{ label: "Patched", link: "/homebrewing/patched" },
						{ label: "Mariko", link: "/homebrewing/mariko" },
					],
				},
				{
					label: "Important",
					items: [
						{ label: "MicroSD guide", link: "/important/microsd" },
						{ label: "Browse microSD card", link: "/important/browse" },
						{ label: "RCM & Hekate", link: "/important/rcm" },
						{ label: "Inject | Launch payload", link: "/important/payload" },
						{ label: "Backup | Restore saves", link: "/important/saves" },
						{ label: "Backup | Restore Switch", link: "/important/backup" },
						{ label: "Update | Downgrade", link: "/important/update" },
						{ label: "Dump titles", link: "/important/titles" },
						{ label: "Dump keys", link: "/important/keys" },
						{ label: "Dump firmware", link: "/important/firmware" },
					],
				},
				{
					label: "Miscellaneous",
					items: [
						{ label: "Partition-based or file-based", link: "/miscellaneous/partition" },
						{ label: "Install homebrew apps", link: "/miscellaneous/homebrew" },
						{ label: "Install titles via USB", link: "/miscellaneous/usb" },
						{ label: "Install themes", link: "/miscellaneous/themes" },
						{ label: "Enable gamecard reader", link: "/miscellaneous/gamecard", },
						{ label: "Manage cheats & mods", link: "miscellaneous/cheats" },
						{ label: "Manage sysmodules", link: "/miscellaneous/sysmodules" },
						{ label: "Setup Tesla overlay", link: "/miscellaneous/tesla" },
						{ label: "Verify dumps", link: "/miscellaneous/verify" },
						{ label: "Emulating Amiibo", link: "/miscellaneous/amiibo" },
						{ label: "MicroSD migration", link: "/miscellaneous/migrate" },
						{ label: "SXOS migration", link: "/miscellaneous/sxos" },
						{ label: "About", link: "/miscellaneous/about" },
					],
				},
				{
					label: "Overclocking",
					items: [
						{ label: "Getting started", link: "/overclocking/start" },
						{ label: "Erista", link: "/overclocking/erista" },
						{ label: "Mariko", link: "/overclocking/mariko" },
						{ label: "Using overlays", link: "/overclocking/overlay" },
					],
				},
			],
		}),
	],
});