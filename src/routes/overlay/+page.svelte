<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div class="flex min-h-screen w-full flex-col justify-end overflow-hidden pb-16">
	{#if p1 && p2}
		<div class="relative filter mx-auto flex h-32 w-full max-w-6xl items-stretch drop-shadow-2xl">
			<div class="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
				<div
					class="flex h-20 w-20 items-center justify-center rounded-full border-4 border-black bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
				>
					<span class="text-3xl font-black text-black italic">VS</span>
				</div>
			</div>

			<div
				class="relative -ml-8 flex flex-1 -skew-x-12 items-center justify-end overflow-hidden border-r-4 border-white bg-linear-to-r from-blue-900 to-blue-700 pr-16"
			>
				<div class="absolute top-2 right-16 flex skew-x-12 items-center gap-2">
					<div
						class="rounded border border-blue-500/30 bg-black/40 px-3 py-0.5 text-xs font-bold tracking-widest text-blue-200 uppercase"
					>
						{crewState.teams[0].name}
					</div>
					<div
						class="rounded border border-white/20 bg-blue-600 px-2 py-0.5 text-xs font-black text-white shadow-sm"
					>
						STOCKS: {crewState.getTotalLives(0)}
					</div>
				</div>

				<div class="z-10 mr-4 skew-x-12 text-right">
					<h2 class="text-5xl leading-none font-black tracking-tighter text-white uppercase italic">
						{p1.name}
					</h2>
					<div class="mt-2 flex justify-end gap-1.5">
						{#each Array(p1.lives) as _, i (i)}
							<div class="h-5 w-5 rounded-full border-2 border-black bg-yellow-400 shadow-sm"></div>
						{/each}
					</div>
				</div>
				{#if crewState.teams[0].logo}
					<img
						src={crewState.teams[0].logo}
						alt=""
						class="absolute -bottom-8 -left-4 h-48 w-48 skew-x-12 object-contain opacity-20 mix-blend-overlay grayscale"
					/>
				{/if}
			</div>

			<div
				class="relative -mr-8 flex flex-1 -skew-x-12 items-center justify-start overflow-hidden border-l-4 border-white bg-linear-to-l from-red-900 to-red-700 pl-16"
			>
				<div class="absolute top-2 left-16 flex skew-x-12 flex-row-reverse items-center gap-2">
					<div
						class="rounded border border-red-500/30 bg-black/40 px-3 py-0.5 text-xs font-bold tracking-widest text-red-200 uppercase"
					>
						{crewState.teams[1].name}
					</div>
					<div
						class="rounded border border-white/20 bg-red-600 px-2 py-0.5 text-xs font-black text-white shadow-sm"
					>
						STOCKS: {crewState.getTotalLives(1)}
					</div>
				</div>

				<div class="z-10 ml-4 skew-x-12 text-left">
					<h2 class="text-5xl leading-none font-black tracking-tighter text-white uppercase italic">
						{p2.name}
					</h2>
					<div class="mt-2 flex justify-start gap-1.5">
						{#each Array(p2.lives) as _, i (i)}
							<div class="h-5 w-5 rounded-full border-2 border-black bg-yellow-400 shadow-sm"></div>
						{/each}
					</div>
				</div>
				{#if crewState.teams[1].logo}
					<img
						src={crewState.teams[1].logo}
						alt=""
						class="absolute -right-4 -bottom-8 h-48 w-48 skew-x-12 object-contain opacity-20 mix-blend-overlay grayscale"
					/>
				{/if}
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
