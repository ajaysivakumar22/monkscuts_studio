import { founder } from "@/data/founder";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { MonkFace } from "@/components/brand/MonkFace";
import { Button } from "@/components/ui/Button";

export function Founder() {
  return (
    <Section id="founder" className="bg-[var(--bg-founder)]">
      <Container>
        <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <div className="group flex aspect-[4/5] w-full flex-col justify-end border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] p-8 transition-all duration-500 hover:border-[var(--color-monk)]/40 hover:bg-[var(--color-surface-hover)]">
              <MonkFace className="h-16 w-16 transition-all duration-500 group-hover:scale-105" showCut={false} outerColor="var(--color-monk-face)" innerColor="var(--color-void)" />
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
                  className="border border-[var(--color-line-subtle)] bg-[var(--color-surface-elevated)] px-4 py-2 font-mono text-[var(--text-label)] uppercase tracking-[0.1em] text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-monk)]/40 hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
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
