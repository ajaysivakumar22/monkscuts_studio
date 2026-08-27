import { studio, principles } from "@/data/studio";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function Studio() {
  return (
    <Section id="studio" className="relative bg-[var(--bg-studio)]">
      {/* Hero -> Studio Visual Transition Thread (Laser Cut Connector) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-12 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[var(--color-monk)] via-[var(--color-monk)]/50 to-transparent shadow-[0_0_10px_rgba(255,85,0,0.6)]"
      />

      <Container>
        <Reveal>
          <Eyebrow>{studio.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Reveal as="h2" className="text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
            {studio.statementLine1}
            <br />
            <span className="text-[var(--color-monk)] drop-shadow-[0_0_25px_rgba(255,85,0,0.2)]">
              {studio.statementLine2}
            </span>
          </Reveal>

          <Reveal delay={0.1} className="self-end">
            <p className="max-w-md text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              {studio.body}
            </p>
          </Reveal>
        </div>

        <Reveal
          stagger={0.12}
          className="mt-20 md:mt-24 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[var(--color-line-subtle)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {principles.map((principle) => (
            <div
              key={principle.index}
              className="group relative flex flex-col gap-6 bg-[var(--color-surface-card)] p-8 transition-all duration-500 hover:bg-[var(--color-surface-hover)] hover:-translate-y-1"
            >
              {/* Active Principle Accent Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-[var(--color-monk)] transition-transform duration-500 origin-left group-hover:scale-x-100 group-hover:shadow-[0_0_12px_rgba(255,85,0,0.8)]"
              />

              <span className="font-mono text-[var(--text-caption)] font-bold text-[var(--color-monk)] transition-transform duration-300 group-hover:translate-x-1">
                {principle.index}
              </span>
              <h3 className="text-[var(--text-h4)] font-semibold text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                {principle.title}
              </h3>
              <p className="text-[var(--text-caption)] leading-relaxed text-[var(--color-muted)]">
                {principle.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
