export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Studio", href: "#studio" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Selected Work", href: "#work" },
  { label: "Founder", href: "#founder" },
];

export const primaryCta: NavItem = { label: "Start a Project", href: "#contact" };
