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
    "Explore VictoryOne's furnished residential and commercial projects in Greater Noida West, with leadership insight, project details, and direct enquiry options.",
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
