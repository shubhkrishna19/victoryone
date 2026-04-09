import Link from "next/link";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";

export default function NotFound() {
  return (
    <Section>
      <Container className="panel max-w-3xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-title mt-3">The page you&apos;re looking for is no longer available.</h1>
        <p className="body-copy mx-auto mt-4 text-foreground-muted">
          Continue with current projects, or contact the VictoryOne team if you were trying to reach a specific project or office page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/projects" className="btn-base btn-primary px-5 py-3 text-sm">
            Explore Projects
          </Link>
          <Link href="/contact" className="btn-base btn-ghost px-5 py-3 text-sm">
            Contact the team
          </Link>
        </div>
      </Container>
    </Section>
  );
}
