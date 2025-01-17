import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	if (params.slug === 'hello-world') {
		return {
			title: 'Hello world!',
			content: `"Chargé" depuis le js. Welcome to our blog. Lorem ipsum dolor sit amet...`
		};
	}

	error(404, 'Not found');
};
