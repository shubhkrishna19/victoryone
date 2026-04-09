import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { ProjectDetailTracker } from "@/components/analytics/ProjectDetailTracker";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { faqs } from "@/content/faqs";
import { projects } from "@/content/projects";
import { finalCta } from "@/content/site";
import { getProjectBySlug } from "@/lib/contentQueries";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found | VictoryOne",
      description: "The requested VictoryOne project could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return buildMetadata({
    title: `${project.name} | VictoryOne project detail`,
    description: project.overview,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (item) => item.businessId === project.businessId && item.id !== project.id && item.isFeatured,
  );

  return (
    <>
      <ProjectDetailTracker projectId={project.id} />
      <RouteHero
        eyebrow="Project"
        title={project.name}
        description={project.overview}
        image={project.heroImage}
        primaryCta={{ label: "Enquire on This Project", href: `/contact?project=${project.id}`, ctaId: "project-contact" }}
        secondaryCta={{ label: "View All Projects", href: "/projects", ctaId: "project-all-projects" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel">
            <div className="flex flex-wrap gap-2">
              <Badge>{project.status}</Badge>
              <Badge>{project.segment}</Badge>
              {project.rera ? <Badge>{project.rera}</Badge> : null}
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-foreground">Overview and highlights</h2>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{project.overview}</p>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-foreground-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-border bg-background px-5 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted">Location</p>
                <p className="mt-2 text-sm text-foreground">{project.location}</p>
              </div>
              {project.sizeLabel ? (
                <div className="rounded-[24px] border border-border bg-background px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted">Approximate size</p>
                  <p className="mt-2 text-sm text-foreground">{project.sizeLabel}</p>
                </div>
              ) : null}
            </div>
          </article>
          <article className="panel">
            <Heading
              eyebrow="Downloads and Compliance"
              title="Brochures, pricing, and key project details"
              description="Download the latest brochure or price list where available. If a file is not listed, request it directly from the team."
            />
            <div className="mt-6 grid gap-3">
              {project.downloads.length ? (
                project.downloads.map((asset) => (
                  <Button
                    key={asset.label}
                    href={asset.href}
                    variant="secondary"
                    ctaId={asset.eventId ?? `${project.id}-download`}
                    sectionId="project.downloads"
                    projectId={project.id}
                    download
                  >
                    {asset.label}
                  </Button>
                ))
              ) : (
                <p className="text-sm leading-7 text-foreground-muted">
                  No brochure or price list is currently published for this project. Use the enquiry form below to request the latest material.
                </p>
              )}
            </div>
            {project.complianceNotes?.length ? (
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-foreground-muted">
                {project.complianceNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="space-y-8">
          <Heading
            eyebrow="Gallery"
            title="Project gallery"
            description="Browse the visuals currently published for this project, including renders, site images, and sample-flat views where available."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-background">
                <Image src={image} alt={`${project.name} visual ${index + 1}`} fill className="object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel">
            <Heading
              eyebrow="Project Enquiry"
              title="Enquire on this project"
              description="The form below keeps this project preselected so your enquiry reaches the right team faster."
            />
          </article>
          <EnquiryForm
            sectionId="project.detail.form"
            defaultEnquiryType="project"
            defaultBusinessId={project.businessId}
            defaultProjectId={project.id}
          />
        </Container>
      </Section>
      {relatedProjects.length ? (
        <Section tone="surface">
          <Container className="space-y-8">
          <Heading
            eyebrow="Related Projects"
            title="Compare related projects"
            description="If you are still evaluating options, review other VictoryOne projects from the same portfolio."
          />
            <div className="grid gap-6 lg:grid-cols-3">
              {relatedProjects.map((related) => (
                <Link key={related.id} href={`/projects/${related.slug}`} className="panel block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                    <Image src={related.thumbnail} alt={related.name} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 100vw" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{related.name}</h3>
                  <p className="mt-2 text-sm text-foreground-muted">{related.location}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
      <FAQAccordion items={faqs.slice(0, 4)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="project.detail.finalCta"
      />
    </>
  );
}
