import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

type MonkLogoProps = SVGAttributes<SVGSVGElement> & {
  className?: string;
  /** "light" = white text (default, for dark backgrounds) | "dark" = dark text */
  variant?: "light" | "dark";
};

/**
 * MONK CUTS STUDIO — Official Logo
 *
 * Faithful recreation of the supplied reference:
 *  - "MONKCUTS" on first line, with the monkey face icon replacing the "O"
 *  - "STUDIO" on second line, center-aligned
 *  - White text on dark background (default variant)
 *  - Monkey face: warm amber-gold outer, black inner facial areas
 */
export function MonkLogo({ className, variant = "light", ...rest }: MonkLogoProps) {
  const textColor = variant === "light" ? "#f4f4f5" : "#09090b";
  const subTextColor = variant === "light" ? "#c87a00" : "#c87a00";

  return (
    <svg
      viewBox="0 0 440 120"
      className={cn("h-10 w-auto", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monk Cuts Studio"
      {...rest}
    >
      {/* ── "M" ─────────────────────────────────────────────────────── */}
      <text
        x="0"
        y="72"
        fontFamily="'Poppins', sans-serif"
        fontWeight="700"
        fontSize="76"
        letterSpacing="-2"
        fill={textColor}
      >
        M
      </text>

      {/* ── MONKEY FACE ICON — replaces the "O" ─────────────────────── */}
      {/* Positioned at the O position (after M, before N) */}
      <g transform="translate(60, 6)">
        {/* Face outer form */}
        <circle cx="34" cy="38" r="34" fill="#c87a00" />
        {/* Left ear */}
        <circle cx="4" cy="36" r="10" fill="#c87a00" />
        <circle cx="5" cy="37" r="6" fill="#050507" />
        {/* Right ear */}
        <circle cx="64" cy="36" r="10" fill="#c87a00" />
        <circle cx="63" cy="37" r="6" fill="#050507" />
        {/* Inner face panel — BLACK */}
        <path
          d="M34,12 C24,12 16,18 12,28 C9,36 10,46 14,54 C18,62 24,68 34,72 C44,68 50,62 54,54 C58,46 59,36 56,28 C52,18 44,12 34,12 Z"
          fill="#050507"
        />
        {/* Brow ridge */}
        <path d="M14,28 C18,20 26,16 34,16 C42,16 50,20 54,28 C50,22 42,18 34,18 C26,18 18,22 14,28 Z" fill="#c87a00" />
        {/* Left brow over eye */}
        <path d="M15,32 C18,26 25,24 30,28" stroke="#c87a00" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Right brow over eye */}
        <path d="M53,32 C50,26 43,24 38,28" stroke="#c87a00" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Left eye */}
        <circle cx="24" cy="37" r="6" fill="#c87a00" opacity="0.9" />
        <circle cx="24" cy="38" r="4" fill="#080606" />
        {/* Right eye */}
        <circle cx="44" cy="37" r="6" fill="#c87a00" opacity="0.9" />
        <circle cx="44" cy="38" r="4" fill="#080606" />
        {/* Nose */}
        <ellipse cx="29" cy="54" rx="5" ry="4" fill="#c87a00" opacity="0.6" />
        <circle cx="29" cy="55" r="2.5" fill="#050507" />
        <ellipse cx="39" cy="54" rx="5" ry="4" fill="#c87a00" opacity="0.6" />
        <circle cx="39" cy="55" r="2.5" fill="#050507" />
        {/* Vertical cut line */}
        <line x1="34" y1="0" x2="34" y2="76" stroke="#ff5500" strokeWidth="1.5" />
        {/* Crown tuft */}
        <path d="M34,2 C32,8 28,12 28,16 C31,14 34,10 34,2 Z" fill="#c87a00" />
        <path d="M34,2 C36,8 40,12 40,16 C37,14 34,10 34,2 Z" fill="#c87a00" />
      </g>

      {/* ── "NKCUTS" ─────────────────────────────────────────────────── */}
      <text
        x="136"
        y="72"
        fontFamily="'Poppins', sans-serif"
        fontWeight="700"
        fontSize="76"
        letterSpacing="-2"
        fill={textColor}
      >
        NKCUTS
      </text>

      {/* ── "STUDIO" — second line, center-aligned ───────────────────── */}
      <text
        x="220"
        y="104"
        textAnchor="middle"
        fontFamily="'Poppins', sans-serif"
        fontWeight="600"
        fontSize="20"
        letterSpacing="8"
        fill={subTextColor}
      >
        STUDIO
      </text>
    </svg>
  );
}
