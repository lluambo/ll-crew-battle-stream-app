<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-8 font-sans"
>
	{#if p1 && p2}
		<div class="relative flex w-full max-w-5xl items-end justify-center">
			<div class="relative mr-2 h-24 w-[45%]">
				<div
					class="absolute inset-0 z-10 flex -skew-x-12 transform flex-col items-end justify-center overflow-hidden rounded-lg border-2 border-white bg-pink-600 pr-12 shadow-[5px_5px_0_rgba(0,0,0,1)]"
				>
					<div
						class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grunge-wall.png')] opacity-20 mix-blend-multiply"
					></div>

					<span
						class="mb-1 skew-x-12 transform text-xs font-bold tracking-[0.2em] text-pink-200 uppercase"
						>{crewState.teams[0].name} ({crewState.getTotalLives(0)})</span
					>
					<h1
						class="skew-x-12 transform text-5xl leading-[0.8] font-black text-white uppercase italic drop-shadow-md"
					>
						{p1.name}
					</h1>
				</div>

				<div class="absolute -bottom-3 left-0 z-20 flex gap-2 pl-4">
					{#each Array(p1.lives) as _}
						<div
							class="h-4 w-4 rounded-full border-2 border-black bg-yellow-400 shadow-[2px_2px_0_black]"
						></div>
					{/each}
				</div>
			</div>

			<div class="z-30 mx-[-40px] mb-6 rotate-[-5deg]">
				<span
					class="stroke-black text-7xl font-black text-yellow-400 drop-shadow-[5px_5px_0_rgba(0,0,0,1)]"
					style="-webkit-text-stroke: 3px black;"
				>
					VS
				</span>
			</div>

			<div class="relative ml-2 h-24 w-[45%]">
				<div
					class="absolute inset-0 z-10 flex skew-x-12 transform flex-col items-start justify-center overflow-hidden rounded-lg border-2 border-white bg-blue-600 pl-12 shadow-[-5px_5px_0_rgba(0,0,0,1)]"
				>
					<div
						class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grunge-wall.png')] opacity-20 mix-blend-multiply"
					></div>

					<span
						class="mb-1 -skew-x-12 transform text-xs font-bold tracking-[0.2em] text-blue-200 uppercase"
						>({crewState.getTotalLives(1)}) {crewState.teams[1].name}</span
					>
					<h1
						class="-skew-x-12 transform text-5xl leading-[0.8] font-black text-white uppercase italic drop-shadow-md"
					>
						{p2.name}
					</h1>
				</div>

				<div class="absolute right-0 -bottom-3 z-20 flex gap-2 pr-4">
					{#each Array(p2.lives) as _}
						<div
							class="h-4 w-4 rounded-full border-2 border-black bg-yellow-400 shadow-[2px_2px_0_black]"
						></div>
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
