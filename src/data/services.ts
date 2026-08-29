export type CapabilityVisualType =
  | "logo"
  | "branding"
  | "uiux"
  | "video"
  | "motion"
  | "music"
  | "digital";

export type Service = {
  id: string;
  index: string;
  title: string;
  shortLabel: string;
  description: string;
  tags: string[];
  visualType: CapabilityVisualType;
  deliverablesSummary: string[];
};

export const servicesEyebrow = "Capabilities";
export const servicesStatement = "SEVEN DISCIPLINES. ONE STUDIO.";

export const services: Service[] = [
  {
    id: "logo-design",
    index: "01",
    title: "Logo Design",
    shortLabel: "Mark Construction",
    description:
      "Marks built to hold their shape at any scale, from a favicon to a building facade.",
    tags: ["Mark Design", "Vector Geometry", "Symbolic Systems"],
    visualType: "logo",
    deliverablesSummary: ["Iconography", "Vector Master Files", "Grid Guidelines"],
  },
  {
    id: "branding-visual-identity",
    index: "02",
    title: "Branding & Visual Identity",
    shortLabel: "Identity System",
    description:
      "Full identity systems — typography, color, voice and asset logic — built to stay consistent as a brand grows.",
    tags: ["Brand Architecture", "Color Tokens", "Type Hierarchy"],
    visualType: "branding",
    deliverablesSummary: ["Brand Bibles", "Design Tokens", "Asset Guidelines"],
  },
  {
    id: "ui-ux-design",
    index: "03",
    title: "UI/UX Design",
    shortLabel: "Digital Interface",
    description:
      "Interfaces engineered for clarity first, personality second, and never the other way around.",
    tags: ["Design Systems", "Web Apps", "Micro-Interactions"],
    visualType: "uiux",
    deliverablesSummary: ["Figma Kits", "React Components", "UX Workflows"],
  },
  {
    id: "video-editing",
    index: "04",
    title: "Video Editing",
    shortLabel: "Cinematic Edit",
    description:
      "Story-led edits with pacing that respects the audience's attention.",
    tags: ["Narrative Pacing", "Color Grading", "Sound Design"],
    visualType: "video",
    deliverablesSummary: ["Cinema Masters", "Trailer Cuts", "Audio Mixes"],
  },
  {
    id: "motion-graphics-animation",
    index: "05",
    title: "Motion Graphics & Animation",
    shortLabel: "Kinetic Motion",
    description:
      "Kinetic type, brand animation and title sequences that carry a system, not just a style.",
    tags: ["Kinetic Typography", "Title Sequences", "2D/3D Motion"],
    visualType: "motion",
    deliverablesSummary: ["Lottie Exports", "Title Sequences", "Motion Guides"],
  },
  {
    id: "music-production-ai",
    index: "06",
    title: "Music Production & AI Music",
    shortLabel: "Audio Scoring",
    description:
      "Original scoring and AI-assisted composition for brand worlds that need a sound, not just a look.",
    tags: ["Atmospheric Scoring", "AI Composition", "Audio Logos"],
    visualType: "music",
    deliverablesSummary: ["Sonic Logos", "Original Soundtracks", "Spatial SFX"],
  },
  {
    id: "digital-content-social",
    index: "07",
    title: "Digital Content & Social Media Design",
    shortLabel: "Content System",
    description:
      "Ongoing content systems designed to stay recognizable across every format and platform.",
    tags: ["Social Design", "Campaign Banners", "Multi-Format Grids"],
    visualType: "digital",
    deliverablesSummary: ["Social Frameworks", "Campaign Assets", "Motion Trailers"],
  },
];
