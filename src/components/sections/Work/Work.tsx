import { projects, workEyebrow, workStatement } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function Work() {
  return (
    <Section id="work" className="bg-[var(--bg-work)]">
      <Container>
        <Reveal>
          <Eyebrow>{workEyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
            {workStatement}
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 flex flex-col">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={i * 0.05} className="group border-t border-[var(--color-line-subtle)] py-10 md:py-14 last:border-b">
              <div className="grid gap-6 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)]">
                <span className="font-mono text-[var(--text-caption)] font-semibold text-[var(--color-dim)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                  {project.number}
                </span>

                <div>
                  <p className="font-mono text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-monk)]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-[var(--text-h2)] font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-col justify-between gap-6 md:items-end md:text-right">
                  <p className="max-w-sm text-[var(--text-body)] leading-relaxed text-[var(--color-muted)]">
                    {project.description}
                  </p>
                  <span className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-hover:text-[var(--color-text)]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Preview Frame with Dynamic Laser Cut Hairline Accent */}
              <div
                aria-hidden="true"
                className="relative mt-8 md:mt-10 h-56 w-full overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[var(--color-monk)]/50 group-hover:shadow-[0_0_30px_rgba(255,85,0,0.12)] md:h-72"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,85,0,0.06)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-[var(--color-monk)] transition-transform duration-500 origin-top group-hover:scale-y-100 group-hover:shadow-[0_0_10px_rgba(255,85,0,0.9)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
