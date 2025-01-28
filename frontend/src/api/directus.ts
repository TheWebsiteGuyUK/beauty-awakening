import { createDirectus, rest, } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
}

type Author = {
  name: string
}

type Page = {
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  slug: string;
  featured_image: string;
}

type BusinessInfo = {
  contact_number: string;
}

type Treatments = {
  name: string;
  description: string;
  duration: string;
  cost: string;
  booking_link: string;
  disclaimer: string;
}

type TreatmentPage = {
  featured_image: string;
  title: string;
  headline: string;
  excerpt: Author;
  content: string;
  published_date: string
  slug: string;
  treatments: Treatments;
}

type TreatmentPages = {
  featured_image: string;
  title: string;
  headline: string;
  excerpt: Author;
  content: string;
  published_date: string
  slug: string;
  treatments: Treatments;
}



type Schema = {
  treatment_pages: TreatmentPages[];
  global: Global;
  pages: Page[];
  treatments: Treatments[];
  business_info: BusinessInfo;
  treatment_page: TreatmentPage;
}

const directus = createDirectus<Schema>('http://localhost:8055').with(rest());

export default directus;