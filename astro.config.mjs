// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://homebrew.sylvixor.com",
	integrations: [
		starlight({
			title: "SP",
			description: "Homebrew Guide",
			customCss: ["./src/styles/custom.css"],
			credits: true,
			favicon: "/favicon.png",
			logo: {
				src: "./src/assets/SP-logo-nav.png",
			},
			social: {
				github: "https://github.com/sylvixor/sp",
				discord: "https://discord.gg/zc2CmJWbz8",
				telegram: "https://t.me/switchSP",
				reddit: "https://www.reddit.com/r/SwitchPirates",
			},
			sidebar: [
				{
					label: "Introduction",
					items: [
						{ label: "FAQ", link: "/introduction/faq" },
						{ label: "Common issues", link: "/introduction/issues"},
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
					]
				},
				{
					label: "Important",
					items: [
						{ label: "MicroSD guide", link: "/important/microsd" },
						{ label: "Launch payload", link: "/important/payload" },
						{ label: "Backup save files", link: "/important/save" },
						{ label: "Backup / Restore", link: "/important/backup" },
						{ label: "Update / Downgrade", link: "/important/update" },
						{ label: "Dump titles", link: "/important/dump" },
						{ label: "Dump keys", link: "/important/keys" },
						{ label: "Dump firmware", link: "/important/firmware" },
					]
				},
				{
					label: "Miscellaneous",
					items: [
						{ label: "Partition-based or file-based", link: "/miscellaneous/partition-or-file" },
						{ label: "Browse microSD via USB", link: "/miscellaneous/browse" },
						{ label: "Install homebrew apps", link: "/miscellaneous/hbapp" },
						{ label: "Install titles via USB", link: "/miscellaneous/usb-installation" },
						{ label: "Install themes", link: "/miscellaneous/themes" },
						{ label: "Enable gamecard reader", link: "/miscellaneous/gamecard" },
						{ label: "Manage cheats", link: "miscellaneous/cheats" },
						{ label: "Manage sysmodules", link: "/miscellaneous/sysmodules" },
						{ label: "Setup Tesla overlay", link: "/miscellaneous/tesla" },
						{ label: "Setup Incognito", link: "/miscellaneous/incognito"},
						{ label: "Verify dumps", link: "/miscellaneous/verify" },
						{ label: "Emulating amiibo", link: "/miscellaneous/emuiibo" },
						{ label: "SXOS migration", link: "/miscellaneous/sxos" },
						{ label: "About", link: "/miscellaneous/about" },
					]
				}
			],
		}),
	],
});
