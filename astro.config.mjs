// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SP',
			social: {
				github: 'https://github.com/sylvixor/sp',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'FAQ', slug: 'introduction/faq' },
						{ label: 'Homebrew-able?', slug: 'introduction/homebrewable' },
						{ label: 'Patched', slug: 'introduction/patched'},
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Requirements', slug: 'getting_started/requirements'},
					]
				},
			],
		}),
	],
});
