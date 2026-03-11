import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helper?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, error, helper, className, rows = 5, id, ...props },
  ref,
) {
  const inputId = id ?? props.name;

  return (
    <label className="field-wrap" htmlFor={inputId}>
      <span className="field-label">{label}</span>
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={cn("field-input min-h-32", error && "field-input-error", className)}
        {...props}
      />
      {helper && !error ? <span className="field-helper">{helper}</span> : null}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
});
