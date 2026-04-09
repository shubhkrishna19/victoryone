"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Select } from "@/components/core/Select";
import { TextArea } from "@/components/core/TextArea";
import { jobs } from "@/content/jobs";
import { useQueryContext } from "@/hooks/useQueryContext";
import { trackEvent } from "@/lib/analytics";
import { careerSchema, type CareerFormValues } from "@/lib/validators";
import type { ApiResponse } from "@/types/forms";

interface CareerFormProps {
  sectionId: string;
  defaultJobId?: string;
  successHref?: string;
}

export function CareerForm({ sectionId, defaultJobId, successHref }: CareerFormProps) {
  const router = useRouter();
  const query = useQueryContext();
  const [submitState, setSubmitState] = useState<ApiResponse | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      jobId: defaultJobId ?? "",
      currentLocation: "",
      experienceLevel: "",
      message: "",
      consent: false,
      route: query.route,
      source: query.source ?? "",
      medium: query.medium ?? "",
      campaign: query.campaign ?? "",
      honeypot: "",
    }),
    [defaultJobId, query],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("route", query.route);
    setValue("source", query.source ?? "");
    setValue("medium", query.medium ?? "");
    setValue("campaign", query.campaign ?? "");
  }, [query, setValue]);

  const onSubmit = handleSubmit(async (values) => {
    const response = await fetch("/api/careers", {
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
      });
      if (successHref) {
        router.push(successHref);
      }
      return;
    }

    trackEvent("form_submit_error", {
      route: query.route,
      sectionId,
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
          });
        }
      }}
      onSubmit={onSubmit}
    >
      <div aria-live="polite" className="text-sm text-foreground-muted">
        Use this form to send a structured application directly to the current VictoryOne hiring contact.
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Full name" autoComplete="name" {...register("name")} error={errors.name?.message} />
        <Input label="Email address" autoComplete="email" {...register("email")} error={errors.email?.message} />
        <Input label="Phone number" autoComplete="tel" {...register("phone")} error={errors.phone?.message} />
        <Select label="Role" {...register("jobId")} error={errors.jobId?.message}>
          <option value="">Select role</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </Select>
        <Input label="Current location" {...register("currentLocation")} error={errors.currentLocation?.message} />
        <Input label="Experience summary" {...register("experienceLevel")} error={errors.experienceLevel?.message} />
      </div>
      <TextArea
        label="Why are you a fit for VictoryOne?"
        {...register("message")}
        error={errors.message?.message}
      />
      <input type="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      <input type="hidden" {...register("route")} />
      <input type="hidden" {...register("source")} />
      <input type="hidden" {...register("medium")} />
      <input type="hidden" {...register("campaign")} />
      <label className="flex items-start gap-3 text-sm text-foreground-muted">
        <input className="mt-1 h-4 w-4" type="checkbox" {...register("consent")} />
        <span>I agree that VictoryOne may use these details for hiring communication.</span>
      </label>
      {errors.consent?.message ? <p className="field-error">{errors.consent.message}</p> : null}
      {!submitState?.success && "fieldErrors" in (submitState ?? {}) && submitState?.fieldErrors ? (
        <div className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger" aria-live="polite">
          Please review the highlighted fields and submit again.
        </div>
      ) : null}
      {submitState?.success ? (
        <div className="rounded-2xl border border-success/20 bg-success/5 px-4 py-3 text-sm text-success">
          {submitState.message} If you prefer direct follow-up, the listed hiring contact is `priyanka.victoryone@gmail.com`.
        </div>
      ) : null}
      <Button type="submit" ctaId={`${sectionId}-submit`} sectionId={sectionId} disabled={isSubmitting}>
        {isSubmitting ? "Submitting Application" : "Apply Now"}
      </Button>
    </form>
  );
}
