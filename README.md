# Astro glob loader negation repro

1. `npm install`
2. `npx astro dev`
3. Open the page. It lists `["blog/post"]`.
4. Edit `src/content/_docs/x.md` and save.
5. Reload the page. It now lists `["_docs/x", "blog/post"]`.

The same edit with `!_docs/**` does not add the file.
