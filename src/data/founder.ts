export type SkillTag = {
  label: string;
  iconName: string;
};

export type FounderPillar = {
  title: string;
  description: string;
};

export const founder = {
  eyebrow: "FOUNDER",
  statementLine1: "THE PERSON",
  statementLine2: "BEHIND THE STUDIO.",
  name: "STUDIO FOUNDER & CREATIVE DIRECTOR",
  bio:
    "MONK CUTS was started on a simple premise: that focus is a creative advantage. The studio is led by a founder-practitioner who works across design, motion and sound rather than delegating the craft — building every capability in-house so the studio's point of view stays consistent from strategy through final delivery.",
  
  /** Placeholder image path — replace with real founder photograph when available */
  imageSrc: undefined as string | undefined,
  
  pillars: [
    {
      title: "FOUNDER-LED",
      description: "Every project is personally overseen from start to finish.",
    },
    {
      title: "15+ YEARS",
      description: "Across design, motion, sound & storytelling.",
    },
    {
      title: "ONE FOCUS",
      description: "Building worlds that leave a lasting impact.",
    },
  ] as FounderPillar[],

  skills: [
    { label: "BRAND STRATEGY", iconName: "Target" },
    { label: "VISUAL IDENTITY", iconName: "Layers" },
    { label: "MOTION DESIGN", iconName: "PlayCircle" },
    { label: "MUSIC PRODUCTION", iconName: "AudioLines" },
    { label: "AI-ASSISTED CREATIVE TOOLING", iconName: "Sparkles" },
  ] as SkillTag[],

  profileHref: "#contact",
  profileLabel: "GET IN TOUCH",
};
