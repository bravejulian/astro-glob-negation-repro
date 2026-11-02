import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: ["**/*.md", "!_docs"],
  }),
});

export const collections = { docs };
