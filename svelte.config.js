import adapter from '@jesterkit/exe-sveltekit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			target: process.env.BUILD_TARGET,
			binaryName: process.env.BUILD_TARGET?.includes('windows') ? 'CrewBattle.exe' : 'CrewBattle',

			out: 'dist'
		})
	}
};

export default config;
