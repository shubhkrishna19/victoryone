import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { globalSettings } from "@/content/settings";
import { routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type ThankYouPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = buildMetadata({
  title: "Thank You | VictoryOne",
  description:
    "Confirmation page for enquiries and applications submitted through the VictoryOne website.",
  path: "/thank-you",
  image: "/legacy/theme-images/about1.jpg",
});

function resolveType(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "enquiry";
  }

  return value ?? "enquiry";
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const type = resolveType(params.type);
  const message =
    type === "career"
      ? "Your application has been received by the VictoryOne hiring team."
      : "Your enquiry has been received by the VictoryOne team.";

  return (
    <>
      <RouteHero
        eyebrow={routeCopy.thankYou.eyebrow}
        title={routeCopy.thankYou.title}
        description={routeCopy.thankYou.description}
        image="/legacy/theme-images/about1.jpg"
        primaryCta={{ label: "Browse Projects", href: "/projects", ctaId: "thank-you-projects" }}
        secondaryCta={{ label: "Back to Contact", href: "/contact", ctaId: "thank-you-contact" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel">
            <h2 className="text-2xl font-semibold text-foreground">{message}</h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              A team member will review your submission and respond using the contact information you shared.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              If you prefer direct follow-up, use {globalSettings.email} or {globalSettings.phones.join(" | ")}.
            </p>
          </article>
          <article className="panel">
            <p className="eyebrow">What&apos;s Next</p>
            <div className="mt-5 grid gap-3">
              <Button href="/projects" ctaId="thank-you-explore-projects" sectionId="thank-you" variant="secondary">
                Explore Projects
              </Button>
              <Button href="/leadership" ctaId="thank-you-review-leadership" sectionId="thank-you" variant="ghost">
                Review Leadership
              </Button>
              <Button href="/contact" ctaId="thank-you-contact-again" sectionId="thank-you" variant="ghost">
                Return to Contact
              </Button>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}

