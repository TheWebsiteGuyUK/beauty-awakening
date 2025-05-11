// @ts-ignore
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
//import { treatment } from '@cms/blocks'; // We'll define inline for clarity

const treatments = defineCollection({
  // Type-check frontmatter using a schema
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/treatments" }),
  schema: ({ image }) =>
    z.object({
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
        }),
      ),
      image: image(),
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

// const about = defineCollection({
//   loader: file("./src/content/pages/about.json"),
//   schema: ({ image }) =>
//     z
//       .object({
//         page: z
//           .object({
//             title: z.string().optional(),
//             description: z.string().optional(),
//           })
//           .optional(),
//         headline: z.string().optional(),
//         excerpt: z.string().optional(),
//         image: image().optional(),
//         content: z.string().optional(),
//       })
//       .optional(),
// });

// Home Page 
const home = defineCollection({
  loader: file("./src/content/pages/home.json"),
  schema: ({ image }) =>
    z.object({
      page: z.object({
        title: z.string(),
        description: z.string(),
      }).optional(),
      hero: z.object({
        headline: z.string(), 
        intro: z.string().optional(), 
        image: image(),
      }).optional(),
      location: z.object({
        headline: z.string(),
        content: z.string(),
        image: image(),
        resume: z.string().optional(),
      }).optional(),
      cta: z.object({
        headline: z.string(),
        content: z.string(),
        button: z.object({
          label: z.string(),
          link: z.string(),
        }),
        image1: image(),
        image2: image(),
      }).optional(),
    }),
});

export const collections = { posts, treatments, home, about };
