export type Principle = {
  index: string;
  title: string;
  description: string;
};

export const studio = {
  eyebrow: "Studio",
  statementLine1: "FROM DESIGNING VISUALS",
  statementLine2: "TO BUILDING WORLDS.",
  body:
    "MONK CUTS exists at the point where discipline meets imagination. We work like a monk builds focus — one deliberate decision at a time — and apply that same restraint to brand, motion and sound.",
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Strategy",
    description: "Every project starts with a point of view, not a template. We define what a brand should mean before we decide what it should look like.",
  },
  {
    index: "02",
    title: "Design",
    description: "Identity, typography and interface work built with editorial discipline — considered, not decorative.",
  },
  {
    index: "03",
    title: "Technology",
    description: "Motion, code and AI-driven tools used with intent, so craft scales without losing its precision.",
  },
  {
    index: "04",
    title: "Impact",
    description: "Work is judged by whether it moves people and holds up over time, not by how it performs in a pitch deck.",
  },
];
