import Image from "next/image";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import type { CtaLink } from "@/types/content";

interface RouteHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export function RouteHero({ eyebrow, title, description, image, primaryCta, secondaryCta }: RouteHeroProps) {
  return (
    <Section className="overflow-hidden pt-12 md:pt-16">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <Heading eyebrow={eyebrow} title={title} description={description} />
          <div className="flex flex-wrap gap-3">
            {primaryCta ? (
              <Button href={primaryCta.href} ctaId={primaryCta.ctaId} sectionId="route-hero">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="ghost" ctaId={secondaryCta.ctaId} sectionId="route-hero">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        {image ? (
          <ParallaxLayer speed={0.08} maxOffset={42} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-background-strong shadow-soft">
              <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20" />
            </div>
          </ParallaxLayer>
        ) : null}
      </Container>
    </Section>
  );
}

