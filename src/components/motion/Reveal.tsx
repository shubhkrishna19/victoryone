"use client";

import { m } from "framer-motion";
import type { PropsWithChildren } from "react";

import { MOTION_DURATIONS, MOTION_EASING } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: MOTION_DURATIONS.reveal,
        ease: MOTION_EASING,
        delay,
      }}
    >
      {children}
    </m.div>
  );
}
