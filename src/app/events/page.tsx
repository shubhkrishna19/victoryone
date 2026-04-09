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
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "events-contact" }}
        secondaryCta={{ label: "Review Awards", href: "/awards", ctaId: "events-awards" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{events.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">Event records currently represented on the site</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Community</p>
            <p className="mt-2 text-sm text-foreground-muted">
              The archive shows brand participation outside the project pages, which broadens the trust story.
            </p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">Cross-linked</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Each event route now feeds back into projects and contact instead of behaving like an isolated gallery.
            </p>
          </article>
        </Container>
      </Section>
      <EventTimeline events={events} />
      <ContextualCTA
        eyebrow="Trust Funnel"
        title="Event proof should support confidence, then hand the user back to a clear next step."
        description="After social or brand validation, most visitors either continue comparing projects or decide to contact the team directly."
        primaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "events-cta-projects" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "events-cta-contact" }}
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
