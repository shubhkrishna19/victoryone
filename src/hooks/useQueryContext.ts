"use client";

import { useMemo, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const LOCATION_CHANGE_EVENT = "victoryone:location-change";

function patchHistoryEvents() {
  if (typeof window === "undefined") {
    return;
  }

  const state = window as Window & { __victoryoneHistoryPatched?: boolean };
  if (state.__victoryoneHistoryPatched) {
    return;
  }

  state.__victoryoneHistoryPatched = true;

  const wrap =
    <T extends "pushState" | "replaceState">(method: T) =>
    (...args: Parameters<History[T]>) => {
      const result = History.prototype[method].apply(window.history, args);
      window.dispatchEvent(new Event(LOCATION_CHANGE_EVENT));
      return result;
    };

  window.history.pushState = wrap("pushState");
  window.history.replaceState = wrap("replaceState");
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  patchHistoryEvents();

  window.addEventListener(LOCATION_CHANGE_EVENT, onStoreChange);
  window.addEventListener("popstate", onStoreChange);

  return () => {
    window.removeEventListener(LOCATION_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("popstate", onStoreChange);
  };
}

function getSearchSnapshot() {
  return typeof window === "undefined" ? "" : window.location.search;
}

export function useQueryContext() {
  const pathname = usePathname();
  const search = useSyncExternalStore(subscribe, getSearchSnapshot, () => "");

  return useMemo(
    () => {
      const searchParams = new URLSearchParams(search);

      return {
        pathname,
        route: `${pathname}${search}`,
        businessId: searchParams.get("business") ?? undefined,
        projectId: searchParams.get("project") ?? undefined,
        source: searchParams.get("utm_source") ?? searchParams.get("source") ?? undefined,
        medium: searchParams.get("utm_medium") ?? searchParams.get("medium") ?? undefined,
        campaign: searchParams.get("utm_campaign") ?? searchParams.get("campaign") ?? undefined,
        intent: searchParams.get("intent") ?? undefined,
      };
    },
    [pathname, search],
  );
}
