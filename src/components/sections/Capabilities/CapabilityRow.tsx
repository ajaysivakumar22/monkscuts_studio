import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

type CapabilityRowProps = {
  service: Service;
  isActive: boolean;
  onSelect: () => void;
};

export function CapabilityRow({ service, isActive, onSelect }: CapabilityRowProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      role="tab"
      id={`tab-${service.id}`}
      aria-selected={isActive}
      aria-controls={`panel-${service.id}`}
      tabIndex={0}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative flex flex-col justify-between gap-5 border-b border-[var(--color-line-subtle)] py-7 px-6 transition-all duration-300 cursor-pointer outline-none",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[var(--color-monk)] before:transition-transform before:duration-300 origin-top",
        isActive
          ? "bg-[#0d0d12]/90 before:scale-y-100 before:shadow-[0_0_12px_rgba(255,85,0,0.8)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent before:scale-y-0 hover:bg-[#0a0a0e]/60 hover:before:scale-y-50"
      )}
    >
      {/* Row Top Bar: Index + Category Title + Arrow */}
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "font-mono text-sm font-bold transition-colors duration-300",
              isActive ? "text-[var(--color-monk)]" : "text-[var(--color-dim)] group-hover:text-[var(--color-text)]"
            )}
          >
            [{service.index}]
          </span>
          <h3
            className={cn(
              "text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300",
              isActive ? "text-[var(--color-monk)] scale-[1.01]" : "text-[var(--color-text)] group-hover:text-[var(--color-monk)]"
            )}
          >
            {service.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {isActive && (
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--color-monk)] shadow-[0_0_10px_rgba(255,85,0,0.2)]">
              Active Focus
            </span>
          )}
          <ArrowUpRight
            className={cn(
              "h-5 w-5 shrink-0 transition-transform duration-300",
              isActive
                ? "text-[var(--color-monk)] translate-x-0.5 -translate-y-0.5"
                : "text-[var(--color-dim)] group-hover:text-[var(--color-text)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            )}
          />
        </div>
      </div>

      {/* Row Description */}
      <p
        className={cn(
          "text-sm leading-relaxed transition-colors duration-300 max-w-xl",
          isActive ? "text-[var(--color-text-secondary)]" : "text-[var(--color-muted)]"
        )}
      >
        {service.description}
      </p>

      {/* Row Tags & Deliverables Summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                "rounded px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-all duration-300",
                isActive
                  ? "border border-[var(--color-monk)]/40 bg-[var(--color-monk)]/10 text-[var(--color-monk)] font-semibold shadow-[0_0_8px_rgba(255,85,0,0.15)]"
                  : "border border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] text-[var(--color-dim)] group-hover:text-[var(--color-text-secondary)]"
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Deliverables Summary Pills */}
        {isActive && service.deliverablesSummary && (
          <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] text-[var(--color-dim)] animate-in fade-in duration-300">
            {service.deliverablesSummary.map((d, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[var(--color-text-secondary)] font-medium">
                <CheckCircle2 className="h-3 w-3 text-[var(--color-monk)] shrink-0" />
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
