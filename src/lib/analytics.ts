import type { AnalyticsEvent, EventPayload } from "@/types/analytics";

declare global {
  interface Window {
    dataLayer?: EventPayload[];
  }
}

export function normalizeEventPayload(
  event: AnalyticsEvent,
  payload: Omit<EventPayload, "event" | "timestamp">,
): EventPayload {
  return {
    event,
    timestamp: Date.now(),
    route: payload.route,
    sectionId: payload.sectionId,
    ctaId: payload.ctaId,
    businessId: payload.businessId,
    projectId: payload.projectId,
    source: payload.source,
    medium: payload.medium,
    campaign: payload.campaign,
  };
}

export function trackEvent(
  event: AnalyticsEvent,
  payload: Omit<EventPayload, "event" | "timestamp">,
) {
  const normalized = normalizeEventPayload(event, payload);

  if (typeof window === "undefined") {
    return normalized;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(normalized);
  }

  return normalized;
}
