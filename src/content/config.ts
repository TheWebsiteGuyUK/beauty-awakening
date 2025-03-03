// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

const treatments = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

const pages = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});


const home = defineCollection({
  type: 'data'
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, treatments, pages, home };
