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
      "VictoryOne positions Central and Amara as fully furnished living environments backed by in-house construction, delivery focus, and a long project history across residential, industrial, infrastructure, energy, and institutional work.",
    trustLine: "2013 current project inception | 22 projects completed in different capacity | 12 awards won",
    primaryCta: projectsCta,
    secondaryCta: contactCta,
  },
  about: {
    eyebrow: "About VictoryOne",
    title: "A legacy portfolio translated into a modern delivery-first real estate experience.",
    description:
      "VictoryOne presents audited group history, mission, vision, core values, CSR commitments, and the operating discipline behind its Greater Noida West projects.",
  },
  businesses: {
    eyebrow: "Business Overview",
    title: "One audited VictoryOne entity, structured for future multi-business expansion.",
    description:
      "The rebuild keeps the information architecture ready for additional businesses while launching with the verified VictoryOne group profile and its active project set.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Current residential and commercial projects, plus the delivered legacy portfolio.",
    description:
      "The projects layer consolidates Amara, Central, commercial floors, construction updates, brochures, price lists, and completed work into one searchable structure.",
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Chairman narrative, MD perspective, and the expert team disciplines behind execution.",
    description:
      "Leadership content is rebuilt from the audited chairman, team, and interview templates without duplicating the legacy PHP layout debt.",
  },
  awards: {
    eyebrow: "Awards",
    title: "Recognitions preserved from the audited VictoryOne archive.",
    description:
      "Awards and recognitions are mapped from the legacy category-driven listing into a modern card archive with dates, descriptions, and linked proof.",
  },
  media: {
    eyebrow: "Media",
    title: "Archived press references and newspaper coverage.",
    description:
      "Media records are preserved from the newspaper archive and management cover-story references surfaced in the legacy content set.",
  },
  events: {
    eyebrow: "Events",
    title: "Event gallery entries from the legacy archive.",
    description:
      "The event route transforms the original category-driven gallery into a structured timeline with dates, imagery, and direct next actions.",
  },
  careers: {
    eyebrow: "Careers",
    title: "Open roles drawn from the audited VictoryOne job board.",
    description:
      "Career listings preserve verified job openings, interview locations, role expectations, and the VictoryOne hiring contact from the legacy job plugin data.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Answers preserved from the audited VictoryOne FAQ template.",
    description:
      "Frequently asked questions cover investment logic, RERA, amenities, finance, definitions, down payment, loans, and payment schedules.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Centralized enquiry, callback, and office contact flow.",
    description:
      "The contact route replaces the legacy PHP process endpoint with validated form flows, audited office data, and a single accessible conversion surface.",
  },
  thankYou: {
    eyebrow: "Request Received",
    title: "Your enquiry is now in the VictoryOne inbox.",
    description:
      "The rebuild keeps submission feedback immediate and clear, with office channels still visible if you need direct follow-up.",
  },
};

export const aboutNarrative = {
  introduction:
    "VictoryOne is a refreshing change in the finest luxurious housing that meets aspirations of a new generation. If you like fine living, make Central and Amara your home. If you do not wish to bother with interior decoration and accessorizing, VictoryOne Central and Amara position themselves as ready-to-move-in furnished apartments.",
  continuation:
    "The VictoryOne Group offers living spaces in Greater Noida West with an emphasis on furnished comfort and affordability. The legacy site repeatedly positioned the projects as a way to reduce hassle while preserving a premium feel.",
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
    "The legacy text emphasizes empowerment, dignity, and practical community improvement over symbolic gestures.",
  ],
};

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
    "RERA-aware delivery messaging surfaced in both current residential project templates.",
    "In-house construction positioned as the quality backbone in the home hero.",
    "Award, testimonial, and press archives preserved from the legacy category structure.",
  ],
};

export const finalCta = {
  eyebrow: "Next Step",
  title: "Move from research to a verified VictoryOne conversation.",
  description:
    "Use the project listings for detail, leadership for trust context, or contact directly if you already know which development or office team you need.",
  primaryCta: contactCta,
  secondaryCta: projectsCta,
};
