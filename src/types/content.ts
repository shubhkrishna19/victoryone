export interface CtaLink {
  label: string;
  href: string;
  ctaId: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface DownloadAsset {
  label: string;
  href: string;
  eventId?: string;
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
  brandColor: string;
  website: string;
  focusAreas: string[];
  featuredProjects: string[];
  stats: Stat[];
  categories: string[];
  credibility: string[];
  cta: CtaLink;
}

export type ProjectStatus = "ongoing" | "completed";

export interface Project {
  id: string;
  slug: string;
  name: string;
  businessId: string;
  status: ProjectStatus;
  segment: string;
  location: string;
  overview: string;
  highlights: string[];
  gallery: string[];
  downloads: DownloadAsset[];
  completionDate?: string;
  isFeatured: boolean;
  heroImage: string;
  thumbnail: string;
  tags: string[];
  rera?: string;
  brochureUrl?: string;
  complianceNotes?: string[];
  sizeLabel?: string;
}

export interface LeadershipEntry {
  id: string;
  name: string;
  role: string;
  summary: string;
  image: string;
  kind: "person" | "team";
}

export interface Award {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface MediaEntry {
  id: string;
  title: string;
  date: string;
  source: string;
  description: string;
  image: string;
}

export interface EventEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface JobOpening {
  id: string;
  title: string;
  openings: string;
  interviewLocation: string;
  jobLocation: string;
  experience: string;
  qualifications: string;
  responsibilities: string[];
  contactEmail: string;
  contactPhone: string;
}

export interface OfficeLocation {
  id: string;
  label: string;
  address: string;
  mapEmbedUrl?: string;
}

export interface GlobalSettings {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  email: string;
  phones: string[];
  socialLinks: Array<{ label: string; href: string }>;
  offices: OfficeLocation[];
  legalLinks: CtaLink[];
}
