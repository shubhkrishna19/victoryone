export type EnquiryType = "general" | "project" | "business";

export interface BaseLeadPayload {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  route?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  honeypot?: string;
}

export interface ContactPayload extends BaseLeadPayload {
  enquiryType: EnquiryType;
  businessId?: string;
  projectId?: string;
  message: string;
}

export interface CallbackPayload extends BaseLeadPayload {
  businessId?: string;
  projectId?: string;
  preferredWindow?: string;
}

export interface CareerPayload extends BaseLeadPayload {
  jobId?: string;
  currentLocation?: string;
  experienceLevel?: string;
  message: string;
}

export type ApiSuccess = {
  success: true;
  code: "OK";
  message: string;
  requestId: string;
};

export type ApiFailure = {
  success: false;
  code: "VALIDATION_ERROR" | "RATE_LIMITED" | "BOT_DETECTED" | "SERVER_ERROR";
  message: string;
  fieldErrors?: Record<string, string>;
  requestId: string;
};

export type ApiResponse = ApiSuccess | ApiFailure;
