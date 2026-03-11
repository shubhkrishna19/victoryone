import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getApiStatusCode, handleSubmission, parseJsonSafely } from "@/lib/api";
import { careerSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  const payload = await parseJsonSafely(request);

  const response = await handleSubmission({
    request,
    schema: careerSchema,
    subject: "VictoryOne Career Application",
    payload,
    uniqueKey: JSON.stringify({
      type: "career",
      email: typeof payload === "object" && payload ? (payload as Record<string, unknown>).email : undefined,
      phone: typeof payload === "object" && payload ? (payload as Record<string, unknown>).phone : undefined,
      jobId: typeof payload === "object" && payload ? (payload as Record<string, unknown>).jobId : undefined,
    }),
  });

  console.info("[api/careers]", response);
  return NextResponse.json(response, { status: getApiStatusCode(response) });
}
