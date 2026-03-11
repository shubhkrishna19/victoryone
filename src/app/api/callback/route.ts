import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getApiStatusCode, handleSubmission, parseJsonSafely } from "@/lib/api";
import { callbackSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  const payload = await parseJsonSafely(request);

  const response = await handleSubmission({
    request,
    schema: callbackSchema,
    subject: "VictoryOne Callback Request",
    payload,
    uniqueKey: JSON.stringify({
      type: "callback",
      email: typeof payload === "object" && payload ? (payload as Record<string, unknown>).email : undefined,
      phone: typeof payload === "object" && payload ? (payload as Record<string, unknown>).phone : undefined,
      projectId: typeof payload === "object" && payload ? (payload as Record<string, unknown>).projectId : undefined,
      businessId: typeof payload === "object" && payload ? (payload as Record<string, unknown>).businessId : undefined,
    }),
  });

  console.info("[api/callback]", response);
  return NextResponse.json(response, { status: getApiStatusCode(response) });
}
