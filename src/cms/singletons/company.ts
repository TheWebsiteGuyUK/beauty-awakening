import { fields, singleton } from "@keystatic/core";

export const company = singleton({
  label: "Company Details",
  path: "src/content/settings/company",
  schema: {
    address: fields.object(
      {
        street: fields.text({ label: "Street" }),
        city: fields.text({ label: "City" }),
        county: fields.text({ label: "State" }),
        postcode: fields.text({ label: "Postcode" }),
      },
      {
        label: "Address",
        description: "The address of business",
      }
    ),
    contact: fields.object(
      {
        phone: fields.text({ label: "Phone number" }),
        mobile: fields.text({ label: "Mobile number" }),
        email: fields.text({ label: "Email" }),
      },
      {
        label: "Contact details",
        description: "The contact details of the business",
      },
    ),
    company: fields.object(
      {
        registration: fields.text({ label: "Companies House registration number" }),
        vat: fields.text({ label: "VAT number" }),
      },
      {
        label: "Company Registration",
        description: "The registration details of the business on Companies House",
      },
    ),
  },
});
