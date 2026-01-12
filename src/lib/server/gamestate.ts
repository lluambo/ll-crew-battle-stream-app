import fs from 'node:fs';
import path from 'node:path';
import type { Team } from '$lib/state/crew.svelte';

// Saves data to 'data.json' in your project root
const DB_PATH = path.resolve('data.json');

const defaultData: [Team, Team] = [
	{ id: 't1', name: 'Team Alpha', logo: '', players: [] },
	{ id: 't2', name: 'Team Omega', logo: '', players: [] }
];

export function getState() {
	try {
		if (!fs.existsSync(DB_PATH)) {
			fs.writeFileSync(DB_PATH, JSON.stringify(defaultData), 'utf-8');
			return defaultData;
		}
		const fileContent = fs.readFileSync(DB_PATH, 'utf-8');
		return JSON.parse(fileContent);
	} catch (e) {
		console.error('Error reading DB:', e);
		return defaultData;
	}
}

export function setState(newData: [Team, Team]) {
	try {
		fs.writeFileSync(DB_PATH, JSON.stringify(newData), 'utf-8');
		return newData;
	} catch (e) {
		console.error('Error writing DB:', e);
		return newData;
	}
}
