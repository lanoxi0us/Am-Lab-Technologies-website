import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, Stagger, StaggerItem } from "@/components/motion/ScrollReveal";
import { capabilityIcons } from "@/components/ui/CapabilityIcons";
import { capabilities } from "@/lib/content/home";
import { cn } from "@/lib/utils";

/**
 * Capabilities, as a bento grid.
 *
 * Six equal cards in a 3x2 grid is the single most template-looking block a
 * marketing site can have. Unequal cells give the eye somewhere to land
 * first, while the bespoke icon set does the work of making the grid feel
 * designed rather than assembled.
 */

// Cell spans across a 6-column track — the last two get the wide cells.
const SPANS = [
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function Capabilities() {
  return (
    <Section tone="white" space="lg" seam>
      <Container>
        <ScrollReveal variant="up">
          <SectionHeading
            label="What we build"
            title="Six capabilities, one engineering standard"
            description="The work spans different surfaces and stacks, but it's built to the same bar every time."
          />
        </ScrollReveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[capability.name];
            return (
              <StaggerItem
                key={capability.name}
                variant="up"
                className={cn(SPANS[index] ?? "md:col-span-2")}
              >
                <div className="group relative h-full overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50/60 p-7 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-brand-700 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>

                  <h3 className="mt-6 text-xl">{capability.name}</h3>
                  <p className="mt-2 max-w-md text-base text-neutral-500">
                    {capability.description}
                  </p>

                  {/* hairline that draws in on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-transparent transition-transform duration-500 ease-smooth group-hover:scale-x-100"
                  />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
