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
        primaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "faq-contact" }}
        secondaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "faq-projects" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{faqs.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">Questions covered in the site FAQ</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Finance</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Lenders, loan limits, booking amount, and payment timing are all covered here.
            </p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Project fit</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Coverage includes amenities, RERA references, and ownership-related questions.
            </p>
          </article>
        </Container>
      </Section>
      <FAQAccordion
        items={faqs}
        eyebrow="Common Questions"
        title="Project, finance, and purchase questions"
      />
      <ContextualCTA
        eyebrow="Still Have Questions?"
        title="Still looking for a project-specific answer?"
        description="Use the project pages for development-specific detail, or contact the team if your question depends on current availability, pricing, or documents."
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "faq-cta-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "faq-cta-contact" }}
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
