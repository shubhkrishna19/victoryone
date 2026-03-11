"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { trackEvent } from "@/lib/analytics";

const thresholds = [25, 50, 75, 100] as const;
const thresholdEventMap = {
  25: "scroll_depth_25",
  50: "scroll_depth_50",
  75: "scroll_depth_75",
  100: "scroll_depth_100",
} as const;

export function useScrollProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sent = new Set<number>();
    const route = `${pathname}${typeof window === "undefined" ? "" : window.location.search}`;

    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const next = height > 0 ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0;
      setProgress(next);

      for (const threshold of thresholds) {
        if (next >= threshold && !sent.has(threshold)) {
          sent.add(threshold);
          trackEvent(thresholdEventMap[threshold], {
            route,
          });
        }
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return progress;
}
