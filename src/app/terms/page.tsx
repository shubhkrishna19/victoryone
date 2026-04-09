import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { buildMetadata } from "@/lib/seo";

const sections = [
  {
    title: "Website use",
    body: "This website is intended for project discovery, company information, and direct contact with the VictoryOne team. Visitors can review project information, office details, and enquiry options without creating an account.",
  },
  {
    title: "Project information",
    body: "Project visuals, amenities, brochures, price lists, and related information are presented to support initial evaluation. Final availability, pricing, specifications, commercial terms, and documentation should be confirmed directly with the VictoryOne team.",
  },
  {
    title: "Enquiry and callback submissions",
    body: "When you submit an enquiry, callback, or career form, the details you provide are used to review your request and respond. Automated abuse protection is active on these submission pages.",
  },
  {
    title: "Need a legal clarification?",
    body: "A full legal terms document is being finalized. Until it is published, use the contact page for any clarification on website content, project references, or commercial communication.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | VictoryOne",
  description:
    "Overview of website use, project information handling, and enquiry submissions on the VictoryOne website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <RouteHero
        eyebrow="Legal"
        title="Website use and project information guide"
        description="This page outlines how VictoryOne presents project information online and how enquiry pages should be used."
        primaryCta={{ label: "Contact VictoryOne", href: "/contact", ctaId: "terms-contact" }}
      />
      <Section>
        <Container className="space-y-6">
          {sections.map((section) => (
            <article key={section.title} className="panel">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-foreground-muted">{section.body}</p>
            </article>
          ))}
          <div className="panel flex flex-wrap gap-3">
            <Button href="/contact" ctaId="terms-support" sectionId="terms" variant="secondary">
              Contact VictoryOne
            </Button>
            <Button href="/privacy-policy" ctaId="terms-privacy" sectionId="terms" variant="ghost">
              Review Privacy Summary
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
