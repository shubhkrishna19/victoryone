"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/core/Button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Businesses" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/awards", label: "Awards" },
  { href: "/media", label: "Media" },
  { href: "/events", label: "Events" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[60] border-b transition-all duration-200",
        scrolled || open
          ? "border-border bg-surface/95 shadow-[0_20px_50px_rgba(22,33,45,0.08)] backdrop-blur-xl"
          : "border-transparent bg-surface/70 backdrop-blur-md",
      )}
    >
      <div className="border-b border-border/60 bg-secondary px-4 py-2 text-xs text-white">
        <div className="site-container flex flex-wrap items-center justify-between gap-2">
          <span>info@victoryone.in</span>
          <span>+91-9210992922 | 0120-4266606/14/28</span>
        </div>
      </div>
      <div className="site-container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="VictoryOne home">
          <Image src="/legacy/theme-images/logo.png" alt="VictoryOne" width={170} height={44} className="h-11 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-150 hover:text-primary",
                  active ? "text-primary" : "text-foreground-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/projects" variant="ghost" ctaId="header-projects" sectionId="header">
            Explore Projects
          </Button>
          <Button callback ctaId="header-callback" sectionId="header">
            Request Callback
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-border bg-surface px-4 pb-5 lg:hidden" aria-label="Mobile navigation">
          <div className="site-container grid gap-3 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-2">
              <Button
                href="/projects"
                variant="secondary"
                ctaId="mobile-header-projects"
                sectionId="mobile-header"
                fullWidth
                onClick={() => setOpen(false)}
              >
                Explore Projects
              </Button>
              <Button callback ctaId="mobile-header-callback" sectionId="mobile-header" fullWidth>
                Request Callback
              </Button>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
