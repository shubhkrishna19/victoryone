import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { faqs } from "@/content/faqs";
import { globalSettings } from "@/content/settings";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | VictoryOne enquiry and callback",
  description:
    "VictoryOne enquiry, callback, and office details with direct project and business context built into the contact flow.",
  path: "/contact",
  image: "/legacy/theme-images/about1.jpg",
});

export default function ContactPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.contact.eyebrow}
        title={routeCopy.contact.title}
        description={routeCopy.contact.description}
        image="/legacy/theme-images/about1.jpg"
        primaryCta={{ label: "Send Enquiry", href: "#contact-form", ctaId: "contact-enquiry" }}
        secondaryCta={{ label: "Request Callback", href: "#callback-form", ctaId: "contact-callback" }}
      />
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          <article className="panel">
            <p className="eyebrow">Primary Inbox</p>
            <p className="mt-3 text-lg font-semibold text-foreground">{globalSettings.email}</p>
            <p className="mt-3 text-sm leading-7 text-foreground-muted">
              Use the validated forms below for the cleanest route and attribution data. Direct email remains visible
              for manual follow-up.
            </p>
          </article>
          <article className="panel">
            <p className="eyebrow">Phone</p>
            {globalSettings.phones.map((phone) => (
              <p key={phone} className="mt-3 text-lg font-semibold text-foreground">
                {phone}
              </p>
            ))}
            <p className="mt-3 text-sm leading-7 text-foreground-muted">
              Callback requests are the fastest path when the user already knows the team should speak with them
              directly.
            </p>
          </article>
          <article className="panel">
            <p className="eyebrow">Response Path</p>
            <p className="mt-3 text-sm leading-7 text-foreground-muted">
              Use the form that best matches your intent and the enquiry will reach the right team with its business
              or project context attached.
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground-muted">
              The details you share are used to review your request and respond through the contact information you
              provide.
            </p>
            <div className="mt-6">
              <Button callback ctaId="contact-fast-callback" sectionId="contact.hero" variant="secondary">
                Request Callback
              </Button>
            </div>
          </article>
        </Container>
      </Section>
      <Section id="contact-form" tone="surface">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <EnquiryForm sectionId="contact.form" successHref="/thank-you?type=enquiry" />
          <div id="callback-form" className="grid gap-6">
            <article className="panel">
              <Heading
                eyebrow="Fast Conversion"
                title="Use a shorter callback route when you want a phone response."
                description="The callback form keeps friction low for high-intent visitors and carries the same anti-spam and validation rules as the primary enquiry form."
              />
            </article>
            <article className="panel">
              <CallbackForm sectionId="contact.callback" />
            </article>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="space-y-8">
          <Heading
            eyebrow="Offices"
            title="Corporate and site office locations"
            description="Corporate and project-specific office details are centralised here so visitors can contact the right location without hunting across the site."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {globalSettings.offices.map((office) => (
              <article key={office.id} className="panel h-full overflow-hidden p-0">
                <div className="p-6">
                  <p className="eyebrow">{office.label}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{office.address}</h3>
                </div>
                {office.mapEmbedUrl ? (
                  <div className="aspect-[4/3] border-t border-border">
                    <iframe
                      title={office.label}
                      src={office.mapEmbedUrl}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <FAQAccordion items={faqs.slice(0, 4)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="contact.finalCta"
      />
    </>
  );
}

