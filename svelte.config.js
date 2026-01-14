import adapter from '@jesterkit/exe-sveltekit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// If it's not set (running locally), it defaults to your current machine's OS.
		adapter: adapter({
			target: process.env.BUILD_TARGET,
			name: 'llCrewBattleApp', // Optional: Set your preferred base binary name
			out: 'dist'
		})
	}
};

export default config;
