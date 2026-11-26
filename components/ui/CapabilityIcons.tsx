import type { SVGProps } from "react";

/**
 * In-house capability icon set.
 *
 * Drawn on a shared 24x24 grid at a single 1.5 stroke weight with square
 * geometry and consistent optical margins, so the six read as one family.
 * Deliberately not pulled from a general-purpose icon library — a bespoke
 * set is one of the cheapest, most legible signals that a brand's visual
 * system was actually designed rather than assembled.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: "false" as const,
};

/** Web — a browser plane with a structured layout beneath the chrome. */
export function IconWeb(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M2.5 8.5h19" />
      <path d="M5.5 6.25h.01M7.75 6.25h.01M10 6.25h.01" />
      <path d="M6 12h5v5H6zM14 12h4M14 15h4" />
    </svg>
  );
}

/** Mobile — a handset with a live surface and a home indicator. */
export function IconMobile(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.25 5.25h3.5" />
      <path d="M10 18.75h4" />
      <path d="M9.25 9h5.5M9.25 12h3" />
    </svg>
  );
}

/** SaaS — stacked tenants sharing one platform layer. */
export function IconSaas(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.75 21 7l-9 4.25L3 7l9-4.25Z" />
      <path d="M3 12l9 4.25L21 12" />
      <path d="M3 16.75 12 21l9-4.25" />
    </svg>
  );
}

/** Custom software — a bespoke module machined to fit an existing system. */
export function IconCustomSoftware(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h6.25v16H5.5A2.5 2.5 0 0 1 3 17.5v-11Z" />
      <path d="M11.75 8.5H18a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-6.25" />
      <path d="M6.25 9.5l1.75 2-1.75 2" />
    </svg>
  );
}

/** Integrations — two systems joined by a clean, deliberate seam. */
export function IconIntegrations(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="8.5" width="7" height="7" rx="2" />
      <rect x="14.5" y="8.5" width="7" height="7" rx="2" />
      <path d="M9.5 12h5" />
      <path d="M12 6.5v-3M12 20.5v-3" />
    </svg>
  );
}

/** Digital products — a prototype resolving into a shipped release. */
export function IconDigitalProduct(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.75 20.5 7.5v9L12 21.25 3.5 16.5v-9L12 2.75Z" />
      <path d="M12 11.5 20.5 7.5M12 11.5 3.5 7.5M12 11.5v9.75" />
    </svg>
  );
}

/** Maps a capability name from the content layer to its icon. */
export const capabilityIcons: Record<string, (p: IconProps) => JSX.Element> = {
  Web: IconWeb,
  Mobile: IconMobile,
  SaaS: IconSaas,
  "Custom Software": IconCustomSoftware,
  Integrations: IconIntegrations,
  "Digital Products": IconDigitalProduct,
};
