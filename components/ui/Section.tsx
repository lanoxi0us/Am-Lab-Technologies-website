import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "light" | "white" | "dark" | "deep";
export type SectionSpace = "sm" | "md" | "lg" | "xl";
export type SectionTexture = "none" | "grid" | "dots" | "grain" | "grid-dark";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  /** Vertical weight. Not every section deserves the same emphasis. */
  space?: SectionSpace;
  texture?: SectionTexture;
  /** Soft radial brand glow behind the content. */
  glow?: boolean;
  /** Hairline seam at the top edge, softer than a hard border. */
  seam?: boolean;
}

const tones: Record<SectionTone, string> = {
  light: "bg-neutral-50 text-neutral-900",
  white: "bg-white text-neutral-900",
  dark: "bg-neutral-900 text-white",
  deep: "bg-brand-900 text-white",
};

const spaces: Record<SectionSpace, string> = {
  sm: "py-14 md:py-16",
  md: "py-20 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-28 md:py-40",
};

const textures: Record<SectionTexture, string> = {
  none: "",
  grid: "texture-grid",
  dots: "texture-dots",
  grain: "texture-grain",
  "grid-dark": "texture-grid-dark",
};

/**
 * The section shell every block on the site is built from. Tone, spacing
 * and texture are explicit props precisely so the page can be composed with
 * deliberate rhythm — alternating light and dark, tight and expansive —
 * instead of repeating one padded container eight times.
 */
export function Section({
  tone = "light",
  space = "lg",
  texture = "none",
  glow = false,
  seam = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        tones[tone],
        spaces[space],
        textures[texture],
        className
      )}
      {...props}
    >
      {glow && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            tone === "dark" || tone === "deep"
              ? "glow-brand-dark"
              : "glow-brand-light"
          )}
        />
      )}
      {seam && (
        <div
          aria-hidden="true"
          className="seam-top pointer-events-none absolute inset-x-0 top-0 h-px"
        />
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
