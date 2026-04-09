import Image from "next/image";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Badge } from "@/components/core/Badge";
import { Section } from "@/components/core/Section";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Reveal } from "@/components/motion/Reveal";
import { homeProof, routeCopy } from "@/content/site";

export function Hero() {
  return (
    <Section className="overflow-hidden pt-12 md:pt-16">
      <Container className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <Reveal>
            <Badge>{routeCopy.home.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="hero-title text-balance">{routeCopy.home.title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-pretty text-foreground-muted">{routeCopy.home.description}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-wrap gap-3">
              <Button href={routeCopy.home.primaryCta.href} ctaId={routeCopy.home.primaryCta.ctaId} sectionId="home.hero">
                {routeCopy.home.primaryCta.label}
              </Button>
              <Button href={routeCopy.home.secondaryCta.href} variant="ghost" ctaId={routeCopy.home.secondaryCta.ctaId} sectionId="home.hero">
                {routeCopy.home.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm uppercase tracking-[0.18em] text-foreground-muted">{routeCopy.home.trustLine}</p>
          </Reveal>
        </div>
        <div className="relative min-h-[420px]">
          <ParallaxLayer speed={0.06} maxOffset={40} className="absolute inset-x-10 top-0 h-48 rounded-[32px] bg-gradient-to-r from-primary/15 via-accent/20 to-secondary/15 blur-3xl" />
          <ParallaxLayer speed={0.08} maxOffset={36} className="absolute right-0 top-8 w-[78%]">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft">
              <Image src="/legacy/theme-images/amara-park-view.jpg" alt="VictoryOne Amara" fill className="object-cover" sizes="(min-width: 1024px) 36vw, 100vw" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.14} maxOffset={54} className="absolute left-0 top-32 w-[58%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border bg-surface shadow-card">
              <Image src="/legacy/theme-images/victory-one-central-pool-night.jpg" alt="VictoryOne Central" fill className="object-cover" sizes="(min-width: 1024px) 22vw, 50vw" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.18} maxOffset={60} className="absolute bottom-0 right-8 w-[52%]">
            <div className="panel bg-surface/95 backdrop-blur">
              <p className="eyebrow">Key figures</p>
              <div className="mt-3 grid grid-cols-2 gap-4">
                {homeProof.stats.slice(0, 4).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                    <p className="text-sm text-foreground-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </Container>
    </Section>
  );
}

