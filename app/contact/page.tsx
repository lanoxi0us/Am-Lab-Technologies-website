import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { LogoMark } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell AM Labs about the product you want to build — website, mobile app, SaaS platform, or custom software.",
};

const WHAT_HAPPENS_NEXT = [
  "We read what you sent and come back with real questions, not a template reply.",
  "If it's a fit, we scope the work and give you an honest timeline and cost.",
  "If it isn't, we'll say so — and point you somewhere better where we can.",
];

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <PageHeader
          label="Start a Project"
          title="Tell us what you're building"
          description="A few details up front helps us respond with something useful, not a generic reply."
        />

        <Section tone="light" space="lg">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
            {/* Form */}
            <ScrollReveal variant="up">
              <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-card md:p-10">
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              <ScrollReveal variant="left" delay={0.08}>
                <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-brand-900 p-8 text-white">
                  <LogoMark className="pointer-events-none absolute -bottom-8 -right-6 h-40 w-40 text-white/[0.04]" />
                  <h2 className="section-label-dark">What happens next</h2>
                  <ol className="relative mt-6 flex flex-col gap-6">
                    {WHAT_HAPPENS_NEXT.map((item, index) => (
                      <li key={item} className="flex gap-4">
                        <span
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] font-mono text-[11px] text-brand-300"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[15px] leading-relaxed text-white/70">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="left" delay={0.16}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-card">
                  <h2 className="section-label">Prefer to talk directly</h2>

                  <ul className="mt-6 flex flex-col gap-5">
                    <li>
                      <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3.5 text-neutral-900"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-brand-700 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-[15px] font-medium transition-colors group-hover:text-brand-700">
                            WhatsApp
                          </span>
                          <span className="block text-sm text-neutral-500">
                            Usually the fastest way
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="group flex items-center gap-3.5 text-neutral-900"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-brand-700 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-medium transition-colors group-hover:text-brand-700">
                            Email
                          </span>
                          <span className="block break-all text-sm text-neutral-500">
                            {siteConfig.contact.email}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="group flex items-center gap-3.5 text-neutral-900"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-brand-700 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-[15px] font-medium transition-colors group-hover:text-brand-700">
                            Phone
                          </span>
                          <span className="block text-sm text-neutral-500">
                            {siteConfig.contact.phone}
                          </span>
                        </span>
                      </a>
                    </li>

                    <li className="flex items-center gap-3.5">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-400">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[15px] font-medium">Based in</span>
                        <span className="block text-sm text-neutral-500">
                          {siteConfig.contact.location}
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
