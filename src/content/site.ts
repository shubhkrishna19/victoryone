import type { CtaLink } from "@/types/content";

const contactCta: CtaLink = {
  label: "Speak with the Team",
  href: "/contact",
  ctaId: "site-talk-to-team",
};

const projectsCta: CtaLink = {
  label: "Browse Projects",
  href: "/projects",
  ctaId: "site-explore-projects",
};

export const routeCopy = {
  home: {
    eyebrow: "Built In-House for Greater Noida West",
    title: "Furnished homes and commercial opportunities in Greater Noida West.",
    description:
      "VictoryOne combines furnished homes, commercial inventory, and an in-house construction approach informed by experience across residential, industrial, infrastructure, energy, and institutional assignments.",
    trustLine: "Active development cycle since 2013 | 22 completed assignments across sectors | 12 recognitions on record",
    primaryCta: projectsCta,
    secondaryCta: contactCta,
  },
  about: {
    eyebrow: "About VictoryOne",
    title: "Construction-led homes, furnished living, and a delivery record built over time.",
    description:
      "VictoryOne combines Greater Noida West residential and commercial developments with a wider delivery record across housing, industrial, infrastructure, energy, healthcare, and institutional work.",
  },
  businesses: {
    eyebrow: "Business Overview",
    title: "VictoryOne Group, its focus areas, and its current projects.",
    description:
      "Review the core VictoryOne profile, its focus areas, and the projects tied directly to the VictoryOne name.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Homes, commercial spaces, and delivered work.",
    description:
      "Explore Amara, Central, commercial spaces, brochures, price lists, and delivered projects through one searchable collection.",
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Leadership visibility, project accountability, and the people behind execution.",
    description:
      "Meet the chairman's message, the managing director's perspective, and the team disciplines that shape project delivery.",
  },
  awards: {
    eyebrow: "Awards",
    title: "Recognitions received by VictoryOne over the years.",
    description:
      "This page brings together dated award references and supporting visuals already present in VictoryOne records.",
  },
  media: {
    eyebrow: "Media",
    title: "Press references and newspaper coverage for VictoryOne.",
    description:
      "Review dated newspaper and magazine coverage currently available in VictoryOne records.",
  },
  events: {
    eyebrow: "Events",
    title: "Community and brand moments around VictoryOne.",
    description:
      "This page keeps event photographs and dates together in one chronological view.",
  },
  careers: {
    eyebrow: "Careers",
    title: "Current openings and direct access to the hiring team.",
    description:
      "Review open roles, interview details, and the fastest way to apply.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions buyers and investors usually ask first.",
    description:
      "Find quick answers on RERA, amenities, finance, booking amounts, loan limits, renting, and payment schedules.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Speak with the VictoryOne team about projects, business enquiries, or callbacks.",
    description:
      "Use one direct page for project interest, business questions, and callback requests.",
  },
  thankYou: {
    eyebrow: "Request Received",
    title: "Thanks, your message is with the VictoryOne team.",
    description:
      "A team member can now review your request and respond using the details you shared.",
  },
};

export const aboutNarrative = {
  introduction:
    "VictoryOne offers a refreshed approach to premium housing for a new generation of buyers. Central and Amara are designed for people who want a more complete move-in experience without the usual hassle of interior fit-out and accessorising from scratch.",
  continuation:
    "The group focuses on Greater Noida West living spaces with an emphasis on furnished comfort, convenience, and value. Central and Amara are described as homes designed to reduce the effort normally associated with post-possession setup.",
  mission:
    "Build a culture of operational excellence with fair business practices and play a key role in providing quality housing for the masses at affordable values.",
  vision:
    "To be one of the largest real estate organizations in the National Capital Region with focus on innovation, customer satisfaction, and operational excellence.",
  coreValues: [
    "Demanding excellence in internal execution, vendor coordination, and delivery standards.",
    "Ownership through accountable performance and measurable delivery.",
    "Integrity as a structural part of personal and corporate conduct.",
    "Trust handled with care across every customer touchpoint.",
    "Collaboration as the multiplier for ideas, outcomes, and shared responsibility.",
  ],
  csr: [
    "VictoryOne adopts a holistic CSR approach covering people, upliftment, environmental care, greening, and awareness building.",
    "CSR is framed as a serious operating commitment rather than surface-level donation activity.",
    "The stated focus is on empowerment, dignity, and practical community improvement.",
  ],
};

export const companyHighlights = [
  {
    title: "What VictoryOne offers",
    body: "VictoryOne combines furnished 2 and 3 BHK living formats, commercial inventory, and project-specific downloads such as brochures, application forms, and price lists.",
  },
  {
    title: "How projects are positioned",
    body: "In-house construction is treated as a quality-control advantage, with leadership visibility, delivery focus, and direct access to project details kept close to the enquiry journey.",
  },
  {
    title: "Where experience comes from",
    body: "The broader project record spans residential, industrial, infrastructure, energy, healthcare, and institutional assignments from 1998 onward.",
  },
] as const;

export const homeProof = {
  stats: [
    { value: "2013", label: "Current project inception" },
    { value: "22", label: "Projects completed in different capacity" },
    { value: "150+", label: "Core civil team" },
    { value: "12", label: "Awards won" },
  ],
  satisfaction: {
    lead: "1,000+",
    label: "Families satisfied",
    follow: "Limitless",
    followLabel: "Happiness",
    statement: "Faith that scales heights",
  },
  trustSignals: [
    "Current residential projects surface their RERA references directly on the project pages.",
    "In-house construction remains central to how VictoryOne presents quality control and accountability.",
    "Awards, customer feedback, and press coverage remain visible throughout the research journey.",
  ],
};

export const finalCta = {
  eyebrow: "Ready to Talk?",
  title: "Take the next step with the VictoryOne team.",
  description:
    "Browse projects for specifics, meet the leadership team, or get in touch directly if you already know what you need.",
  primaryCta: contactCta,
  secondaryCta: projectsCta,
};
