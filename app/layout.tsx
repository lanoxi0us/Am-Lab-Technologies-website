import type { Metadata, Viewport } from "next";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/content/site";
import "./globals.css";

const siteUrl = "https://amlabs.co.ke";

const title = "AM Labs — Digital Products, Engineered Properly";
const description =
  "AM Labs designs and builds modern software, web platforms, and mobile applications for ambitious businesses — engineered properly from day one. Built in Kenya. Designed for the world.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — AM Labs",
  },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "AM Labs",
    "software company Kenya",
    "web development Kenya",
    "mobile app development Kenya",
    "SaaS development",
    "custom software",
    "M-Pesa integration",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AM Labs — digital products, engineered properly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#052E16" },
  ],
};

/**
 * Organisation structured data. Accurate and minimal — name, URL, logo and
 * contact only. Nothing here claims a founding date, employee count, or
 * rating the company can't substantiate.
 */
const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteUrl,
  logo: `${siteUrl}/logo-mark.svg`,
  description: siteConfig.aboutShort,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(displayFont.variable, bodyFont.variable, monoFont.variable)}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  );
}
