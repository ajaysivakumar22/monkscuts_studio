import { services, servicesEyebrow, servicesStatement } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-[var(--bg-capabilities)]">
      <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
          <Reveal>
            <Eyebrow>{servicesEyebrow}</Eyebrow>
            <h2 className="mt-6 text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
              {servicesStatement}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:justify-self-end">
            <p className="max-w-sm text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)] md:text-right">
              Every capability is built in-house, so a project never loses its point of view moving between disciplines.
            </p>
          </Reveal>
        </div>

        <Reveal as="div" stagger={0.08} className="mt-20 border-t border-[var(--color-line-subtle)]">
          {services.map((service) => (
            <div
              key={service.index}
              className="group relative grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-[var(--color-line-subtle)] py-8 transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:scale-y-0 before:bg-[var(--color-monk)] before:transition-transform before:duration-300 hover:bg-[var(--color-surface-hover)] hover:pl-4 group-hover:before:scale-y-100 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)_2rem] sm:items-center sm:gap-8 sm:px-6"
            >
              <span className="font-mono text-[var(--text-caption)] text-[var(--color-dim)]">{service.index}</span>
              <h3 className="text-[var(--text-h3)] font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                {service.title}
              </h3>
              <p className="col-span-2 mt-3 text-[var(--text-caption)] leading-relaxed text-[var(--color-muted)] sm:col-span-1 sm:mt-0">
                {service.description}
              </p>
              <ArrowUpRight
                aria-hidden="true"
                className="hidden h-5 w-5 shrink-0 text-[var(--color-dim)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-monk)] sm:block"
              />
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
