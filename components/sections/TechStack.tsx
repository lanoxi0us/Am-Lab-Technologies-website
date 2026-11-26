import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { techGroups, techIntro } from "@/lib/content/home";

/**
 * Technology, grouped by purpose and set in the mono face. Deliberately the
 * lightest section on the page — a narrow band between two heavy blocks —
 * and deliberately not a grid of vendor logos, which says nothing about how
 * a team actually works.
 */
export function TechStack() {
  return (
    <Section tone="white" space="md" seam>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <ScrollReveal variant="right">
          <SectionHeading
            label={techIntro.label}
            title={techIntro.title}
            description={techIntro.description}
          />
        </ScrollReveal>

        <Stagger className="flex flex-col" as="ul" step={0.06}>
          {techGroups.map((group) => (
            <StaggerItem key={group.area} as="li" variant="left">
              <div className="grid grid-cols-1 gap-3 border-t border-neutral-200 py-5 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs uppercase tracking-label text-neutral-400">
                  {group.area}
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-base font-medium text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
