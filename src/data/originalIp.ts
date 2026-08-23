export type OriginalWork = {
  title: string;
  category: string;
  description: string;
  status: "In development" | "Ongoing";
};

export const originalIpEyebrow = "Original IP";
export const originalIpStatement = "WE DON'T JUST SERVE BRIEFS. WE BUILD WORLDS.";
export const originalIpIntro =
  "Alongside client work, MONK CUTS develops its own original material — proof that the studio can originate a world, not just execute one that already exists.";

export const originalWorks: OriginalWork[] = [
  {
    title: "Original Music",
    category: "Composition · AI-Assisted Production",
    description:
      "An ongoing body of original scoring and sound design, produced in-studio using a mix of traditional and AI-assisted composition tools.",
    status: "Ongoing",
  },
  {
    title: "Original Animated Feature",
    category: "IP Development · Story & Character",
    description:
      "A studio-originated animated concept currently in development. Details will be shared as the project reaches public milestones.",
    status: "In development",
  },
];
