<script lang="ts">
	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();
	// * Pas besoin de spécifier le type si l'extension VSCode > Typescript est installée !
	let { data } = $props();
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
<div>hellow</div>
<!-- <div>Load: { load }</div> -->
<a href="/">Home</a>