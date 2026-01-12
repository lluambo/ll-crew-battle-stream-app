// svelte.config.js
import adapter from '@jesterkit/exe-sveltekit';

export default {
	kit: {
		adapter: adapter({
			binaryName: 'll-crew-battle-app'
		})
	}
};
