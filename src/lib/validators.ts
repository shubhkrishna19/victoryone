import { z } from "zod";

const phonePattern = /^\+?[0-9]{10,15}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, "Enter a valid phone number."),
  enquiryType: z.enum(["general", "project", "business"]),
  businessId: z.string().trim().optional(),
  projectId: z.string().trim().optional(),
  message: z.string().trim().min(20, "Share enough detail for the team to respond.").max(1200, "Message is too long."),
  consent: z.boolean().refine((value) => value, {
    message: "Consent is required before submitting.",
  }),
  route: z.string().trim().optional(),
  source: z.string().trim().optional(),
  medium: z.string().trim().optional(),
  campaign: z.string().trim().optional(),
  honeypot: z.string().trim().optional(),
});

export const callbackSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, "Enter a valid phone number."),
  businessId: z.string().trim().optional(),
  projectId: z.string().trim().optional(),
  preferredWindow: z.string().trim().max(120, "Preferred window is too long.").optional(),
  consent: z.boolean().refine((value) => value, {
    message: "Consent is required before submitting.",
  }),
  route: z.string().trim().optional(),
  source: z.string().trim().optional(),
  medium: z.string().trim().optional(),
  campaign: z.string().trim().optional(),
  honeypot: z.string().trim().optional(),
});

export const careerSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, "Enter a valid phone number."),
  jobId: z.string().trim().optional(),
  currentLocation: z.string().trim().max(120, "Location is too long.").optional(),
  experienceLevel: z.string().trim().max(120, "Experience is too long.").optional(),
  message: z.string().trim().min(20, "Add a short note about your experience.").max(1200, "Message is too long."),
  consent: z.boolean().refine((value) => value, {
    message: "Consent is required before submitting.",
  }),
  route: z.string().trim().optional(),
  source: z.string().trim().optional(),
  medium: z.string().trim().optional(),
  campaign: z.string().trim().optional(),
  honeypot: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type CallbackFormValues = z.infer<typeof callbackSchema>;
export type CareerFormValues = z.infer<typeof careerSchema>;
