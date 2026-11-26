import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { whyAmLabs } from "@/lib/content/home";

/**
 * Principles, on the near-black neutral surface rather than brand green —
 * the page already spends its green on FeaturedWork and the footer, and a
 * third green section in one scroll would flood it.
 */
export function WhyAmLabsSection() {
  return (
    <Section tone="dark" space="lg" texture="grid-dark">
      <Container>
        <ScrollReveal variant="up">
          <SectionHeading
            label="Why AM Labs"
            title="Built the way a larger company would build it"
            description="Small today, on purpose. Engineered for what comes after."
            onDark
          />
        </ScrollReveal>

        <Stagger className="mt-16 border-t border-white/10" as="ul">
          {whyAmLabs.map((pillar, index) => (
            <StaggerItem key={pillar.name} as="li" variant="up">
              <div className="group grid grid-cols-1 gap-3 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[auto_260px_minmax(0,1fr)] sm:items-baseline sm:gap-8">
                <span className="font-mono text-xs text-white/25 transition-colors duration-300 group-hover:text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl text-white">{pillar.name}</h3>
                <p className="text-base leading-relaxed text-white/60">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
