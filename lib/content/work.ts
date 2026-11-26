export interface ProjectFeature {
  name: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  slogan: string;
  summary: string;
  techStack: string[];
  problem: string;
  approach: string;
  features: ProjectFeature[];
  whatsNext: string;
}

// NOTE: Problem / Approach / What's Next copy below is written from the
// real facts given in the brief (a ticketing platform covering auth, event
// management, and ticketing, built with React/Node.js/MongoDB). No user
// counts, screenshots, or results are invented — screenshot slots are left
// as clearly marked TODOs on the case study page itself.
export const projects: Project[] = [
  {
    slug: "jambo-tickets",
    name: "Jambo Tickets",
    slogan: "Connecting Kenyans to Unforgettable Events.",
    summary:
      "A ticketing platform covering authentication, event management, and ticketing end to end.",
    techStack: ["React", "Node.js", "MongoDB"],
    problem:
      "Event organizers needed a straightforward way to list events and sell tickets online, and attendees needed an easy way to discover events and get tickets without friction.",
    approach:
      "We built Jambo Tickets as a full-stack web platform, handling everything from event creation and management to secure ticket purchases — with a focus on a clean, fast experience for both organizers and attendees.",
    features: [
      {
        name: "Authentication",
        description: "Account creation and sign-in for organizers and attendees.",
      },
      {
        name: "Event management",
        description: "Tools for organizers to create, edit, and publish events.",
      },
      {
        name: "Ticketing",
        description: "A browsing and purchase flow for attendees to get tickets.",
      },
    ],
    whatsNext:
      "Jambo Tickets is an active project. Ongoing work includes refining the ticket-purchase flow, expanding event discovery, and continuing to harden the platform as usage grows.",
  },
];
