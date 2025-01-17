// import * as db from '$lib/server/database';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	// return {
	// 	posts: await db.getPostSummaries()
	// };
  return {
    posts: [
      // post: {
      {
        title: `Title for "loaded" goes here`,
        content: `Content for "loaded" goes here`,
        slug: `slug for "loaded" goes here`,
      },
      
      {
        title: `Title for "un autre post" goes here`,
        content: `Content for "un autre post" goes here`,
        slug: `slug for "un autre post" goes here`,
      }
    ]
	};
};
