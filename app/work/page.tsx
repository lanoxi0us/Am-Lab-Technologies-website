import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real projects built by AM Labs, starting with Jambo Tickets — a full-stack event ticketing platform.",
};

export default function WorkPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <PageHeader
          label="Work"
          title="Real projects, built end to end"
          description="Every project here is a real, shipped build — no fabricated case studies, no borrowed logos."
        />

        <Section tone="light" space="lg">
          <Container>
            <div className="flex flex-col gap-10">
              {projects.map((project) => (
                <ScrollReveal key={project.slug} variant="up">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-300 hover:shadow-elevated"
                  >
                    {/* live preview of the product, not a stock image */}
                    <div className="texture-grain relative isolate overflow-hidden bg-brand-900 px-6 pt-12 sm:px-12 sm:pt-16">
                      <div
                        aria-hidden="true"
                        className="glow-brand-dark pointer-events-none absolute inset-0 -z-10"
                      />
                      <div className="mx-auto max-w-3xl translate-y-2 transition-transform duration-500 ease-smooth group-hover:translate-y-0">
                        <Image
                          src="/work/jambo-tickets-events-desktop.png"
                          alt="Jambo Tickets event listings open in a desktop browser"
                          width={1609}
                          height={977}
                          sizes="(min-width: 1024px) 75vw, 100vw"
                          className="h-auto w-full rounded-2xl shadow-elevated"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 p-8 sm:p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center md:gap-12">
                      <div>
                        <h2 className="text-2xl md:text-3xl">{project.name}</h2>
                        <p className="mt-2 font-mono text-xs uppercase tracking-label text-brand-700">
                          {project.slogan}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg text-neutral-500">{project.summary}</p>
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="mono">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <span className="mt-6 inline-flex items-center gap-1.5 font-display text-base font-semibold text-brand-700">
                          View case study
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Honest about the stage the company is at, rather than padding
                the page with invented projects. */}
            <ScrollReveal variant="up" delay={0.1}>
              <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 bg-white/50 p-10 text-center">
                <p className="font-display text-xl text-neutral-900">
                  More case studies are on the way.
                </p>
                <p className="mx-auto mt-3 max-w-md text-base text-neutral-500">
                  We publish work once it&rsquo;s real and shipped. If you&rsquo;d
                  like to be the next one, we should talk.
                </p>
                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-1.5 font-display text-base font-semibold text-brand-700 hover:text-brand-900"
                >
                  Start a Project
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
