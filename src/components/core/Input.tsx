import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helper?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, helper, className, id, ...props },
  ref,
) {
  const inputId = id ?? props.name;

  return (
    <label className="field-wrap" htmlFor={inputId}>
      <span className="field-label">{label}</span>
      <input
        ref={ref}
        id={inputId}
        className={cn("field-input", error && "field-input-error", className)}
        {...props}
      />
      {helper && !error ? <span className="field-helper">{helper}</span> : null}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
});
