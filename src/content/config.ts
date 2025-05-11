// @ts-ignore
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
//import { treatment } from '@cms/blocks'; // We'll define inline for clarity

const treatments = defineCollection({
  // Type-check frontmatter using a schema
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/treatments" }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    excerpt: z.string(),
    draft: z.boolean(),
    seo: z.object({
      discriminant: z.boolean(),
    }),
    blocks: z.array(
      z.object({
        discriminant: z.string(),
        value: z.object({
          name: z.string(),
          description: z.string(),
          duration: z.number(),
          cost: z.number(),
          url: z.string().optional(),
          disclaimer: z.string().optional(),
        }),
      })
    ),
    image: z.string(),
  }),
});

const seo = defineCollection({
  loader: file("./src/settings/seo.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    canonical: z.string(),
    opengraph: z.object({
      ogTitle: z.string(),
      ogDescription: z.string(),
      ogImage: z.string(),
    }),
    twitter: z.object({
      twitterTitle: z.string(),
      twitterDescription: z.string(),
      twitterImage: z.string(),
      twitterImageAlt: z.string(),
    }),
  }),
});

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

const about = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});


const pages = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

const home = defineCollection({
  type: "data",
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

export const collections = { posts, treatments, pages, home, about };
