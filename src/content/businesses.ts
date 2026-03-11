import type { Business } from "@/types/content";

export const businesses: Business[] = [
  {
    id: "victoryone-group",
    slug: "victoryone-group",
    name: "VictoryOne Group",
    tagline: "In-house construction and furnished living for Greater Noida West.",
    shortDescription:
      "VictoryOne Group positions Central and Amara as furnished residential offerings backed by in-house construction, commercial inventory, and a legacy delivery record across multiple sectors.",
    longDescription:
      "Riding the waves of real estate development, VictoryOne Group described itself in the legacy site as a fast-growing construction company focused on harmonized living spaces, hassle-free ownership, and a delivery discipline shaped by decades of construction exposure. The current rebuild launches with this audited VictoryOne profile while keeping the content model ready for additional business entities later.",
    logo: "/legacy/theme-images/logo.png",
    brandColor: "#8d6f43",
    website: "https://victoryone.in",
    focusAreas: [
      "Fully furnished apartments",
      "In-house construction quality control",
      "Residential and commercial project inventory",
    ],
    featuredProjects: [
      "victoryone-amara",
      "victoryone-central",
      "victoryone-amara-commercial",
      "victoryone-central-commercial",
    ],
    stats: [
      { value: "2013", label: "Current project inception" },
      { value: "22", label: "Projects completed in different capacity" },
      { value: "150+", label: "Core civil team" },
      { value: "12", label: "Awards won" },
    ],
    categories: ["Real Estate", "Residential", "Commercial"],
    credibility: [
      "Legacy project portfolio extends from 1998 through current Greater Noida West developments.",
      "Awards archive includes recognition from Property for Sale Magazine, India Achievers Podium, and Assocham Summit references.",
      "Leadership messaging repeatedly emphasizes timely delivery, quality construction, and customer trust.",
    ],
    cta: {
      label: "Talk to VictoryOne",
      href: "/contact?business=victoryone-group",
      ctaId: "business-victoryone-talk",
    },
  },
];
