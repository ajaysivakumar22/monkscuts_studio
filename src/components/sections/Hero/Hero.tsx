import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MonkFace } from "@/components/brand/MonkFace";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(
        el.querySelectorAll(
          "[data-hero-line], [data-hero-eyebrow], [data-hero-sub], [data-hero-cta], [data-hero-scroll], [data-hero-guide]"
        ),
        { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" }
      );
      gsap.set("[data-hero-face]", { opacity: 0.55, scale: 1, y: 0, x: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl
        // 1. Hairline architectural guide
        .fromTo(
          "[data-hero-guide]",
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 1.2, ease: "power4.inOut" }
        )
        // 2. Eyebrow badge
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.7"
        )
        // 3. MONK FACE — the dominant visual entrance
        //    Comes in from the right, slightly cropped, fades to high presence
        .fromTo(
          "[data-hero-face]",
          { opacity: 0, x: 80, scale: 0.9 },
          { opacity: 0.65, x: 0, scale: 1, duration: 1.8, ease: "power2.out" },
          "-=0.5"
        )
        // 4. Typography — clip-path reveal from bottom
        .fromTo(
          "[data-hero-line]",
          { clipPath: "inset(0 0 100% 0)", y: 44 },
          { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1.1, stagger: 0.12, ease: "power4.out" },
          "-=1.2"
        )
        // 5. Sub + CTAs
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.4"
        )
        // 6. Scroll cue
        .fromTo(
          "[data-hero-scroll]",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );

      // ── Pointer parallax — monkey follows mouse slowly ──────────────
      const handlePointer = (e: PointerEvent) => {
        if (window.innerWidth < 768) return;
        const xPct = e.clientX / window.innerWidth - 0.5;
        const yPct = e.clientY / window.innerHeight - 0.5;

        gsap.to("[data-hero-face]", {
          x: xPct * 22,
          y: yPct * 14,
          rotate: xPct * 2,
          duration: 1.6,
          ease: "power1.out",
          overwrite: "auto",
        });

        if (auraRef.current) {
          gsap.to(auraRef.current, {
            x: xPct * 40,
            y: yPct * 40,
            duration: 1.8,
            ease: "power1.out",
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
      className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--bg-hero)] pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24"
    >
      {/* ── Atmospheric amber aura ─────────────────────────────────── */}
      <div
        ref={auraRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[20%] -z-10 h-[40vw] w-[40vw] max-h-[600px] max-w-[600px] rounded-full blur-[120px] opacity-80"
        style={{
          background: "radial-gradient(circle, rgba(200,122,0,0.18) 0%, rgba(255,85,0,0.06) 50%, transparent 70%)",
        }}
      />

      {/* ── Architectural hairline ─────────────────────────────────── */}
      <div
        data-hero-guide
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-28 h-px origin-left bg-gradient-to-r from-transparent via-[var(--color-line-subtle)] to-transparent opacity-50"
      />

      {/* ══════════════════════════════════════════════════════════════
          LARGE MONK FACE — the PRIMARY visual of the Hero.

          This is NOT a watermark. It is a major compositional element.

          Positioned to the RIGHT of the viewport — partially cropped
          intentionally, as per the reference composition.
          The monkey "looks in" at the visitor.

          Opacity: 0.65 — substantial presence, does not obstruct text.
          The text runs over the LEFT half of the screen.
          The monkey owns the RIGHT half.

          Responsive:
          - Desktop: very large (50vh height minimum)
          - Tablet: scaled to 40vw
          - Mobile: reduced to lower-right, smaller scale
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-[45%] select-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <MonkFace
          data-hero-face
          className="
            h-[55vw] w-[55vw]
            max-h-[600px] max-w-[600px]
            min-h-[280px] min-w-[280px]
            sm:h-[52vw] sm:w-[52vw]
            md:h-[48vw] md:w-[48vw]
            lg:h-[50vw] lg:w-[50vw]
            xl:h-[46vw] xl:w-[46vw]
          "
          showCut={false}
          outerColor="var(--color-monk-face)"
          innerColor="var(--color-void)"
          style={{ opacity: 0 }}
        />
      </div>

      {/* ── CONTENT — sits in the LEFT 60% on desktop, full width mobile ── */}
      <Container className="relative z-10 my-auto w-full">
        {/* Eyebrow */}
        <div data-hero-eyebrow className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-monk)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-monk)]" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-monk)]">
            {hero.eyebrow}
          </span>
        </div>

        {/* Master wordmark — left-dominant composition */}
        <div className="mt-7 md:mt-9 max-w-[60%] sm:max-w-[55%] md:max-w-[58%] lg:max-w-[54%]">
          <h1 className="font-display font-black leading-[0.92] tracking-tight text-[var(--color-text)] select-none">
            {/* Line 1: MONKCUTS */}
            <span className="block overflow-hidden">
              <span
                data-hero-line
                className="block text-[clamp(3.5rem,9vw,8rem)] text-[#f4f4f5]"
              >
                {hero.wordmarkLine1}
              </span>
            </span>
            {/* Line 2: STUDIO */}
            <span className="block overflow-hidden">
              <span
                data-hero-line
                className="block text-[clamp(3.5rem,9vw,8rem)] text-[var(--color-monk)]"
                style={{ textShadow: "0 0 60px rgba(255,85,0,0.12)" }}
              >
                {hero.wordmarkLine2}
              </span>
            </span>
          </h1>
        </div>

        {/* Subtext & CTAs */}
        <div className="mt-10 md:mt-12 max-w-[60%] sm:max-w-[55%] md:max-w-[50%] lg:max-w-[44%] space-y-8">
          <p
            data-hero-sub
            className="text-[clamp(0.875rem,1.4vw,1.0625rem)] leading-relaxed text-[var(--color-text-secondary)]"
          >
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div data-hero-cta>
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                className="group w-full sm:w-auto justify-center font-bold tracking-[0.12em] shadow-[0_0_24px_rgba(255,85,0,0.22)] hover:shadow-[0_0_36px_rgba(255,85,0,0.42)] hover:scale-[1.02] transition-all duration-300"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
            <div data-hero-cta>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                className="w-full sm:w-auto justify-center font-semibold tracking-[0.12em] border-[var(--color-line-strong)] transition-all duration-300 hover:border-[var(--color-monk-face)] hover:text-[var(--color-monk-face)]"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>

        {/* Signature bar */}
        <div
          data-hero-scroll
          className="mt-16 md:mt-24 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-[var(--color-line-subtle)] pt-6 max-w-[60%] sm:max-w-none"
        >
          <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-dim)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" aria-hidden="true" />
            <span>{hero.signature}</span>
          </div>
          <a
            href="#studio"
            className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-dim)] transition-colors duration-300 hover:text-[var(--color-monk)]"
          >
            <span>Explore Studio</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line-subtle)] transition-all duration-300 group-hover:border-[var(--color-monk)] group-hover:bg-[rgba(255,85,0,0.1)]">
              <ArrowDown className="h-3.5 w-3.5 text-[var(--color-monk)] transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
