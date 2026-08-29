import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Target, Layers, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type StudioCraftStageProps = {
  activePillarIndex: number;
  onSelectPillar: (index: number) => void;
};

const pillarNodes = [
  { index: "01", label: "Strategy", icon: Target, subtitle: "Point of View" },
  { index: "02", label: "Design", icon: Layers, subtitle: "Editorial Discipline" },
  { index: "03", label: "Technology", icon: Cpu, subtitle: "Intentional Tools" },
  { index: "04", label: "Impact", icon: Sparkles, subtitle: "Enduring Value" },
];

export function StudioCraftStage({ activePillarIndex, onSelectPillar }: StudioCraftStageProps) {
  const reducedMotion = useReducedMotion();
  const activeNode = pillarNodes[activePillarIndex] || pillarNodes[0];
  const IconComp = activeNode.icon;

  return (
    <div className="relative w-full rounded-[var(--radius-lg)] border border-[var(--color-line-subtle)] bg-[#0a0a0e] p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
      
      {/* Background Radial Orange Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_40%,rgba(255,85,0,0.12)_0%,transparent_70%)] opacity-80"
      />

      {/* Structural Laser Blueprint Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
      />

      {/* Header Stage Status */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[var(--color-dim)] border-b border-[var(--color-line-subtle)] pb-4">
        <span className="flex items-center gap-2 font-semibold text-[var(--color-monk)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-monk)] animate-pulse" />
          STUDIO CRAFT SYSTEM // 0{activePillarIndex + 1}
        </span>
        <span className="text-[var(--color-muted)]">WORLD BUILDERS</span>
      </div>

      {/* Center Dynamic Architectural Node Display */}
      <div className="relative z-10 my-6 flex flex-col items-center justify-center py-6 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/10 text-[var(--color-monk)] shadow-[0_0_30px_rgba(255,85,0,0.25)] transition-all duration-500">
          <IconComp className="h-10 w-10 text-[var(--color-monk)]" />

          {/* Rotating Laser Ring */}
          <div
            className={cn(
              "absolute inset-0 rounded-full border border-dashed border-[var(--color-monk)]/30",
              reducedMotion ? "" : "animate-[spin_16s_linear_infinite]"
            )}
          />
        </div>

        <h4 className="mt-4 text-xl font-bold tracking-tight text-[var(--color-text)]">
          {activeNode.label}
        </h4>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--color-monk)] font-medium">
          {activeNode.subtitle}
        </p>
      </div>

      {/* 4-Node Connecting Energy Pipeline */}
      <div className="relative z-10 grid grid-cols-4 gap-2 border-t border-[var(--color-line-subtle)] pt-4">
        {pillarNodes.map((node, i) => {
          const isActive = i === activePillarIndex;
          return (
            <button
              key={node.index}
              onClick={() => onSelectPillar(i)}
              className={cn(
                "group relative flex flex-col items-center rounded p-2 transition-all duration-300 text-center focus:outline-none",
                isActive
                  ? "bg-[var(--color-monk)]/10 border border-[var(--color-monk)]/40 shadow-[0_0_12px_rgba(255,85,0,0.2)]"
                  : "bg-[#0f0f14] border border-[var(--color-line-subtle)] hover:border-[var(--color-monk)]/30"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] font-bold transition-colors duration-300",
                  isActive ? "text-[var(--color-monk)]" : "text-[var(--color-dim)] group-hover:text-[var(--color-text)]"
                )}
              >
                [{node.index}]
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 hidden sm:block",
                  isActive ? "text-[var(--color-text)] font-semibold" : "text-[var(--color-muted)]"
                )}
              >
                {node.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
