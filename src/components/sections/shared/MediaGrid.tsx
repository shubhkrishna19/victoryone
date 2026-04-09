import Image from "next/image";

import { Badge } from "@/components/core/Badge";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { formatDisplayDate } from "@/lib/utils";
import type { MediaEntry } from "@/types/content";

interface MediaGridProps {
  media: MediaEntry[];
}

export function MediaGrid({ media }: MediaGridProps) {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          eyebrow="Press References"
          title="Press references"
        description="Review newspaper and magazine references with the publication name and original date visible on every card."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {media.map((item) => (
            <article key={item.id} className="panel h-full">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>{item.source}</Badge>
                <Badge>{formatDisplayDate(item.date)}</Badge>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
