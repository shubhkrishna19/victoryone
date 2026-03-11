import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("site-container", className)}>{children}</div>;
}
