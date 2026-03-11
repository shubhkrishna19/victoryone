import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getApiStatusCode, handleSubmission, parseJsonSafely } from "@/lib/api";
import { contactSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  const payload = await parseJsonSafely(request);

  const response = await handleSubmission({
    request,
    schema: contactSchema,
    subject: "VictoryOne Contact Enquiry",
    payload,
    uniqueKey: JSON.stringify({
      type: "contact",
      email: typeof payload === "object" && payload ? (payload as Record<string, unknown>).email : undefined,
      phone: typeof payload === "object" && payload ? (payload as Record<string, unknown>).phone : undefined,
      projectId: typeof payload === "object" && payload ? (payload as Record<string, unknown>).projectId : undefined,
      businessId: typeof payload === "object" && payload ? (payload as Record<string, unknown>).businessId : undefined,
    }),
  });

  console.info("[api/contact]", response);
  return NextResponse.json(response, { status: getApiStatusCode(response) });
}
