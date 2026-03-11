"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface UseParallaxOptions {
  speed?: number;
  axis?: "y" | "x";
  maxOffset?: number;
  disabled?: boolean;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.12, axis = "y", maxOffset = 72, disabled = false } = options;
  const reducedMotion = useReducedMotion();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const visibleRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || reducedMotion || disabled) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: [0, 0.2, 0.6, 1] },
    );

    const update = () => {
      frameRef.current = null;
      if (!visibleRef.current || !elementRef.current) {
        return;
      }

      const rect = elementRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 0;
      const center = rect.top + rect.height / 2;
      const delta = center - viewport / 2;
      const mobileMultiplier = window.innerWidth < 768 ? 0.35 : window.innerWidth < 1024 ? 0.65 : 1;
      const nextOffset = Math.max(
        Math.min(delta * speed * mobileMultiplier * -1, maxOffset),
        maxOffset * -1,
      );

      setOffset(nextOffset);
    };

    const onScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(update);
    };

    observer.observe(element);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [disabled, maxOffset, reducedMotion, speed]);

  const style = useMemo(
    () => ({
      transform:
        axis === "x"
          ? `translate3d(${reducedMotion || disabled ? 0 : offset}px, 0, 0)`
          : `translate3d(0, ${reducedMotion || disabled ? 0 : offset}px, 0)`,
      willChange: "transform",
    }),
    [axis, disabled, offset, reducedMotion],
  );

  return { ref: elementRef, style };
}
