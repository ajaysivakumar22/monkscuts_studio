import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services, servicesEyebrow, servicesStatement } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityRow } from "./CapabilityRow";
import { CapabilityVisualStage } from "./CapabilityVisualStage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Target, Cpu, Sparkles, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const philosophyCards = [
  {
    icon: Target,
    title: "Strategy First",
    description: "Deep alignment on brand architecture, target positioning, and clear craft direction before any pixels move.",
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Building scalable visual tokens, type rules, and reusable component libraries that hold up as brands expand.",
  },
  {
    icon: Cpu,
    title: "AI-Augmented Craft",
    description: "Blending traditional studio execution with cutting-edge AI scoring and generative workflows for speed and depth.",
  },
  {
    icon: Sparkles,
    title: "Impact Execution",
    description: "Engineered for high-trust authority and unmissable visual presence across every digital and physical touchpoint.",
  },
];

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  // ScrollTrigger integration: auto-advance active capability as user scrolls
  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      rowsRef.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 65%",
          end: "bottom 35%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % services.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  const activeService = services[activeIndex] || services[0];

  return (
    <Section id="capabilities" className="bg-[var(--bg-capabilities)] relative overflow-hidden">
      
      {/* Subtle Top & Bottom Transition Boundary Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-monk)]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-monk)]/20 to-transparent" />

      <Container>
        {/* Section Header */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
          <Reveal>
            <Eyebrow>{servicesEyebrow}</Eyebrow>
            <h2 className="mt-6 text-[var(--text-h1)] font-semibold leading-[0.98] tracking-tight text-[var(--color-text)]">
              {servicesStatement}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:justify-self-end">
            <p className="max-w-sm text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)] md:text-right">
              Seven distinct creative disciplines, engineered under one unified craft architecture.
            </p>
          </Reveal>
        </div>

        {/* Interactive Editorial Split-Stage System */}
        <div className="mt-16 md:mt-20 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          
          {/* Left Column: Interactive Capability Index */}
          <div
            role="tablist"
            aria-label="Studio Capabilities Disciplines"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="flex flex-col border-t border-[var(--color-line-subtle)] focus:outline-none"
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    rowsRef.current[index] = el;
                  }}
                  className="flex flex-col"
                >
                  <CapabilityRow
                    service={service}
                    isActive={isActive}
                    onSelect={() => setActiveIndex(index)}
                  />

                  {/* Mobile Inline Visual Response (Visible on screens < 1024px when active) */}
                  {isActive && (
                    <div className="p-4 bg-[#07070a] border-b border-[var(--color-line-subtle)] lg:hidden animate-in fade-in duration-300">
                      <CapabilityVisualStage visualType={service.visualType} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Contextual Visual Stage (Desktop 1024px+) */}
          <div className="hidden lg:block sticky top-28 w-full">
            <CapabilityVisualStage visualType={activeService.visualType} />

            {/* Sub-Stage Indicator Bar */}
            <div className="mt-4 flex items-center justify-between font-mono text-xs text-[var(--color-dim)] px-2">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-monk)] animate-pulse" />
                ACTIVE FOCUS: [{activeService.index}] {activeService.shortLabel.toUpperCase()}
              </span>
              <span className="text-[var(--color-monk)]">7 DISCIPLINES // ONE MIND</span>
            </div>
          </div>

        </div>

        {/* ── THE FOUR PHILOSOPHY CARDS ─────────────────────────────
            Strategy / Design / Technology / Impact supporting pillars
            with elevated graphite depth and subtle hover state
        ─────────────────────────────────────────────────────────── */}
        <Reveal className="mt-24 md:mt-32 border-t border-[var(--color-line-subtle)] pt-16">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-monk)] font-semibold">
              // STUDIO PHILOSOPHY & PILLARS
            </span>
            <span className="font-mono text-xs text-[var(--color-dim)]">
              CRAFT FOUNDATION
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophyCards.map((card, i) => {
              const IconComp = card.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-line-subtle)] bg-[#0c0c10] p-6 transition-all duration-300 hover:border-[var(--color-monk)]/40 hover:bg-[#121218] hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                >
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-line-subtle)] bg-[#14141c] text-[var(--color-monk)] transition-colors duration-300 group-hover:border-[var(--color-monk)]/50 group-hover:bg-[var(--color-monk)]/10">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]">
                      {card.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[10px] text-[var(--color-dim)]">
                    <span>PILLAR // 0{i + 1}</span>
                    <span className="text-[var(--color-monk)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">&rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </Container>
    </Section>
  );
}
