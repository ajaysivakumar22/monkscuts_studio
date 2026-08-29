import { Layers, Smartphone, Monitor } from "lucide-react";

export function DigitalVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#09090c] p-6 text-[var(--color-text)]">
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <Layers className="h-3.5 w-3.5" />
          CONTENT SYSTEM // 07
        </span>
        <span>MULTI-FORMAT GRID</span>
      </div>

      {/* Multi-Format Canvas Cards */}
      <div className="my-auto grid grid-cols-3 gap-3 py-6">
        {/* 1:1 Story Card */}
        <div className="flex flex-col items-center justify-center rounded border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] p-3 text-center transition-all duration-300 hover:border-[var(--color-monk)]">
          <span className="font-mono text-[10px] text-[var(--color-monk)] font-bold">1:1</span>
          <span className="mt-1 font-mono text-[9px] text-[var(--color-dim)]">Post</span>
        </div>

        {/* 9:16 Reel Card */}
        <div className="flex flex-col items-center justify-center rounded border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/10 p-3 text-center transition-all duration-300 shadow-[0_0_15px_rgba(255,85,0,0.15)]">
          <Smartphone className="h-4 w-4 text-[var(--color-monk)]" />
          <span className="mt-1 font-mono text-[10px] text-[var(--color-monk)] font-bold">9:16</span>
          <span className="font-mono text-[9px] text-[var(--color-dim)]">Reels / Shorts</span>
        </div>

        {/* 16:9 Banner Card */}
        <div className="flex flex-col items-center justify-center rounded border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] p-3 text-center transition-all duration-300 hover:border-[var(--color-monk)]">
          <Monitor className="h-4 w-4 text-[var(--color-dim)]" />
          <span className="mt-1 font-mono text-[10px] text-[var(--color-text)] font-bold">16:9</span>
          <span className="font-mono text-[9px] text-[var(--color-dim)]">Banner</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span>Cross-Platform Cohesion</span>
        <span className="text-[var(--color-monk)]">Always Recognizable</span>
      </div>
    </div>
  );
}
