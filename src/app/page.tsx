import type { Metadata } from "next";

import { BusinessGrid } from "@/components/sections/home/BusinessGrid";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Hero } from "@/components/sections/home/Hero";
import { LeadershipPreview } from "@/components/sections/home/LeadershipPreview";
import { StatsBand } from "@/components/sections/home/StatsBand";
import { TestimonialsSection } from "@/components/sections/home/Testimonials";
import { TrustBand } from "@/components/sections/home/TrustBand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VictoryOne | In-house construction and furnished living",
  description:
    "Modern VictoryOne home route rebuilt from the audited legacy site with verified projects, trust signals, leadership context, and conversion paths.",
  path: "/",
  image: "/legacy/theme-images/amara-park-view.jpg",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessGrid />
      <FeaturedProjects />
      <StatsBand />
      <TrustBand />
      <LeadershipPreview />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
