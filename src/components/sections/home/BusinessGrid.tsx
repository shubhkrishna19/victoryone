"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/core/Badge";
import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { businesses } from "@/content/businesses";
import { trackEvent } from "@/lib/analytics";

export function BusinessGrid() {
  const pathname = usePathname();

  return (
    <Section id="home-businesses" tone="surface">
      <Container className="space-y-10">
        <Heading
          eyebrow="Business Identity"
          title="Launch-ready for VictoryOne, structured for more businesses later."
          description="The first release surfaces the audited VictoryOne group entity while preserving a schema and route pattern that can grow into a true multi-business portfolio."
        />
        <div className="grid gap-6">
          {businesses.map((business) => (
            <Link
              key={business.id}
              href={`/businesses/${business.slug}`}
              className="panel block transition-transform duration-200 hover:-translate-y-1"
              onClick={() =>
                trackEvent("business_card_click", {
                  route: pathname,
                  sectionId: "home.businesses",
                  businessId: business.id,
                })
              }
            >
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <Image src={business.logo} alt={business.name} width={180} height={48} className="h-12 w-auto" />
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">{business.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground-muted">{business.shortDescription}</p>
                </div>
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {business.categories.map((category) => (
                      <Badge key={category}>{category}</Badge>
                    ))}
                  </div>
                  <ul className="grid gap-3 text-sm text-foreground-muted">
                    {business.focusAreas.map((focus) => (
                      <li key={focus}>{focus}</li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View business detail <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

