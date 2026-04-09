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
    body: "The information you submit is used to route your request to the right team and respond through the contact details you provide. Campaign and route context may also be captured to understand how the enquiry reached the site.",
  },
  {
    title: "Submission protection",
    body: "The site applies server-side validation, anti-spam checks, and rate-limiting measures on form submissions to reduce abuse and improve signal quality.",
  },
  {
    title: "Formal privacy policy status",
    body: "A fuller privacy policy is still under legal review for publication. Until that final document is approved, please use the contact route for any privacy-related clarification, correction, or deletion request.",
  },
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | VictoryOne",
  description:
    "Overview of how VictoryOne handles enquiry, callback, and career submissions while the formal privacy policy is under review.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <RouteHero
        eyebrow="Legal"
        title="Privacy and enquiry data handling"
        description="This page explains the current form-data flow on the site while the final long-form privacy policy is being reviewed."
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "privacy-contact" }}
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
