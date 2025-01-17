import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const arrayWithPeople = await getRandomJsonFromTheInternet(fetch);

	// const randomAPIUri = 'https://cataas.com/cat';
	// const cat = await getRandomImageFromTheInternet(randomAPIUri);

	const resources = await (getFromGQL(fetch));

	if (arrayWithPeople) {
		return {
			arrayWithPeople: arrayWithPeople.inAnObjectWtv,
			resourcesSvelte: resources,
		};
	}

	error(404, 'Not found');
};

async function getRandomJsonFromTheInternet(fetch): Promise<{
	inAnObjectWtv: Array<{
		id: number,
		first_name: string,
		last_name: string,
		email: string,
		gender: string,
		ip_address: string,
	}>
}> {
	// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	const url = "https://stockage.masamune.fr/cronexia/MOCK_DATA.json";

	const res = await fetch(url);
	const arrayWithPeople = await res.json();

	// console.log('arrayWithPeople');
	// console.log(arrayWithPeople);
	// console.log();

	return { inAnObjectWtv: arrayWithPeople };
};

async function getFromGQL(fetch): Promise<{
	hey: {
		data: {
			resources: Array<{
				matricule: string,
				resourceStrVals: Array<{
					resourceField: {
						name: string,
					},
					value: string,
				}>
			}>
		}
	}
}> {
	const url = "http://localhost:3000/graphql?query={%20resources(take:%205)%20{%20matricule%20resourceStrVals%20{%20resourceField%20{%20name%20}%20value%20}%20}%20}";

	const res = await fetch(url);
	const hey = await res.json();

	return { hey };
};