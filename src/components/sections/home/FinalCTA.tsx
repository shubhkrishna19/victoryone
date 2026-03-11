import { ContextualCTA } from "@/components/sections/shared/ContextualCTA";
import { finalCta } from "@/content/site";

export function FinalCTA() {
  return (
    <ContextualCTA
      eyebrow={finalCta.eyebrow}
      title={finalCta.title}
      description={finalCta.description}
      primaryCta={finalCta.primaryCta}
      secondaryCta={finalCta.secondaryCta}
      sectionId="home.finalCta"
    />
  );
}
