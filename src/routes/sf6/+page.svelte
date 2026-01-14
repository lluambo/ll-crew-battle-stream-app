<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-8 font-sans"
>
	{#if p1 && p2}
		<div class="relative flex w-full max-w-5xl items-end justify-center opacity-95">
			<div class="group relative mr-2 h-24 w-[45%]">
				<div
					class="absolute inset-0 z-10 flex -skew-x-12 transform flex-col items-end justify-center overflow-hidden rounded-sm border-l-4 border-teal-800 bg-zinc-800 pr-12 shadow-2xl"
				>
					<div
						class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"
					></div>
					<div
						class="absolute inset-0 bg-gradient-to-l from-black/90 via-transparent to-transparent"
					></div>

					<span
						class="mb-1 skew-x-12 transform font-mono text-xs font-bold tracking-[0.2em] text-teal-600/70 uppercase"
						>{crewState.teams[0].name} [{crewState.getTotalLives(0)}]</span
					>
					<h1
						class="skew-x-12 transform text-5xl leading-[0.8] font-black tracking-tighter text-gray-300 uppercase italic drop-shadow-lg"
					>
						{p1.name}
					</h1>
				</div>

				<div class="absolute -bottom-2 left-0 z-20 flex gap-1 pl-4">
					{#each Array(p1.lives) as _}
						<div class="h-1.5 w-6 skew-x-12 bg-teal-700 opacity-80 shadow-sm"></div>
					{/each}
				</div>
			</div>

			<div class="z-30 mx-[-40px] mb-6 rotate-[-5deg] opacity-60 mix-blend-overlay">
				<span class="text-6xl font-black tracking-widest text-gray-500 drop-shadow-sm"> VS </span>
			</div>

			<div class="group relative ml-2 h-24 w-[45%]">
				<div
					class="absolute inset-0 z-10 flex skew-x-12 transform flex-col items-start justify-center overflow-hidden rounded-sm border-r-4 border-orange-900 bg-zinc-800 pl-12 shadow-2xl"
				>
					<div
						class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"
					></div>
					<div
						class="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent"
					></div>

					<span
						class="mb-1 -skew-x-12 transform font-mono text-xs font-bold tracking-[0.2em] text-orange-600/70 uppercase"
						>[{crewState.getTotalLives(1)}] {crewState.teams[1].name}</span
					>
					<h1
						class="-skew-x-12 transform text-5xl leading-[0.8] font-black tracking-tighter text-gray-300 uppercase italic drop-shadow-lg"
					>
						{p2.name}
					</h1>
				</div>

				<div class="absolute right-0 -bottom-2 z-20 flex gap-1 pr-4">
					{#each Array(p2.lives) as _}
						<div class="h-1.5 w-6 -skew-x-12 bg-orange-800 opacity-80 shadow-sm"></div>
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
