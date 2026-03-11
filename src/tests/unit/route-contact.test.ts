import { NextRequest } from "next/server";

import { POST } from "@/app/api/contact/route";

describe("/api/contact", () => {
  beforeEach(() => {
    process.env.MAIL_MODE = "console";
    vi.spyOn(console, "info").mockImplementation(() => undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("accepts a valid enquiry payload", async () => {
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Valid User",
        email: `valid-${Date.now()}@example.com`,
        phone: "+919876540001",
        enquiryType: "project",
        businessId: "victoryone-group",
        projectId: "victoryone-amara",
        message: "Please share the latest brochure, pricing context, and site visit process.",
        consent: true,
        route: "/contact",
        honeypot: "",
      }),
      headers: {
        "content-type": "application/json",
        "user-agent": "vitest-contact-valid",
        "x-forwarded-for": "127.0.0.1",
      },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.code).toBe("OK");
  });

  it("rejects an invalid enquiry payload with field errors", async () => {
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "A",
        email: "invalid-email",
        phone: "123",
        enquiryType: "project",
        message: "short",
        consent: false,
      }),
      headers: {
        "content-type": "application/json",
        "user-agent": "vitest-contact-invalid",
        "x-forwarded-for": "127.0.0.2",
      },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.success).toBe(false);
    expect(body.code).toBe("VALIDATION_ERROR");
    expect(body.fieldErrors.email).toBeTruthy();
  });
});
