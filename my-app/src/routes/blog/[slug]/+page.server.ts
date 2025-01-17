import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';

// ! ⏳ Attendre la section suivante Loading data

// * Pas besoin de spécifier le type si l'extension VSCode > Typescript est installée !
// export const load: PageServerLoad = async ({ params }) => {
export const load = async ({ params }) => {
	const post = await getPostFromDatabase(params.slug);

	// const post = await getRandomJsonFromTheInternet();

	// const randomAPIUri = 'https://cataas.com/cat';
	// const post = await getRandomImageFromTheInternet(randomAPIUri);

	if (post) {
		return post;
	}

	error(404, 'Not found');
};

function getPostFromDatabase(slug: string) {
	return { slug };
}

// async function getRandomJsonFromTheInternet(): Promise<{}> {
// 	// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// 	const url = "https://example.org/products.json";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);

// 		return json;
//   } catch (error) {
//     console.error(error.message);

// 		return error.message;
//   }
// };