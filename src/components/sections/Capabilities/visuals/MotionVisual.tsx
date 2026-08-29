import { Sparkles, FastForward } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MotionVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#09090c] p-6 text-[var(--color-text)]">
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <Sparkles className="h-3.5 w-3.5" />
          KINETIC MOTION // 05
        </span>
        <span className="flex items-center gap-1 text-[var(--color-monk)] font-bold">
          <FastForward className="h-3 w-3" />
          60 FPS GSAP
        </span>
      </div>

      {/* Kinetic Typography Marquee Stage */}
      <div className="my-auto space-y-4 py-6 overflow-hidden">
        {/* Row 1 - Marquee Left */}
        <div
          className={`flex whitespace-nowrap font-mono text-2xl font-black uppercase tracking-tighter text-[var(--color-text)] ${
            reducedMotion ? "" : "animate-[marquee_12s_linear_infinite]"
          }`}
        >
          <span className="mr-6">
            MONK CUTS <span className="text-[var(--color-monk)]">MOTION</span> SYSTEM
          </span>
          <span className="mr-6">
            MONK CUTS <span className="text-[var(--color-monk)]">MOTION</span> SYSTEM
          </span>
        </div>

        {/* Row 2 - Skewed Accent Marquee Right */}
        <div
          className={`flex whitespace-nowrap font-mono text-lg font-bold uppercase tracking-widest text-[var(--color-monk)] opacity-80 ${
            reducedMotion ? "" : "animate-[marquee_18s_linear_infinite_reverse]"
          }`}
        >
          <span className="mr-8">
            ✦ TITLE SEQUENCES ✦ LOTTIE ASSETS ✦ 2D/3D ANIMATION
          </span>
          <span className="mr-8">
            ✦ TITLE SEQUENCES ✦ LOTTIE ASSETS ✦ 2D/3D ANIMATION
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span>Easing: Custom Power3</span>
        <span className="text-[var(--color-monk)]">System Motion</span>
      </div>
    </div>
  );
}
