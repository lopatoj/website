import adapter from '@sveltejs/adapter-vercel';
import { installPolyfills } from '@sveltejs/kit/node/polyfills';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: installPolyfills(),
	kit: {
		adapter: adapter(),
		env: {
			dir: '../'
		}
	}
};

export default config;
