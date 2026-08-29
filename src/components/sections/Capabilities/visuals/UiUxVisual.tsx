import { useState } from "react";
import { Layout, Sliders, ToggleLeft, ToggleRight, Zap } from "lucide-react";

export function UiUxVisual() {
  const [highContrast, setHighContrast] = useState(true);
  const [sliderVal, setSliderVal] = useState(85);

  return (
    <div
      className={`relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border transition-all duration-300 p-6 ${
        highContrast
          ? "border-[var(--color-monk)]/40 bg-[#07070a] text-[var(--color-text)]"
          : "border-[var(--color-line-subtle)] bg-[#121218] text-white"
      }`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between font-mono text-xs text-[var(--color-dim)]">
        <span className="flex items-center gap-1.5 font-semibold text-[var(--color-monk)]">
          <Layout className="h-3.5 w-3.5" />
          DIGITAL INTERFACE // 03
        </span>
        <span className="flex items-center gap-1 text-[var(--color-monk)] font-bold">
          <Zap className="h-3 w-3 fill-[var(--color-monk)]" />
          60 FPS
        </span>
      </div>

      {/* Interactive Interface Component */}
      <div className="my-auto space-y-4 py-4">
        {/* Top Control Toggle */}
        <div className="flex items-center justify-between rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] p-3">
          <div className="flex items-center gap-2">
            <Sliders className="h-4 w-4 text-[var(--color-monk)]" />
            <span className="text-xs font-semibold text-[var(--color-text)]">
              Dark Mode Haptics
            </span>
          </div>
          <button
            onClick={() => setHighContrast(!highContrast)}
            className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-monk)] focus:outline-none"
            aria-label="Toggle High Contrast Mode"
          >
            {highContrast ? (
              <ToggleRight className="h-6 w-6 text-[var(--color-monk)]" />
            ) : (
              <ToggleLeft className="h-6 w-6 text-[var(--color-muted)]" />
            )}
          </button>
        </div>

        {/* Live Interactive Slider */}
        <div className="space-y-2 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] p-4">
          <div className="flex justify-between font-mono text-[10px] text-[var(--color-dim)]">
            <span>Latency / Friction Index</span>
            <span className="text-[var(--color-monk)] font-bold">{sliderVal}ms</span>
          </div>
          <input
            type="range"
            min="10"
            max="150"
            value={sliderVal}
            onChange={(e) => setSliderVal(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded bg-[var(--color-line-strong)] accent-[var(--color-monk)]"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-4 font-mono text-[11px] text-[var(--color-muted)]">
        <span>Sub-100ms Micro-Interactions</span>
        <span className="text-[var(--color-monk)]">Clarity First</span>
      </div>
    </div>
  );
}
