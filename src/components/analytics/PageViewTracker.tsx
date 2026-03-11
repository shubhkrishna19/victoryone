"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { trackEvent } from "@/lib/analytics";

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", {
      route: `${pathname}${typeof window === "undefined" ? "" : window.location.search}`,
    });
  }, [pathname]);

  return null;
}
