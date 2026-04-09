import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { buildMetadata } from "@/lib/seo";

const sections = [
  {
    title: "Website use",
    body: "This website is intended for project discovery, company information, and direct contact with the VictoryOne team. Visitors can review project information, office details, and enquiry routes without creating an account.",
  },
  {
    title: "Project information",
    body: "Project visuals, amenities, brochures, price lists, and related information are presented to support initial evaluation. Final availability, pricing, specifications, commercial terms, and documentation should be confirmed directly with the VictoryOne team.",
  },
  {
    title: "Enquiry and callback submissions",
    body: "When you submit an enquiry, callback, or career form, the details you provide are used to route your request and respond. Automated abuse protection is active on these submission routes.",
  },
  {
    title: "Formal legal text",
    body: "A fuller legal terms document is still under review for publication. Until that final language is approved, please use the contact route for any commercial or legal clarification tied to the website content.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | VictoryOne",
  description:
    "Overview of website use, project information handling, and enquiry submissions while the formal VictoryOne legal terms remain under review.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <RouteHero
        eyebrow="Legal"
        title="Website use and project information"
        description="This page explains how the current website is intended to be used while the final long-form legal text is being reviewed."
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "terms-contact" }}
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
              Contact Support
            </Button>
            <Button href="/privacy-policy" ctaId="terms-privacy" sectionId="terms" variant="ghost">
              Review Privacy Overview
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
