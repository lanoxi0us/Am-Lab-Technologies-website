import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { projects } from "@/lib/content/work";

export const metadata: Metadata = {
  title: "Jambo Tickets — Case Study",
  description:
    "How AM Labs built Jambo Tickets, a full-stack event ticketing platform covering authentication, event management, and ticketing.",
};

export default function JamboTicketsPage() {
  const project = projects.find((p) => p.slug === "jambo-tickets");
  if (!project) return notFound();

  return (
    <>
      <NavBar />
      <main id="main-content">
        {/* ---------------------------------------------------------------
            Masthead — dark, so the case study opens with the weight of a
            product page rather than another white content section.
            --------------------------------------------------------------- */}
        <Section tone="deep" space="lg" texture="grain" glow>
          <Container>
            <ScrollReveal variant="fade">
              <span className="section-label-dark">Case study</span>
              <h1 className="mt-4 text-balance text-5xl text-white md:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg text-white/65 md:text-xl">
                {project.slogan}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline-dark">
                    {tech}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Actual desktop and mobile captures supplied for Jambo Tickets. */}
        <Section tone="light" space="lg">
          <Container width="wide">
            <ScrollReveal variant="scale">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)] lg:gap-12">
                <Image
                  src="/work/jambo-tickets-events-desktop.png"
                  alt="Jambo Tickets event listings open in a desktop browser"
                  width={1609}
                  height={977}
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  className="h-auto w-full rounded-2xl shadow-card"
                />
                <div className="mx-auto w-full max-w-[280px] lg:max-w-[310px]">
                  <Image
                    src="/work/jambo-tickets-events-mobile.png"
                    alt="Jambo Tickets event listings displayed on a mobile phone"
                    width={1024}
                    height={1536}
                    sizes="(min-width: 1024px) 310px, 80vw"
                    className="h-auto w-full rounded-2xl shadow-card"
                  />
                </div>
              </div>
            </ScrollReveal>

            <p className="mt-6 text-center font-mono text-xs text-neutral-400">
              Jambo Tickets event listings on desktop and mobile
            </p>
          </Container>
        </Section>

        {/* Problem / Approach */}
        <Section tone="white" space="lg" texture="grid" seam>
          <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <ScrollReveal variant="right">
              <span className="section-label">Problem</span>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600">
                {project.problem}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="left" delay={0.08}>
              <span className="section-label">Approach</span>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600">
                {project.approach}
              </p>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Technology */}
        <Section tone="dark" space="md" texture="grid-dark">
          <Container>
            <ScrollReveal variant="up">
              <SectionHeading
                label="Technology"
                title="How it's put together"
                description={`Built as a full-stack web application: a ${project.techStack[0]} front end, a ${project.techStack[1]} backend and API layer, and ${project.techStack[2]} for data storage.`}
                onDark
              />
            </ScrollReveal>

            <Stagger className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3" step={0.08}>
              {[
                { layer: "Front end", value: project.techStack[0] },
                { layer: "Backend & API", value: project.techStack[1] },
                { layer: "Data", value: project.techStack[2] },
              ].map((row) => (
                <StaggerItem key={row.layer} variant="up">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="font-mono text-xs uppercase tracking-label text-brand-300">
                      {row.layer}
                    </p>
                    <p className="mt-3 font-display text-2xl font-semibold text-white">
                      {row.value}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        {/* Key features */}
        <Section tone="white" space="lg" seam>
          <Container>
            <ScrollReveal variant="up">
              <SectionHeading label="Key features" title="What the platform does" />
            </ScrollReveal>

            <Stagger className="mt-12 border-t border-neutral-200" as="ul">
              {project.features.map((feature, index) => (
                <StaggerItem key={feature.name} as="li" variant="up">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-b border-neutral-200 py-7 sm:grid-cols-[auto_260px_minmax(0,1fr)] sm:items-baseline sm:gap-8">
                    <span className="font-mono text-xs text-neutral-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl">{feature.name}</h3>
                    <p className="col-start-2 text-base text-neutral-500 sm:col-start-3">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        {/* What's next */}
        <Section tone="light" space="lg">
          <Container className="max-w-3xl">
            <ScrollReveal variant="up">
              <SectionHeading
                label="What's next"
                title="Still an active project"
                description={project.whatsNext}
                size="lg"
              />
              <Button href="/contact" size="lg" className="mt-10">
                Start a Project
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
