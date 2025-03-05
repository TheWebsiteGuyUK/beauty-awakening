// @ts-ignore
import { defineCollection, z } from 'astro:content';
import { glob, file } from "astro/loaders";
import { treatment } from '@cms/blocks';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

const treatment = defineCollection({
  // Type-check frontmatter using a schema
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    duration: z.number(),
    cost: z.number(),
    url: z.string(),
    disclaimer: z.string(),
  }),
});


const treatments = defineCollection({
  // Type-check frontmatter using a schema
  type: 'data',
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    excerpt: z.string(),
    image: z.string(),
    treatments: z.array(treatment), // Reference the treatment schema
  }),
});

const pages = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});


const home = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      headline: z.string(), // headline as a string
      intro: z.string().optional(), // make this optional if it's empty in the YAML
      image: z.string(),
    }),
    location: z.object({
      headline: z.string(),
      content: z.string(),
      image: z.string(),
      resume: z.string().optional(),
    }),
    cta: z.object({
      headline: z.string(),
      content: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

export const collections = { posts, treatments, treatment, pages, home };
