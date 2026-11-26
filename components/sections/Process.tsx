import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { process } from "@/lib/content/home";

/**
 * Process as a horizontal track on wide screens, a vertical spine on
 * narrow ones. Step numbers are set in the mono face — the small technical
 * detail that makes a seven-step list read as a method rather than filler.
 */
export function Process() {
  return (
    <Section tone="light" space="lg">
      <Container width="wide">
        <ScrollReveal variant="up">
          <SectionHeading
            label="Process"
            title="How a project moves from idea to a live product"
            description="Seven steps, run the same way every time, so you always know where the work stands."
          />
        </ScrollReveal>

        {/* Wide: a stepped track */}
        <Stagger
          className="mt-16 hidden grid-cols-7 gap-4 lg:grid"
          as="ul"
          step={0.06}
        >
          {process.map((item, index) => (
            <StaggerItem key={item.step} as="li" variant="up">
              <div className="group h-full">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-medium text-brand-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-gradient-to-r from-brand-300 to-neutral-200"
                  />
                </div>
                <h3 className="mt-5 text-lg">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Narrow: a vertical spine */}
        <Stagger className="mt-12 flex max-w-2xl flex-col lg:hidden" as="ul">
          {process.map((item, index) => {
            const isLast = index === process.length - 1;
            return (
              <StaggerItem key={item.step} as="li" variant="up">
                <div className="relative flex gap-5 pb-9">
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[17px] top-9 h-[calc(100%-1.75rem)] w-px bg-neutral-200"
                    />
                  )}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 font-mono text-xs font-medium text-brand-700"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg">{item.step}</h3>
                    <p className="mt-1.5 text-base text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
