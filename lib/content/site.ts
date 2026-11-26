export interface NavLink {
  href: string;
  label: string;
}

export const primaryNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/contact", label: "Start a Project" },
    ],
  },
];

export const siteConfig = {
  name: "AM Labs",
  legalName: "AM Lab Technologies",
  tagline: "Built in Kenya. Designed for the world.",
  aboutShort:
    "AM Labs is a technology company based in Kenya, focused on building reliable digital products and software solutions that solve real problems. We're early — and we're building the way a larger technology company would: with real engineering discipline, not templates.",
  // TODO: replace with the real published contact details before launch.
  contact: {
    email: "alanmugambiofficial@gmail.com",
    phone: "+254 110999653",
    whatsappUrl: "https://wa.me/254110999653",
    location: "Nairobi, Kenya",
  },
};
