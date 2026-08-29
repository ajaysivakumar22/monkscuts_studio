import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { studio, principles } from "@/data/studio";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { StudioCraftStage } from "./StudioCraftStage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Studio() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  // ScrollTrigger integration: auto-advance active philosophy pillar as user scrolls
  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 75%",
          end: "bottom 25%",
          onEnter: () => setActivePillarIndex(index),
          onEnterBack: () => setActivePillarIndex(index),
        });
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActivePillarIndex(index);
    }
  };

  return (
    <Section id="studio" className="relative bg-[var(--bg-studio)] overflow-hidden">
      
      {/* Subtle Warm MONK Orange Atmospheric Field Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_20%_35%,rgba(255,85,0,0.09)_0%,transparent_60%)] opacity-80"
      />

      {/* Structural Laser Blueprint Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-30"
      />

      {/* Section Transition Hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-12 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[var(--color-monk)] via-[var(--color-monk)]/50 to-transparent shadow-[0_0_10px_rgba(255,85,0,0.6)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-monk)]/30 to-transparent"
      />

      <Container className="relative z-10">
        <Reveal>
          <Eyebrow>{studio.eyebrow}</Eyebrow>
        </Reveal>

        {/* Studio Statement & Signature Stage Split Layout */}
        <div className="mt-6 md:mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          
          {/* Left: Statement & Copy */}
          <div className="space-y-5">
            <Reveal as="h2" className="text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
              {studio.statementLine1}
              <br />
              <span className="text-[var(--color-monk)] drop-shadow-[0_0_25px_rgba(255,85,0,0.3)]">
                {studio.statementLine2}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
                {studio.body}
              </p>
            </Reveal>
          </div>

          {/* Right: Signature Studio Craft Focal Point Stage */}
          <Reveal delay={0.15} className="w-full">
            <StudioCraftStage
              activePillarIndex={activePillarIndex}
              onSelectPillar={setActivePillarIndex}
            />
          </Reveal>
        </div>

        {/* Four Philosophy Pillar Cards (Strategy, Design, Technology, Impact) */}
        <Reveal
          stagger={0.1}
          className="mt-12 md:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {principles.map((principle, index) => {
            const isActive = index === activePillarIndex;
            return (
              <div
                key={principle.index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                role="button"
                tabIndex={0}
                onClick={() => setActivePillarIndex(index)}
                onMouseEnter={() => setActivePillarIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  "group relative flex flex-col justify-between gap-5 rounded-[var(--radius-md)] border p-6 transition-all duration-300 cursor-pointer outline-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
                  "before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-[var(--color-monk)] before:transition-transform before:duration-300 origin-left",
                  isActive
                    ? "bg-[#0f0f16] border-[var(--color-monk)]/50 before:scale-x-100 before:shadow-[0_0_15px_rgba(255,85,0,0.8)] -translate-y-1"
                    : "bg-[#0b0b0f] border-[var(--color-line-subtle)] before:scale-x-0 hover:bg-[#0e0e14] hover:before:scale-x-50"
                )}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-sm">
                    <span
                      className={cn(
                        "font-bold transition-colors duration-300",
                        isActive ? "text-[var(--color-monk)]" : "text-[var(--color-dim)] group-hover:text-[var(--color-monk)]"
                      )}
                    >
                      [{principle.index}]
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)] animate-ping" />
                    )}
                  </div>

                  <h3
                    className={cn(
                      "text-xl font-semibold tracking-tight transition-colors duration-300",
                      isActive ? "text-[var(--color-monk)]" : "text-[var(--color-text)] group-hover:text-[var(--color-monk)]"
                    )}
                  >
                    {principle.title}
                  </h3>

                  <p
                    className={cn(
                      "text-xs leading-relaxed transition-colors duration-300",
                      isActive ? "text-[var(--color-text-secondary)]" : "text-[var(--color-muted)]"
                    )}
                  >
                    {principle.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[10px] text-[var(--color-dim)]">
                  <span>CRAFT PRINCIPLE</span>
                  <span
                    className={cn(
                      "transition-all duration-300",
                      isActive ? "text-[var(--color-monk)] translate-x-0.5" : "text-transparent group-hover:text-[var(--color-dim)]"
                    )}
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
