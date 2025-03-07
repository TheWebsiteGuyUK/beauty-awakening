import { fields, singleton } from "@keystatic/core";
import { imageConfig } from "astro:assets";

export const about = singleton({
  label: "About Page",
  path: "src/content/pages/about",
  format: { data: "json" },
  schema: {
    title: fields.text({ label: "Page Title" }),
    headline: fields.text({ label: "Headline" }),
    excerpt: fields.text({ label: "Excerpt" }),
    content: fields.markdoc.inline({ label: "Content" }),
    image: fields.image({
      label: "Profile Picture",
      description: "Image for the hero/header section",
      directory: "src/assets/images",
      publicPath: "/src/assets/images",
    }),
  },
});
