"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Select } from "@/components/core/Select";
import { TextArea } from "@/components/core/TextArea";
import { businesses } from "@/content/businesses";
import { projects } from "@/content/projects";
import { globalSettings } from "@/content/settings";
import { useQueryContext } from "@/hooks/useQueryContext";
import { trackEvent } from "@/lib/analytics";
import { contactSchema, type ContactFormValues } from "@/lib/validators";
import type { ApiResponse } from "@/types/forms";

interface EnquiryFormProps {
  sectionId: string;
  defaultEnquiryType?: "general" | "project" | "business";
  defaultBusinessId?: string;
  defaultProjectId?: string;
  successHref?: string;
}

export function EnquiryForm({
  sectionId,
  defaultEnquiryType = "general",
  defaultBusinessId,
  defaultProjectId,
  successHref,
}: EnquiryFormProps) {
  const router = useRouter();
  const query = useQueryContext();
  const [submitState, setSubmitState] = useState<ApiResponse | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      enquiryType: defaultEnquiryType,
      businessId: defaultBusinessId ?? query.businessId ?? "",
      projectId: defaultProjectId ?? query.projectId ?? "",
      message: "",
      consent: false,
      route: query.route,
      source: query.source ?? "",
      medium: query.medium ?? "",
      campaign: query.campaign ?? "",
      honeypot: "",
    }),
    [defaultBusinessId, defaultEnquiryType, defaultProjectId, query],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    control,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("businessId", defaultBusinessId ?? query.businessId ?? "");
    setValue("projectId", defaultProjectId ?? query.projectId ?? "");
    setValue("route", query.route);
    setValue("source", query.source ?? "");
    setValue("medium", query.medium ?? "");
    setValue("campaign", query.campaign ?? "");
  }, [defaultBusinessId, defaultProjectId, query, setValue]);

  const selectedType = useWatch({
    control,
    name: "enquiryType",
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitState(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as ApiResponse;
    setSubmitState(payload);

    if (payload.success) {
      trackEvent("form_submit_success", {
        route: query.route,
        sectionId,
        businessId: values.businessId,
        projectId: values.projectId,
      });
      if (successHref) {
        router.push(successHref);
      }
      return;
    }

    trackEvent("form_submit_error", {
      route: query.route,
      sectionId,
      businessId: values.businessId,
      projectId: values.projectId,
    });
  });

  return (
    <form
      className="panel grid gap-5"
      onFocus={() => {
        if (!formStarted) {
          setFormStarted(true);
          trackEvent("form_start", {
            route: query.route,
            sectionId,
            businessId: defaultBusinessId ?? query.businessId,
            projectId: defaultProjectId ?? query.projectId,
          });
        }
      }}
      onSubmit={onSubmit}
    >
      <div aria-live="polite" className="text-sm text-foreground-muted">
        {submitState?.success
          ? submitState.message
          : "Share a few details and the VictoryOne team will send your enquiry to the right person."}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Full name" autoComplete="name" {...register("name")} error={errors.name?.message} />
        <Input label="Email address" autoComplete="email" {...register("email")} error={errors.email?.message} />
        <Input label="Phone number" autoComplete="tel" {...register("phone")} error={errors.phone?.message} />
        <Select label="I'm reaching out about" {...register("enquiryType")} error={errors.enquiryType?.message}>
          <option value="general">General information</option>
          <option value="project">A specific project</option>
          <option value="business">Business or partnership enquiry</option>
        </Select>
        <Select label="Business context" {...register("businessId")} error={errors.businessId?.message}>
          <option value="">Choose a business</option>
          {businesses.map((business) => (
            <option key={business.id} value={business.id}>
              {business.name}
            </option>
          ))}
        </Select>
        <Select
          label="Project"
          {...register("projectId")}
          error={errors.projectId?.message}
          disabled={selectedType === "business"}
        >
          <option value="">Choose a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </Select>
      </div>
      <TextArea
        label="Project or enquiry detail"
        {...register("message")}
        error={errors.message?.message}
        helper="Tell us what you would like to know, and mention the project or business if you already have one in mind."
      />
      <input type="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      <input type="hidden" {...register("route")} />
      <input type="hidden" {...register("source")} />
      <input type="hidden" {...register("medium")} />
      <input type="hidden" {...register("campaign")} />
      <label className="flex items-start gap-3 text-sm text-foreground-muted">
        <input className="mt-1 h-4 w-4" type="checkbox" {...register("consent")} />
        <span>I agree to be contacted by VictoryOne about this enquiry.</span>
      </label>
      {errors.consent?.message ? <p className="field-error">{errors.consent.message}</p> : null}
      {!submitState?.success && "fieldErrors" in (submitState ?? {}) && submitState?.fieldErrors ? (
        <div className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger" aria-live="polite">
          Please review the highlighted fields and try again.
        </div>
      ) : null}
      {submitState?.success ? (
        <div className="rounded-2xl border border-success/20 bg-success/5 px-4 py-3 text-sm text-success">
          {`Your enquiry has been received. If you prefer direct follow-up, write to ${globalSettings.email} or call ${globalSettings.phones[1]}.`}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <Button type="submit" ctaId={`${sectionId}-submit`} sectionId={sectionId} disabled={isSubmitting}>
          {isSubmitting ? "Sending Enquiry" : "Send Enquiry"}
        </Button>
        <Button href="/projects" variant="ghost" ctaId={`${sectionId}-projects`} sectionId={sectionId}>
          Browse Projects
        </Button>
      </div>
    </form>
  );
}
