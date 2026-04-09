import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { aboutNarrative, companyHighlights, finalCta, routeCopy } from "@/content/site";
import { faqs } from "@/content/faqs";
import { homeProof } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About VictoryOne | Mission, vision, values, and CSR",
  description:
    "VictoryOne's company profile, mission, vision, values, CSR perspective, and delivery highlights.",
  path: "/about",
  image: "/legacy/theme-images/about1.jpg",
});

export default function AboutPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.about.eyebrow}
        title={routeCopy.about.title}
        description={routeCopy.about.description}
        image="/legacy/theme-images/about1.jpg"
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "about-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "about-contact" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="panel">
            <p className="eyebrow">Introduction</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{aboutNarrative.introduction}</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{aboutNarrative.continuation}</p>
          </article>
          <article className="panel">
            <p className="eyebrow">Mission and Vision</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Operational excellence with affordable delivery.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{aboutNarrative.mission}</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{aboutNarrative.vision}</p>
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="grid gap-6 lg:grid-cols-3">
          {companyHighlights.map((item) => (
            <article key={item.title} className="panel">
              <p className="eyebrow">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-foreground-muted">{item.body}</p>
            </article>
          ))}
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel">
            <p className="eyebrow">Core Values</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-foreground-muted">
              {aboutNarrative.coreValues.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </article>
          <article id="csr" className="panel">
            <p className="eyebrow">CSR</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-foreground-muted">
              {aboutNarrative.csr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>
      <Section>
        <Container className="panel grid gap-4 md:grid-cols-4">
          {homeProof.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </Section>
      <ContextualCTA
        eyebrow="Where to go next"
        title="Use the company story to narrow down the right next conversation."
        description="Continue into the active project collection or contact the team directly if you already know which project or office matters."
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "about-cta-projects" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "about-cta-contact" }}
        sectionId="about.cta"
      />
      <FAQAccordion items={faqs.slice(0, 4)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="about.finalCta"
      />
    </>
  );
}
