import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

/** Shared masthead for inner pages, set on a restrained textured surface. */
export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="texture-dots relative isolate overflow-hidden border-b border-neutral-200 bg-white py-20 md:py-24">
      <div
        aria-hidden="true"
        className="glow-brand-light pointer-events-none absolute inset-0 -z-10"
      />
      <Container>
        <ScrollReveal variant="fade">
          <span className="section-label">{label}</span>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-pretty text-lg text-neutral-500 md:text-xl">
              {description}
            </p>
          )}
        </ScrollReveal>
      </Container>
    </section>
  );
}
