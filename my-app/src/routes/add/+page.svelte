<script lang="ts">
	let a = 3;
	let b = 5;
	let total = 0;

	async function add() {
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json'
			}
		});

		total = await response.json();
	}
</script>

<p>Le calcul est fait via une mini API via un fichier <code>+server.js</code></p>
<p>Réception de json en POST, parse, calcul, renvoi en json via POST</p>
<input type="number" bind:value={a}> +
<input type="number" bind:value={b}> =
{total}

<button onclick={add}>Calculate</button>
