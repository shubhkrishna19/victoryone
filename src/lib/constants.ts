import type { CtaLink } from "@/types/content";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://victoryone.in";
export const SITE_CONTAINER_CLASS = "site-container";

export const PRIMARY_CTA: CtaLink = {
  label: "Talk to Team",
  href: "/contact",
  ctaId: "global-talk-to-team",
};

export const SECONDARY_CTA: CtaLink = {
  label: "Explore Projects",
  href: "/projects",
  ctaId: "global-explore-projects",
};

export const CALLBACK_EVENT_NAME = "victoryone:open-callback";

export const LEGACY_REDIRECTS = [
  "/home",
  "/award",
  "/newspaper",
  "/event-2",
  "/contact-us",
  "/career",
  "/project-amara",
  "/project-central",
  "/central-comercial",
  "/amara-commercial",
  "/past-project",
] as const;

export const MOTION_BREAKPOINTS = {
  desktop: 1320,
  tablet: 1024,
  mobile: 768,
} as const;
