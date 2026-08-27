import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MonkFace } from "@/components/brand/MonkFace";
import { MonkMark } from "@/components/brand/MonkMark";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isHoveringWordmark, setIsHoveringWordmark] = useState(false);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(
        el.querySelectorAll(
          "[data-hero-line], [data-hero-eyebrow], [data-hero-sub], [data-hero-cta], [data-hero-mark], [data-hero-scroll], [data-hero-guide]"
        ),
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
        }
      );
      // Set MonkFace to visible at its final watermark opacity for reduced motion
      const faceEl = el.querySelector("[data-hero-face]");
      if (faceEl) gsap.set(faceEl, { opacity: 0.22, scale: 1, y: 0, rotate: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Architectural guideline & eyebrow entrance
      tl.fromTo(
        "[data-hero-guide]",
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 1.2, ease: "power4.inOut" }
      )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.7"
        )
        // Background monkey face — rises up from below, fades in to subtle watermark opacity
        .fromTo(
          "[data-hero-face]",
          { opacity: 0, scale: 0.82, y: 40, rotate: -6 },
          { opacity: 0.22, scale: 1, y: 0, rotate: 0, duration: 1.6, ease: "power2.out" },
          "-=0.5"
        )
        // Sculpted wordmark reveal with split clip-path
        .fromTo(
          "[data-hero-line]",
          { clipPath: "inset(0 0 100% 0)", y: 44 },
          { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1.1, stagger: 0.14, ease: "power4.out" },
          "-=1.0"
        )
        // Inline MonkMark signature
        .fromTo(
          "[data-hero-mark]",
          { opacity: 0, scale: 0.6, rotate: -20 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.8)" },
          "-=0.8"
        )
        // Subtext description fade
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.5"
        )
        // CTAs stagger reveal
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.4"
        )
        // Bottom signature bar & scroll cue
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );

      // Pointer parallax — depth & lighting
      const handlePointer = (e: PointerEvent) => {
        if (window.innerWidth < 768) return;
        const xPct = e.clientX / window.innerWidth - 0.5;
        const yPct = e.clientY / window.innerHeight - 0.5;

        // MonkFace background: slow, deep parallax
        gsap.to("[data-hero-face]", {
          x: xPct * 28,
          y: yPct * 18,
          rotate: xPct * 3,
          duration: 1.4,
          ease: "power2.out",
        });

        // Inline MonkMark subtle follow
        gsap.to("[data-hero-mark]", {
          x: xPct * 16,
          y: yPct * 16,
          rotate: xPct * 8,
          duration: 0.8,
          ease: "power2.out",
        });

        // Atmospheric aura shift
        if (auraRef.current) {
          gsap.to(auraRef.current, {
            x: xPct * 50,
            y: yPct * 50,
            duration: 1.5,
            ease: "power2.out",
          });
        }
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
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-[var(--bg-hero)] pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 select-none-text"
    >
      {/* Visual Depth 1: Atmospheric MONK Orange Radial Ambiance */}
      <div
        ref={auraRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,122,0,0.10)_0%,rgba(255,85,0,0.04)_45%,transparent_70%)] blur-3xl opacity-90 sm:h-[40rem] sm:w-[40rem]"
      />

      {/* Visual Depth 2: Precision Architectural Grid Hairline */}
      <div
        data-hero-guide
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 h-[1px] origin-left bg-gradient-to-r from-transparent via-[var(--color-line-subtle)] to-transparent opacity-60"
      />

      {/* ── MONK FACE — the primary background brand visual ───────────────
          Positioned right, large, behind all content.
          Uses opacity + amber color treatment for depth without covering text.
          The monkey "looks out" at the visitor from behind the typography.
      ─────────────────────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 overflow-hidden pr-2 sm:pr-6 md:pr-10"
        aria-hidden="true"
      >
        <MonkFace
          data-hero-face
          className="select-none
            h-64 w-64
            sm:h-80 sm:w-80
            md:h-[30rem] md:w-[30rem]
            lg:h-[38rem] lg:w-[38rem]
            xl:h-[44rem] xl:w-[44rem]"
          showCut={false}
          outerColor="var(--color-monk-face)"
          innerColor="var(--color-void)"
        />
      </div>

      <Container className="relative z-10 my-auto w-full">
        {/* Eyebrow & Live Studio Badge */}
        <div data-hero-eyebrow className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-monk)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-monk)]" />
          </span>
          <span className="text-[var(--text-label)] font-semibold uppercase tracking-[0.2em] text-[var(--color-monk)]">
            {hero.eyebrow}
          </span>
        </div>

        {/* Master Editorial Typography Lockup */}
        <div
          className="relative mt-7 md:mt-9"
          onMouseEnter={() => setIsHoveringWordmark(true)}
          onMouseLeave={() => setIsHoveringWordmark(false)}
        >
          <h1 className="text-display text-[var(--color-text)] select-none">
            <span className="block overflow-hidden">
              <span data-hero-line className="block tracking-tight text-[#f4f4f5] transition-colors duration-500">
                {hero.wordmarkLine1}
              </span>
            </span>
            <span className="block overflow-hidden pt-1 md:pt-2">
              <span data-hero-line className="relative inline-flex items-center gap-4 text-[var(--color-monk)] tracking-tight sm:gap-6 md:gap-8">
                <span className="drop-shadow-[0_0_35px_rgba(255,85,0,0.15)]">
                  {hero.wordmarkLine2}
                </span>
                {/* Signature MonkMark inline with STUDIO — retained as editorial detail */}
                <MonkMark
                  data-hero-mark
                  className={`inline-block h-[0.88em] w-[0.88em] shrink-0 text-[var(--color-text)] transition-all duration-500 cursor-pointer ${
                    isHoveringWordmark
                      ? "scale-110 text-[var(--color-monk-face)] drop-shadow-[0_0_20px_rgba(200,122,0,0.5)]"
                      : "opacity-95 hover:scale-105 hover:text-[var(--color-monk-face)]"
                  }`}
                  strokeWidth={1.2}
                  cutStrokeWidth={isHoveringWordmark ? 2.5 : 1.8}
                  cutClassName={isHoveringWordmark ? "drop-shadow-[0_0_12px_rgba(200,122,0,0.8)]" : ""}
                />
              </span>
            </span>
          </h1>
        </div>

        {/* Integrated Subtext & CTA Action Bar */}
        <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] md:items-end lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          <p
            data-hero-sub
            className="max-w-xl text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)] font-normal"
          >
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 md:justify-end">
            {/* Primary CTA */}
            <div data-hero-cta className="w-full sm:w-auto">
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                className="group relative w-full sm:w-auto justify-center overflow-hidden font-bold tracking-[0.14em] shadow-[0_0_25px_rgba(255,85,0,0.25)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,85,0,0.45)] hover:scale-[1.02]"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>

            {/* Secondary CTA */}
            <div data-hero-cta className="w-full sm:w-auto">
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                className="w-full sm:w-auto justify-center border-[var(--color-line-strong)] text-[var(--color-text)] font-semibold tracking-[0.14em] transition-all duration-300 hover:border-[var(--color-monk-face)] hover:text-[var(--color-monk-face)] hover:bg-[rgba(200,122,0,0.05)]"
              >
                <span>{hero.secondaryCta.label}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Lower Hero Signature Bar & Scroll Cue */}
        <div
          data-hero-scroll
          className="mt-14 md:mt-24 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-[var(--color-line-subtle)] pt-6 md:pt-8"
        >
          <div className="flex items-center gap-3 text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-dim)]">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-monk)]" aria-hidden="true" />
            <span>{hero.signature}</span>
          </div>

          <a
            href="#studio"
            className="group inline-flex items-center gap-3 text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-dim)] transition-colors duration-300 hover:text-[var(--color-monk)]"
          >
            <span>Explore Studio</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line-subtle)] transition-all duration-300 group-hover:border-[var(--color-monk)] group-hover:bg-[rgba(255,85,0,0.1)]">
              <ArrowDown
                className="h-3.5 w-3.5 text-[var(--color-monk)] transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
