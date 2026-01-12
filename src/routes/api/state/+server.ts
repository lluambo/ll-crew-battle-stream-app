import { json } from '@sveltejs/kit';
import { getState, setState } from '$lib/server/gamestate';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const data = getState();
	return json(data, {
		headers: {
			// Critical for OBS to see updates instantly
			'Cache-Control': 'no-cache, no-store, must-revalidate'
		}
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const newData = await request.json();
	setState(newData);
	return json({ success: true });
};
