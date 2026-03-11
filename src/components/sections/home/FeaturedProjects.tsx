import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { projects } from "@/content/projects";

const featuredProjects = projects.filter((project) => project.isFeatured);

export function FeaturedProjects() {
  return (
    <Section id="home-projects">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading
            eyebrow="Featured Projects"
            title="Residential and commercial routes mapped from the legacy project stack."
            description="Current projects preserve brochures, price lists, maps, galleries, and compliance markers while removing the legacy template duplication."
          />
          <Button href="/projects" variant="ghost" ctaId="home-featured-projects" sectionId="home.featuredProjects">
            View all projects
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className="panel block overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
                <Image src={project.thumbnail} alt={project.name} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge>{project.segment}</Badge>
                <Badge>{project.status}</Badge>
                {project.rera ? <Badge>{project.rera}</Badge> : null}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">{project.overview}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

