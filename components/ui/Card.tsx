import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  onDark?: boolean;
  /** `flush` removes padding for cards that host a full-bleed visual. */
  padding?: "default" | "roomy" | "flush";
}

const paddings = {
  default: "p-7",
  roomy: "p-8 md:p-10",
  flush: "p-0",
};

/**
 * A surface with real material quality: a soft top-light gradient rather
 * than flat white, a layered ambient shadow, and a hover state that lifts
 * and warms the border toward brand green.
 */
export function Card({
  hoverable = false,
  onDark = false,
  padding = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border transition-all duration-300 ease-smooth",
        paddings[padding],
        onDark
          ? "border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-inner-hairline"
          : "border-neutral-200 bg-gradient-to-b from-white to-neutral-50/60 shadow-card",
        hoverable &&
          (onDark
            ? "hover:border-brand-400/40 hover:from-white/[0.11] hover:to-white/[0.04]"
            : "hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover"),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
