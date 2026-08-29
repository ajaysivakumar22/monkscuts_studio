import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Compass, Grid } from "lucide-react";

export function LogoVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#09090c] p-6 text-[var(--color-text)]">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] opacity-60" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <Compass className="h-3.5 w-3.5" />
          VECTOR GEOMETRY // 01
        </span>
        <span>RATIO: 1.618 (GOLDEN)</span>
      </div>

      {/* Center Dynamic Construction Stage */}
      <div className="relative z-10 my-auto flex items-center justify-center py-6">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/5 p-4 shadow-[0_0_30px_rgba(255,85,0,0.12)]">
          {/* Outer Construction Ring */}
          <div
            className={`absolute inset-0 rounded-full border border-dashed border-[var(--color-monk)]/30 ${
              reducedMotion ? "" : "animate-[spin_20s_linear_infinite]"
            }`}
          />

          {/* Golden Ratio Inner Grid Lines */}
          <div className="absolute h-full w-[1px] bg-[var(--color-monk)]/20" />
          <div className="absolute h-[1px] w-full bg-[var(--color-monk)]/20" />

          {/* Dynamic Laser Cut Accent Line */}
          <div
            className={`absolute h-32 w-[2px] bg-[var(--color-monk)] shadow-[0_0_12px_rgba(255,85,0,0.9)] ${
              reducedMotion ? "" : "animate-pulse"
            }`}
            style={{ transform: "rotate(22.5deg)" }}
          />

          {/* Central Precision Mark Node */}
          <div className="relative flex flex-col items-center justify-center text-center">
            <span className="font-mono text-2xl font-extrabold tracking-tighter text-[var(--color-text)]">
              M<span className="text-[var(--color-monk)]">✦</span>K
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[var(--color-dim)]">
              Vector Node [64,64]
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Controls */}
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span className="flex items-center gap-1">
          <Grid className="h-3 w-3 text-[var(--color-monk)]" />
          Precision Curves: Infinite Scale
        </span>
        <span className="text-[var(--color-monk)]">100% Crisp Vector</span>
      </div>
    </div>
  );
}
