import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { BusinessGrid } from "@/components/sections/home/BusinessGrid";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { businesses } from "@/content/businesses";
import { faqs } from "@/content/faqs";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Businesses | VictoryOne Group overview",
  description:
    "VictoryOne Group overview covering residential and commercial focus areas, credibility markers, and linked projects.",
  path: "/businesses",
  image: "/legacy/theme-images/logo.png",
});

export default function BusinessesPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.businesses.eyebrow}
        title={routeCopy.businesses.title}
        description={routeCopy.businesses.description}
        image="/legacy/theme-images/logo.png"
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "businesses-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "businesses-contact" }}
      />
      <BusinessGrid />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          {businesses[0].credibility.map((item) => (
            <article key={item} className="panel">
              <p className="eyebrow">Credibility</p>
              <p className="mt-4 text-sm leading-7 text-foreground-muted">{item}</p>
            </article>
          ))}
        </Container>
      </Section>
      <ContextualCTA
        eyebrow="Next Step"
        title="Want to move from the group overview into a specific project?"
        description="Start here for the broader business view, then continue into project pages for brochures, pricing references, and direct enquiries."
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "businesses-cta-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "businesses-cta-contact" }}
        sectionId="businesses.cta"
      />
      <FAQAccordion items={faqs.slice(0, 3)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="businesses.finalCta"
      />
    </>
  );
}
