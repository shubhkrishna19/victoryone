import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { TeamGrid } from "@/components/sections/shared/TeamGrid";
import { faqs } from "@/content/faqs";
import {
  chairmanMessage,
  leadershipEntries,
  leadershipTimeline,
  mdPerspective,
} from "@/content/leadership";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leadership | VictoryOne chairman, MD perspective, and expert team",
  description:
    "Chairman message, MD interview perspective, and team structure rebuilt from the audited VictoryOne leadership templates.",
  path: "/leadership",
  image: chairmanMessage.image,
});

export default function LeadershipPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.leadership.eyebrow}
        title={routeCopy.leadership.title}
        description={routeCopy.leadership.description}
        image={chairmanMessage.image}
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "leadership-contact" }}
        secondaryCta={{ label: "Review Projects", href: "/projects", ctaId: "leadership-projects" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel">
            <p className="eyebrow">Chairman Message</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{chairmanMessage.name}</h2>
            <p className="mt-2 text-sm font-medium text-foreground-muted">{chairmanMessage.role}</p>
            <p className="mt-5 text-sm leading-7 text-foreground-muted">{chairmanMessage.summary}</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{chairmanMessage.detail}</p>
          </article>
          <article className="panel">
            <Heading
              eyebrow="Leadership Principles"
              title="Execution discipline presented as a trust layer"
              description="The audited chairman template repeatedly tied delivery credibility to accountability, site involvement, and target-beating execution."
            />
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-foreground-muted">
              {chairmanMessage.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-[24px] border border-border bg-background px-5 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted">Trust translation</p>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">
                Leadership is surfaced before the major enquiry ask so visitors can evaluate who is accountable for
                project delivery before they submit details.
              </p>
            </div>
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <article className="panel">
            <p className="eyebrow">MD Perspective</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{mdPerspective.heading}</h2>
            <p className="mt-5 text-lg leading-8 text-foreground">
              &ldquo;{mdPerspective.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{mdPerspective.detail}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects" ctaId="leadership-md-projects" sectionId="leadership.md" variant="secondary">
                Explore Projects
              </Button>
              <Button href="/contact" ctaId="leadership-md-contact" sectionId="leadership.md" variant="ghost">
                Talk to Team
              </Button>
            </div>
          </article>
          <div className="panel overflow-hidden p-0">
            <div className="relative aspect-video overflow-hidden rounded-[calc(var(--radius-lg)-4px)]">
              <iframe
                title="VictoryOne MD interview"
                src={mdPerspective.videoEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </Section>
      <TeamGrid entries={leadershipEntries} />
      <Section tone="surface">
        <Container className="space-y-8">
          <Heading
            eyebrow="Timeline"
            title="Leadership context across the delivery timeline"
            description="The chronology below ties the leadership narrative to the broader project archive and current Greater Noida West cycle."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {leadershipTimeline.map((entry) => (
              <article key={entry.year} className="panel h-full">
                <p className="text-3xl font-semibold text-foreground">{entry.year}</p>
                <p className="mt-3 text-sm leading-7 text-foreground-muted">{entry.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <ContextualCTA
        eyebrow="Trust Funnel"
        title="Use leadership context to reduce hesitation before project review or contact."
        description="The strongest next step after leadership validation is either the active project portfolio or a direct enquiry with the relevant business or project context attached."
        primaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "leadership-cta-projects" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "leadership-cta-contact" }}
        sectionId="leadership.cta"
      />
      <FAQAccordion items={faqs.slice(0, 4)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="leadership.finalCta"
      />
    </>
  );
}
