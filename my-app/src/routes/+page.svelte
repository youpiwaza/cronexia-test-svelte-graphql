<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<h1>Hello and welcome to my site!</h1>
	<a href="/about">About my site</a>
	<a href="/blog/hello-world">/blog/hello-world</a>
	<a href="/blog/jExistePas">/blog/jExistePas</a>
	<a href="/4sans4">/4sans4</a>
	<a href="/settings">Settings</a>
	<a href="/api/random-number">api/random-number</a>
	<a href="/api/random-number?min=0&max=100">api/random-number?min=0&max=100</a>
	<a href="/add">add</a>
	<a href="//api/add">/api/add no no</a>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
