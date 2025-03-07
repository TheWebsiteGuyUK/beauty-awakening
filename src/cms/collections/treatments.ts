import { collection, fields } from '@keystatic/core';
import { treatment } from '@cms/blocks';

export const treatments = collection({
  label: "Treatments",
  slugField: "title",
  path: "src/content/treatments/*",
  columns: ['title'],
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    headline: fields.text({ label: "Headline" }),
    excerpt: fields.text({ label: "Excerpt", multiline: true }),
    draft: fields.checkbox({
      label: "Draft",
      description: "Set this page as draft to prevent it from being published",
    }),
    seo: fields.conditional(
      // See fields.conditional docs for details on the conditional field
      fields.checkbox({
        label: "Custom SEO",
        description: "Define custom SEO tags for this page",
        defaultValue: false,
      }),
      {
        // If condition is false, show… no fields!
        false: fields.empty(),

        // Otherwise, show some fields
        true: fields.object({
          title: fields.text({ label: "Title" }),
          description: fields.text({ label: "Description", multiline: true }),
          keywords: fields.text({ label: "Keywords" }),
          mage: fields.image({
            label: "SEO Image",
            directory: "public/images/treatments",
            publicPath: "/images/treatments/",
          }),
        }),
      },
    ),
    blocks: fields.blocks(
      {
        treatmentBlock: treatment,
      },
      {
        label: "Treatments",
        description: "Treatments available for this category",
      },
    ),
    image: fields.image({
      label: "Featured Image",
      description: "Featured image for this category",
      directory: "src/assets/images",
      publicPath: "/src/assets/images",
    }),

  },
});