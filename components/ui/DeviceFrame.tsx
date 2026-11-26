import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Code-drawn device chrome.
 *
 * Product work needs to be *shown*, and a screenshot floating on a page
 * always looks unfinished. These frames give any screen — a real capture or
 * the rendered UI in JamboScreens — the physical presence of a product shot,
 * with no image assets and no layout shift.
 */

export interface BrowserFrameProps {
  children: ReactNode;
  /** Shown in the address pill. */
  url?: string;
  onDark?: boolean;
  className?: string;
}

export function BrowserFrame({
  children,
  url = "jambotickets.co.ke",
  onDark = false,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border shadow-elevated",
        onDark ? "border-white/12 bg-neutral-800" : "border-neutral-200 bg-neutral-100",
        className
      )}
    >
      {/* chrome */}
      <div
        className={cn(
          "flex items-center gap-3 border-b px-4 py-3",
          onDark ? "border-white/10 bg-neutral-800" : "border-neutral-200 bg-neutral-100"
        )}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        </div>
        <div
          className={cn(
            "flex min-w-0 flex-1 items-center gap-1.5 rounded-md px-3 py-1",
            onDark ? "bg-white/[0.06]" : "bg-white"
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 shrink-0 text-brand-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <span
            className={cn(
              "truncate font-mono text-[11px]",
              onDark ? "text-white/45" : "text-neutral-400"
            )}
          >
            {url}
          </span>
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

export interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[268px] rounded-[2.2rem] border border-neutral-300/80 bg-neutral-900 p-[6px] shadow-elevated",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[1.85rem] bg-white">
        {/* notch */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900"
        />
        {children}
      </div>
    </div>
  );
}
