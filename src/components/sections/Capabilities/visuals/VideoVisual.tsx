import { Film, Play } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function VideoVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#09090c] p-6 text-[var(--color-text)]">
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <Film className="h-3.5 w-3.5" />
          CINEMATIC EDIT // 04
        </span>
        <span>REC 4K 60FPS</span>
      </div>

      {/* Center 16:9 Viewfinder Stage */}
      <div className="relative my-auto overflow-hidden rounded border border-[var(--color-line-subtle)] bg-[#000000] p-4 py-8">
        {/* Aspect Ratio Guideline Corners */}
        <div className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-[var(--color-monk)]" />
        <div className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-[var(--color-monk)]" />
        <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[var(--color-monk)]" />
        <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-[var(--color-monk)]" />

        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/10 text-[var(--color-monk)] shadow-[0_0_20px_rgba(255,85,0,0.3)]">
            <Play className="h-5 w-5 fill-[var(--color-monk)] translate-x-0.5" />
          </div>
          <p className="font-mono text-xs font-bold text-[var(--color-text)]">
            00 : 14 : 22 : 09
          </p>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-dim)]">
            Timeline Marker: Master Cut
          </span>
        </div>

        {/* Moving Timeline Playhead Indicator */}
        <div className="mt-4 relative h-1.5 w-full rounded bg-[var(--color-line-strong)] overflow-hidden">
          <div
            className={`h-full w-1/3 bg-[var(--color-monk)] shadow-[0_0_10px_rgba(255,85,0,0.9)] ${
              reducedMotion ? "" : "animate-[marquee_4s_linear_infinite]"
            }`}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span>Aspect: 2.39:1 CinemaScope</span>
        <span className="text-[var(--color-monk)]">Story-Led Pacing</span>
      </div>
    </div>
  );
}
