import { InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, hint, id, className, required, ...props }, ref) => {
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
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={cn(hintId, errorId) || undefined}
          className={cn(
            "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 shadow-card placeholder:text-neutral-400 transition-all duration-200 hover:border-neutral-300",
            "focus:border-brand-500 focus:shadow-[0_0_0_4px_rgba(22,163,74,0.10)]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
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
FormInput.displayName = "FormInput";
