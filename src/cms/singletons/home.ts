import { fields, singleton } from "@keystatic/core";

export const home = singleton({
  label: "Home Page",
  path: "src/content/pages/home",
  format: { data: "json" },
  schema: {
    title: fields.text({ label: "Page Title" }),
    hero: fields.object(
      {
        headline: fields.markdoc.inline({ label: "Header" }),
        intro: fields.markdoc.inline({ label: "Intro" }),
        image: fields.image({
          label: "Hero Image",
          description: "Image for the hero/header section",
          directory: "src/assets/images",
          publicPath: "/src/assets/images",
        }),
      },
      {
        label: "Hero/Intro Section",
        description: "The main headline section of home page",
      }
    ),
    location: fields.object(
      {
        headline: fields.text({ label: "Headline" }),
        content: fields.markdoc.inline({ label: "Content" }),
        image: fields.image({
          label: "Location Image",
          description: "Image for the background",
          directory: "src/assets/images",
          publicPath: "/src/assets/images",
        }),
        video: fields.file({
          label: "Location video",
          description: "A video clip of location",
          // This will output the files in the "public" directory
          directory: "public/media",
          publicPath: "/media/",
        }),
      },
      {
        label: "Location Section",
        description: "Brief details about location",
      }
    ),
    cta: fields.object(
      {
        headline: fields.text({ label: "Headline" }),
        content: fields.markdoc.inline({ label: "Content" }),
        button: fields.object({
          label: fields.text({ label: "Button Label" }),
          link: fields.url({ label: "Button Link" }),
        }),
      },
      {
        label: "Call to Action Section",
        description: "A call to action section",
      }
    ),
  },
});
