import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LogoMark } from "@/components/brand/Logo";
import { finalCta } from "@/lib/content/home";
import { siteConfig } from "@/lib/content/site";

export function FinalCta() {
  return (
    <Section tone="light" space="lg">
      <Container>
        <ScrollReveal variant="scale">
          <div className="relative isolate overflow-hidden rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50 via-white to-brand-50/40 px-8 py-14 md:px-16 md:py-20">
            {/* oversized mark as a watermark, bled off the edge */}
            <LogoMark className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 text-brand-500/[0.07] md:h-80 md:w-80" />

            <div className="relative max-w-2xl">
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mt-5 text-pretty text-lg text-neutral-600">
                {finalCta.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={finalCta.primaryCta.href} size="lg">
                  {finalCta.primaryCta.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  href={siteConfig.contact.whatsappUrl}
                  variant="secondary"
                  size="lg"
                  external
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
