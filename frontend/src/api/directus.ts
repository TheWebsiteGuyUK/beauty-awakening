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

type HomePage = {
  title: string;
  headline: string;
  slug: string;
  featured_image: string;
  castle_hill_headline: string;
  castle_hill_bg_img: string;
  castle_hill_media: string;
  castle_hill_content: string;
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
  home_page: HomePage;
}

const directus = createDirectus<Schema>('http://localhost:8055').with(rest());

export default directus;