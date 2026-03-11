import type { Metadata } from "next";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { CareerForm } from "@/components/forms/CareerForm";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { faqs } from "@/content/faqs";
import { jobs } from "@/content/jobs";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers | VictoryOne job openings",
  description:
    "Current VictoryOne career roles rebuilt from the audited job board into a typed listing and application flow.",
  path: "/careers",
  image: "/legacy/theme-images/about1.jpg",
});

export default function CareersPage() {
  return (
    <>
      <RouteHero
        eyebrow={routeCopy.careers.eyebrow}
        title={routeCopy.careers.title}
        description={routeCopy.careers.description}
        image="/legacy/theme-images/about1.jpg"
        primaryCta={{ label: "Apply Now", href: "#career-form", ctaId: "careers-apply" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "careers-contact" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="panel">
            <Heading
              eyebrow="Hiring Approach"
              title="Operational roles sourced from the audited VictoryOne hiring board"
              description="The careers route keeps the verified openings, location, and hiring contacts that were exposed through the legacy job plugin data."
            />
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-foreground-muted">
              <li>Roles are concentrated around sales and front-office execution.</li>
              <li>Interview location remains H-56, Sector 63, Noida where stated in the audited source.</li>
              <li>Applications now go through a validated API flow instead of an ad-hoc mail pattern.</li>
            </ul>
          </article>
          <article className="panel">
            <p className="eyebrow">Hiring Contact</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Shared audited contact for the current job board
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">Email: priyanka.victoryone@gmail.com</p>
            <p className="mt-2 text-sm leading-7 text-foreground-muted">Phone: 0120-4266606/07/14/28</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              Use the application form below for the cleanest CRM-ready payload. The direct hiring contact remains
              visible for users who prefer manual follow-up.
            </p>
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="space-y-8">
          <Heading
            eyebrow="Open Positions"
            title="Verified current roles"
            description="Each role card carries the original location, qualification, and responsibility signals from the audited job data."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {jobs.map((job) => (
              <article key={job.id} className="panel h-full">
                <p className="eyebrow">{job.openings}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{job.title}</h3>
                <div className="mt-4 grid gap-2 text-sm text-foreground-muted">
                  <p>
                    <span className="font-semibold text-foreground">Job location:</span> {job.jobLocation}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Interview location:</span> {job.interviewLocation}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Experience:</span> {job.experience}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Qualifications:</span> {job.qualifications}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-foreground-muted">
                  {job.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="#career-form" ctaId={`${job.id}-apply`} sectionId="careers.roles" variant="secondary">
                    Apply for this role
                  </Button>
                  <Button href="/contact" ctaId={`${job.id}-contact`} sectionId="careers.roles" variant="ghost">
                    Ask a question
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="career-form">
        <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="panel">
            <Heading
              eyebrow="Application"
              title="Submit a structured application"
              description="The form keeps the fields short, validates on blur and submit, and returns a typed response object from the server."
            />
          </article>
          <CareerForm sectionId="careers.form" successHref="/thank-you?type=career" />
        </Container>
      </Section>
      <ContextualCTA
        eyebrow="Career Funnel"
        title="Need more clarity before you apply?"
        description="Review the company context, leadership route, or contact page if you want more certainty before sending your application."
        primaryCta={{ label: "Review Leadership", href: "/leadership", ctaId: "careers-cta-leadership" }}
        secondaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "careers-cta-contact" }}
        sectionId="careers.cta"
      />
      <FAQAccordion items={faqs.slice(0, 3)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="careers.finalCta"
      />
    </>
  );
}
