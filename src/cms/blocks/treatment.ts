import { fields } from "@keystatic/core";

export const treatment = {
  label: "Treatment",
  schema: fields.object({
    name: fields.text({ label: "Treatment Name" }),
    description: fields.text({ label: "Description", multiline: true }),
    duration: fields.number({
      label: "Duration",
      description: "The length of the treatment (mins)",
    }),
    cost: fields.number({
      label: "Cost",
      description: "The cost of the treatment",
    }),
    url: fields.url({
      label: "Booking Link",
      description: "Direct link to book this treatment",
    }),
    disclaimer: fields.text({ label: "Disclaimer", multiline: true }),
  }),
  itemLabel: (props) => props.fields.name.value || "Treatment",
};
