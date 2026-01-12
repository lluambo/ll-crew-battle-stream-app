<script lang="ts">
	// State to track which button currently says "Copied!"
	let copiedId = $state<string | null>(null);

	const links = [
		{
			id: 'admin',
			name: 'Admin Panel',
			path: '/admin',
			desc: 'Control the game state, scores, and teams.'
		},
		{
			id: 'roster',
			name: 'Roster View (OBS)',
			path: '/roster',
			desc: 'Add as Browser Source. Shows all players.'
		},
		{
			id: 'overlay',
			name: 'Versus Overlay (OBS)',
			path: '/overlay',
			desc: 'Add as Browser Source. Shows current fight.'
		}
	];

	function copyLink(id: string, path: string) {
		// window.location.origin gives us "http://localhost:5173" (or your IP) automatically
		const fullUrl = `${window.location.origin}${path}`;

		navigator.clipboard.writeText(fullUrl).then(() => {
			copiedId = id;
			// Reset the button text after 2 seconds
			setTimeout(() => (copiedId = null), 2000);
		});
	}
</script>

<div class="hero min-h-screen bg-base-200 p-4 font-sans">
	<div class="hero-content w-full max-w-5xl flex-col gap-8 lg:flex-row-reverse lg:gap-16">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-black tracking-tighter">Crew Battle App</h1>
			<p class="py-6 text-lg opacity-80">
				A local-first scoreboard manager for streamers. <br />
				Control the match in one tab, and add the view links directly into OBS.
			</p>
			<div class="flex justify-center gap-2 lg:justify-start">
				<a href="/admin" class="btn btn-wide shadow-lg btn-primary">Start Admin Panel</a>
			</div>
		</div>

		<div class="card w-full max-w-lg shrink-0 bg-base-100 shadow-2xl">
			<div class="card-body">
				<h2 class="mb-4 card-title border-b border-base-200 pb-2">OBS Links</h2>

				<div class="flex flex-col gap-4">
					{#each links as link (link.id)}
						<div
							class="flex flex-col gap-3 rounded-xl border border-base-200 bg-base-200/50 p-4 transition-all hover:border-base-300 hover:bg-base-200"
						>
							<div>
								<div class="flex items-center gap-2">
									<h3 class="text-lg font-bold">{link.name}</h3>
									{#if link.id !== 'admin'}
										<div class="badge badge-outline badge-sm opacity-50">1920x1080</div>
									{/if}
								</div>
								<p class="mt-1 text-xs opacity-60">{link.desc}</p>
							</div>

							<div class="join w-full shadow-sm">
								<a href={link.path} target="_blank" class="btn join-item btn-sm btn-neutral"
									>Open ↗</a
								>

								<div
									class="join-item flex flex-1 items-center overflow-hidden bg-base-100 px-3 font-mono text-xs whitespace-nowrap opacity-70 select-all"
								>
									{@html link.path}
								</div>

								<button
									class="btn join-item min-w-20 btn-sm"
									class:btn-success={copiedId === link.id}
									class:text-white={copiedId === link.id}
									onclick={() => copyLink(link.id, link.path)}
								>
									{#if copiedId === link.id}
										Copied!
									{:else}
										Copy
									{/if}
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
