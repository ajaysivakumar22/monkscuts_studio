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

        <div className="mt-20 flex flex-col">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={i * 0.05} className="group border-t border-[var(--color-line-subtle)] py-12 last:border-b">
              <div className="grid gap-6 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)]">
                <span className="font-mono text-[var(--text-caption)] text-[var(--color-dim)]">{project.number}</span>

                <div>
                  <p className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-monk)]">
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

              <div
                aria-hidden="true"
                className="mt-10 h-56 w-full origin-center border border-dashed border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[var(--color-monk)]/50 md:h-72"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
