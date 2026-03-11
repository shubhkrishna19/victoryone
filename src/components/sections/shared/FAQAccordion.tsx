"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/core/Container";
import { Heading } from "@/components/core/Heading";
import { Section } from "@/components/core/Section";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

interface FAQAccordionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function FAQAccordion({
  items,
  eyebrow = "Support",
  title = "Frequently asked questions",
  description = "Use the audited VictoryOne FAQ archive for common investment, project, finance, and payment questions.",
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState(items[0]?.id);

  return (
    <Section>
      <Container className="space-y-10">
        <Heading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-4">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="panel overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                >
                  <span className="text-lg font-semibold text-foreground">{item.question}</span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")} />
                </button>
                {isOpen ? <p className="mt-4 text-sm leading-7 text-foreground-muted">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

