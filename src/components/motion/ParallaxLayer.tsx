"use client";

import type { HTMLAttributes } from "react";

import { useParallax, type UseParallaxOptions } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps extends HTMLAttributes<HTMLDivElement>, UseParallaxOptions {}

export function ParallaxLayer({ className, children, ...options }: ParallaxLayerProps) {
  const { ref, style } = useParallax(options);

  return (
    <div ref={ref} style={style} className={cn(className)}>
      {children}
    </div>
  );
}
