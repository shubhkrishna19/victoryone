import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | VictoryOne",
  description: "Placeholder-first privacy policy route for VictoryOne pending approved legal copy.",
  path: "/privacy-policy",
});

const placeholderSections = [
  {
    title: "Data controller",
    body: "[PRIVACY_DATA_CONTROLLER_DETAILS]",
  },
  {
    title: "What data is collected",
    body: "[PRIVACY_DATA_CATEGORIES]",
  },
  {
    title: "Why data is processed",
    body: "[PRIVACY_PROCESSING_PURPOSES]",
  },
  {
    title: "Retention and deletion",
    body: "[PRIVACY_RETENTION_POLICY]",
  },
  {
    title: "User rights and escalation",
    body: "[PRIVACY_USER_RIGHTS_AND_CONTACT]",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <RouteHero
        eyebrow="Legal"
        title="Privacy policy pending approved legal copy"
        description="No approved privacy policy text was present in the audited source. The route is shipped with explicit placeholders so final legal language can be inserted without guesswork."
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "privacy-contact" }}
      />
      <Section>
        <Container className="space-y-6">
          <div className="panel">
            <p className="text-sm leading-7 text-foreground-muted">
              Production release requires approved legal content for this route. Until then, the placeholders below
              are intentionally explicit.
            </p>
          </div>
          {placeholderSections.map((section) => (
            <article key={section.title} className="panel">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-foreground-muted">{section.body}</p>
            </article>
          ))}
          <div className="panel flex flex-wrap gap-3">
            <Button href="/contact" ctaId="privacy-support" sectionId="privacy-policy" variant="secondary">
              Contact Support
            </Button>
            <Button href="/terms" ctaId="privacy-terms" sectionId="privacy-policy" variant="ghost">
              Review Terms
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

