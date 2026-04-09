import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { MediaGrid } from "@/components/sections/shared/MediaGrid";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { faqs } from "@/content/faqs";
import { mediaEntries } from "@/content/media";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Media | VictoryOne press and newspaper archive",
  description:
    "Newspaper coverage and media references collected in a dedicated VictoryOne press page.",
  path: "/media",
  image: mediaEntries[0]?.image,
});

export default function MediaPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.media.eyebrow}
        title={routeCopy.media.title}
        description={routeCopy.media.description}
        image={mediaEntries[0]?.image}
        primaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "media-contact" }}
        secondaryCta={{ label: "Review Awards", href: "/awards", ctaId: "media-awards" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel">
            <Heading
              eyebrow="Press at a glance"
              title="Press references organised for quick review"
              description="Review the publication references currently featured here, then continue into projects or contact."
            />
          </article>
          <article className="panel">
            <p className="eyebrow">What you can review</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-foreground-muted">
              <li>Each entry keeps the publication name and archive date visible.</li>
              <li>Leadership coverage is shown alongside newspaper references for one continuous press record.</li>
              <li>Each media card links back to a relevant next step.</li>
            </ul>
          </article>
        </Container>
      </Section>
      <MediaGrid media={mediaEntries} />
      <ContextualCTA
        eyebrow="Next Step"
        title="Use press coverage as context, then move into projects or contact."
        description="Media coverage helps you understand the brand story. The practical next step is to review a project or speak with the team."
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "media-cta-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "media-cta-contact" }}
        sectionId="media.cta"
      />
      <FAQAccordion items={faqs.slice(3, 6)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="media.finalCta"
      />
    </>
  );
}
