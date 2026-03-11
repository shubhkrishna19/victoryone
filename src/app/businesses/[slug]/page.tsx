import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { RouteHero } from "@/components/sections/shared/RouteHero";
import { businesses } from "@/content/businesses";
import { faqs } from "@/content/faqs";
import { projects } from "@/content/projects";
import { finalCta } from "@/content/site";
import { getBusinessBySlug } from "@/lib/contentQueries";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return buildMetadata({
      title: "Business not found | VictoryOne",
      description: "The requested VictoryOne business could not be found.",
      path: `/businesses/${slug}`,
    });
  }

  return buildMetadata({
    title: `${business.name} | VictoryOne business detail`,
    description: business.shortDescription,
    path: `/businesses/${business.slug}`,
    image: business.logo,
  });
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) {
    notFound();
  }

  const featuredProjects = projects.filter((project) => business.featuredProjects.includes(project.id));

  return (
    <>
      <RouteHero
        eyebrow="Business Detail"
        title={business.name}
        description={business.longDescription}
        image="/legacy/theme-images/about1.jpg"
        primaryCta={business.cta}
        secondaryCta={{ label: "Explore Projects", href: "/projects", ctaId: "business-detail-projects" }}
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="panel flex flex-col justify-between">
            <div>
              <Image src={business.logo} alt={business.name} width={220} height={72} className="h-auto w-auto" />
              <h2 className="mt-6 text-3xl font-semibold text-foreground">{business.tagline}</h2>
              <p className="mt-4 text-sm leading-7 text-foreground-muted">{business.shortDescription}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {business.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm text-foreground-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="panel">
            <Heading eyebrow="Focus Areas" title="Operating scope and credibility markers" />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Focus areas</h3>
                <ul className="mt-3 grid gap-3 text-sm leading-7 text-foreground-muted">
                  {business.focusAreas.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Credibility</h3>
                <ul className="mt-3 grid gap-3 text-sm leading-7 text-foreground-muted">
                  {business.credibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Container>
      </Section>
      <Section tone="surface">
        <Container className="space-y-8">
          <Heading
            eyebrow="Featured Projects"
            title="Current projects connected to this business context"
            description="These project routes preserve the legacy Amara, Central, and commercial pages while removing duplicated layout and asset loading."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.id} className="panel">
                <p className="eyebrow">{project.segment}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground-muted">{project.overview}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel">
            <Heading
              eyebrow="Business Enquiry"
              title="Carry the business context into a direct conversation."
              description="The form below preselects this business so the team receives the right route context immediately."
            />
          </article>
          <EnquiryForm sectionId="business.detail.form" defaultEnquiryType="business" defaultBusinessId={business.id} />
        </Container>
      </Section>
      <FAQAccordion items={faqs.slice(0, 4)} />
      <ContextualCTA
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
        sectionId="business.detail.finalCta"
      />
    </>
  );
}
