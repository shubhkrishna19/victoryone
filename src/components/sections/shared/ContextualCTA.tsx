import { ArrowRight } from "lucide-react";

import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import type { CtaLink } from "@/types/content";

interface ContextualCTAProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  sectionId: string;
}

export function ContextualCTA({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  sectionId,
}: ContextualCTAProps) {
  return (
    <Section tone="surface">
      <Container>
        <div className="panel flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display-title mt-2">{title}</h2>
            <p className="body-copy mt-4 text-foreground-muted">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primaryCta.href} ctaId={primaryCta.ctaId} sectionId={sectionId}>
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="ghost" ctaId={secondaryCta.ctaId} sectionId={sectionId}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

