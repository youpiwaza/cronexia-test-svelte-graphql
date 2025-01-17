<script lang="ts">
	import '../../app.css';

	// let { children } = $props();

	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: LayoutData, children: Snippet } = $props();
	console.log('data');
	console.log(data);
	console.log();
</script>

<div class="app">
	<main>
		<h2>♻️ Je suis dans le layout UNIQUEMENT POUR SETTINGS ♻️</h2>
		<!-- <nav>
			<a href="/settings">Settings</a>
			<a href="/settings/notifications">Notifications</a>
			<a href="/settings/profile">Profile</a>
		</nav> -->

		<div class="submenu">
			{#each data.sections as section}
				<a href="/settings/{section.slug}">{section.title}</a>&nbsp;
			{/each}
			<a href="/settings">Retour à Settings</a>
		</div>

		{@render children()}

		<br>
		<a href="/">Home</a>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
