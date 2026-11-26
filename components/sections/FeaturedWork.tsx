import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { projects } from "@/lib/content/work";

/**
 * The page's dark centrepiece — full-bleed brand-900 with grain and glow,
 * and the only place on the homepage that shows an application interface at
 * scale. Deliberately the heaviest section on the page: it's the one piece
 * of real proof the company has, so it gets the most weight.
 */
export function FeaturedWork() {
  const project = projects[0];

  return (
    <Section tone="deep" space="xl" texture="grain" glow>
      <Container>
        <ScrollReveal variant="up">
          <SectionHeading
            label="Featured work"
            title="One real project, built end to end"
            description={project.slogan}
            size="lg"
            onDark
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <ScrollReveal variant="right">
            <Image
              src="/work/jambo-tickets-events-desktop.png"
              alt="Jambo Tickets event listings open in a desktop browser"
              width={1609}
              height={977}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full rounded-2xl shadow-elevated"
            />
          </ScrollReveal>

          <ScrollReveal variant="left" delay={0.1}>
            <div>
              <h3 className="font-display text-3xl font-semibold text-white md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-white/65">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline-dark">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Link
                href={`/work/${project.slug}`}
                className="group mt-10 inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-display text-base font-semibold text-white transition-all duration-200 hover:border-brand-400 hover:bg-white/[0.07]"
              >
                View case study
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
