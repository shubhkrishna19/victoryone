import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { buildMetadata } from "@/lib/seo";

const sections = [
  {
    title: "What the site collects",
    body: "VictoryOne receives information only when you choose to share it through an enquiry, callback, or career form. Depending on the form, that can include your name, email address, phone number, selected business or project context, and message details.",
  },
  {
    title: "How the information is used",
    body: "We use the details you share to review your request and respond using the contact information you provide. We may also record the page or campaign that led you here so we can understand how the site is being used.",
  },
  {
    title: "Submission protection",
    body: "The site applies server-side validation, anti-spam checks, and rate-limiting measures on form submissions to reduce abuse and improve signal quality.",
  },
  {
    title: "Need a privacy clarification?",
    body: "A full legal privacy policy is being finalized. Until it is published, use the contact page for any request related to access, correction, or deletion of information submitted through this site.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | VictoryOne",
  description:
    "Overview of how VictoryOne handles enquiry, callback, and career submissions through the website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <RouteHero
        eyebrow="Legal"
        title="How VictoryOne handles website submissions"
        description="This page outlines the information the site receives, how it is used, and the safeguards applied to enquiry, callback, and career forms."
        primaryCta={{ label: "Contact VictoryOne", href: "/contact", ctaId: "privacy-contact" }}
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
            <Button href="/contact" ctaId="privacy-support" sectionId="privacy-policy" variant="secondary">
              Contact VictoryOne
            </Button>
            <Button href="/terms" ctaId="privacy-terms" sectionId="privacy-policy" variant="ghost">
              Review Website Terms
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
