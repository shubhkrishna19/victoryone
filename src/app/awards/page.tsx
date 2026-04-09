import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { AwardsGrid } from "@/components/sections/shared/AwardsGrid";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { awards } from "@/content/awards";
import { faqs } from "@/content/faqs";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Awards | VictoryOne recognition archive",
  description:
    "VictoryOne awards and recognitions collected in one searchable archive.",
  path: "/awards",
  image: awards[0]?.image,
});

export default function AwardsPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.awards.eyebrow}
        title={routeCopy.awards.title}
        description={routeCopy.awards.description}
        image={awards[0]?.image}
        primaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "awards-contact" }}
        secondaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "awards-projects" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{awards.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">Recognition records currently shown on the site</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">2014-2018</p>
            <p className="mt-2 text-sm text-foreground-muted">Award references currently visible from 2014 to 2018 records</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">With source visuals</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Each recognition keeps the image carried in the archive so visitors can review the original context.
            </p>
          </article>
        </Container>
      </Section>
      <AwardsGrid awards={awards} />
      <ContextualCTA
        eyebrow="Next Step"
        title="Use these recognitions as context, then review live projects."
        description="These records support credibility, but project pages and direct contact are still the best next step for evaluation."
        primaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "awards-cta-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "awards-cta-contact" }}
        sectionId="awards.cta"
      />
      <FAQAccordion items={faqs.slice(0, 3)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="awards.finalCta"
      />
    </>
  );
}
