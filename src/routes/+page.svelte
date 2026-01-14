<script lang="ts">
	import { resolve } from '$app/paths';
	let copiedId = $state<string | null>(null);

	// Core application links
	const coreLinks = [
		{
			id: 'admin',
			name: 'Admin Panel',
			path: '/admin',
			desc: 'Control match state, scores, and teams.',
			color: 'btn-primary'
		},
		{
			id: 'roster',
			name: 'Roster View',
			path: '/roster',
			desc: 'Full team lists & stocks. Add as Browser Source.',
			color: 'btn-neutral'
		}
	];

	// The new game-specific overlays
	const overlayLinks = [
		{ id: 'gen', name: 'Generic VS', path: '/overlay', badge: 'Default' },
		{ id: 't8', name: 'Tekken 8', path: '/overlay/tekken', badge: 'Cyber' },
		{ id: 'sf6', name: 'Street Fighter 6', path: '/overlay/sf6', badge: 'Graffiti' },
		{ id: 'gg', name: 'Guilty Gear', path: '/overlay/ggst', badge: 'Metal' },
		{ id: 'bb', name: 'BlazBlue', path: '/overlay/blazblue', badge: 'Anime' },
		{ id: '2x', name: '2XKO', path: '/overlay/2xko', badge: 'Modern' }
	];

	function copyLink(id: string, path: string) {
		const fullUrl = `${window.location.origin}${path}`;
		navigator.clipboard.writeText(fullUrl).then(() => {
			copiedId = id;
			setTimeout(() => (copiedId = null), 2000);
		});
	}
</script>

<div class="min-h-screen bg-base-200 p-8 font-sans">
	<div class="mx-auto max-w-4xl space-y-8">
		<div class="space-y-2 text-center">
			<h1 class="text-5xl font-black tracking-tighter">Crew Battle Hub</h1>
			<p class="mx-auto max-w-lg opacity-60">
				Manage your stream locally. Open the Admin panel to control the game, then add the links
				below to OBS.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each coreLinks as link (link.id)}
				<div class="card border-l-4 border-primary bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{link.name}</h2>
						<p class="mb-4 text-sm opacity-70">{link.desc}</p>
						<div class="join w-full">
							<a href={resolve(link.path)} target="_blank" class="btn join-item {link.color}"
								>Open</a
							>
							<button class="btn join-item flex-1" onclick={() => copyLink(link.id, link.path)}>
								{copiedId === link.id ? 'Copied!' : 'Copy Link'}
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="divider">Overlays</div>

		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="mb-4 card-title">Game Specific Overlays (1920x1080)</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each overlayLinks as link (link.id)}
						<div
							class="flex flex-col gap-2 rounded-xl border border-transparent bg-base-200 p-3 transition-all hover:border-base-300"
						>
							<div class="flex items-center justify-between">
								<span class="font-bold">{link.name}</span>
								<span class="badge badge-outline badge-sm opacity-50">{link.badge}</span>
							</div>

							<div class="join grid grid-cols-2 shadow-sm">
								<a href={resolve(link.path)} target="_blank" class="btn join-item btn-xs">View ↗</a>
								<button
									class="btn join-item btn-xs"
									class:btn-success={copiedId === link.id}
									class:text-white={copiedId === link.id}
									onclick={() => copyLink(link.id, link.path)}
								>
									{copiedId === link.id ? '✓' : 'Copy'}
								</button>
							</div>

							<div class="truncate px-1 font-mono text-[10px] opacity-30 select-all">
								{link.path}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
