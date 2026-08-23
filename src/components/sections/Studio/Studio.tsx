import { studio, principles } from "@/data/studio";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function Studio() {
  return (
    <Section id="studio" className="bg-[var(--bg-studio)]">
      <Container>
        <Reveal>
          <Eyebrow>{studio.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <Reveal as="h2" className="text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
            {studio.statementLine1}
            <br />
            <span className="text-[var(--color-monk)]">{studio.statementLine2}</span>
          </Reveal>

          <Reveal delay={0.1} className="self-end">
            <p className="max-w-md text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              {studio.body}
            </p>
          </Reveal>
        </div>

        <Reveal
          stagger={0.12}
          className="mt-24 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[var(--color-line-subtle)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {principles.map((principle) => (
            <div
              key={principle.index}
              className="group flex flex-col gap-6 bg-[var(--color-surface-card)] p-8 transition-all duration-300 hover:bg-[var(--color-surface-hover)] hover:-translate-y-0.5"
            >
              <span className="font-mono text-[var(--text-caption)] text-[var(--color-monk)] transition-transform duration-300 group-hover:translate-x-1">
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
