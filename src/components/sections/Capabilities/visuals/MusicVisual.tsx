import { Volume2, Disc } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MusicVisual() {
  const reducedMotion = useReducedMotion();

  // Waveform Bar heights
  const bars = [35, 60, 85, 45, 95, 70, 50, 80, 100, 65, 40, 75, 90, 55, 30, 85, 60, 95, 40, 70];

  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#09090c] p-6 text-[var(--color-text)]">
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <Volume2 className="h-3.5 w-3.5" />
          AUDIO SCORING & AI // 06
        </span>
        <span className="flex items-center gap-1 text-[var(--color-monk)]">
          <Disc className={`h-3.5 w-3.5 ${reducedMotion ? "" : "animate-spin"}`} />
          44.1kHz / 24-BIT
        </span>
      </div>

      {/* Rhythmic Frequency Spectrum Visualizer */}
      <div className="my-auto py-6">
        <div className="flex h-28 items-end justify-between gap-1.5 rounded border border-[var(--color-line-subtle)] bg-[#050507] p-4">
          {bars.map((height, i) => (
            <div
              key={i}
              className={`w-full rounded-t bg-gradient-to-t from-[var(--color-monk)]/20 to-[var(--color-monk)] transition-all duration-300 ${
                reducedMotion ? "" : "animate-pulse"
              }`}
              style={{
                height: `${height}%`,
                animationDelay: `${(i % 5) * 0.2}s`,
                animationDuration: "1.2s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span>Analogue Synth + AI Score</span>
        <span className="text-[var(--color-monk)]">Bespoke Audio Identity</span>
      </div>
    </div>
  );
}
