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
    "Current VictoryOne openings with role details, hiring contact information, and a direct application form.",
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
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "careers-contact" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="panel">
            <Heading
              eyebrow="Hiring Approach"
              title="Current openings and how to apply"
              description="Review the open roles, interview location, and the fastest way to send your application."
            />
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-foreground-muted">
              <li>Current openings are focused on sales and front-office operations.</li>
              <li>Interview location is listed as H-56, Sector 63, Noida for the current openings.</li>
              <li>Applications now move through a validated submission flow with direct routing to the hiring team.</li>
            </ul>
          </article>
          <article className="panel">
            <p className="eyebrow">Hiring Contact</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Current hiring contact</h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">Email: priyanka.victoryone@gmail.com</p>
            <p className="mt-2 text-sm leading-7 text-foreground-muted">Phone: 0120-4266606/07/14/28</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">
              Use the application form below for the fastest submission. Direct hiring details remain
              visible if you prefer to follow up manually.
            </p>
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="space-y-8">
          <Heading
            eyebrow="Open Positions"
            title="Current openings"
            description="Each role card shows the location, experience, qualifications, and key responsibilities currently published by VictoryOne."
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
                    Apply for this opening
                  </Button>
                  <Button href="/contact" ctaId={`${job.id}-contact`} sectionId="careers.roles" variant="ghost">
                    Ask about this role
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
              title="Apply with the right role context"
              description="Keep your details concise. The form validates as you go and sends your application directly to the hiring team."
            />
          </article>
          <CareerForm sectionId="careers.form" successHref="/thank-you?type=career" />
        </Container>
      </Section>
      <ContextualCTA
        eyebrow="Before You Apply"
        title="Want more context before you apply?"
        description="Review leadership, browse projects, or contact the team if you want more context before sending your application."
        primaryCta={{ label: "Review Leadership", href: "/leadership", ctaId: "careers-cta-leadership" }}
        secondaryCta={{ label: "Speak with the Team", href: "/contact", ctaId: "careers-cta-contact" }}
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
