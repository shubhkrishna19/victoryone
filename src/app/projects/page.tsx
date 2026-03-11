import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { ProjectExplorer } from "@/components/sections/shared/ProjectExplorer";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { faqs } from "@/content/faqs";
import { projects } from "@/content/projects";
import { finalCta, routeCopy } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects | VictoryOne current and delivered portfolio",
  description:
    "Search, filter, and review VictoryOne residential, commercial, and delivered projects from a single modern route.",
  path: "/projects",
  image: "/legacy/theme-images/project-homepg-amara.jpg",
});

export default function ProjectsPage() {
  const currentCount = projects.filter((project) => project.status === "ongoing").length;
  const completedCount = projects.filter((project) => project.status === "completed").length;

  return (
    <>
      <RouteHero
        eyebrow={routeCopy.projects.eyebrow}
        title={routeCopy.projects.title}
        description={routeCopy.projects.description}
        image="/legacy/theme-images/project-homepg-central.jpg"
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "projects-contact" }}
        secondaryCta={{ label: "Review Leadership", href: "/leadership", ctaId: "projects-leadership" }}
      />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{projects.length}</p>
            <p className="mt-2 text-sm text-foreground-muted">Total structured project records in the modern rebuild</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{currentCount}</p>
            <p className="mt-2 text-sm text-foreground-muted">Current residential and commercial routes sourced from legacy project pages</p>
          </article>
          <article className="panel">
            <p className="text-3xl font-semibold text-foreground">{completedCount}</p>
            <p className="mt-2 text-sm text-foreground-muted">Delivered archive entries sourced from the past-project template</p>
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container>
          <ProjectExplorer projects={projects} />
        </Container>
      </Section>
      <ContextualCTA
        eyebrow="Project Funnel"
        title="Move from shortlist to brochure, price list, or direct enquiry."
        description="Every current project route preserves the legacy detail intent and now carries its own direct enquiry path with business and project context attached."
        primaryCta={{ label: "Talk to Team", href: "/contact", ctaId: "projects-cta-contact" }}
        secondaryCta={{ label: "Request Callback", href: "/contact?intent=callback", ctaId: "projects-cta-callback" }}
        sectionId="projects.cta"
      />
      <FAQAccordion items={faqs.slice(4)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="projects.finalCta"
      />
    </>
  );
}
