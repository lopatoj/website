import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), nodePolyfills()],
	optimizeDeps: {
		exclude: ['lightningcss', 'tailwindcss', '@tailwindcss/oxide']
	}
});
