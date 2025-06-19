import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		alias: {
			'_actions': 'src/lib/actions',
			'_components': 'src/lib/components',
			'_stores': 'src/lib/stores',
			'_s': 'src/lib/styles/utils.scss',
			'_utils': 'src/lib/utils',
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
