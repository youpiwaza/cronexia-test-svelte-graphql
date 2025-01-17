<script lang="ts">
	import { page } from '$app/state';
	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();
	// * Pas besoin de spécifier le type si l'extension VSCode > Typescript est installée !
	let { data } = $props();
	const dataSvelte = data;
	// console.log('dataSvelte');
	// console.log(dataSvelte);
	// console.log();

	// we can access `data.posts` because it's returned from
	// the parent layout `load` function
	const arrayWithPeople = dataSvelte.arrayWithPeople;
	// console.log('arrayWithPeople');
	// console.log(arrayWithPeople);
	// console.log();

	const resourcesData = dataSvelte.resourcesSvelte;
	console.log('resourcesData');
	console.log(resourcesData);
	// Le premier data c'est celui de svelte, le 2eme celui de graphql
	const resources = dataSvelte.resourcesSvelte.hey.data.resources;
	console.log('resources');
	console.log(resources);
	console.log();

	const resourceLint: Array<{
		matricule: string,
		prenom: string,
		nom: string,
	}> = resources.reduce(
		(res: Array<{
		matricule: string,
		prenom: string,
		nom: string,
	}>, resource) => {
			const resourceClean = {
				matricule: resource.matricule,
				// prenom: resource.matricule,
				// nom: resource.matricule,
				prenom: resource.resourceStrVals[1].value,
				nom: resource.resourceStrVals[0].value,
			}

			res.push(resourceClean);
			return res;
		},
		[],
	);
</script>

<svelte:head>
	<title>Charger des données</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Charger des données</h1>

	<h2>Depuis internet</h2>
	<code>
		{ JSON.stringify(arrayWithPeople) }
	</code>
	<ul>
		{#each arrayWithPeople as people}
		<li>
			{ people.id } / { people.first_name } { people.last_name } / { people.email }
		</li>
		{/each}
	</ul>

	<hr>

	<h2>Depuis GraphQL</h2>
	<code>
		{ JSON.stringify(resources) }
	</code>
	<ul>
		{#each resourceLint as resource}
		<li>
			{ resource.matricule } / { resource.prenom } { resource.nom }
		</li>
		{/each}
	</ul>

	<hr>

	<a href="/">Home</a>
</div>
