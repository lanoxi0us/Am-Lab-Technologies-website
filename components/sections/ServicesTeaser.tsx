import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { serviceCategories } from "@/lib/content/services";

/**
 * Services as numbered editorial rows rather than a card grid — the page
 * already has one grid (Capabilities), and repeating the shape is what
 * makes a scroll feel monotonous. Full-width rows also give the service
 * names room to be read as a list of disciplines.
 */
export function ServicesTeaser() {
  return (
    <Section tone="white" space="lg" texture="grid" seam>
      <Container>
        <ScrollReveal variant="up">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              label="Services"
              title="Six ways we help you build"
              description="One team covering the full path from idea to a running product."
            />
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-1.5 font-display text-base font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              View all services
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </ScrollReveal>

        <Stagger className="mt-14 border-t border-neutral-200" as="ul">
          {serviceCategories.map((category, index) => (
            <StaggerItem key={category.slug} as="li" variant="up">
              <Link
                href={`/services#${category.slug}`}
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 border-b border-neutral-200 py-7 transition-colors duration-300 hover:bg-neutral-50/80 sm:gap-8 sm:py-8"
              >
                <span className="font-mono text-xs text-neutral-300 transition-colors duration-300 group-hover:text-brand-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="grid grid-cols-1 items-baseline gap-1 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-8">
                  <h3 className="text-xl transition-colors duration-300 group-hover:text-brand-800 md:text-2xl">
                    {category.name}
                  </h3>
                  <p className="text-base text-neutral-500">{category.tagline}</p>
                </div>

                <ArrowUpRight
                  className="h-5 w-5 text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                  aria-hidden="true"
                />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
