<script lang="ts">
  // Dispo depuis le layout de settings
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<h1>Gnégnégné je suis la page de settings NOTIFICATIONS</h1>

Accès aux infos du layout de settings

<code>
  { JSON.stringify(data.sections) }
</code>
