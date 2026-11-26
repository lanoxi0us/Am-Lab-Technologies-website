import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Brand green scale. `800` is sampled directly from the AM Labs
         * logo mark and is the authoritative "logo green" — the rest of
         * the scale is built around it. Green stays an accent and a
         * dark-surface colour; it never floods a light section.
         */
        brand: {
          50: "#F0FAF4",
          100: "#D6F0E0",
          200: "#A9E0C2",
          300: "#6ECB9B",
          400: "#34B06F",
          500: "#16A34A", // primary actions, links, accents
          600: "#12813C",
          700: "#166534", // hover / deep accents
          800: "#0D5538", // logo green
          900: "#052E16", // premium dark section background
          950: "#03210F",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B", // secondary / muted text
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A", // dark text, dark sections
          950: "#080F1D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial type scale. Tight tracking at display sizes is what
        // separates a premium wordmark-led brand from a default template.
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.55" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.018em" }],
        "4xl": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.022em" }],
        "5xl": ["2.875rem", { lineHeight: "1.08", letterSpacing: "-0.028em" }],
        "6xl": ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.032em" }],
        "7xl": ["4.5rem", { lineHeight: "0.98", letterSpacing: "-0.036em" }],
        "8xl": ["5.75rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      },
      letterSpacing: {
        label: "0.14em",
      },
      maxWidth: {
        content: "1280px",
        wide: "1520px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        // Ambient + key light, rather than a single flat drop shadow.
        card: "0 1px 2px rgba(8, 15, 29, 0.04), 0 4px 16px -8px rgba(8, 15, 29, 0.10)",
        "card-hover":
          "0 2px 4px rgba(8, 15, 29, 0.05), 0 18px 40px -16px rgba(8, 15, 29, 0.22)",
        elevated:
          "0 2px 6px rgba(8, 15, 29, 0.05), 0 32px 64px -24px rgba(8, 15, 29, 0.28)",
        "glow-brand": "0 18px 48px -20px rgba(22, 163, 74, 0.55)",
        "inner-hairline": "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.4, 0.64, 1)",
      },
      keyframes: {
        "menu-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
        "sheen": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        "menu-in": "menu-in 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        "fade-in": "fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
