import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MonkMark } from "@/components/brand/MonkMark";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: "top", label: "HERO" },
  { id: "studio", label: "STUDIO" },
  { id: "capabilities", label: "SERVICES" },
  { id: "work", label: "WORK" },
  { id: "original-ip", label: "LABS" },
  { id: "contact", label: "CONTACT" },
];

export function MonkScrollStory() {
  const reducedMotion = useReducedMotion();
  const progressLineRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("HERO");

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Overall scroll progress indicator line
      if (progressLineRef.current) {
        gsap.to(progressLineRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });
      }

      // 2. Section checkpoint detection for Monk brand companion
      SECTIONS.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveSection(sec.label),
          onEnterBack: () => setActiveSection(sec.label),
        });
      });

      // 3. Companion mark subtle rotation & scale reaction on scroll velocity
      if (markRef.current) {
        ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            if (window.innerWidth < 768 || !markRef.current) return;
            const vel = Math.abs(self.getVelocity());
            const rotateVal = Math.min(vel * 0.02, 25);
            const scaleVal = 1 + Math.min(vel * 0.0002, 0.15);

            gsap.to(markRef.current, {
              rotate: rotateVal,
              scale: scaleVal,
              duration: 0.3,
              ease: "power1.out",
              overwrite: "auto",
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      {/* Desktop Spatial Right-Guide Scroll Companion */}
      <aside
        aria-hidden="true"
        className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex lg:right-8"
      >
        {/* Track Line Background */}
        <div className="relative h-48 w-[1px] bg-[var(--color-line-subtle)] overflow-hidden rounded-full">
          {/* Active Scrubbed Laser Progress Line */}
          <div
            ref={progressLineRef}
            className="h-full w-full origin-top bg-[var(--color-monk)] shadow-[0_0_12px_rgba(255,85,0,0.8)] scale-y-0"
          />
        </div>

        {/* Dynamic Monk Brand Companion Icon */}
        <div
          ref={markRef}
          className="group pointer-events-auto relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-line-subtle)] bg-[var(--color-void)]/90 backdrop-blur-md transition-all duration-500 hover:border-[var(--color-monk)] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]"
          title={`Section: ${activeSection}`}
        >
          <MonkMark
            className="h-5 w-5 text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-monk)]"
            strokeWidth={1.2}
            cutStrokeWidth={2}
            cutClassName="text-[var(--color-monk)] drop-shadow-[0_0_6px_rgba(255,85,0,0.9)]"
          />
        </div>

        {/* Active Section Identifier Tag */}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-dim)] opacity-80 transition-colors duration-300">
          {activeSection}
        </span>
      </aside>

      {/* Mobile Top Scrub Hairline Progress */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-[var(--color-line-subtle)] md:hidden"
      >
        <div
          ref={progressLineRef}
          className="h-full w-full origin-left bg-[var(--color-monk)] shadow-[0_0_8px_rgba(255,85,0,0.9)] scale-x-0"
        />
      </div>
    </>
  );
}
