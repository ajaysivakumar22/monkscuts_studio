import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import { hero } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MonkMark } from "@/components/brand/MonkMark";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el.querySelectorAll("[data-hero-step]"), { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          "[data-hero-line]",
          { clipPath: "inset(0 0 100% 0)", y: 40 },
          { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1, stagger: 0.12 },
          "-=0.2"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-mark]",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    }, el);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="top" ref={scope} className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <Container className="relative">
        <div data-hero-eyebrow className="font-mono text-[var(--text-label)] uppercase tracking-[0.2em] text-[var(--color-monk)]">
          {hero.eyebrow}
        </div>

        <div className="relative mt-6">
          <h1 className="text-display text-[var(--color-text)]">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                {hero.wordmarkLine1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="relative block text-[var(--color-monk)]">
                {hero.wordmarkLine2}
                <MonkMark
                  data-hero-mark
                  className="pointer-events-none absolute -right-2 top-1/2 hidden h-[0.9em] w-[0.9em] -translate-y-1/2 text-[var(--color-text)] opacity-90 sm:block md:-right-6 lg:right-0"
                  strokeWidth={1.25}
                />
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-end">
          <p data-hero-sub className="max-w-xl text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <span data-hero-cta>
              <Button href={hero.primaryCta.href} variant="outline">
                {hero.primaryCta.label}
              </Button>
            </span>
            <span data-hero-cta>
              <Button href={hero.secondaryCta.href} variant="primary">
                {hero.secondaryCta.label}
              </Button>
            </span>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-[var(--color-line)] pt-6">
          <p data-hero-cta className="font-mono text-[var(--text-label)] uppercase tracking-[0.2em] text-[var(--color-dim)]">
            {hero.signature}
          </p>
          <div data-hero-scroll className="hidden items-center gap-2 text-[var(--color-dim)] sm:flex">
            <span className="font-mono text-[var(--text-label)] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
