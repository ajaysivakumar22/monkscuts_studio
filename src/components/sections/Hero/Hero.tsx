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
      gsap.set(
        el.querySelectorAll(
          "[data-hero-line], [data-hero-eyebrow], [data-hero-sub], [data-hero-cta], [data-hero-mark], [data-hero-mark-bg], [data-hero-scroll]"
        ),
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
        }
      );
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
          "[data-hero-mark-bg]",
          { opacity: 0, scale: 0.8 },
          { opacity: 0.08, scale: 1, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        )
        .fromTo(
          "[data-hero-mark]",
          { opacity: 0, scale: 0.85, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.6"
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
          "[data-hero-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );

      const handlePointer = (e: PointerEvent) => {
        if (window.innerWidth < 768) return;
        const xPct = e.clientX / window.innerWidth - 0.5;
        const yPct = e.clientY / window.innerHeight - 0.5;

        gsap.to("[data-hero-mark-bg]", {
          x: xPct * 28,
          y: yPct * 28,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to("[data-hero-mark]", {
          x: xPct * 14,
          y: yPct * 14,
          rotate: xPct * 6,
          duration: 0.7,
          ease: "power2.out",
        });
      };

      window.addEventListener("pointermove", handlePointer);
      return () => window.removeEventListener("pointermove", handlePointer);
    }, el);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-[var(--bg-hero)] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background Brand Watermark */}
      <MonkMark
        data-hero-mark-bg
        className="pointer-events-none absolute -right-10 top-1/4 h-64 w-64 text-[var(--color-monk)] opacity-0 select-none sm:h-80 sm:w-80 md:-right-16 md:h-[26rem] md:w-[26rem] lg:right-4 lg:h-[32rem] lg:w-[32rem]"
        strokeWidth={0.75}
      />

      <Container className="relative z-10 my-auto">
        {/* Eyebrow & Brand Indicator */}
        <div data-hero-eyebrow className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-monk)] animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[var(--text-label)] uppercase tracking-[0.22em] text-[var(--color-monk)]">
            {hero.eyebrow}
          </span>
        </div>

        {/* Editorial Wordmark Lockup */}
        <div className="relative mt-8">
          <h1 className="text-display text-[var(--color-text)]">
            <span className="block overflow-hidden">
              <span data-hero-line className="block tracking-tight">
                {hero.wordmarkLine1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="relative inline-flex items-center gap-4 text-[var(--color-monk)] tracking-tight sm:gap-6">
                <span>{hero.wordmarkLine2}</span>
                <MonkMark
                  data-hero-mark
                  className="inline-block h-[0.85em] w-[0.85em] shrink-0 text-[var(--color-text)] opacity-95 transition-all duration-300 hover:scale-105 hover:text-[var(--color-monk)]"
                  strokeWidth={1.25}
                />
              </span>
            </span>
          </h1>
        </div>

        {/* Description & CTAs */}
        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] md:items-end">
          <p data-hero-sub className="max-w-xl text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <span data-hero-cta>
              <Button href={hero.primaryCta.href} variant="outline" className="hover:border-[var(--color-monk)]">
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

        {/* Bottom Signature Bar & Studio Scroll Cue */}
        <div className="mt-20 flex items-center justify-between border-t border-[var(--color-line-subtle)] pt-6">
          <p data-hero-cta className="flex items-center gap-3 font-mono text-[var(--text-label)] uppercase tracking-[0.2em] text-[var(--color-dim)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" aria-hidden="true" />
            <span>{hero.signature}</span>
          </p>
          <a
            href="#studio"
            data-hero-scroll
            className="group hidden items-center gap-2.5 font-mono text-[var(--text-label)] uppercase tracking-[0.2em] text-[var(--color-dim)] transition-colors hover:text-[var(--color-monk)] sm:flex"
          >
            <span>Explore Studio</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-[var(--color-monk)] transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
