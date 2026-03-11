"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { trackEvent } from "@/lib/analytics";
import { CALLBACK_EVENT_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { AnalyticsEvent } from "@/types/analytics";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "inline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  ctaId: string;
  sectionId?: string;
  businessId?: string;
  projectId?: string;
  callback?: boolean;
  fullWidth?: boolean;
  download?: boolean;
  eventName?: AnalyticsEvent;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  ghost: "btn-ghost",
  inline: "btn-inline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm md:text-base",
  lg: "px-6 py-3.5 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  ctaId,
  sectionId,
  businessId,
  projectId,
  callback = false,
  className,
  children,
  fullWidth = false,
  download = false,
  eventName,
  onClick,
  ...props
}: ButtonProps) {
  const pathname = usePathname();
  const classes = cn(
    "btn-base",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full justify-center",
    className,
  );

  const fireAnalytics = () => {
    const resolvedEvent =
      eventName ??
      (download
        ? "brochure_click"
        : callback
          ? "quick_callback_open"
          : sectionId === "home.hero"
            ? "hero_cta_click"
            : "cta_click_by_section");

    trackEvent(resolvedEvent, {
      route: pathname,
      ctaId,
      sectionId,
      businessId,
      projectId,
    });
  };

  if (callback) {
    return (
      <button
        type="button"
        className={classes}
        onClick={(event) => {
          fireAnalytics();
          window.dispatchEvent(new Event(CALLBACK_EVENT_NAME));
          onClick?.(event);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        download={download}
        onClick={() => {
          fireAnalytics();
        }}
      >
        {children}
      </Link>
    );
  }

  return (
      <button
      type={props.type ?? "button"}
      className={classes}
      onClick={(event) => {
        fireAnalytics();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
