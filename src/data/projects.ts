export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  status: "Case study" | "In development";
};

export const workEyebrow = "Selected Work";
export const workStatement = "STORIES, NOT SCREENSHOTS.";

/**
 * Placeholder case-story structure. No client names, metrics or outcomes are
 * invented — each entry is a category-level placeholder ready to be replaced
 * with real project content and imagery when it becomes available.
 */
export const projects: Project[] = [
  {
    number: "01",
    title: "Brand Identity System",
    category: "Branding · Visual Identity",
    description:
      "A full identity build — mark, type system and motion language — designed to carry a brand across every surface it touches.",
    status: "Case study",
  },
  {
    number: "02",
    title: "Digital Product Interface",
    category: "UI/UX · Front-end",
    description:
      "An interface system built around clarity and restraint, engineered to hold up as the product scales.",
    status: "Case study",
  },
  {
    number: "03",
    title: "Motion & Title Sequence",
    category: "Motion Graphics · Animation",
    description:
      "Kinetic typography and title design built to introduce a brand's world in under thirty seconds.",
    status: "Case study",
  },
];
