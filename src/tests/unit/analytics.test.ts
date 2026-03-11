import { normalizeEventPayload, trackEvent } from "@/lib/analytics";

describe("analytics", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    Reflect.deleteProperty(window, "dataLayer");
  });

  it("normalizes event payloads with a timestamp", () => {
    const payload = normalizeEventPayload("page_view", {
      route: "/projects",
      sectionId: "projects.hero",
      ctaId: "projects-contact",
    });

    expect(payload.event).toBe("page_view");
    expect(payload.route).toBe("/projects");
    expect(payload.sectionId).toBe("projects.hero");
    expect(typeof payload.timestamp).toBe("number");
  });

  it("pushes into dataLayer when available", () => {
    window.dataLayer = [];

    const payload = trackEvent("hero_cta_click", {
      route: "/",
      sectionId: "home.hero",
      ctaId: "site-talk-to-team",
    });

    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer?.[0]).toEqual(payload);
  });

  it("returns the payload without creating a dataLayer when unavailable", () => {
    const payload = trackEvent("cta_click_by_section", {
      route: "/contact",
      sectionId: "contact.finalCta",
      ctaId: "contact-submit",
    });

    expect(payload.event).toBe("cta_click_by_section");
    expect(window.dataLayer).toBeUndefined();
  });
});
