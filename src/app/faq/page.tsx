import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { faqs } from "@/content/faqs";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | VictoryOne frequently asked questions",
  description:
    "Frequently asked questions covering project fit, amenities, finance, and buying process on VictoryOne.",
  path: "/faq",
  image: "/legacy/theme-images/about1.jpg",
});

export default function FaqPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.faq.eyebrow}
        title={routeCopy.faq.title}
        description={routeCopy.faq.description}
        image="/legacy/theme-images/about1.jpg"
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "faq-contact" }}
        secondaryCta={{ label: "Review Projects", href: "/projects", ctaId: "faq-projects" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{faqs.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">FAQ entries currently represented on the site</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Finance</p>
            <p className="mt-2 text-sm text-foreground-muted">
              The archive covers lenders, loan limits, and payment-schedule logic.
            </p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Project fit</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Amenities, RERA, and ownership questions remain visible near the bottom of the funnel.
            </p>
          </article>
        </Container>
      </Section>
      <FAQAccordion
        items={faqs}
        eyebrow="FAQ Archive"
        title="Common investor, project, and payment questions"
      />
      <ContextualCTA
        eyebrow="Support Funnel"
        title="Still need project-specific answers?"
        description="The FAQ route handles common objections, but project detail pages and the contact route are the right next step for anything route-specific."
        primaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "faq-cta-projects" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "faq-cta-contact" }}
        sectionId="faq.cta"
      />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="faq.finalCta"
      />
    </>
  );
}
