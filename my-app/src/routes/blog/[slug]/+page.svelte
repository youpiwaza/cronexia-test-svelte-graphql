<script lang="ts">
	import { page } from '$app/state';
	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();
	// * Pas besoin de spécifier le type si l'extension VSCode > Typescript est installée !
	let { data } = $props();

	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
	let index = $derived(data.posts.findIndex(post => post.slug === page.params.slug));
	let next = $derived(data.posts[index + 1]);
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
<div>hellow</div>

{#if next}
	<p>Next post: <a href="/blog/{next.slug}">{next.title}</a></p>
{/if}

<!-- <div>Load: { load }</div> -->
<a href="/">Home</a>