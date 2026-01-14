<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div class="flex min-h-screen w-full flex-col justify-end overflow-hidden pb-8">
	{#if p1 && p2}
		<div class="relative flex w-full items-end px-12">
			<div class="relative mr-4 flex flex-1 flex-col items-end">
				<div
					class="w-full max-w-2xl skew-x-12 transform border-r-4 border-blue-400 bg-gradient-to-r from-transparent via-blue-900/90 to-blue-800/90 py-2 pr-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
				>
					<div class="-skew-x-12 text-right">
						<div
							class="mb-0.5 flex items-center justify-end gap-2 text-xs font-bold tracking-[0.2em] text-blue-300 uppercase"
						>
							<span class="rounded-sm bg-blue-600 px-1.5 text-[10px] text-white"
								>STOCKS: {crewState.getTotalLives(0)}</span
							>
							{crewState.teams[0].name}
						</div>
						<h1
							class="text-4xl font-black tracking-tighter text-white uppercase italic drop-shadow-md"
						>
							{p1.name}
						</h1>
					</div>
				</div>
				<div class="mt-1 mr-2 flex gap-1">
					{#each Array(p1.lives) as _}
						<div class="h-2 w-8 skew-x-12 bg-blue-400 shadow-[0_0_10px_blue]"></div>
					{/each}
				</div>
			</div>

			<div class="z-10 mb-4">
				<div
					class="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
				>
					VS
				</div>
			</div>

			<div class="relative ml-4 flex flex-1 flex-col items-start">
				<div
					class="w-full max-w-2xl -skew-x-12 transform border-l-4 border-red-500 bg-gradient-to-l from-transparent via-red-900/90 to-red-800/90 py-2 pl-6 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
				>
					<div class="skew-x-12 text-left">
						<div
							class="mb-0.5 flex items-center justify-start gap-2 text-xs font-bold tracking-[0.2em] text-red-300 uppercase"
						>
							{crewState.teams[1].name}
							<span class="rounded-sm bg-red-600 px-1.5 text-[10px] text-white"
								>STOCKS: {crewState.getTotalLives(1)}</span
							>
						</div>
						<h1
							class="text-4xl font-black tracking-tighter text-white uppercase italic drop-shadow-md"
						>
							{p2.name}
						</h1>
					</div>
				</div>
				<div class="mt-1 ml-2 flex gap-1">
					{#each Array(p2.lives) as _}
						<div class="h-2 w-8 -skew-x-12 bg-red-500 shadow-[0_0_10px_red]"></div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(html),
	:global(body) {
		background-color: transparent !important;
		overflow: hidden;
	}
</style>
