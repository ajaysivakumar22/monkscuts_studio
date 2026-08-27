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
 * MONK CUTS STUDIO — Official Monkey Mascot
 *
 * Faithful SVG recreation of the supplied brand reference.
 *
 * Reference accuracy:
 *  - Realistic chimpanzee/gorilla facial structure
 *  - Enormous projecting brow ridge overhanging the eyes
 *  - Large inner face panel (forehead, eye area, muzzle, chin) → BLACK
 *  - Outer form (head silhouette, fur, ear cups, crown) → WARM AMBER GOLD
 *  - Small deep-set eyes under heavy brow
 *  - Wide flat nose with prominent nostrils
 *  - Fur texture at head edges (jagged silhouette)
 *  - Two rounded ears with inner bowl detail
 *  - Fur spike/tuft at top center crown
 *  - MONK vertical laser-cut through center
 *
 * Color treatment (per brief):
 *  - Gray/white facial areas from reference → BLACK
 *  - Outer amber-gold character preserved
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
      viewBox="0 0 400 440"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monk Cuts Studio — Monk mascot"
      {...rest}
    >
      {/* ═══════════════════════════════════════════════════════════════
          OUTER AMBER-GOLD FORM — the warm fur silhouette
          All elements drawn from reference observation.
      ═══════════════════════════════════════════════════════════════ */}

      {/* ── Crown fur tufts — the topknot spike cluster ─────────────── */}
      {/* Center spike — the distinctive upward tuft */}
      <path
        d="M200,8 C196,20 188,28 182,42 C195,38 200,32 200,8 Z"
        fill={outerColor}
      />
      <path
        d="M200,8 C204,20 212,28 218,42 C205,38 200,32 200,8 Z"
        fill={outerColor}
      />
      {/* Left tuft */}
      <path
        d="M182,42 C178,30 170,22 166,30 C162,38 168,48 178,50 C182,48 184,45 182,42 Z"
        fill={outerColor}
      />
      {/* Right tuft */}
      <path
        d="M218,42 C222,30 230,22 234,30 C238,38 232,48 222,50 C218,48 216,45 218,42 Z"
        fill={outerColor}
      />

      {/* ── Left ear — outer cup + inner bowl ────────────────────────── */}
      {/* Outer ear shape — rounded, protruding */}
      <path
        d="M55,130 C30,120 14,140 12,162 C10,184 24,206 48,212 C62,216 74,210 80,200 C88,188 86,168 78,154 C72,144 65,134 55,130 Z"
        fill={outerColor}
      />
      {/* Inner ear cup — black bowl */}
      <path
        d="M50,142 C34,148 26,162 28,178 C30,192 42,202 56,200 C66,198 74,188 72,174 C70,162 60,148 50,142 Z"
        fill={innerColor}
      />
      {/* Ear helix ridge — thin orange curve within inner */}
      <path
        d="M44,150 C36,158 35,170 40,180 C44,170 46,158 44,150 Z"
        fill={outerColor}
        opacity="0.5"
      />

      {/* ── Right ear ─────────────────────────────────────────────────── */}
      <path
        d="M345,130 C370,120 386,140 388,162 C390,184 376,206 352,212 C338,216 326,210 320,200 C312,188 314,168 322,154 C328,144 335,134 345,130 Z"
        fill={outerColor}
      />
      <path
        d="M350,142 C366,148 374,162 372,178 C370,192 358,202 344,200 C334,198 326,188 328,174 C330,162 340,148 350,142 Z"
        fill={innerColor}
      />
      <path
        d="M356,150 C364,158 365,170 360,180 C356,170 354,158 356,150 Z"
        fill={outerColor}
        opacity="0.5"
      />

      {/* ── Main head silhouette — outer amber-gold fur ──────────────── */}
      {/*
          The head is wider than it is tall at the top, narrows toward chin.
          Fur texture at edges created by slight path irregularities.
          Overall shape: wide rounded crown, strong cheekbones, pointed chin.
      */}
      <path
        d="
          M200,42
          C240,42 274,50 300,68
          C318,80 332,94 342,112
          C352,130 356,152 354,174
          C350,202 340,224 326,244
          C312,262 296,278 278,290
          C262,300 244,308 228,314
          C220,318 212,320 200,322
          C188,320 180,318 172,314
          C156,308 138,300 122,290
          C104,278 88,262 74,244
          C60,224 50,202 46,174
          C44,152 48,130 58,112
          C68,94 82,80 100,68
          C126,50 160,42 200,42
          Z
        "
        fill={outerColor}
      />

      {/* ══════════════════════════════════════════════════════════════════
          INNER FACE PANEL — the BLACK treatment (per brief)
          This is the large defining feature: the inner face region.

          In the reference, this gray/white region covers:
           - the wide forehead between the brow ridges
           - the heavy brow overhang area (wide shelf)
           - eye socket surroundings
           - nose bridge
           - muzzle / nose
           - upper lip / philtrum
           - lower lip
           - chin

          Shape: wide at the brow, narrows at temple, widens again at muzzle,
          narrows to rounded chin. A tall shield/face-mask shape.
      ══════════════════════════════════════════════════════════════════ */}
      <path
        d="
          M200,78
          C174,78 152,88 140,106
          C130,120 128,138 130,156
          C126,162 122,170 120,178
          C118,186 118,196 122,206
          C128,218 136,228 144,236
          C152,244 162,252 172,258
          C180,263 188,266 200,268
          C212,266 220,263 228,258
          C238,252 248,244 256,236
          C264,228 272,218 278,206
          C282,196 282,186 280,178
          C278,170 274,162 270,156
          C272,138 270,120 260,106
          C248,88 226,78 200,78
          Z
        "
        fill={innerColor}
      />

      {/* ══════════════════════════════════════════════════════════════════
          BROW RIDGE — the most dominant feature of the reference monkey
          Enormous, heavy, projecting brow shelf.
          Sits in the orange outer form, overhangs the inner face panel.
          Creates the "monk focus" intense expression.
      ══════════════════════════════════════════════════════════════════ */}
      {/* The heavy brow shelf — left side */}
      <path
        d="
          M120,106
          C128,90 140,80 156,76
          C140,80 128,96 128,114
          C128,120 130,126 134,132
          C128,124 120,114 120,106
          Z
        "
        fill={outerColor}
      />
      {/* The heavy brow shelf — right side */}
      <path
        d="
          M280,106
          C272,90 260,80 244,76
          C260,80 272,96 272,114
          C272,120 270,126 266,132
          C272,124 280,114 280,106
          Z
        "
        fill={outerColor}
      />
      {/* Brow center bridge — the dark furrow between brows */}
      <path
        d="
          M164,88 C174,82 190,80 200,80 C210,80 226,82 236,88
          C226,84 212,82 200,82 C188,82 174,84 164,88 Z
        "
        fill={outerColor}
      />

      {/* Inner brow detail — golden brow stripe over the black (matches reference) */}
      {/* Left brow stripe — the angled orange brow arch over the dark socket */}
      <path
        d="M130,128 C138,116 152,110 170,112 C158,110 144,118 138,128 C134,134 132,142 136,150"
        stroke={outerColor}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right brow stripe */}
      <path
        d="M270,128 C262,116 248,110 230,112 C242,110 256,118 262,128 C266,134 268,142 264,150"
        stroke={outerColor}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* ══════════════════════════════════════════════════════════════════
          EYES — small, deep-set, intense
          Sit just below the heavy brow shelf.
          Amber/dark irises with dark pupils.
      ══════════════════════════════════════════════════════════════════ */}
      {/* Left eye */}
      <ellipse cx="158" cy="164" rx="18" ry="16" fill={outerColor} opacity="0.85" />
      <ellipse cx="158" cy="165" rx="12" ry="11" fill="#0c0a06" />
      {/* Left iris catch light */}
      <circle cx="153" cy="160" r="5" fill={outerColor} opacity="0.4" />

      {/* Right eye */}
      <ellipse cx="242" cy="164" rx="18" ry="16" fill={outerColor} opacity="0.85" />
      <ellipse cx="242" cy="165" rx="12" ry="11" fill="#0c0a06" />
      {/* Right iris catch light */}
      <circle cx="237" cy="160" r="5" fill={outerColor} opacity="0.4" />

      {/* ══════════════════════════════════════════════════════════════════
          NOSE — wide, flat, prominent
          Nose bridge is subtle, nostrils are the main shape.
      ══════════════════════════════════════════════════════════════════ */}
      {/* Nose bridge — subtle ridge */}
      <path
        d="M192,190 C190,196 188,206 188,214 L212,214 C212,206 210,196 208,190"
        fill={outerColor}
        opacity="0.15"
      />
      {/* Left nostril */}
      <ellipse cx="181" cy="220" rx="15" ry="13" fill={outerColor} opacity="0.55" />
      <ellipse cx="181" cy="221" rx="9" ry="8" fill={innerColor} />
      {/* Right nostril */}
      <ellipse cx="219" cy="220" rx="15" ry="13" fill={outerColor} opacity="0.55" />
      <ellipse cx="219" cy="221" rx="9" ry="8" fill={innerColor} />
      {/* Nose central ridge */}
      <ellipse cx="200" cy="218" rx="8" ry="6" fill={outerColor} opacity="0.25" />

      {/* ══════════════════════════════════════════════════════════════════
          MUZZLE / MOUTH — the prognathous lower face
          The reference shows a slightly protruding muzzle area.
          Lips are subtle — the reference has a straight/neutral expression.
      ══════════════════════════════════════════════════════════════════ */}
      {/* Upper lip line */}
      <path
        d="M172,244 C180,252 196,256 200,256 C204,256 220,252 228,244"
        stroke={outerColor}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Center lip philtrum */}
      <path
        d="M196,238 C198,244 200,246 200,246 C200,246 202,244 204,238"
        stroke={outerColor}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Lower lip / chin crease */}
      <path
        d="M176,260 C186,270 214,270 224,260"
        stroke={outerColor}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.25"
      />

      {/* ── MONK VERTICAL LASER-CUT — brand signature ───────────────── */}
      {showCut && (
        <line
          x1="200"
          y1="0"
          x2="200"
          y2="440"
          stroke="var(--color-monk)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
