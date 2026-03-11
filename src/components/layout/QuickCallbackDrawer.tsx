"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/core/Button";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { CALLBACK_EVENT_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

function trapFocus(event: KeyboardEvent, container: HTMLElement) {
  if (event.key !== "Tab") {
    return;
  }

  const focusable = Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  );

  if (!focusable.length) {
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement as HTMLElement | null;

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

export function QuickCallbackDrawer() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(CALLBACK_EVENT_NAME, onOpen);
    return () => window.removeEventListener(CALLBACK_EVENT_NAME, onOpen);
  }, []);

  useEffect(() => {
    if (!open || !drawerRef.current) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const firstField = drawerRef.current.querySelector<HTMLElement>("input, button, textarea, select");
    firstField?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
      if (drawerRef.current) {
        trapFocus(event, drawerRef.current);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", onKeyDown);
      previousActive?.focus();
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80] transition-opacity duration-200",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <button
        aria-label="Close callback drawer"
        className="absolute inset-0 bg-secondary/45 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-drawer-title"
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-md border-l border-border bg-surface p-6 shadow-2xl transition-transform duration-300 md:p-8",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Fast Conversion</p>
            <h2 id="callback-drawer-title" className="text-2xl font-semibold text-foreground">
              Request a callback
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              Use this short form when you already know the team should call you back.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            ctaId="callback-drawer-close"
            sectionId="callback-drawer"
            onClick={() => setOpen(false)}
            className="h-11 w-11 rounded-full p-0"
          >
            <X className="mx-auto h-5 w-5" />
          </Button>
        </div>
        <CallbackForm sectionId="callback-drawer" onSuccess={() => setTimeout(() => setOpen(false), 1200)} />
      </div>
    </div>
  );
}
