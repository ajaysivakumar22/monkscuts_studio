import type { KeyMetric } from "./projects";

export type OriginalWork = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: "In development" | "Ongoing";
  year?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  keyMetrics?: KeyMetric[];
  deliverables?: string[];
  techStack?: string[];
  quote?: {
    text: string;
    author: string;
  };
};

export const originalIpEyebrow = "Original IP";
export const originalIpStatement = "WE DON'T JUST SERVE BRIEFS. WE BUILD WORLDS.";
export const originalIpIntro =
  "Alongside client work, MONK CUTS develops its own original material — proof that the studio can originate a world, not just execute one that already exists.";

export const originalWorks: OriginalWork[] = [
  {
    id: "original-music-lab",
    title: "Original Music",
    category: "Composition · AI-Assisted Production",
    description:
      "An ongoing body of original scoring and sound design, produced in-studio using a mix of traditional and AI-assisted composition tools.",
    status: "Ongoing",
    year: "2026 - Present",
    role: "In-House Scoring & Sound Architecture",
    challenge:
      "Modern brand scoring often relies on repetitive stock music licenses that dilute brand identity and fail to capture distinct emotional gravity.",
    solution:
      "Building a proprietary library of bespoke atmospheric soundscapes, dark synthesizers, and hybrid orchestral arrangements produced entirely in-house.",
    keyMetrics: [
      { value: "14+", label: "Original Master Tracks Produced" },
      { value: "Hybrid", label: "Analogue Synthesis + AI Workflows" },
      { value: "Exclusive", label: "Studio IP Soundtrack Catalog" },
    ],
    deliverables: [
      "Sonic Identity Logos & Audio Branding",
      "Cinematic Trailer Soundscapes",
      "Dynamic Web Experience Soundtracks",
      "Bespoke Spatial Audio Mixes",
    ],
    techStack: ["Ableton Live", "Suno / Udio AI", "Logic Pro", "FabFilter", "Valhalla DSP"],
    quote: {
      text: "Sound is 50% of the visual atmosphere. Creating our own score allows total creative autonomy over the narrative experience.",
      author: "Monk Cuts Audio Lab",
    },
  },
  {
    id: "animated-feature-ip",
    title: "Original Animated Feature",
    category: "IP Development · Story & Character",
    description:
      "A studio-originated animated concept currently in development. Details will be shared as the project reaches public milestones.",
    status: "In development",
    year: "In Active Development",
    role: "Worldbuilding, Concept Design & Narrative",
    challenge:
      "Developing a novel animated narrative universe that balances cutting-edge AI concept workflows with deep, emotionally resonant storytelling.",
    solution:
      "Structuring full character bibles, world concept art, script drafts, and animated teaser sequences that demonstrate studio-led IP creation.",
    keyMetrics: [
      { value: "Phase 2", label: "Concept & Narrative Pre-Production" },
      { value: "Original", label: "Character & Environment Lore Bibles" },
      { value: "4K Teaser", label: "Trailer Production Target" },
    ],
    deliverables: [
      "Narrative Bible & Script Treatment",
      "Character Concept Art & Keyframes",
      "Environment Matte Paintings & Lighting Guides",
      "Animatic Teaser Sequence",
    ],
    techStack: ["Midjourney v6", "ComfyUI", "Blender", "Unreal Engine 5", "After Effects"],
    quote: {
      text: "We prove our capability by building worlds from scratch — testing our own bounds before taking client projects further.",
      author: "Monk Cuts IP Lab",
    },
  },
];
