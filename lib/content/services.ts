export interface ServiceCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  subServices: string[];
}

// NOTE: the master prompt references a specific sub-services list from the
// original client brief (§3) that wasn't included in the source document
// provided to this build. Descriptions and sub-service lists below were
// written fresh — realistic, non-inflated, and consistent with what a
// small, real software company can credibly offer today. Flagged as an
// assumption in the Phase 3 status report.
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "build",
    name: "Build",
    tagline: "Websites, web applications and platforms.",
    description:
      "We design and build websites, web applications, and platforms on modern, maintainable stacks. Whether it's a marketing site or a full web application, we build it to be fast, accessible, and easy to extend as your product grows.",
    subServices: [
      "Marketing websites",
      "Web applications",
      "Internal tools & dashboards",
      "Progressive Web Apps",
    ],
  },
  {
    slug: "mobile",
    name: "Mobile",
    tagline: "Android and cross-platform applications.",
    description:
      "We build Android and cross-platform mobile applications that feel native to the devices your users already carry. From first release to ongoing updates, we handle the full mobile development lifecycle.",
    subServices: [
      "Native Android development",
      "Cross-platform apps",
      "App store deployment",
      "Mobile app maintenance",
    ],
  },
  {
    slug: "scale",
    name: "Scale",
    tagline: "SaaS and scalable software architecture.",
    description:
      "We architect software that's built to grow — multi-tenant SaaS platforms, subscription systems, and backend architecture that won't need a rebuild the moment your user base expands.",
    subServices: [
      "SaaS platform architecture",
      "Multi-tenancy & subscription billing",
      "Database design & optimization",
      "Cloud infrastructure setup",
    ],
  },
  {
    slug: "integrate",
    name: "Integrate",
    tagline: "M-Pesa, APIs, and third-party systems.",
    description:
      "We connect your software to the systems it needs to talk to — payment gateways like M-Pesa, third-party APIs, and other business tools — so data moves cleanly between them.",
    subServices: [
      "M-Pesa & mobile money integration",
      "Payment gateway integration",
      "Third-party API integration",
      "Internal system integration",
    ],
  },
  {
    slug: "design",
    name: "Design",
    tagline: "UI/UX and product design.",
    description:
      "We design interfaces that are clear, usable, and consistent — grounded in how real users will actually interact with your product, not just how it looks in a mockup.",
    subServices: [
      "UI/UX design",
      "Design systems & component libraries",
      "Wireframing & prototyping",
      "Usability review",
    ],
  },
  {
    slug: "support",
    name: "Support",
    tagline: "Maintenance, optimization, and continuous development.",
    description:
      "Shipping is the start, not the end. We provide ongoing maintenance, performance optimization, and continuous development so your product keeps working well as it evolves.",
    subServices: [
      "Bug fixes & maintenance",
      "Performance optimization",
      "Security updates",
      "Ongoing feature development",
    ],
  },
];
