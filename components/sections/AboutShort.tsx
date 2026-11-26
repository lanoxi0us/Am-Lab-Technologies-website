import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { siteConfig } from "@/lib/content/site";

/**
 * Deliberately the quietest block on the page — tight vertical space, a
 * single oversized statement, no cards. It works as a breath between two
 * dense sections.
 */
export function AboutShort() {
  return (
    <Section tone="light" space="md">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-20">
        <ScrollReveal variant="right">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">
            A small company,{" "}
            <span className="text-neutral-400">built like a bigger one.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={0.1}>
          <div className="max-w-2xl lg:pt-2">
            <p className="text-pretty text-lg leading-relaxed text-neutral-600">
              {siteConfig.aboutShort}
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-1.5 font-display text-base font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              More about us
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
