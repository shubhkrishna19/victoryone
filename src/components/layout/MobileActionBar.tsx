"use client";

import { Button } from "@/components/core/Button";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-border bg-surface/95 p-3 shadow-[0_-10px_30px_rgba(22,33,45,0.08)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Button href="/projects" variant="secondary" ctaId="mobile-action-projects" sectionId="mobile-action" fullWidth>
          Explore Projects
        </Button>
        <Button callback ctaId="mobile-action-callback" sectionId="mobile-action" fullWidth>
          Request Callback
        </Button>
      </div>
    </div>
  );
}
