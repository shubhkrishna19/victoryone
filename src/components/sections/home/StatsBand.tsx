import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";
import { homeProof } from "@/content/site";

export function StatsBand() {
  return (
    <Section id="home-stats" tone="secondary" className="overflow-hidden">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-white/70">{homeProof.satisfaction.label}</p>
          <h2 className="mt-2 text-5xl font-semibold">{homeProof.satisfaction.lead}</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/70">
            {homeProof.satisfaction.follow} {homeProof.satisfaction.followLabel}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{homeProof.satisfaction.statement}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {homeProof.stats.map((stat) => (
            <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-white/72">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

