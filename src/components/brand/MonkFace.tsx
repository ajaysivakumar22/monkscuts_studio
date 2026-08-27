import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

type MonkFaceProps = SVGAttributes<SVGSVGElement> & {
  className?: string;
  /**
   * Show the vertical MONK laser-cut line.
   * Defaults to true.
   */
  showCut?: boolean;
  /**
   * Override for the outer amber-gold color.
   * Defaults to var(--color-monk-face).
   */
  outerColor?: string;
  /**
   * Override for the inner face panel color.
   * Defaults to var(--color-void).
   */
  innerColor?: string;
  [dataAttribute: `data-${string}`]: string | undefined;
};

/**
 * MONK CUTS STUDIO — Monkey mascot SVG.
 *
 * Visual language:
 *  - Outer form (head, ears, brow, fur): warm amber-gold
 *  - Inner face panel (eye area, nose, chin): pure black — the MONK treatment
 *  - Eyes: amber-gold irises cutting through the dark
 *  - Vertical MONK laser-cut: #ff5500 signature orange
 *  - Expression: focused, deliberate — "monkey energy, monk focus"
 */
export function MonkFace({
  className,
  showCut = true,
  outerColor = "var(--color-monk-face)",
  innerColor = "var(--color-void)",
  ...rest
}: MonkFaceProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monk Cuts Studio — Monk mascot"
      {...rest}
    >
      {/* ── FUR TUFT — top center crown ───────────────────────────────── */}
      <path
        d="M100 12 C96 4 88 2 87 8 C86 14 93 20 100 22 C107 20 114 14 113 8 C112 2 104 4 100 12 Z"
        fill={outerColor}
      />
      {/* Secondary tuft bumps */}
      <path
        d="M91 18 C89 12 83 10 82 16 C81 21 87 25 91 18 Z"
        fill={outerColor}
      />
      <path
        d="M109 18 C111 12 117 10 118 16 C119 21 113 25 109 18 Z"
        fill={outerColor}
      />

      {/* ── LEFT EAR ──────────────────────────────────────────────────── */}
      <circle cx="20" cy="100" r="27" fill={outerColor} />
      <ellipse cx="22" cy="101" rx="15" ry="17" fill={innerColor} />
      <path
        d="M14,93 C12,98 12,104 14,110 C18,106 20,100 14,93 Z"
        fill={outerColor}
        opacity="0.6"
      />

      {/* ── RIGHT EAR ─────────────────────────────────────────────────── */}
      <circle cx="180" cy="100" r="27" fill={outerColor} />
      <ellipse cx="178" cy="101" rx="15" ry="17" fill={innerColor} />
      <path
        d="M186,93 C188,98 188,104 186,110 C182,106 180,100 186,93 Z"
        fill={outerColor}
        opacity="0.6"
      />

      {/* ── MAIN HEAD — outer orange silhouette ───────────────────────── */}
      <ellipse cx="100" cy="118" rx="80" ry="88" fill={outerColor} />

      {/* ── INNER FACE PANEL — the BLACK MONK treatment ───────────────── */}
      <path
        d="M 100,58 C 84,58 67,66 58,80 C 50,93 48,108 50,124 C 52,140 58,154 68,165 C 76,174 88,180 100,182 C 112,180 124,174 132,165 C 142,154 148,140 150,124 C 152,108 150,93 142,80 C 133,66 116,58 100,58 Z"
        fill={innerColor}
      />

      {/* ── BROW RIDGES — orange, furrowed inward for monk intensity ──── */}
      <path
        d="M 58,84 C 64,76 76,75 86,82"
        stroke={outerColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 142,84 C 136,76 124,75 114,82"
        stroke={outerColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 86,82 C 92,86 100,87 100,87 C 100,87 108,86 114,82"
        stroke={outerColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* ── EYES — amber-gold irises cutting through the darkness ──────── */}
      <circle cx="74" cy="103" r="12" fill={outerColor} />
      <circle cx="74" cy="104" r="7" fill="#0a0808" />
      <circle cx="74" cy="104" r="9" stroke={outerColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="70" cy="100" r="3" fill={outerColor} opacity="0.45" />

      <circle cx="126" cy="103" r="12" fill={outerColor} />
      <circle cx="126" cy="104" r="7" fill="#0a0808" />
      <circle cx="126" cy="104" r="9" stroke={outerColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="122" cy="100" r="3" fill={outerColor} opacity="0.45" />

      {/* ── NOSE — wide, flat, prominent ──────────────────────────────── */}
      <ellipse cx="100" cy="133" rx="17" ry="13" fill={outerColor} opacity="0.18" />
      <ellipse cx="90" cy="137" rx="8" ry="7" fill={outerColor} opacity="0.55" />
      <ellipse cx="110" cy="137" rx="8" ry="7" fill={outerColor} opacity="0.55" />
      <circle cx="90" cy="138" r="4.5" fill={innerColor} />
      <circle cx="110" cy="138" r="4.5" fill={innerColor} />

      {/* ── MOUTH — subtle, focused, straight-lipped ──────────────────── */}
      <path
        d="M 84,160 C 90,165 110,165 116,160"
        stroke={outerColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M 93,158 C 97,162 103,162 107,158"
        stroke={outerColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* ── CHIN highlight ────────────────────────────────────────────── */}
      <ellipse cx="100" cy="176" rx="16" ry="7" fill={outerColor} opacity="0.15" />

      {/* ── MONK VERTICAL LASER-CUT — brand signature ─────────────────── */}
      {showCut && (
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="220"
          stroke="var(--color-monk)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
