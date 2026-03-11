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
    "VictoryOne awards and recognitions rebuilt from the audited category archive into a searchable and accessible grid.",
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
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "awards-contact" }}
        secondaryCta={{ label: "Review Projects", href: "/projects", ctaId: "awards-projects" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{awards.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Structured recognitions preserved from the legacy award archive
            </p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">2014-2018</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Recognition window directly represented by the audited award assets and copy
            </p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Proof-led</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Every card keeps a supporting image so trust signals remain visible, not abstract.
            </p>
          </article>
        </Container>
      </Section>
      <AwardsGrid awards={awards} />
      <ContextualCTA
        eyebrow="Trust Funnel"
        title="Use recognition proof to move into projects or direct contact."
        description="Awards do not replace project detail, but they reduce hesitation and strengthen the case for deeper evaluation or a direct conversation."
        primaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "awards-cta-projects" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "awards-cta-contact" }}
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
