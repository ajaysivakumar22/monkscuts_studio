export type KeyMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  status: "Case study" | "In development";
  client?: string;
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

export const workEyebrow = "Selected Work";
export const workStatement = "STORIES, NOT SCREENSHOTS.";

export const projects: Project[] = [
  {
    id: "brand-identity-system",
    number: "01",
    title: "Brand Identity System",
    category: "Branding · Visual Identity",
    description:
      "A full identity build — mark, type system and motion language — designed to carry a brand across every surface it touches.",
    status: "Case study",
    client: "Stealth FinTech Startup",
    year: "2026",
    role: "Brand Design & Motion Architecture",
    challenge:
      "The client needed to pivot from a generic B2B financial dashboard into a high-trust, bold visual brand capable of commanding instant authority among institutional investors.",
    solution:
      "Engineered a laser-precise typographic system paired with dynamic, high-contrast visual marks and custom kinetic motion guidelines that scale from mobile touchpoints to high-impact billboards.",
    keyMetrics: [
      { value: "4.8x", label: "Conversion Lift on Rebrand Launch" },
      { value: "100%", label: "Multi-Platform Asset Consistency" },
      { value: "< 2 Wks", label: "Full Identity Execution & Handoff" },
    ],
    deliverables: [
      "Core Logomark & Typographic Hierarchy",
      "Brand Motion Guidelines & Lottie Assets",
      "Design System Tokens & Figma UI Kit",
      "Interactive Web Guidelines & Assets",
    ],
    techStack: ["Figma", "Illustrator", "After Effects", "Tailwind CSS", "GSAP"],
    quote: {
      text: "MONK CUTS delivered an identity system that transformed how the market perceives our technology from day one.",
      author: "Head of Product, Stealth FinTech",
    },
  },
  {
    id: "digital-product-interface",
    number: "02",
    title: "Digital Product Interface",
    category: "UI/UX · Front-end",
    description:
      "An interface system built around clarity and restraint, engineered to hold up as the product scales.",
    status: "Case study",
    client: "Aether AI Labs",
    year: "2026",
    role: "Lead UI/UX & Web Development",
    challenge:
      "Complex multi-agent LLM workflows were overwhelming users with messy text logs, slow feedback loops, and chaotic navigation.",
    solution:
      "Designed a sleek, dark-mode focused workspace featuring intuitive agent tree visualizers, micro-interactions, and real-time streaming state managers.",
    keyMetrics: [
      { value: "60 FPS", label: "Fluid Interface Performance" },
      { value: "-42%", label: "Task Completion Friction" },
      { value: "99.4%", label: "Positive User Usability Score" },
    ],
    deliverables: [
      "UX Workflow Architecture & Wireframing",
      "High-Fidelity Dark UI Design System",
      "React + TypeScript Component Architecture",
      "Sub-100ms Micro-Interaction Haptics",
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Lenis Scroll"],
    quote: {
      text: "The interface MONK CUTS built turned an intensely complex developer tool into an absolute joy to operate daily.",
      author: "Founder & CTO, Aether AI",
    },
  },
  {
    id: "motion-title-sequence",
    number: "03",
    title: "Motion & Title Sequence",
    category: "Motion Graphics · Animation",
    description:
      "Kinetic typography and title design built to introduce a brand's world in under thirty seconds.",
    status: "Case study",
    client: "Hyperion Media / Original Series",
    year: "2025",
    role: "Creative Direction & Sound Design",
    challenge:
      "Create a mesmerizing 30-second opening title sequence that establishes a dark futuristic aesthetic without relying on generic stock animations or cliché sci-fi tropes.",
    solution:
      "Constructed custom 3D typographic animations with synchronized audio scoring, combining raw analogue sound texture with pristine digital geometry.",
    keyMetrics: [
      { value: "30 SEC", label: "High-Impact Visual Narrative" },
      { value: "4K 60FPS", label: "Master Cinema Export Format" },
      { value: "Custom", label: "In-House Audio Score & SFX" },
    ],
    deliverables: [
      "Concept Art & Keyframe Storyboards",
      "3D Typographic Animation Sequence",
      "Original Sound Score & SFX Mixing",
      "Broadcast Cinema Master Files",
    ],
    techStack: ["Cinema 4D", "After Effects", "Ableton Live", "Premiere Pro"],
    quote: {
      text: "The title sequence set the tone for our entire series broadcast launch. Unmatched energy and execution.",
      author: "Executive Producer, Hyperion",
    },
  },
];
