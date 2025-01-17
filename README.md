# cronexia-test-graphql

On part direct sur [SvelteKit](https://svelte.dev/docs/kit/creating-a-project)

```bash
npx sv create my-app

cd my-app
# npm install
# npm run dev
bun i

# bun run dev
bun run dev --open
```

---

## Loading datas

[yay](https://svelte.dev/docs/kit/load)

MAnque du gras, commencer par

---

## Routing

[hoy](https://svelte.dev/docs/kit/routing)

Fichiers dans /routes avec un + devant = nouvelle route. oké simple enough haha.

- ✅ +page
- ✅ +error
- ✅ +layout
  - <Header /> ?
    - ah yeah c'est en .svelte mais sans + devant, donc un composant alakon
- ✅ +server
  - The first argument to Response can be a **ReadableStream**, making it possible to stream **large amounts of data** or create server-sent events 
  - `error()` a pas l'air de proc, le texte n'est pas affiché, et on est renvoyé vers la page d'erreur statique par defaut...
  - ✅ Receiving data
- ✅ Fallback method handler
- ✅ Content negotiation
- $types
  - ⚡️⚡️⚡️ // * Pas besoin de spécifier le type si les extensions VSCode > Typescript & Svelte sont installées !