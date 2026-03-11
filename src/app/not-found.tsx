import Link from "next/link";

import { Container } from "@/components/core/Container";
import { Section } from "@/components/core/Section";

export default function NotFound() {
  return (
    <Section>
      <Container className="panel max-w-3xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-title mt-3">This VictoryOne page could not be found.</h1>
        <p className="body-copy mx-auto mt-4 text-foreground-muted">
          The modern rebuild removed brittle legacy routes. Use the project or contact routes below to continue.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/projects" className="btn-base btn-primary px-5 py-3 text-sm">
            Explore Projects
          </Link>
          <Link href="/contact" className="btn-base btn-ghost px-5 py-3 text-sm">
            Contact VictoryOne
          </Link>
        </div>
      </Container>
    </Section>
  );
}
