<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-2">
	{#if p1 && p2}
		<div class="relative flex w-[60%] items-end justify-center">
			<div
				class="clip-left relative flex-1 rounded-tl-xl border-t-2 border-l-2 border-cyan-400 bg-gradient-to-r from-slate-900/90 to-slate-800/90 p-3 shadow-lg"
			>
				<div class="flex flex-col items-end">
					<span class="mb-1 text-xs font-bold tracking-widest text-cyan-200 uppercase"
						>{crewState.teams[0].name} ({crewState.getTotalLives(0)})</span
					>
					<span
						class="truncate text-3xl leading-none font-black text-white uppercase drop-shadow-md"
						>{p1.name}</span
					>
					<div class="mt-2 flex gap-1">
						{#each Array(p1.lives) as _}
							<span class="text-sm text-cyan-400">◆</span>
						{/each}
					</div>
				</div>
			</div>

			<div
				class="z-10 mx-[-20px] mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-900 bg-white shadow-[0_0_20px_cyan]"
			>
				<span class="text-xl font-black text-slate-900 italic">VS</span>
			</div>

			<div
				class="clip-right relative flex-1 rounded-tr-xl border-t-2 border-r-2 border-orange-400 bg-gradient-to-l from-slate-900/90 to-slate-800/90 p-3 shadow-lg"
			>
				<div class="flex flex-col items-start">
					<span class="mb-1 text-xs font-bold tracking-widest text-orange-200 uppercase"
						>({crewState.getTotalLives(1)}) {crewState.teams[1].name}</span
					>
					<span
						class="truncate text-3xl leading-none font-black text-white uppercase drop-shadow-md"
						>{p2.name}</span
					>
					<div class="mt-2 flex gap-1">
						{#each Array(p2.lives) as _}
							<span class="text-sm text-orange-400">◆</span>
						{/each}
					</div>
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
	/* Custom clips to match anime fighter aesthetic */
	.clip-left {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 80%);
	}
	.clip-right {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%);
	}
</style>
