import { originalWorks, originalIpEyebrow, originalIpStatement, originalIpIntro } from "@/data/originalIp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function OriginalIp() {
  return (
    <Section id="original-ip" className="bg-[var(--bg-original-ip)]">
      <Container>
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

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[var(--color-line-subtle)] md:grid-cols-2">
          {originalWorks.map((work) => (
            <Reveal
              key={work.title}
              className="group flex flex-col justify-between gap-10 bg-[var(--color-surface-card)] p-10 transition-all duration-300 hover:bg-[var(--color-surface-hover)]"
            >
              <div>
                <p className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-monk)]">
                  {work.category}
                </p>
                <h3 className="mt-4 text-[var(--text-h3)] font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                  {work.title}
                </h3>
                <p className="mt-4 max-w-sm text-[var(--text-body)] leading-relaxed text-[var(--color-muted)]">
                  {work.description}
                </p>
              </div>
              <span className="w-fit border border-[var(--color-line-subtle)] px-4 py-2 font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-hover:border-[var(--color-monk)]/40 group-hover:text-[var(--color-text)]">
                {work.status}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
