import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "brand" | "outline" | "outline-dark" | "mono";
}

export function Badge({
  variant = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variant === "neutral" && "bg-neutral-900/[0.05] text-neutral-700",
        variant === "brand" && "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200",
        variant === "outline" && "border border-neutral-900/15 text-neutral-700",
        variant === "outline-dark" && "border border-white/20 text-white/80",
        variant === "mono" &&
          "border border-neutral-900/10 bg-white/70 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.08em] text-neutral-600",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
