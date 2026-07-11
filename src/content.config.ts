// ---------------------------------------------------------------------------
//  CONTENT COLLECTIONS
//  Defines the shape of the markdown "notes" so Astro can type-check the
//  frontmatter of each file in src/content/notes/. To add a note, just drop a
//  new .md file in that folder with the fields below.
// ---------------------------------------------------------------------------
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    // Use YYYY-MM-DD in the frontmatter, e.g. date: 2024-09-28
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Set draft: true to keep a note out of the published site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
