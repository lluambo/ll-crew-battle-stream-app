<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-6 font-sans"
>
	{#if p1 && p2}
		<div class="relative flex w-full max-w-4xl items-end justify-center">
			<div class="group relative mr-1 h-24 w-full max-w-md">
				<div
					class="clip-jagged-left absolute inset-0 z-10 flex skew-x-12 transform flex-col items-end justify-center border-b-4 border-l-4 border-black bg-red-900/90 pr-10 shadow-[5px_5px_0_rgba(0,0,0,1)]"
				>
					<div
						class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-40 mix-blend-multiply"
					></div>

					<div
						class="mb-1 -skew-x-12 transform border border-red-500 bg-black px-2 py-0.5 text-[10px] font-black tracking-[0.2em] text-white uppercase"
					>
						{crewState.teams[0].name}
					</div>

					<h1
						class="max-w-[280px] -skew-x-12 transform truncate text-4xl leading-none font-black tracking-tighter text-white uppercase italic drop-shadow-md"
					>
						{p1.name}
					</h1>
				</div>

				<div class="absolute -top-3 left-6 z-20 flex skew-x-12 transform gap-1">
					{#each Array(p1.lives) as _}
						<div
							class="flex h-6 w-6 items-center justify-center border-2 border-black bg-yellow-500 shadow-sm"
						>
							<div class="h-2 w-2 rounded-full bg-black"></div>
						</div>
					{/each}
				</div>
			</div>

			<div class="z-30 mx-[-30px] mb-8 flex flex-col items-center justify-center">
				<div
					class="flex h-20 w-20 rotate-45 items-center justify-center border-4 border-white bg-black shadow-[0_0_20px_rgba(185,28,28,0.6)]"
				>
					<span class="-rotate-45 text-4xl font-black text-white italic">VS</span>
				</div>
			</div>

			<div class="group relative ml-1 h-24 w-full max-w-md">
				<div
					class="clip-jagged-right absolute inset-0 z-10 flex -skew-x-12 transform flex-col items-start justify-center border-r-4 border-b-4 border-red-600 bg-zinc-800/95 pl-10 shadow-[-5px_5px_0_rgba(0,0,0,1)]"
				>
					<div
						class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-40 mix-blend-multiply"
					></div>

					<div
						class="mb-1 skew-x-12 transform border border-black bg-red-600 px-2 py-0.5 text-[10px] font-black tracking-[0.2em] text-black uppercase"
					>
						{crewState.teams[1].name}
					</div>

					<h1
						class="max-w-[280px] skew-x-12 transform truncate text-4xl leading-none font-black tracking-tighter text-white uppercase italic drop-shadow-md"
					>
						{p2.name}
					</h1>
				</div>

				<div class="absolute -top-3 right-6 z-20 flex -skew-x-12 transform gap-1">
					{#each Array(p2.lives) as _}
						<div
							class="flex h-6 w-6 items-center justify-center border-2 border-black bg-white shadow-sm"
						>
							<div class="h-2 w-2 rounded-full bg-red-600"></div>
						</div>
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

	.clip-jagged-left {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%);
	}
	.clip-jagged-right {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%);
	}
</style>
