export const hero = {
  headline: "We Build Digital Products That Move Businesses Forward.",
  subhead:
    "AM Labs designs and builds modern software, web platforms, and mobile applications for ambitious businesses — engineered properly from day one.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "Explore Our Work", href: "/work" },
};

export interface Capability {
  name: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    name: "Web",
    description:
      "Marketing sites, web apps, and platforms built on modern, maintainable stacks.",
  },
  {
    name: "Mobile",
    description:
      "Native-feeling Android and cross-platform apps for the devices your users already carry.",
  },
  {
    name: "SaaS",
    description:
      "Multi-tenant software architected to scale as your user base grows.",
  },
  {
    name: "Custom Software",
    description:
      "Purpose-built tools for the workflows off-the-shelf software doesn't fit.",
  },
  {
    name: "Integrations",
    description: "M-Pesa, payment gateways, and third-party APIs wired in cleanly.",
  },
  {
    name: "Digital Products",
    description:
      "End-to-end product builds — from first prototype to a live release.",
  },
];

export interface ProcessStep {
  step: string;
  description: string;
}

// NOTE: the master prompt references specific brief sections (§17) for
// verbatim process copy that wasn't included in the source document
// provided to this build. Written fresh, in brand voice, honest and
// non-inflated — flagged as an assumption in the Phase 2 status report.
export const process: ProcessStep[] = [
  {
    step: "Discover",
    description:
      "We start by understanding your business, your users, and the problem worth solving.",
  },
  {
    step: "Strategize",
    description:
      "We define scope, technical approach, and a realistic path to launch.",
  },
  {
    step: "Design",
    description:
      "We shape the product experience before writing a line of production code.",
  },
  {
    step: "Build",
    description: "We engineer the product using modern, maintainable technology.",
  },
  {
    step: "Test",
    description:
      "We verify functionality, performance, and security before anything ships.",
  },
  {
    step: "Launch",
    description:
      "We deploy, monitor, and support the product through its first release.",
  },
  {
    step: "Grow",
    description: "We keep improving the product as your business and users evolve.",
  },
];

export interface WhyPillar {
  name: string;
  description: string;
}

// Same note as `process` above — written fresh in brand voice; original
// brief §19 wording wasn't available in the source document.
export const whyAmLabs: WhyPillar[] = [
  {
    name: "Engineering-first",
    description: "We build on sound technical foundations, not shortcuts.",
  },
  {
    name: "Product-minded",
    description: "We think about outcomes for your business, not just deliverables.",
  },
  {
    name: "Scalable",
    description: "We architect software that can grow without a rebuild.",
  },
  {
    name: "User-focused",
    description: "We design for the people who will actually use what we build.",
  },
  {
    name: "Long-term",
    description: "We build relationships meant to outlast a single project.",
  },
];

export const finalCta = {
  title: "Have a product worth building properly?",
  description:
    "Tell us what you're trying to build. We'll tell you honestly whether — and how — we can help.",
  primaryCta: { label: "Start a Project", href: "/contact" },
};

export interface TechGroup {
  area: string;
  items: string[];
}

/**
 * Technology, grouped by what it's for rather than listed as a wall of
 * logos. Only tools actually used on AM Labs projects appear here.
 */
export const techGroups: TechGroup[] = [
  { area: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { area: "Backend", items: ["Node.js", "Express", "Django", "Python"] },
  { area: "Data", items: ["PostgreSQL", "MongoDB", "Prisma"] },
  { area: "Mobile", items: ["Flutter", "Android"] },
  { area: "Platform", items: ["Git", "Vercel", "REST APIs", "M-Pesa Daraja"] },
];

export const techIntro = {
  label: "Technology",
  title: "Technology is a tool. The problem comes first.",
  description:
    "We pick the stack that fits the problem and the people who'll maintain it — not the one that's loudest this year. This is what we reach for most often.",
};
