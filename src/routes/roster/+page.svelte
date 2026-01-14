<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';
</script>

<div class="flex min-h-screen w-full items-center justify-center overflow-hidden p-8 font-sans">
	<div class="flex w-full max-w-7xl items-start justify-between gap-16">
		{#each crewState.teams as team, i (team.id)}
			<div
				class="flex flex-1 flex-col gap-6 {i === 1
					? 'items-end text-right'
					: 'items-start text-left'}"
			>
				<div class="flex items-center gap-6 {i === 1 ? 'flex-row-reverse' : 'flex-row'}">
					<div class="avatar">
						<div
							class="h-32 w-32 rounded-xl border-2 border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-md"
						>
							{#if team.logo}
								<img src={team.logo} alt="Team Logo" class="object-contain" />
							{:else}
								<div
									class="flex h-full w-full items-center justify-center text-5xl font-black text-white/20"
								>
									{team.name[0]}
								</div>
							{/if}
						</div>
					</div>

					<div class="flex flex-col justify-center">
						<h1
							class="text-6xl font-black tracking-tighter text-white uppercase italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
							style="text-shadow: 0 0 20px {i === 0 ? '#3b82f6' : '#ef4444'};"
						>
							{team.name}
						</h1>
						<div class="mt-1 flex items-center gap-3 {i === 1 ? 'flex-row-reverse' : 'flex-row'}">
							<div
								class="h-2 flex-1 rounded-full bg-linear-to-r {i === 0
									? 'from-blue-500 to-transparent'
									: 'from-transparent to-red-500'}"
							></div>
							<div
								class="flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-md"
							>
								<span class="text-xl text-yellow-400">★</span>
								<span class="text-xl font-bold text-white tabular-nums"
									>{crewState.getTotalLives(i as 0 | 1)}</span
								>
							</div>
						</div>
					</div>
				</div>

				<div class="flex w-full flex-col gap-3">
					{#each team.players as player (player.id)}
						<div
							class="relative overflow-hidden rounded-r-xl border-l-4 p-4 transition-all duration-500"
							class:bg-white={player.active}
							class:text-black={player.active}
							class:bg-black={!player.active}
							class:bg-opacity-60={!player.active}
							class:text-white={!player.active}
							class:opacity-40={player.lives === 0}
							class:border-transparent={!player.active}
							class:border-yellow-400={player.active}
							class:scale-105={player.active}
							class:shadow-[0_0_30px_rgba(250,204,21,0.4)]={player.active}
						>
							<div
								class="flex items-center justify-between gap-4 {i === 1
									? 'flex-row-reverse'
									: 'flex-row'}"
							>
								<span class="max-w-[70%] truncate text-3xl font-bold tracking-wide uppercase"
									>{player.name}</span
								>
								<div class="flex gap-1">
									{#each Array(player.lives) as _, index (index)}
										<div
											class="h-6 w-6 rounded-full border-2 shadow-sm"
											class:bg-red-500={player.active}
											class:border-black={player.active}
											class:bg-white={!player.active}
											class:border-transparent={!player.active}
										></div>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	:global(html),
	:global(body) {
		background-color: transparent !important;
		overflow: hidden;
	}
</style>
