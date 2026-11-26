import localFont from "next/font/local";

/**
 * Display / heading typeface — Plus Jakarta Sans.
 *
 * A geometric humanist sans with refined, low-contrast letterforms. Chosen
 * to sit in the same family of shapes as the AM Labs wordmark on the
 * company's existing print collateral, and because it reads as premium
 * without the quirky, novelty details that made the previous display face
 * (Space Grotesk) feel less serious at large sizes.
 *
 * Self-hosted variable woff2 — no external font requests at runtime.
 */
export const displayFont = localFont({
  src: "../public/fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-display",
  weight: "300 800",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

/**
 * Body typeface — Inter. A neutral, highly legible workhorse for
 * paragraphs, UI copy and form fields. Deliberately quieter than the
 * display face so headings carry the personality.
 */
export const bodyFont = localFont({
  src: "../public/fonts/Inter-Variable.woff2",
  variable: "--font-body",
  weight: "400 600",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "sans-serif"],
});

/**
 * Technical accent face — Geist Mono. Used sparingly for process step
 * numbers, tech-stack tags and device-frame chrome.
 */
export const monoFont = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-mono",
  weight: "400 600",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});
