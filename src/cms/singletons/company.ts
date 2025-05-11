import { fields, singleton } from "@keystatic/core";

export const company = singleton({
  label: "Business Details",
  path: "src/settings/company",
  format: { data: "json" },
  schema: {
    address: fields.object(
      {
        street: fields.text({ label: "Street" }),
        city: fields.text({ label: "City" }),
        county: fields.text({ label: "County" }),
        postcode: fields.text({ label: "Postcode" }),
      },
      {
        label: "Address",
        description: "The address of business",
      }
    ),
    hours: fields.object(
      {
        monday: fields.text({ label: "Monday" }),
        tuesday: fields.text({ label: "Tuesday" }),
        wednesday: fields.text({ label: "Wednesday" }),
        thursday: fields.text({ label: "Thursday" }),
        friday: fields.text({ label: "Friday" }),
        saturday: fields.text({ label: "Saturday" }),
        sunday: fields.text({ label: "Sunday" }),
      },
      {
        label: "Hours of Operation",
        description: "The hours of operation of the business",
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
      }
    ),
    company: fields.object(
      {
        registration: fields.text({
          label: "Companies House registration number",
        }),
        vat: fields.text({ label: "VAT number" }),
      },
      {
        label: "Company Registration",
        description:
          "The registration details of the business on Companies House",
      }
    ),
    social: fields.object(
      {
        facebook: fields.text({ label: "Facebook" }),
        // twitter: fields.text({ label: "Twitter" }),
        instagram: fields.text({ label: "Instagram" }),
        // linkedin: fields.text({ label: "LinkedIn" }),
      },
      {
        label: "Social Media",
        description: "The social media links of the business",
      }
    ),
  },
});
