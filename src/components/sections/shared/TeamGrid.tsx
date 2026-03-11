import Image from "next/image";

import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import type { LeadershipEntry } from "@/types/content";

interface TeamGridProps {
  entries: LeadershipEntry[];
}

export function TeamGrid({ entries }: TeamGridProps) {
  return (
    <Section id="team">
      <Container className="space-y-10">
        <Heading
          eyebrow="Expert Team"
          title="Leadership and delivery disciplines"
          description="The legacy team template surfaced one named leader and an extended expert-team description. The rebuild keeps that distinction explicit."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {entries.map((entry) => (
            <article key={entry.id} className="panel h-full">
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={entry.image} alt={entry.name} fill className="object-cover" sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw" />
              </div>
              <p className="eyebrow">{entry.role}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{entry.name}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">{entry.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

