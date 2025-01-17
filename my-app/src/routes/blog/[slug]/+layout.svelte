<script lang="ts">
	import type { LayoutData } from './$types';
  import type { Snippet } from 'svelte';

	let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<main>
	<!-- +page.svelte is `@render`ed here -->
	{@render children()}
</main>

<aside>
	<h2>More posts</h2>
	<ul>
		{#each data.posts as post}
			<li>
				<a href="/blog/{post.slug}">
					{post.title}
				</a>
			</li>
		{/each}
	</ul>
</aside>
