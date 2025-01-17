<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.status}: {page.error.message}</h1>
<div>Une page d'erreur personnalisay 🐬</div>
<a href="/">Home</a>
