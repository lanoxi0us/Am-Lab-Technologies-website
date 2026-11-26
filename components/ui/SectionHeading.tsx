import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Short section label, styled quietly above the main heading. */
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  /** `lg` is for the two or three sections that carry the most weight. */
  size?: "md" | "lg";
  className?: string;
  id?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  onDark = false,
  size = "md",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        size === "lg" ? "max-w-3xl" : "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <div className="mb-4">
          <span className={onDark ? "section-label-dark" : "section-label"}>{label}</span>
        </div>
      )}
      <h2
        id={id}
        className={cn(
          "text-balance",
          size === "lg" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl",
          onDark ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-lg",
            onDark ? "text-white/65" : "text-neutral-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
