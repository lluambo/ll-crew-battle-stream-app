<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';
	import { resolve } from '$app/paths';
	interface SavedTeam {
		name: string;
		players: string[];
	}

	let { data }: { data: { savedTeams: SavedTeam[] } } = $props();
	let savedTeams = data.savedTeams || [];

	function loadPreset(teamIndex: 0 | 1, event: Event) {
		const select = event.target as HTMLSelectElement;
		const selectedTeamName = select.value;

		const teamData = savedTeams.find((t) => t.name === selectedTeamName);

		if (teamData) {
			crewState.teams[teamIndex].name = teamData.name;
			const playerList = teamData.players || [];

			playerList.forEach((playerName, i) => {
				if (i < 5) {
					crewState.teams[teamIndex].players[i].name = playerName;
				}
			});
		}
		select.value = '';
	}

	const handleLogo = (e: Event, teamIndex: 0 | 1) => {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (typeof e.target?.result === 'string') {
					crewState.teams[teamIndex].logo = e.target.result;
				}
			};
			reader.readAsDataURL(file);
		}
	};
</script>

<div class="min-h-screen bg-base-300 p-4 font-sans">
	<nav class="navbar sticky top-2 z-10 mb-6 rounded-box bg-base-100 shadow-lg">
		<div class="flex-1">
			<span class="btn text-xl font-bold tracking-tighter btn-ghost"
				><a href={resolve('/')} class="link">🎮 Crew Battle Admin</a></span
			>
		</div>
		<div class="flex-none gap-2">
			<button class="btn btn-warning" onclick={() => crewState.swapSides()}>Swap Sides ↔️</button>

			<div class="dropdown dropdown-end">
				<button class="btn btn-primary">OBS Links ▼</button>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="dropdown-content menu z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li>
						<a href={resolve('/roster')} target="_blank">Open Roster View</a>
					</li>
					<li>
						<a href={resolve('/overlay')} target="_blank">Open Generic VS</a>
					</li>

					<div class="divider my-0"></div>

					<li><a href={resolve('/overlay/sf6')} target="_blank">Open SF6</a></li>
					<li><a href={resolve('/overlay/tekken')} target="_blank">Open Tekken</a></li>
					<li><a href={resolve('/overlay/ggst')} target="_blank">Open Guilty Gear</a></li>
					<li><a href={resolve('/overlay/blazblue')} target="_blank">Open BlazBlue</a></li>
					<li><a href={resolve('/overlay/2xko')} target="_blank">Open 2XKO</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="collapse-arrow collapse mb-6 border border-base-300 bg-base-200">
		<input type="checkbox" />
		<div class="collapse-title flex items-center gap-2 text-xl font-medium">
			ℹ️ How to Use & Controls
		</div>
		<div class="collapse-content space-y-4 text-sm">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<h3 class="mb-1 font-bold text-primary">🎮 Basic Controls</h3>
					<ul class="list-inside list-disc space-y-1 opacity-80">
						<li>
							<strong>Active Button:</strong> Click the radio button (◎) next to a player to show them
							on the VS Overlay.
						</li>
						<li>
							<strong>Lives:</strong> Use the <span class="badge badge-xs badge-neutral">+</span>
							and
							<span class="badge badge-xs badge-neutral">-</span> buttons to change stocks.
						</li>
						<li>
							<strong>Swap Sides:</strong> Click the yellow button in the navbar to swap Team 1 and Team
							2 instantly.
						</li>
					</ul>
				</div>
				<div>
					<h3 class="mb-1 font-bold text-secondary">📂 Saved Teams</h3>
					<ul class="list-inside list-disc space-y-1 opacity-80">
						<li>
							<strong>Load Preset:</strong> Use the dropdown menu inside the team card to fill all names.
						</li>
						<li>
							<strong>Edit Teams:</strong> Open the <code>teams.json</code> file in the app folder to
							add your own rosters.
						</li>
					</ul>
				</div>
			</div>
			<div class="alert py-2 text-xs alert-info">
				<span
					><strong>Tip:</strong> The overlay updates automatically. You do not need to refresh OBS.</span
				>
			</div>
		</div>
	</div>

	<div class="grid auto-rows-fr grid-cols-1 gap-6 lg:grid-cols-2">
		{#each crewState.teams as team, i (team.id)}
			<div
				class="card border-t-4 bg-base-100 shadow-xl transition-all duration-300"
				class:border-blue-500={i === 0}
				class:border-red-500={i === 1}
			>
				<div class="card-body p-4 sm:p-6">
					<select
						class="select-bordered select mb-4 w-full select-sm"
						onchange={(e) => loadPreset(i as 0 | 1, e)}
					>
						<option value="" disabled selected>📂 Load a Saved Team...</option>
						{#each savedTeams as savedTeam}
							<option value={savedTeam.name}>{savedTeam.name}</option>
						{/each}
					</select>

					<div
						class="mb-4 flex flex-col items-center gap-4 border-b border-base-200 pb-4 sm:flex-row"
					>
						<div class="placeholder avatar">
							<div class="h-20 w-20 rounded-xl bg-neutral text-neutral-content shadow-inner">
								{#if team.logo}
									<img src={team.logo} alt="Team Logo" />
								{:else}
									<span class="text-3xl font-black">{team.name.substring(0, 2)}</span>
								{/if}
							</div>
						</div>

						<div class="w-full flex-1 space-y-2">
							<div class="flex gap-2">
								<label class="input-bordered input flex flex-1 items-center gap-2">
									Team
									<input type="text" class="grow font-bold" bind:value={team.name} />
								</label>

								<div
									class="flex flex-col items-center justify-center rounded-box border border-base-300 bg-base-200 px-4"
									title="Total Team Stocks"
								>
									<span class="text-xs font-bold text-base-content/60 uppercase">Stocks</span>
									<span class="text-xl leading-none font-black tabular-nums"
										>{crewState.getTotalLives(i as 0 | 1)}</span
									>
								</div>
							</div>

							<input
								type="file"
								class="file-input-bordered file-input w-full file-input-sm"
								accept="image/*"
								onchange={(e) => handleLogo(e, i as 0 | 1)}
							/>
						</div>
					</div>

					<div class="flex flex-col gap-2">
						{#each team.players as player, pIndex (player.id)}
							<div
								class="flex items-center gap-2 rounded-lg border border-transparent bg-base-200/50 p-2 transition-all"
								class:border-l-4={player.active}
								class:border-l-success={player.active}
								class:bg-base-200={player.active}
							>
								<input
									type="radio"
									name="active-player-group"
									class="radio radio-sm radio-success"
									checked={player.active}
									onchange={() => crewState.setActive(i as 0 | 1, player.id)}
								/>

								<input
									type="text"
									class="input input-sm w-full input-ghost font-medium"
									bind:value={player.name}
									placeholder="Player Name"
								/>

								<div class="join shadow-sm">
									<button
										class="btn join-item btn-xs btn-error"
										onclick={() => player.lives > 0 && player.lives--}>-</button
									>
									<span class="no-animation btn join-item w-8 tabular-nums btn-xs btn-neutral"
										>{player.lives}</span
									>
									<button class="btn join-item btn-xs btn-success" onclick={() => player.lives++}
										>+</button
									>
								</div>

								<button
									class="btn btn-square text-base-content/50 btn-ghost btn-xs hover:text-error"
									onclick={() => crewState.removePlayer(i as 0 | 1, pIndex)}>✕</button
								>
							</div>
						{/each}
					</div>

					<div class="mt-6 card-actions justify-center">
						<button
							class="btn btn-block border-dashed btn-outline btn-sm"
							onclick={() => crewState.addPlayer(i as 0 | 1)}>+ Add Player</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
