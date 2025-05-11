import { config } from "@keystatic/core";
import { treatments } from "@cms/collections";
import { home, branding, seo, company, about } from "@cms/singletons";

export default config({
  storage: {
    kind: "local",
  },
  // cloud: {
  //   project: "the-website-guy-uk/beauty-awakening",
  // },
  ui: {
    brand: { name: "Beauty Awakening CMS" },
    navigation: {
      Content: ["home", "treatments", "about"],
      Settings: ["branding", "seo", "---", "company"],
    },
  },
  collections: {
    treatments,
  },
  singletons: {
    home,
    branding,
    seo,
    company,
    about,
  },
});
