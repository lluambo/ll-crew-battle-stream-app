<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-12">
	{#if p1 && p2}
		<div
			class="flex w-full max-w-4xl items-center overflow-hidden rounded-full border-4 border-white bg-black shadow-[0_10px_0_rgba(0,0,0,0.5)]"
		>
			<div class="group relative flex h-20 flex-1 items-center justify-end bg-lime-400 pr-8">
				<div
					class="absolute top-0 right-0 z-0 h-full w-12 translate-x-6 skew-x-[-20deg] transform bg-lime-400"
				></div>

				<div class="z-10 flex flex-col items-end">
					<div class="mb-1 flex items-center gap-2">
						<div class="flex gap-0.5">
							{#each Array(p1.lives) as _}
								<div class="h-3 w-3 rounded-full bg-black"></div>
							{/each}
						</div>
						<span class="text-xs font-bold tracking-tighter text-black/70 uppercase"
							>{crewState.teams[0].name}</span
						>
					</div>
					<h2 class="text-4xl leading-none font-black text-black uppercase italic">{p1.name}</h2>
				</div>
			</div>

			<div
				class="relative z-20 flex h-20 w-16 -skew-x-[20deg] transform items-center justify-center border-r-4 border-l-4 border-white bg-black"
			>
				<span class="skew-x-[20deg] transform text-2xl font-black text-white italic">VS</span>
			</div>

			<div class="relative flex h-20 flex-1 items-center justify-start bg-purple-500 pl-8">
				<div
					class="absolute top-0 left-0 z-0 h-full w-12 -translate-x-6 skew-x-[-20deg] transform bg-purple-500"
				></div>

				<div class="z-10 flex flex-col items-start">
					<div class="mb-1 flex flex-row-reverse items-center gap-2">
						<div class="flex gap-0.5">
							{#each Array(p2.lives) as _}
								<div class="h-3 w-3 rounded-full bg-white"></div>
							{/each}
						</div>
						<span class="text-xs font-bold tracking-tighter text-white/80 uppercase"
							>{crewState.teams[1].name}</span
						>
					</div>
					<h2 class="text-4xl leading-none font-black text-white uppercase italic">{p2.name}</h2>
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
