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
    "Newspaper coverage and media references presented through a dedicated VictoryOne press route.",
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
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "media-contact" }}
        secondaryCta={{ label: "Review Awards", href: "/awards", ctaId: "media-awards" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel">
            <Heading
              eyebrow="Media Intent"
              title="Press coverage turned into a usable trust layer"
              description="The media route works as proof, then links visitors back into active project and contact paths."
            />
          </article>
          <article className="panel">
            <p className="eyebrow">Archive Notes</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-foreground-muted">
              <li>Press records remain visible with publication name and date.</li>
              <li>The management cover-story reference is preserved alongside newspaper imagery.</li>
              <li>Every media card now has a clear next action instead of ending in an isolated gallery.</li>
            </ul>
          </article>
        </Container>
      </Section>
      <MediaGrid media={mediaEntries} />
      <ContextualCTA
        eyebrow="Trust Funnel"
        title="Press proof should point back to projects and contact, not dead-end in an archive."
        description="After media validation, the highest-value next steps are either a project shortlist or a direct conversation with the team."
        primaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "media-cta-projects" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "media-cta-contact" }}
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
