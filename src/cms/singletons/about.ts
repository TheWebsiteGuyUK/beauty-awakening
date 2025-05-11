import { fields, singleton } from "@keystatic/core";

export const about = singleton({
  label: "About Page",
  path: "src/content/pages/about",
  format: { data: "json" },
  schema: {
    page: fields.object({
      title: fields.text({ label: "Page Title"}),
      description: fields.text({ label: "Page Description" }),
    }),
    content: fields.object({
      headline: fields.text({ label: "Headline" }),
      body: fields.markdoc.inline({ label: "Content" }),
      image: fields.image({
        label: "Profile Picture",
        description: "Image for the hero/header section",
        directory: "src/assets/images",
        publicPath: "/src/assets/images",
      }),
    })
  },
});
