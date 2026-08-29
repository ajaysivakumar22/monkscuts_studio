import { useEffect } from "react";
import { X, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import type { OriginalWork } from "@/data/originalIp";

type CaseStudyModalProps = {
  project: Project | OriginalWork | null;
  onClose: () => void;
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const numberStr = "number" in project ? project.number : "LAB";
  const clientName = "client" in project && project.client ? project.client : "MONK CUTS Studio";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card Container */}
      <div className="relative z-10 my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line-subtle)] bg-[#0c0c0e] shadow-[0_0_50px_rgba(255,85,0,0.15)] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--color-line-subtle)] bg-[#0c0c0e]/90 px-6 py-4 backdrop-blur-md md:px-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--color-monk)]">
              [{numberStr}]
            </span>
            <span className="font-mono text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-dim)]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-monk)] hover:bg-[var(--color-monk)] hover:text-black"
          >
            <X className="h-4 w-4 transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-10 space-y-10">
          
          {/* Main Title & Status */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2
                id="modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)]"
              >
                {project.title}
              </h2>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-monk)]/30 bg-[var(--color-monk)]/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--color-monk)]">
                <Sparkles className="h-3.5 w-3.5" />
                {project.status}
              </span>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4 border-y border-[var(--color-line-subtle)] py-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)]">Client / Entity</p>
              <p className="mt-1 font-semibold text-[var(--color-text)]">{clientName}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)]">Timeline</p>
              <p className="mt-1 font-semibold text-[var(--color-text)]">{project.year || "2026"}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)]">Role & Scope</p>
              <p className="mt-1 font-semibold text-[var(--color-text)]">{project.role || "Lead Creative"}</p>
            </div>
          </div>

          {/* Key Metrics / Highlights */}
          {project.keyMetrics && project.keyMetrics.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-monk)] font-semibold">
                // Impact & Performance Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.keyMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] p-5 transition-all duration-300 hover:border-[var(--color-monk)]/40 hover:bg-[var(--color-surface-hover)]"
                  >
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-[var(--color-monk)]">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-xs text-[var(--color-muted)] leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Narrative: Challenge & Solution */}
          {(project.challenge || project.solution) && (
            <div className="grid gap-8 md:grid-cols-2">
              {project.challenge && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#121215] p-6 space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)] font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    The Challenge
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-monk)]/30 bg-[#141210] p-6 space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-monk)] font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" />
                    The Studio Execution
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Deliverables & Tech Stack */}
          <div className="grid gap-8 md:grid-cols-2">
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)] font-semibold">
                  Core Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-monk)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-dim)] font-semibold">
                  Tools & Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] px-3 py-1.5 font-mono text-xs text-[var(--color-text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Testimonial Quote */}
          {project.quote && (
            <div className="relative overflow-hidden rounded-[var(--radius-md)] border-l-4 border-[var(--color-monk)] border-y border-r border-[var(--color-line-subtle)] bg-gradient-to-r from-[var(--color-monk)]/10 to-transparent p-6 space-y-2">
              <p className="italic text-base text-[var(--color-text)]">
                "{project.quote.text}"
              </p>
              <p className="font-mono text-xs text-[var(--color-dim)]">
                — {project.quote.author}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-line-subtle)] bg-[#09090b] px-6 py-5 md:px-10">
          <div className="font-mono text-xs text-[var(--color-dim)]">
            MONK CUTS STUDIO // CASE STUDY DEEP DIVE
          </div>
          <button
            onClick={() => {
              onClose();
              const contactSec = document.getElementById("contact");
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-monk)] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#ff6a1a] hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]"
          >
            Start a Similar Project
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
