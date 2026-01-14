<script lang="ts">
	import { crewState } from '$lib/state/crew.svelte';

	let p1 = $derived(crewState.teams[0].players.find((p) => p.active));
	let p2 = $derived(crewState.teams[1].players.find((p) => p.active));
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-24">
	{#if p1 && p2}
		<div
			class="relative flex w-full max-w-4xl items-center overflow-hidden rounded-full border border-zinc-700 bg-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md"
		>
			<div
				class="relative flex h-20 flex-1 items-center justify-end bg-gradient-to-r from-zinc-900 to-emerald-950 pr-10"
			>
				<div
					class="absolute top-0 right-0 z-0 h-full w-16 translate-x-8 skew-x-[-20deg] transform border-r border-zinc-700 bg-emerald-900/50"
				></div>

				<div class="z-10 flex flex-col items-end">
					<div class="mb-0 flex items-center gap-2">
						<div class="flex gap-1">
							{#each Array(p1.lives) as _}
								<div
									class="h-3 w-3 rounded-sm bg-emerald-600 shadow-[0_0_5px_rgba(16,185,129,0.3)]"
								></div>
							{/each}
						</div>
						<span class="text-[10px] font-bold tracking-tight text-zinc-500 uppercase"
							>{crewState.teams[0].name}</span
						>
					</div>
					<h2
						class="text-4xl leading-[0.8] font-black tracking-tighter text-gray-200 uppercase italic drop-shadow-md"
					>
						{p1.name}
					</h2>
				</div>
			</div>

			<div
				class="relative z-10 flex h-20 w-24 items-center justify-center border-r border-l border-zinc-800 bg-black"
			>
				<span class="text-3xl font-black tracking-tighter text-zinc-700 italic">VS</span>
			</div>

			<div
				class="relative flex h-20 flex-1 items-center justify-start bg-gradient-to-l from-zinc-900 to-indigo-950 pl-10"
			>
				<div
					class="absolute top-0 left-0 z-0 h-full w-16 -translate-x-8 skew-x-[-20deg] transform border-l border-zinc-700 bg-indigo-900/50"
				></div>

				<div class="z-10 flex flex-col items-start">
					<div class="mb-0 flex flex-row-reverse items-center gap-2">
						<div class="flex gap-1">
							{#each Array(p2.lives) as _}
								<div
									class="h-3 w-3 rounded-sm bg-indigo-600 shadow-[0_0_5px_rgba(99,102,241,0.3)]"
								></div>
							{/each}
						</div>
						<span class="text-[10px] font-bold tracking-tight text-zinc-500 uppercase"
							>{crewState.teams[1].name}</span
						>
					</div>
					<h2
						class="text-4xl leading-[0.8] font-black tracking-tighter text-gray-200 uppercase italic drop-shadow-md"
					>
						{p2.name}
					</h2>
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
