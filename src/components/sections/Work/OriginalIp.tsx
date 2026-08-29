import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { originalWorks, type OriginalWork, originalIpEyebrow, originalIpStatement, originalIpIntro } from "@/data/originalIp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";

export function OriginalIp() {
  const [activeWork, setActiveWork] = useState<OriginalWork | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent, work: OriginalWork) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveWork(work);
    }
  };

  return (
    <Section id="original-ip" className="relative bg-[var(--bg-original-ip)] overflow-hidden">
      {/* Subtle Warm MONK Orange Atmospheric Field Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_85%_40%,rgba(255,85,0,0.08)_0%,transparent_60%)] opacity-80"
      />
      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-end">
          <Reveal>
            <Eyebrow>{originalIpEyebrow}</Eyebrow>
            <h2 className="mt-6 text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
              {originalIpStatement}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              {originalIpIntro}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[var(--color-line-subtle)] md:grid-cols-2">
          {originalWorks.map((work) => (
            <Reveal key={work.title} className="h-full">
              <div
                className="group relative flex h-full flex-col justify-between gap-10 bg-[var(--color-surface-card)] p-10 transition-all duration-500 hover:bg-[var(--color-surface-hover)] hover:-translate-y-1 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-monk)]"
                role="button"
                tabIndex={0}
                onClick={() => setActiveWork(work)}
                onKeyDown={(e) => handleKeyDown(e, work)}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-4 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,85,0,0.08)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div>
                  <p className="font-mono text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-monk)]">
                    {work.category}
                  </p>
                  <h3 className="mt-4 text-[var(--text-h3)] font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)] flex items-center justify-between">
                    {work.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--color-monk)]" />
                  </h3>
                  <p className="mt-4 max-w-sm text-[var(--text-body)] leading-relaxed text-[var(--color-muted)]">
                    {work.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="w-fit border border-[var(--color-line-subtle)] px-4 py-2 font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-hover:border-[var(--color-monk)]/40 group-hover:text-[var(--color-text)]">
                    {work.status}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-monk)] font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-1">
                    View Lab Notes &rarr;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Case Study / Lab Notes Modal */}
      <CaseStudyModal
        project={activeWork}
        onClose={() => setActiveWork(null)}
      />
    </Section>
  );
}
