import { SwatchBook } from "lucide-react";

export function BrandingVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#09090c] p-6 text-[var(--color-text)]">
      {/* Header */}
      <div className="flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <SwatchBook className="h-3.5 w-3.5" />
          BRAND SYSTEM MATRIX // 02
        </span>
        <span>TOKEN SPEC v2.4</span>
      </div>

      {/* Center Color Token & Type Spec Matrix */}
      <div className="my-auto space-y-5 py-4">
        {/* Color Palette Swatches */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-dim)]">
            Primary Color Tokens
          </span>
          <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col items-center rounded border border-[var(--color-line-subtle)] bg-[#050507] p-2 text-center">
              <span className="h-4 w-4 rounded-full border border-white/20 bg-[#050507]" />
              <span className="mt-1 font-mono text-[9px] text-[var(--color-dim)]">#050507</span>
            </div>
            <div className="flex flex-col items-center rounded border border-[var(--color-line-subtle)] bg-[#141419] p-2 text-center">
              <span className="h-4 w-4 rounded-full bg-[#141419]" />
              <span className="mt-1 font-mono text-[9px] text-[var(--color-dim)]">#141419</span>
            </div>
            <div className="flex flex-col items-center rounded border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/10 p-2 text-center">
              <span className="h-4 w-4 rounded-full bg-[var(--color-monk)] shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
              <span className="mt-1 font-mono text-[9px] font-semibold text-[var(--color-monk)]">#FF5500</span>
            </div>
            <div className="flex flex-col items-center rounded border border-[var(--color-line-subtle)] bg-[#F4F4F5] p-2 text-center">
              <span className="h-4 w-4 rounded-full bg-[#F4F4F5]" />
              <span className="mt-1 font-mono text-[9px] text-[var(--color-dim)]">#F4F4F5</span>
            </div>
          </div>
        </div>

        {/* Typographic Scale Preview */}
        <div className="space-y-2 rounded border border-[var(--color-line-subtle)] bg-[#0d0d12] p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-dim)]">
            Typography Scale Spec
          </span>
          <div className="space-y-1">
            <p className="text-xl font-bold tracking-tight text-[var(--color-text)]">
              DISPLAY 11rem / H1 5rem
            </p>
            <p className="font-mono text-xs text-[var(--color-monk)]">
              --font-mono: Poppins, Monospace;
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span>System Rules: Strict</span>
        <span className="text-[var(--color-monk)]">Multi-Surface Ready</span>
      </div>
    </div>
  );
}
