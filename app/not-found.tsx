import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <section className="texture-dots relative isolate overflow-hidden py-28 md:py-40">
          <div
            aria-hidden="true"
            className="glow-brand-light pointer-events-none absolute inset-0 -z-10"
          />
          <LogoMark className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 text-brand-500/[0.05] md:h-[28rem] md:w-[28rem]" />

          <Container className="relative max-w-xl">
            <span className="section-label">Error 404</span>
            <h1 className="mt-4 text-balance text-4xl md:text-5xl lg:text-6xl">
              This page doesn&rsquo;t exist.
            </h1>
            <p className="mt-6 text-pretty text-lg text-neutral-500">
              The page you&rsquo;re looking for may have moved or never existed.
              Let&rsquo;s get you back on track.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/" size="lg">
                Back to Home
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Start a Project
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
