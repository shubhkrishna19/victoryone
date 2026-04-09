import Image from "next/image";

import { Badge } from "@/components/core/Badge";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { awards } from "@/content/awards";
import { mediaEntries } from "@/content/media";
import { homeProof } from "@/content/site";

export function TrustBand() {
  return (
    <Section id="home-trust" tone="surface">
      <Container className="space-y-10">
        <Heading
          eyebrow="Recognition and Press"
          title="Recognition, media coverage, and visible project credibility."
          description={homeProof.trustSignals.join(" ")}
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ParallaxLayer speed={0.1} maxOffset={32}>
            <div className="panel h-full">
              <div className="grid gap-6 md:grid-cols-2">
                {awards.slice(0, 2).map((award) => (
                  <article key={award.id}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                      <Image src={award.image} alt={award.title} fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{award.title}</h3>
                    <p className="mt-2 text-sm text-foreground-muted">{award.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </ParallaxLayer>
          <div className="panel grid gap-5">
            <div>
              <Badge>{awards.length} recognitions on record</Badge>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Selected press and recognition</h3>
            </div>
            {mediaEntries.map((item) => (
              <div key={item.id} className="rounded-[22px] border border-border bg-background px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted">{item.source}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

