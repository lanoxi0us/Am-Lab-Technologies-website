import type { Metadata } from "next";
import { Check } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { Process } from "@/components/sections/Process";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { capabilityIcons } from "@/components/ui/CapabilityIcons";
import { serviceCategories } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Build, Mobile, Scale, Integrate, Design, and Support — six ways AM Labs helps ambitious businesses build software properly.",
};

/**
 * Service category → capability icon. Reuses the bespoke set from the
 * homepage so a visitor moving between pages sees one consistent visual
 * language rather than two unrelated ones.
 */
const ICON_FOR_SERVICE: Record<string, string> = {
  build: "Web",
  mobile: "Mobile",
  scale: "SaaS",
  integrate: "Integrations",
  design: "Digital Products",
  support: "Custom Software",
};

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <PageHeader
          label="Services"
          title="What we build, and how we build it"
          description="Six areas of work, covering the full path from a first idea to a product your business can run on."
        />

        {/* Anchor strip — makes the long page navigable without a sidebar. */}
        <div className="sticky top-20 z-30 border-b border-neutral-200 bg-neutral-50/85 backdrop-blur-xl">
          <Container>
            <nav aria-label="Services" className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto py-3">
              {serviceCategories.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-label text-neutral-500 transition-colors duration-200 hover:bg-white hover:text-brand-700"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </Container>
        </div>

        {/* Alternating tone per category — the simplest way to stop six
            long content blocks reading as one undifferentiated page. */}
        {serviceCategories.map((category, index) => {
          const Icon = capabilityIcons[ICON_FOR_SERVICE[category.slug] ?? "Web"];
          const isEven = index % 2 === 0;

          return (
            <Section
              key={category.slug}
              id={category.slug}
              tone={isEven ? "light" : "white"}
              space="md"
              texture={isEven ? "none" : "grid"}
              seam={!isEven}
              className="scroll-mt-32"
            >
              <Container className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
                <ScrollReveal variant="right">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-brand-700">
                      {Icon ? <Icon className="h-5 w-5" /> : null}
                    </span>
                    <div>
                      <span className="font-mono text-xs text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-1 text-3xl md:text-4xl">{category.name}</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-neutral-600">
                    {category.description}
                  </p>
                </ScrollReveal>

                <ScrollReveal variant="left" delay={0.08}>
                  <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
                    {category.subServices.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-start gap-3 bg-white p-5 text-base text-neutral-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          aria-hidden="true"
                        />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </Container>
            </Section>
          );
        })}

        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
