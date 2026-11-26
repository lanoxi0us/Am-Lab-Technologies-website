import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { hero } from "@/lib/content/home";
import { ArrowRight } from "lucide-react";

/**
 * The hero. Two things it must do that the previous version didn't: show
 * actual product on first paint, and do so on every screen size — the old
 * graphic was hidden below `lg`, which left mobile visitors reading plain
 * text on a plain background.
 */
export function Hero() {
  return (
    <section className="texture-dots relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="glow-brand-light pointer-events-none absolute inset-0 -z-10"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div>
          <ScrollReveal variant="fade" delay={0.05}>
            <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.12}>
            <p className="mt-7 max-w-xl text-pretty text-lg text-neutral-500 md:text-xl">
              {hero.subhead}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.19}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Product, composed. Scales down rather than disappearing on mobile. */}
        <ScrollReveal variant="scale" delay={0.15} className="relative">
          <div className="relative mx-auto max-w-lg pb-14 sm:max-w-2xl lg:max-w-none lg:pb-16">
            <Image
              src="/work/jambo-tickets-events-desktop.png"
              alt="Jambo Tickets event listings open in a desktop browser"
              width={1609}
              height={977}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="block h-auto w-full rounded-2xl shadow-elevated"
            />
            <Image
              src="/work/jambo-tickets-events-mobile.png"
              alt="Jambo Tickets event listings displayed on a mobile phone"
              width={1024}
              height={1536}
              sizes="(min-width: 1280px) 190px, (min-width: 1024px) 174px, (min-width: 640px) 148px, 118px"
              className="absolute bottom-0 left-0 z-10 h-auto w-[118px] drop-shadow-xl sm:-left-3 sm:w-[148px] lg:-left-4 lg:w-[174px] xl:w-[190px]"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
