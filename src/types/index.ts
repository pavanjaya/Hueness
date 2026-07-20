export interface CaseStudy {
  _id: string;
  title: string;
  client: string;
  vertical: "design" | "tech" | "marketing" | "products";
  category: string;
  industry: string;
  slug: { current: string };
  coverImage: SanityImage;
  summary: string;
  tags: string[];
  featured: boolean;
  year: number;
}

export interface Product {
  _id: string;
  name: string;
  tagline: string;
  description: string;
  slug: { current: string };
  logo: SanityImage;
  coverImage: SanityImage;
  status: "live" | "beta" | "coming-soon";
  url?: string;
  tags: string[];
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  coverImage: SanityImage;
  excerpt: string;
  tags: string[];
  vertical?: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  photo: SanityImage;
  bio?: string;
  linkedin?: string;
}

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: SanityImage;
}
