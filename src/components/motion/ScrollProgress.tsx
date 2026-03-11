"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div aria-hidden className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
      <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}
