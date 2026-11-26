import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "header" | "footer";
  /** `wide` breaks past the default measure for full-bleed visual blocks. */
  width?: "default" | "wide" | "narrow";
}

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-content",
  wide: "max-w-wide",
};

/**
 * Shared measure + responsive gutters. Three widths exist so sections can
 * vary their footprint — a page where every block is exactly 1280px wide
 * reads as a template.
 */
export function Container({
  as: Tag = "div",
  width = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-6 lg:px-12", widths[width], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
