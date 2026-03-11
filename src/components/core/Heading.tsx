import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function Heading({ eyebrow, title, description, align = "left", className }: HeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title text-balance">{title}</h2>
      {description ? <p className="body-copy mt-4 text-pretty text-foreground-muted">{description}</p> : null}
    </div>
  );
}
