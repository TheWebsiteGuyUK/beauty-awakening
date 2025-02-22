import { fields, singleton } from "@keystatic/core";

export const seo = singleton({
  label: "SEO",
  path: "src/content/settings/seo",
  schema: {
    title: fields.text({ label: "Title" }),
    description: fields.text({ label: "Description", multiline: true }),
    keywords: fields.text({ label: "Keywords" }),
    opengraph: fields.object(
      {
        ogTitle: fields.text({ label: "OG Title" }),
        ogDescription: fields.text({
          label: "OG Description",
          multiline: true,
        }),
        ogImage: fields.image({
          label: "OG Image",
          description: "Image for Open Graph. Recommended size: 1500x1500px (5MB max).",
          directory: "src/assets/images",
          publicPath: "/src/assets/images/",
        }),
      },
      {
        label: "Open Graph",
        description: "Open Graph meta tags for social media",
      }
    ),
    twitter: fields.object(
      {
        twitterTitle: fields.text({ label: "Twitter Title" }),
        twitterDescription: fields.text({
          label: "Twitter Description",
          multiline: true,
        }),
        twitterImage: fields.image({
          label: "Twitter Image",
          description: "Image for Twitter Card. Recommended size: 4096x4096px (5MB max).",
          directory: "src/assets/images",
          publicPath: "/src/assets/images/",
        }),
        twitterImageAlt: fields.text({ label: "Twitter Image Alt", description: "Alt text for Twitter Image (max 420 characters)." }),
      },
      {
        label: "Twitter Card",
        description: "Twitter meta tags for social media",
      }
    ),
  },
});
