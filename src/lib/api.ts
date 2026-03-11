import crypto from "node:crypto";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";
import { ZodSchema } from "zod";

import type { ApiFailure, ApiResponse, ApiSuccess } from "@/types/forms";

const rateStore = new Map<string, number[]>();
const duplicateStore = new Map<string, number>();

const WINDOW_MS = Number(process.env.FORM_RATE_LIMIT_WINDOW_MS ?? 600_000);
const MAX_REQUESTS = Number(process.env.FORM_RATE_LIMIT_MAX ?? 5);
const DUPLICATE_COOLDOWN_MS = Number(process.env.FORM_DUPLICATE_COOLDOWN_MS ?? 300_000);

export function createRequestId() {
  return crypto.randomUUID();
}

export async function parseJsonSafely(request: NextRequest) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export function getClientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "local";
  const agent = request.headers.get("user-agent") || "unknown";
  return `${ip}:${agent}`;
}

export function buildError(
  requestId: string,
  code: ApiFailure["code"],
  message: string,
  fieldErrors?: Record<string, string>,
): ApiFailure {
  return {
    success: false,
    code,
    message,
    fieldErrors,
    requestId,
  };
}

export function buildSuccess(requestId: string, message: string): ApiSuccess {
  return {
    success: true,
    code: "OK",
    message,
    requestId,
  };
}

export function enforceRateLimit(key: string) {
  const now = Date.now();
  const recent = (rateStore.get(key) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  recent.push(now);
  rateStore.set(key, recent);
  return recent.length <= MAX_REQUESTS;
}

export function enforceDuplicateCooldown(key: string) {
  const now = Date.now();
  const last = duplicateStore.get(key);
  if (last && now - last < DUPLICATE_COOLDOWN_MS) {
    return false;
  }

  duplicateStore.set(key, now);
  return true;
}

export function detectBotPayload(payload: Record<string, unknown>) {
  const honeypot = typeof payload.honeypot === "string" ? payload.honeypot.trim() : "";
  if (honeypot) {
    return true;
  }

  const message = typeof payload.message === "string" ? payload.message : "";
  const links = message.match(/https?:\/\//g)?.length ?? 0;
  return links > 4;
}

export function formatZodErrors(result: {
  error: { flatten: () => { fieldErrors: Record<string, string[] | undefined> } };
}) {
  const flattened = result.error.flatten().fieldErrors;
  return Object.fromEntries(
    Object.entries(flattened)
      .filter(([, messages]) => (messages?.length ?? 0) > 0)
      .map(([field, messages]) => [field, messages?.[0] ?? "Invalid value."]),
  );
}

export async function validatePayload<T>(
  schema: ZodSchema<T>,
  payload: unknown,
  requestId: string,
): Promise<{ success: true; data: T } | { success: false; response: ApiFailure }> {
  const result = schema.safeParse(payload);
  if (!result.success) {
    return {
      success: false,
      response: buildError(
        requestId,
        "VALIDATION_ERROR",
        "Please correct the highlighted fields and try again.",
        formatZodErrors(result),
      ),
    };
  }

  return {
    success: true,
    data: result.data,
  };
}

async function getTransporter() {
  if (!process.env.SMTP_HOST || process.env.MAIL_MODE === "console") {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function dispatchLeadEmail(subject: string, payload: Record<string, unknown>) {
  const transporter = await getTransporter();
  const text = JSON.stringify(payload, null, 2);

  if (!transporter) {
    console.info(`[lead:${subject}]`, text);
    return;
  }

  // TODO: fan out the same normalized payload into the future CRM/webhook connector.
  await transporter.sendMail({
    from: process.env.MAIL_FROM ?? "VictoryOne Website <no-reply@victoryone.in>",
    to: process.env.MAIL_TO ?? "info@victoryone.in",
    subject,
    text,
  });
}

export function getApiStatusCode(response: ApiResponse) {
  if (response.success) {
    return 200;
  }

  switch (response.code) {
    case "VALIDATION_ERROR":
    case "BOT_DETECTED":
      return 400;
    case "RATE_LIMITED":
      return 429;
    case "SERVER_ERROR":
      return 500;
    default:
      return 500;
  }
}

export async function handleSubmission<T extends Record<string, unknown>>(options: {
  request: NextRequest;
  schema: ZodSchema<T>;
  subject: string;
  payload: unknown;
  uniqueKey: string;
}): Promise<ApiResponse> {
  const requestId = createRequestId();
  const clientKey = getClientKey(options.request);

  if (!enforceRateLimit(clientKey)) {
    return buildError(requestId, "RATE_LIMITED", "Too many submissions. Please wait before trying again.");
  }

  if (detectBotPayload((options.payload ?? {}) as Record<string, unknown>)) {
    return buildError(requestId, "BOT_DETECTED", "Submission rejected by anti-spam checks.");
  }

  const validation = await validatePayload(options.schema, options.payload, requestId);
  if (!validation.success) {
    return validation.response;
  }

  if (!enforceDuplicateCooldown(`${clientKey}:${options.uniqueKey}`)) {
    return buildError(requestId, "RATE_LIMITED", "A similar request was already received. Please wait a few minutes.");
  }

  try {
    await dispatchLeadEmail(options.subject, validation.data);
    return buildSuccess(requestId, "Your request has been received by the VictoryOne team.");
  } catch (error) {
    console.error(error);
    return buildError(requestId, "SERVER_ERROR", "The request could not be processed right now. Please try again.");
  }
}
