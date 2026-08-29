import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project, workEyebrow, workStatement } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";

export function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveProject(project);
    }
  };

  return (
    <Section id="work" className="bg-[var(--bg-work)] relative overflow-hidden">
      {/* Subtle Warm MONK Orange Atmospheric Field Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_15%_70%,rgba(255,85,0,0.06)_0%,transparent_60%)] opacity-80"
      />
      <Container className="relative z-10">
        <Reveal>
          <Eyebrow>{workEyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
            {workStatement}
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 flex flex-col">
          {projects.map((project, i) => (
            <Reveal
              key={project.number}
              delay={i * 0.05}
              className="border-t border-[var(--color-line-subtle)] last:border-b"
            >
              <div
                className="group py-8 md:py-10 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-monk)]"
                role="button"
                tabIndex={0}
                onClick={() => setActiveProject(project)}
                onKeyDown={(e) => handleKeyDown(e, project)}
              >
                <div className="grid gap-6 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)]">
                  <span className="font-mono text-[var(--text-caption)] font-semibold text-[var(--color-dim)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                    {project.number}
                  </span>

                  <div>
                    <p className="font-mono text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-monk)]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-[var(--text-h2)] font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)] flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="h-6 w-6 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--color-monk)]" />
                    </h3>
                  </div>

                  <div className="flex flex-col justify-between gap-6 md:items-end md:text-right">
                    <p className="max-w-sm text-[var(--text-body)] leading-relaxed text-[var(--color-muted)]">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-monk)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-semibold">
                        Explore Case Study &rarr;
                      </span>
                      <span className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-hover:text-[var(--color-text)]">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Preview Frame with Dynamic Laser Cut Hairline Accent */}
                <div
                  className="relative mt-8 md:mt-10 h-56 w-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[var(--color-monk)]/50 group-hover:shadow-[0_0_35px_rgba(255,85,0,0.15)] md:h-72"
                >
                  {/* Radial Glow & Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,85,0,0.08)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  {/* Laser Left Accent Line */}
                  <div className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-[var(--color-monk)] transition-transform duration-500 origin-top group-hover:scale-y-100 group-hover:shadow-[0_0_10px_rgba(255,85,0,0.9)]" />

                  {/* Center Interactive Pill Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-monk)]/40 bg-black/80 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-monk)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-monk)] group-hover:bg-[var(--color-monk)] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,85,0,0.5)]">
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </Section>
  );
}
