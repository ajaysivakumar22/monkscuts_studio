import { founder } from "@/data/founder";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { MonkMark } from "@/components/brand/MonkMark";
import { Button } from "@/components/ui/Button";

export function Founder() {
  return (
    <Section id="founder">
      <Container>
        <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <div className="flex aspect-[4/5] w-full flex-col justify-end border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
              <MonkMark className="h-14 w-14 text-[var(--color-dim)]" strokeWidth={1} />
              <p className="mt-6 font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)]">
                Portrait placeholder — ready for founder imagery
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>{founder.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
                {founder.statementLine1}
                <br />
                <span className="text-[var(--color-monk)]">{founder.statementLine2}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <p className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-monk)]">
                {founder.name}
              </p>
              <p className="mt-4 max-w-xl text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
                {founder.bio}
              </p>
            </Reveal>

            <Reveal delay={0.15} stagger={0.05} className="mt-10 flex flex-wrap gap-3">
              {founder.skills.map((skill) => (
                <span
                  key={skill.label}
                  className="border border-[var(--color-line)] px-4 py-2 font-mono text-[var(--text-label)] uppercase tracking-[0.1em] text-[var(--color-muted)]"
                >
                  {skill.label}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <Button href={founder.profileHref} variant="ghost" className="px-0">
                {founder.profileLabel} &rarr;
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
