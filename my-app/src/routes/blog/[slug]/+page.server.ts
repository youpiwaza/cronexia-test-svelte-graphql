import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';

// * Pas besoin de spécifier le type si l'extension VSCode > Typescript est installée !
// export const load: PageServerLoad = async ({ params }) => {
export const load = async ({ params }) => {
	const post = await getPostFromDatabase(params.slug);

	if (post) {
		return post;
	}

	error(404, 'Not found');
};

function getPostFromDatabase(slug: string) {
	return { slug };
}
