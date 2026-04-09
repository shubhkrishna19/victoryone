import type { Business } from "@/types/content";

export const businesses: Business[] = [
  {
    id: "victoryone-group",
    slug: "victoryone-group",
    name: "VictoryOne Group",
    tagline: "In-house construction and furnished living for Greater Noida West.",
    shortDescription:
      "VictoryOne Group brings together furnished residential offerings, commercial inventory, and a construction-led delivery approach shaped by work across multiple sectors.",
    longDescription:
      "VictoryOne Group presents itself as a construction-led real estate business focused on furnished living spaces, smoother ownership experiences, and delivery discipline shaped by broad project exposure. The current site launch focuses on the core VictoryOne profile while remaining ready for additional group entities in future iterations.",
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
      "The project record presented on the site extends from 1998 through the current Greater Noida West developments.",
      "Recognitions on the site include references connected to Property for Sale Magazine, India's Most Promising Brands, and Assocham Summit.",
      "Leadership messaging consistently emphasizes timely delivery, construction quality, and customer trust.",
    ],
    cta: {
      label: "Talk to VictoryOne",
      href: "/contact?business=victoryone-group",
      ctaId: "business-victoryone-talk",
    },
  },
];
