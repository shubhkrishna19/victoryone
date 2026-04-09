import type { CtaLink } from "@/types/content";

const contactCta: CtaLink = {
  label: "Talk to Team",
  href: "/contact",
  ctaId: "site-talk-to-team",
};

const projectsCta: CtaLink = {
  label: "Explore Projects",
  href: "/projects",
  ctaId: "site-explore-projects",
};

export const routeCopy = {
  home: {
    eyebrow: "VictoryOne Group",
    title: "In-house construction and furnished living for Greater Noida West.",
    description:
      "VictoryOne brings together furnished residential homes, commercial inventory, and a construction-led delivery approach shaped by experience across residential, industrial, infrastructure, energy, and institutional assignments.",
    trustLine: "Current project cycle since 2013 | 22 completed assignments in different capacity | 12 recognitions",
    primaryCta: projectsCta,
    secondaryCta: contactCta,
  },
  about: {
    eyebrow: "About VictoryOne",
    title: "Construction-led homes, furnished living, and a delivery record built over time.",
    description:
      "VictoryOne combines Greater Noida West residential and commercial developments with a broader delivery record across housing, industrial, infrastructure, energy, and institutional work.",
  },
  businesses: {
    eyebrow: "Business Overview",
    title: "VictoryOne Group and its active residential and commercial portfolio.",
    description:
      "The current launch focuses on VictoryOne Group, while the platform remains ready to support additional businesses as the wider group structure is confirmed.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Residential and commercial inventory, plus a delivered project archive.",
    description:
      "Amara, Central, commercial inventory, brochures, price lists, and the delivered portfolio are now presented through one searchable project layer.",
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Leadership visibility, project accountability, and the team disciplines behind execution.",
    description:
      "The leadership section brings together the managing director perspective, team functions, and the operating principles that shape project delivery.",
  },
  awards: {
    eyebrow: "Awards",
    title: "Recognitions associated with the VictoryOne journey.",
    description:
      "Recognitions and media-linked references are organised into one clear archive for quick review.",
  },
  media: {
    eyebrow: "Media",
    title: "Archived press references and newspaper coverage.",
    description:
      "Press references and management coverage are collected into one reviewable media route.",
  },
  events: {
    eyebrow: "Events",
    title: "Selected event moments connected to the VictoryOne journey.",
    description:
      "The events route presents community and brand moments through a cleaner visual timeline.",
  },
  careers: {
    eyebrow: "Careers",
    title: "Roles, hiring context, and direct routes to the VictoryOne team.",
    description:
      "Career listings bring together role expectations, interview location references, and a direct application path to the team.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Key questions around projects, amenities, finance, and buying process.",
    description:
      "Frequently asked questions cover RERA, amenities, finance institutions, buying terminology, down payment, loans, and payment schedules.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Centralized enquiry, callback, and office contact flow.",
    description:
      "Use one route for enquiries, callbacks, and office information, with project and business context carried directly into the submission.",
  },
  thankYou: {
    eyebrow: "Request Received",
    title: "Your enquiry is now in the VictoryOne inbox.",
    description:
      "A team member can now review your submission with the right project or business context attached.",
  },
};

export const aboutNarrative = {
  introduction:
    "VictoryOne is presented as a refreshed approach to luxurious housing for a new generation of buyers. Central and Amara are positioned as homes for people who want a more complete move-in experience without the usual hassle of interior fit-out and accessorising from scratch.",
  continuation:
    "The group focuses on Greater Noida West living spaces with an emphasis on furnished comfort, convenience, and value. Central and Amara are presented as homes designed to reduce the effort normally associated with post-possession setup.",
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
    body: "In-house construction is presented as a quality-control advantage, with leadership visibility, delivery focus, and direct access to project details kept close to the enquiry journey.",
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
    "RERA references are surfaced on the current residential projects.",
    "In-house construction is positioned as a core quality-control advantage.",
    "Awards, testimonials, and press references are presented as visible trust signals across the site.",
  ],
};

export const finalCta = {
  eyebrow: "Next Step",
  title: "Move from research to a verified VictoryOne conversation.",
  description:
    "Use the project listings for detail, leadership for context, or contact directly if you already know which development or office team you need.",
  primaryCta: contactCta,
  secondaryCta: projectsCta,
};
