import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { siteConfig, footerLinkGroups } from "@/lib/content/site";

/**
 * The footer is the page's final dark surface — it closes the document the
 * way the hero opens it, and carries the oversized mark as a quiet brand
 * signature rather than a decorative flourish.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="texture-grain relative isolate overflow-hidden bg-brand-900 text-white">
      <div
        aria-hidden="true"
        className="glow-brand-dark pointer-events-none absolute inset-0 -z-10"
      />

      {/* oversized mark, bled off the right edge */}
      <LogoMark className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-white/[0.03] md:-right-8 md:h-96 md:w-96" />

      <Container className="relative py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-6 text-base leading-relaxed text-white/60">
              {siteConfig.aboutShort}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="section-label-dark">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-white/60 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="section-label-dark">Contact</h3>
              <ul className="mt-4 flex flex-col gap-3 text-[15px] text-white/60">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-all transition-colors duration-200 hover:text-white"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>{siteConfig.contact.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/45">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="font-mono text-[10px] text-white/35">
              {siteConfig.legalName} was founded by developer Alan Mugambi.
            </p>
            <p className="font-mono text-xs uppercase tracking-label text-brand-300">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
