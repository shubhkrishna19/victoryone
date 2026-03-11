"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { useQueryContext } from "@/hooks/useQueryContext";
import { trackEvent } from "@/lib/analytics";
import { callbackSchema, type CallbackFormValues } from "@/lib/validators";
import type { ApiResponse } from "@/types/forms";

interface CallbackFormProps {
  sectionId: string;
  defaultBusinessId?: string;
  defaultProjectId?: string;
  onSuccess?: () => void;
}

export function CallbackForm({ sectionId, defaultBusinessId, defaultProjectId, onSuccess }: CallbackFormProps) {
  const query = useQueryContext();
  const [submitState, setSubmitState] = useState<ApiResponse | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      businessId: defaultBusinessId ?? query.businessId ?? "",
      projectId: defaultProjectId ?? query.projectId ?? "",
      preferredWindow: "",
      consent: false,
      route: query.route,
      source: query.source ?? "",
      medium: query.medium ?? "",
      campaign: query.campaign ?? "",
      honeypot: "",
    }),
    [defaultBusinessId, defaultProjectId, query],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackSchema),
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

  const onSubmit = handleSubmit(async (values) => {
    const response = await fetch("/api/callback", {
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
      onSuccess?.();
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
      className="grid gap-4"
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
      <Input label="Full name" autoComplete="name" {...register("name")} error={errors.name?.message} />
      <Input label="Email address" autoComplete="email" {...register("email")} error={errors.email?.message} />
      <Input label="Phone number" autoComplete="tel" {...register("phone")} error={errors.phone?.message} />
      <Input
        label="Preferred callback window"
        placeholder="Example: 3 pm to 5 pm"
        {...register("preferredWindow")}
        error={errors.preferredWindow?.message}
      />
      <input type="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      <input type="hidden" {...register("businessId")} />
      <input type="hidden" {...register("projectId")} />
      <input type="hidden" {...register("route")} />
      <input type="hidden" {...register("source")} />
      <input type="hidden" {...register("medium")} />
      <input type="hidden" {...register("campaign")} />
      <label className="flex items-start gap-3 text-sm text-foreground-muted">
        <input className="mt-1 h-4 w-4" type="checkbox" {...register("consent")} />
        <span>I agree that VictoryOne may use these details to return this callback request.</span>
      </label>
      {errors.consent?.message ? <p className="field-error">{errors.consent.message}</p> : null}
      {!submitState?.success && "fieldErrors" in (submitState ?? {}) && submitState?.fieldErrors ? (
        <div className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger" aria-live="polite">
          Please review the highlighted fields and submit again.
        </div>
      ) : null}
      {submitState?.success ? (
        <div className="rounded-2xl border border-success/20 bg-success/5 px-4 py-3 text-sm text-success">
          {submitState.message}
        </div>
      ) : null}
      <Button type="submit" ctaId={`${sectionId}-submit`} sectionId={sectionId} disabled={isSubmitting} fullWidth>
        {isSubmitting ? "Requesting Callback" : "Request Callback"}
      </Button>
    </form>
  );
}
