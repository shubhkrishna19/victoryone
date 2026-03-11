import { forwardRef, type SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helper?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, helper, className, children, id, ...props },
  ref,
) {
  const inputId = id ?? props.name;

  return (
    <label className="field-wrap" htmlFor={inputId}>
      <span className="field-label">{label}</span>
      <select
        ref={ref}
        id={inputId}
        className={cn("field-input", error && "field-input-error", className)}
        {...props}
      >
        {children}
      </select>
      {helper && !error ? <span className="field-helper">{helper}</span> : null}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
});
