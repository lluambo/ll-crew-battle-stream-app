import { browser } from '$app/environment';

export type Player = {
	id: string;
	name: string;
	lives: number;
	active: boolean;
};

export type Team = {
	id: string;
	name: string;
	logo: string;
	players: Player[];
};

class CrewBattleState {
	// 1. Reactive State
	teams = $state<[Team, Team]>([
		{ id: 't1', name: 'Loading...', logo: '', players: [] },
		{ id: 't2', name: 'Loading...', logo: '', players: [] }
	]);

	private isFetching = false;

	constructor() {
		if (browser) {
			this.init();
		}
	}

	async init() {
		await this.pullFromServer();

		// 2. Logic Split: Admin pushes, OBS polls
		const isAdmin = window.location.pathname.includes('/admin');

		if (isAdmin) {
			$effect.root(() => {
				$effect(() => {
					const payload = JSON.stringify(this.teams);
					if (!this.isFetching) {
						fetch('/api/state', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: payload
						}).catch((e) => console.error('Save failed', e));
					}
				});
			});
		} else {
			setInterval(() => {
				this.pullFromServer();
			}, 1000);
		}
	}

	async pullFromServer() {
		try {
			const res = await fetch('/api/state');
			if (res.ok) {
				const data = await res.json();
				const currentStr = JSON.stringify(this.teams);
				const newStr = JSON.stringify(data);

				if (currentStr !== newStr) {
					this.isFetching = true;
					this.teams = data;
					setTimeout(() => (this.isFetching = false), 50);
				}
			}
		} catch (e) {
			console.error('Polling error:', e);
		}
	}

	// --- Helpers ---

	getTotalLives(teamIndex: 0 | 1) {
		return this.teams[teamIndex].players.reduce((sum, player) => sum + player.lives, 0);
	}

	// --- Actions ---

	addPlayer(teamIndex: 0 | 1) {
		this.teams[teamIndex].players.push({
			id: crypto.randomUUID(),
			name: 'Player',
			lives: 3,
			active: false
		});
	}

	removePlayer(teamIndex: 0 | 1, pIndex: number) {
		this.teams[teamIndex].players.splice(pIndex, 1);
	}

	setActive(teamIndex: 0 | 1, playerId: string) {
		this.teams[teamIndex].players.forEach((p) => (p.active = p.id === playerId));
	}

	swapSides() {
		this.teams = [this.teams[1], this.teams[0]];
	}
}

export const crewState = new CrewBattleState();
