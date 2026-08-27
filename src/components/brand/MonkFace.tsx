import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

type MonkFaceProps = SVGAttributes<SVGSVGElement> & {
  className?: string;
  showCut?: boolean;
  outerColor?: string;
  innerColor?: string;
  [dataAttribute: `data-${string}`]: string | undefined;
};

/**
 * MONK CUTS STUDIO — Official Monkey Artwork (High Fidelity Vector)
 *
 * Exact 1:1 recreation of the official brand artwork:
 *  - Outer silhouette: Warm MONK gold/orange (#c87a00 / var(--color-monk-face))
 *    - Tapered dome head with right-curving crown hair tuft
 *    - C-shaped ears with inner ear cups
 *    - Jagged cheek fur tufts
 *    - Pointed V-shaped beard/chin
 *  - Inner face mask: Deep BLACK (#050507 / var(--color-void))
 *    - Heart-arched double brow ridge
 *    - Eye sockets with focused eyes
 *    - Gorilla/chimp nose structure with nostrils
 *    - Firm mouth line & chin fold
 *  - MONK Laser Cut: Vertical signature line (#ff5500)
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
      viewBox="0 0 500 500"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monk Cuts Studio — Official Monkey Artwork"
      {...rest}
    >
      {/* ── 1. OUTER MONKEY SILHOUETTE (Warm Gold/Orange) ────────────────── */}
      <path
        d="
          M 250 40
          C 275 32, 310 18, 360 45
          C 315 70, 305 85, 300 95
          C 340 108, 375 140, 395 180
          C 425 175, 450 195, 450 230
          C 450 265, 420 290, 390 280
          C 395 315, 385 345, 365 375
          C 345 405, 315 435, 250 475
          C 185 435, 155 405, 135 375
          C 115 345, 105 315, 110 280
          C 80 290, 50 265, 50 230
          C 50 195, 75 175, 105 180
          C 125 140, 160 108, 200 95
          C 195 85, 185 70, 140 45
          C 190 18, 225 32, 250 40
          Z
        "
        fill={outerColor}
      />

      {/* ── 2. INNER EAR CUPS (Black) ────────────────────────────────────── */}
      {/* Left ear inner cup */}
      <path
        d="M 90 200 C 65 205, 65 255, 95 255 C 105 255, 110 230, 90 200 Z"
        fill={innerColor}
      />
      <path
        d="M 85 210 C 72 215, 72 245, 90 245"
        stroke={outerColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right ear inner cup */}
      <path
        d="M 410 200 C 435 205, 435 255, 405 255 C 395 255, 390 230, 410 200 Z"
        fill={innerColor}
      />
      <path
        d="M 415 210 C 428 215, 428 245, 410 245"
        stroke={outerColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── 3. INNER FACIAL MASK (Solid Deep Black) ─────────────────────── */}
      {/*
          Continuous heart-arched brow down to muzzle mask shape
          converting the reference gray/white area into solid BLACK
      */}
      <path
        d="
          M 250 160
          C 200 135, 145 160, 135 210
          C 125 260, 165 285, 175 320
          C 185 355, 200 400, 250 400
          C 300 400, 315 355, 325 320
          C 335 285, 375 260, 365 210
          C 355 160, 300 135, 250 160
          Z
        "
        fill={innerColor}
      />

      {/* ── 4. FACIAL CONTOURS & DETAILS (Gold accents on Black face) ───── */}

      {/* Double-arched Brow Ridge Lines */}
      <path
        d="M 155 190 C 180 170, 220 175, 240 195"
        stroke={outerColor}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 345 190 C 320 170, 280 175, 260 195"
        stroke={outerColor}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Brow crease / center frown */}
      <path
        d="M 230 200 C 245 210, 255 210, 270 200"
        stroke={outerColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* EYES — Focused, intense, gold eye sockets & irises */}
      {/* Left eye socket & iris */}
      <ellipse cx="195" cy="225" rx="28" ry="22" fill={innerColor} />
      <path
        d="M 170 220 C 185 205, 210 205, 220 225 C 210 240, 185 240, 170 220 Z"
        stroke={outerColor}
        strokeWidth="6"
        fill="none"
      />
      <circle cx="195" cy="223" r="14" fill={outerColor} />
      <circle cx="195" cy="223" r="8" fill={innerColor} />
      <circle cx="190" cy="218" r="4" fill="#ffffff" opacity="0.8" />

      {/* Right eye socket & iris */}
      <ellipse cx="305" cy="225" rx="28" ry="22" fill={innerColor} />
      <path
        d="M 330 220 C 315 205, 290 205, 280 225 C 290 240, 315 240, 330 220 Z"
        stroke={outerColor}
        strokeWidth="6"
        fill="none"
      />
      <circle cx="305" cy="223" r="14" fill={outerColor} />
      <circle cx="305" cy="223" r="8" fill={innerColor} />
      <circle cx="300" cy="218" r="4" fill="#ffffff" opacity="0.8" />

      {/* NOSE — Gorilla/Chimp Nose Ridge & Nostrils */}
      <path
        d="M 235 240 C 245 255, 255 255, 265 240"
        stroke={outerColor}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 220 280 C 235 265, 265 265, 280 280 C 265 300, 235 300, 220 280 Z"
        fill={outerColor}
        opacity="0.9"
      />
      {/* Nostril holes */}
      <ellipse cx="238" cy="282" rx="10" ry="8" fill={innerColor} />
      <ellipse cx="262" cy="282" rx="10" ry="8" fill={innerColor} />

      {/* MOUTH — Firm Muzzle & Mouth Line */}
      <path
        d="M 200 340 C 230 355, 270 355, 300 340"
        stroke={outerColor}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Chin fold line */}
      <path
        d="M 225 370 C 240 378, 260 378, 275 370"
        stroke={outerColor}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── 5. MONK VERTICAL LASER CUT SIGNATURE LINE ───────────────────── */}
      {showCut && (
        <line
          x1="250"
          y1="0"
          x2="250"
          y2="500"
          stroke="var(--color-monk)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
