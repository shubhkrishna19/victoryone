import Image from "next/image";

import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="surface">
      <Container className="space-y-10">
        <Heading
          eyebrow="Testimonials"
          title="Customer language preserved from the audited testimonial archive."
          description="Selected testimonials focus on ownership accessibility, planning quality, club amenities, location, and completion confidence."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial) => (
            <article key={testimonial.id} className="panel h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground-muted">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-foreground-muted">â€œ{testimonial.quote}â€</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

