import { cn } from "@/lib/utils";

/**
 * AM Labs logo mark.
 *
 * Rebuilt as clean vector geometry, traced from the mark on the company's
 * print collateral: a heavy ring counter whose right side is cut flat into a
 * vertical stem and drawn down to a point — reading at once as an "A" and as
 * a marker/pin.
 *
 * Drawn on a 64x64 grid, single path, nonzero fill. Verified legible down to
 * 16px, so the same geometry serves the header, the favicon and the app icon.
 * Inherits `currentColor`, so one component covers light and dark surfaces.
 *
 * If you later get the original vector file from the designer, replace the
 * `d` attribute below — nothing else in the codebase needs to change.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M61.99 30.99 61.99 63.02 52.15 53.15A29.97 29.97 0 1 1 61.99 30.99ZM31.67 14.78a17.22 17.22 0 1 0 0 34.44 17.22 17.22 0 1 0 0-34.44Z"
      />
    </svg>
  );
}

export interface LogoProps {
  /** Render the mark only, without the wordmark. */
  markOnly?: boolean;
  /** Invert colours for placement on dark surfaces. */
  onDark?: boolean;
  className?: string;
}

/**
 * Full lockup: mark + "AM Labs" wordmark. The wordmark is set in the display
 * face at tightened tracking so it optically matches the printed logotype.
 */
export function Logo({ markOnly = false, onDark = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark
        className={cn("h-7 w-7 shrink-0", onDark ? "text-white" : "text-brand-800")}
      />
      {!markOnly && (
        <span
          className={cn(
            "font-display text-lg font-bold tracking-[-0.02em]",
            onDark ? "text-white" : "text-neutral-900"
          )}
        >
          AM&nbsp;Labs
        </span>
      )}
    </span>
  );
}
