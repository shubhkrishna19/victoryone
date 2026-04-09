import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { EventTimeline } from "@/components/sections/shared/EventTimeline";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { events } from "@/content/events";
import { faqs } from "@/content/faqs";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Events | VictoryOne event timeline",
  description:
    "VictoryOne event timeline with dates, imagery, and clear next steps back into projects and contact.",
  path: "/events",
  image: events[0]?.image,
});

export default function EventsPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.events.eyebrow}
        title={routeCopy.events.title}
        description={routeCopy.events.description}
        image={events[0]?.image}
        primaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "events-contact" }}
        secondaryCta={{ label: "View Awards", href: "/awards", ctaId: "events-awards" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{events.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">Event moments featured on the site</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Community</p>
            <p className="mt-2 text-sm text-foreground-muted">
              The timeline shows how the brand has appeared beyond the project pages.
            </p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Next step</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Review these moments, then continue to projects or contact when you are ready to move forward.
            </p>
          </article>
        </Container>
      </Section>
      <EventTimeline events={events} />
      <ContextualCTA
        eyebrow="Next Step"
        title="See how the brand has shown up over time, then continue where you need to."
        description="After reviewing community and brand moments, most visitors either compare projects or contact the team."
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "events-cta-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "events-cta-contact" }}
        sectionId="events.cta"
      />
      <FAQAccordion items={faqs.slice(6)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="events.finalCta"
      />
    </>
  );
}
