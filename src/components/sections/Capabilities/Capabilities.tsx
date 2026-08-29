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

gsap.registerPlugin(ScrollTrigger);

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
    <Section id="capabilities" className="bg-[var(--bg-capabilities)] relative">
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
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-line-subtle)] bg-[#07070a] p-2 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <CapabilityVisualStage visualType={activeService.visualType} />
            </div>

            {/* Sub-Stage Indicator Bar */}
            <div className="mt-4 flex items-center justify-between font-mono text-xs text-[var(--color-dim)] px-2">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-monk)] animate-pulse" />
                ACTIVE FOCUS: [{activeService.index}] {activeService.shortLabel.toUpperCase()}
              </span>
              <span>7 DISCIPLINES / ONE MIND</span>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
