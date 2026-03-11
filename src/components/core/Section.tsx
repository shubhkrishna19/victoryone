import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
  tone?: "default" | "surface" | "secondary";
}

export function Section({ children, className, id, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell",
        tone === "surface" && "bg-surface",
        tone === "secondary" && "bg-secondary text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
