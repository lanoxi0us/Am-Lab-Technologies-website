import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { LogoMark } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/content/site";
import { whyAmLabs } from "@/lib/content/home";

export const metadata: Metadata = {
  title: "About",
  description:
    "AM Labs is a technology company based in Kenya, focused on building reliable digital products and software solutions that solve real problems.",
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <PageHeader
          label="About"
          title="A small, real company — engineered like it won't stay that way."
        />

        {/* Positioning statement, given the weight of a pull quote. */}
        <Section tone="light" space="lg">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
            <ScrollReveal variant="right">
              <p className="text-pretty text-xl leading-relaxed text-neutral-600 md:text-2xl">
                {siteConfig.aboutShort}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={0.1}>
              <figure className="relative isolate overflow-hidden rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50 to-white p-9 md:p-11">
                <LogoMark className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 text-brand-500/[0.07]" />
                <blockquote className="relative">
                  <p className="text-pretty font-display text-2xl font-semibold leading-snug text-neutral-900 md:text-3xl">
                    AM Labs builds digital products that help ideas become
                    products, and products become businesses.
                  </p>
                </blockquote>
              </figure>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Where we are today */}
        <Section tone="white" space="lg" texture="grid" seam>
          <Container className="max-w-3xl">
            <ScrollReveal variant="up">
              <SectionHeading
                label="Where we are today"
                title="Honest about the stage we're at"
                size="lg"
              />
              <p className="mt-8 text-pretty text-lg leading-relaxed text-neutral-600">
                We&rsquo;re a small team, not a large agency — and we&rsquo;re not
                pretending otherwise. What we have is real engineering discipline
                applied to real projects, starting with Jambo Tickets, our first
                flagship product. We&rsquo;d rather grow into the company
                we&rsquo;re building toward than exaggerate our way there.
              </p>
              <Link
                href="/work"
                className="group mt-8 inline-flex items-center gap-1.5 font-display text-base font-semibold text-brand-700 hover:text-brand-900"
              >
                See our work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Principles */}
        <Section tone="dark" space="lg" texture="grid-dark">
          <Container>
            <ScrollReveal variant="up">
              <SectionHeading
                label="How we work"
                title="The principles behind the work"
                onDark
              />
            </ScrollReveal>

            <Stagger className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyAmLabs.map((pillar) => (
                <StaggerItem key={pillar.name} variant="up">
                  <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.06]">
                    <h3 className="text-xl text-white">{pillar.name}</h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      {pillar.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        {/* Built in Kenya — the positioning line, given one deliberate home. */}
        <Section tone="light" space="md">
          <Container className="max-w-3xl text-center">
            <ScrollReveal variant="fade">
              <LogoMark className="mx-auto h-10 w-10 text-brand-800" />
              <p className="mt-7 text-balance font-display text-3xl font-semibold text-neutral-900 md:text-4xl">
                {siteConfig.tagline}
              </p>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-neutral-500">
                We&rsquo;re based in {siteConfig.contact.location}, and we build to a
                standard that travels.
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
