import { callbackSchema, careerSchema, contactSchema } from "@/lib/validators";

describe("validators", () => {
  it("accepts a valid contact payload", () => {
    const result = contactSchema.safeParse({
      name: "Shubh Krishna",
      email: "shubh@example.com",
      phone: "+919876543210",
      enquiryType: "project",
      businessId: "victoryone-group",
      projectId: "victoryone-amara",
      message: "I want details about the current furnished apartment inventory and price list.",
      consent: true,
      route: "/contact",
      source: "google",
      medium: "cpc",
      campaign: "brand",
      honeypot: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid contact fields", () => {
    const result = contactSchema.safeParse({
      name: "A",
      email: "bad-email",
      phone: "123",
      enquiryType: "project",
      message: "short",
      consent: false,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.flatten().fieldErrors;
      expect(fields.name?.[0]).toBeTruthy();
      expect(fields.email?.[0]).toBeTruthy();
      expect(fields.phone?.[0]).toBeTruthy();
      expect(fields.message?.[0]).toBeTruthy();
      expect(fields.consent?.[0]).toBeTruthy();
    }
  });

  it("accepts a valid callback payload", () => {
    const result = callbackSchema.safeParse({
      name: "Lead User",
      email: "lead@example.com",
      phone: "+919812345678",
      businessId: "victoryone-group",
      projectId: "victoryone-central",
      preferredWindow: "3 pm to 5 pm",
      consent: true,
      honeypot: "",
    });

    expect(result.success).toBe(true);
  });

  it("accepts a valid career payload", () => {
    const result = careerSchema.safeParse({
      name: "Applicant User",
      email: "applicant@example.com",
      phone: "+918888777766",
      jobId: "front-desk-officer",
      currentLocation: "Noida",
      experienceLevel: "2 years in real estate operations",
      message: "I have handled front-office operations, records, and vendor coordination in prior roles.",
      consent: true,
      honeypot: "",
    });

    expect(result.success).toBe(true);
  });
});
