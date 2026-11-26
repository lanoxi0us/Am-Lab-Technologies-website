import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { BrowserFrame, PhoneFrame } from "@/components/ui/DeviceFrame";
import { capabilityIcons } from "@/components/ui/CapabilityIcons";
import { JamboDiscoverScreen, JamboTicketScreen } from "@/components/work/JamboScreens";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

/**
 * Internal reference for the design system. Not linked from the site nav
 * and excluded from search indexing — it exists so the whole visual
 * language can be reviewed on one screen.
 */

const SWATCHES = [
  { name: "brand-50", class: "bg-brand-50", hex: "#F0FAF4" },
  { name: "brand-100", class: "bg-brand-100", hex: "#D6F0E0" },
  { name: "brand-300", class: "bg-brand-300", hex: "#6ECB9B" },
  { name: "brand-500", class: "bg-brand-500", hex: "#16A34A" },
  { name: "brand-700", class: "bg-brand-700", hex: "#166534" },
  { name: "brand-800", class: "bg-brand-800", hex: "#0D5538" },
  { name: "brand-900", class: "bg-brand-900", hex: "#052E16" },
  { name: "neutral-50", class: "bg-neutral-50", hex: "#F8FAFC" },
  { name: "neutral-200", class: "bg-neutral-200", hex: "#E2E8F0" },
  { name: "neutral-500", class: "bg-neutral-500", hex: "#64748B" },
  { name: "neutral-900", class: "bg-neutral-900", hex: "#0F172A" },
];

const TYPE_SCALE = [
  { name: "7xl", class: "text-7xl" },
  { name: "6xl", class: "text-6xl" },
  { name: "5xl", class: "text-5xl" },
  { name: "4xl", class: "text-4xl" },
  { name: "3xl", class: "text-3xl" },
  { name: "2xl", class: "text-2xl" },
  { name: "xl", class: "text-xl" },
];

export default function StyleGuidePage() {
  return (
    <main className="pb-32">
      <Section tone="deep" space="md" texture="grain" glow>
        <Container>
          <span className="section-label-dark">Internal</span>
          <h1 className="mt-4 text-4xl text-white md:text-5xl">AM Labs Design System</h1>
        </Container>
      </Section>

      {/* Logo */}
      <Section tone="light" space="md">
        <Container>
          <SectionHeading label="Logo" title="Mark and lockup" />
          <div className="mt-8 flex flex-wrap items-center gap-10">
            <Logo />
            <LogoMark className="h-12 w-12 text-brand-800" />
            <LogoMark className="h-8 w-8 text-brand-800" />
            <LogoMark className="h-5 w-5 text-brand-800" />
            <div className="rounded-lg bg-brand-900 p-6">
              <Logo onDark />
            </div>
          </div>
        </Container>
      </Section>

      {/* Colour */}
      <Section tone="white" space="md" seam>
        <Container>
          <SectionHeading label="Colour" title="Palette" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {SWATCHES.map((s) => (
              <div key={s.name}>
                <div className={`h-20 rounded-lg border border-neutral-200 ${s.class}`} />
                <p className="mt-2 font-mono text-xs text-neutral-900">{s.name}</p>
                <p className="font-mono text-xs text-neutral-400">{s.hex}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Type */}
      <Section tone="light" space="md">
        <Container>
          <SectionHeading
            label="Typography"
            title="Plus Jakarta Sans, Inter, Geist Mono"
          />
          <div className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-8">
            {TYPE_SCALE.map((t) => (
              <div key={t.name} className="flex items-baseline gap-6">
                <span className="w-12 shrink-0 font-mono text-xs text-neutral-400">
                  {t.name}
                </span>
                <span className={`${t.class} font-display font-semibold`}>
                  Engineered properly
                </span>
              </div>
            ))}
            <div className="mt-4 flex items-baseline gap-6">
              <span className="w-12 shrink-0 font-mono text-xs text-neutral-400">body</span>
              <p className="max-w-xl text-lg text-neutral-500">
                Body copy is set in Inter — quieter than the display face, so
                headings carry the personality.
              </p>
            </div>
            <div className="flex items-baseline gap-6">
              <span className="w-12 shrink-0 font-mono text-xs text-neutral-400">mono</span>
              <span className="section-label">Section label</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section tone="white" space="md" seam>
        <Container>
          <SectionHeading label="Buttons" title="Variants and sizes" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg">Primary large</Button>
            <Button>Primary</Button>
            <Button size="sm">Primary small</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl bg-brand-900 p-8">
            <Button variant="on-dark">On dark</Button>
            <Button variant="secondary-on-dark">Secondary on dark</Button>
            <Button variant="ghost-on-dark">Ghost on dark</Button>
          </div>
        </Container>
      </Section>

      {/* Cards + badges */}
      <Section tone="light" space="md">
        <Container>
          <SectionHeading label="Surfaces" title="Cards and badges" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <h3 className="text-xl">Static card</h3>
              <p className="mt-2 text-base text-neutral-500">Default surface.</p>
            </Card>
            <Card hoverable>
              <h3 className="text-xl">Hoverable</h3>
              <p className="mt-2 text-base text-neutral-500">Lifts on hover.</p>
            </Card>
            <div className="rounded-xl bg-brand-900 p-4">
              <Card onDark hoverable>
                <h3 className="text-xl text-white">On dark</h3>
                <p className="mt-2 text-base text-white/60">Dark surface variant.</p>
              </Card>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="mono">Mono</Badge>
          </div>
        </Container>
      </Section>

      {/* Icons */}
      <Section tone="white" space="md" seam>
        <Container>
          <SectionHeading label="Icons" title="Bespoke capability set" />
          <div className="mt-8 flex flex-wrap gap-4">
            {Object.entries(capabilityIcons).map(([name, Icon]) => (
              <div
                key={name}
                className="flex w-36 flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white p-5"
              >
                <Icon className="h-7 w-7 text-brand-700" />
                <span className="text-center font-mono text-[11px] text-neutral-500">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Device frames */}
      <Section tone="light" space="md">
        <Container>
          <SectionHeading label="Frames" title="Device chrome" />
          <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <BrowserFrame>
              <JamboDiscoverScreen />
            </BrowserFrame>
            <PhoneFrame>
              <JamboTicketScreen />
            </PhoneFrame>
          </div>
        </Container>
      </Section>
    </main>
  );
}
