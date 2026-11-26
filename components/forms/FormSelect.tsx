import { SelectHTMLAttributes, forwardRef, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FormSelectOption {
  value: string;
  label: string;
}

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: FormSelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    { label, options, placeholder, error, hint, id, className, required, ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-mono text-xs uppercase tracking-label text-neutral-600"
        >
          {label}
          {required && (
            <span className="text-brand-700" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            required={required}
            {...(props.value === undefined
              ? { defaultValue: props.defaultValue ?? "" }
              : {})}
            aria-invalid={Boolean(error)}
            aria-describedby={cn(hintId, errorId) || undefined}
            className={cn(
              "w-full appearance-none rounded-lg border border-neutral-200 bg-white px-4 py-3 pr-10 text-base text-neutral-900 shadow-card transition-all duration-200 hover:border-neutral-300",
              "focus:border-brand-500 focus:shadow-[0_0_0_4px_rgba(22,163,74,0.10)]",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
            aria-hidden="true"
          />
        </div>
        {hint && !error && (
          <p id={hintId} className="text-sm text-neutral-500">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormSelect.displayName = "FormSelect";
