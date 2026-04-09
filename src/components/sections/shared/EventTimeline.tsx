import Image from "next/image";

import { Badge } from "@/components/core/Badge";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { formatDisplayDate } from "@/lib/utils";
import type { EventEntry } from "@/types/content";

interface EventTimelineProps {
  events: EventEntry[];
}

export function EventTimeline({ events }: EventTimelineProps) {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          eyebrow="Event Timeline"
        title="Event gallery"
        description="Review event photographs in chronological order, with the date kept visible on each entry."
        />
        <div className="grid gap-6">
          {events.map((event) => (
            <article key={event.id} className="panel grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={event.image} alt={event.title} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
              <div>
                <Badge>{formatDisplayDate(event.date)}</Badge>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">{event.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground-muted">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
