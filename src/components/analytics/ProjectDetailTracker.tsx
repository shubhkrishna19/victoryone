"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { trackEvent } from "@/lib/analytics";

interface ProjectDetailTrackerProps {
  projectId: string;
}

export function ProjectDetailTracker({ projectId }: ProjectDetailTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("project_detail_view", {
      route: pathname,
      projectId,
    });
  }, [pathname, projectId]);

  return null;
}
