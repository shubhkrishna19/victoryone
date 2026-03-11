import { Button } from "@/components/core/Button";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { chairmanMessage, leadershipEntries, mdPerspective } from "@/content/leadership";

export function LeadershipPreview() {
  return (
    <Section id="home-leadership">
      <Container className="space-y-10">
        <Heading
          eyebrow="Leadership"
          title="Leadership visibility kept close to trust and conversion blocks."
          description="The rebuild keeps the chairman narrative, MD perspective, and expert-team framing visible without repeating the legacy page structure."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="panel">
            <p className="eyebrow">{chairmanMessage.role}</p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{chairmanMessage.name}</h3>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{chairmanMessage.summary}</p>
            <p className="mt-4 text-sm leading-7 text-foreground-muted">{mdPerspective.quote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/leadership" ctaId="home-leadership-primary" sectionId="home.leadership">
                View leadership
              </Button>
              <Button href="/contact" variant="ghost" ctaId="home-leadership-contact" sectionId="home.leadership">
                Talk to Team
              </Button>
            </div>
          </article>
          <div className="grid gap-4">
            {leadershipEntries.slice(1, 4).map((entry) => (
              <article key={entry.id} className="panel">
                <p className="eyebrow">{entry.role}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{entry.name}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground-muted">{entry.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

