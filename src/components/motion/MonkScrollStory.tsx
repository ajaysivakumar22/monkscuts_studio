import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MonkFace } from "@/components/brand/MonkFace";
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
  const mobileProgressRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("HERO");

  useEffect(() => {
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Overall scroll progress — desktop vertical line
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

      // 2. Mobile top hairline
      if (mobileProgressRef.current) {
        gsap.to(mobileProgressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });
      }

      // 3. Section checkpoint — label update
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

      // 4. Companion mark — subtle rotation on scroll velocity
      //    The face gently reacts to how fast the user scrolls,
      //    feeling alive without being distracting.
      if (markRef.current) {
        ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            if (window.innerWidth < 768 || !markRef.current) return;
            const vel = Math.abs(self.getVelocity());
            const rotateVal = Math.min(vel * 0.015, 18);
            const scaleVal = 1 + Math.min(vel * 0.00015, 0.12);

            gsap.to(markRef.current, {
              rotate: rotateVal,
              scale: scaleVal,
              duration: 0.4,
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
      {/* ── Desktop — fixed right-side scroll companion ──────────────── */}
      <aside
        aria-hidden="true"
        className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex lg:right-8"
      >
        {/* Progress track */}
        <div className="relative h-44 w-[1px] bg-[var(--color-line-subtle)] overflow-hidden rounded-full">
          <div
            ref={progressLineRef}
            className="h-full w-full origin-top bg-[var(--color-monk)] shadow-[0_0_8px_rgba(255,85,0,0.7)] scale-y-0"
          />
        </div>

        {/* MonkFace companion — the brand mascot riding the scroll */}
        <div
          ref={markRef}
          className="group pointer-events-auto relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-line-subtle)] bg-[var(--color-void)]/90 backdrop-blur-md transition-all duration-500 hover:border-[var(--color-monk-face)] hover:scale-110 hover:shadow-[0_0_18px_rgba(200,122,0,0.35)]"
          title={`Section: ${activeSection}`}
        >
          <MonkFace
            className="h-6 w-6 transition-all duration-300"
            showCut
            outerColor="var(--color-monk-face)"
            innerColor="var(--color-void)"
          />
        </div>

        {/* Active section label */}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-dim)] opacity-80 transition-colors duration-300">
          {activeSection}
        </span>
      </aside>

      {/* ── Mobile — top scrub hairline ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-[var(--color-line-subtle)] md:hidden"
      >
        <div
          ref={mobileProgressRef}
          className="h-full w-full origin-left bg-[var(--color-monk)] shadow-[0_0_6px_rgba(255,85,0,0.9)] scale-x-0"
        />
      </div>
    </>
  );
}
