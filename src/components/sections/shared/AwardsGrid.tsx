import Image from "next/image";

import { Badge } from "@/components/core/Badge";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { Reveal } from "@/components/motion/Reveal";
import { formatDisplayDate } from "@/lib/utils";
import type { Award } from "@/types/content";

interface AwardsGridProps {
  awards: Award[];
}

export function AwardsGrid({ awards }: AwardsGridProps) {
  return (
    <Section id="awards" tone="surface">
      <Container className="space-y-10">
        <Heading
          eyebrow="Recognition Archive"
          title="Awards and recognitions"
          description="The legacy category listing is rebuilt as a modern archive with dates, proof imagery, and concise source descriptions."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((award, index) => (
            <Reveal key={award.id} delay={index * 0.05}>
              <article className="panel h-full overflow-hidden">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src={award.image} alt={award.title} fill className="object-cover" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
                </div>
                <Badge>{formatDisplayDate(award.date)}</Badge>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{award.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground-muted">{award.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

