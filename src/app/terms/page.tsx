import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | VictoryOne",
  description: "Placeholder-first terms route for VictoryOne pending approved legal copy.",
  path: "/terms",
});

const placeholderSections = [
  {
    title: "Site use",
    body: "[TERMS_SITE_USE_RULES]",
  },
  {
    title: "Project information and disclaimers",
    body: "[TERMS_PROJECT_DISCLOSURE_RULES]",
  },
  {
    title: "Lead submission and contact processing",
    body: "[TERMS_FORM_AND_CONSENT_RULES]",
  },
  {
    title: "Intellectual property",
    body: "[TERMS_IP_LANGUAGE]",
  },
  {
    title: "Jurisdiction and escalation",
    body: "[TERMS_JURISDICTION_AND_CONTACT]",
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <RouteHero
        eyebrow="Legal"
        title="Terms of use pending approved legal copy"
        description="No approved terms text was present in the audited source. This route uses explicit placeholders until final legal content is provided."
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "terms-contact" }}
      />
      <Section>
        <Container className="space-y-6">
          <div className="panel">
            <p className="text-sm leading-7 text-foreground-muted">
              Production release requires approved legal content for this route. Until then, the placeholders below
              prevent invented or unapproved claims.
            </p>
          </div>
          {placeholderSections.map((section) => (
            <article key={section.title} className="panel">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-foreground-muted">{section.body}</p>
            </article>
          ))}
          <div className="panel flex flex-wrap gap-3">
            <Button href="/contact" ctaId="terms-support" sectionId="terms" variant="secondary">
              Contact Support
            </Button>
            <Button href="/privacy-policy" ctaId="terms-privacy" sectionId="terms" variant="ghost">
              Review Privacy Policy
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

