import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MonkFace } from "@/components/brand/MonkFace";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SESSION_KEY = "monk_intro_seen";

export function MonkEntryExperience() {
  const reducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const markContainerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    try {
      return !sessionStorage.getItem(SESSION_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!shouldRender || reducedMotion) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Ignore storage errors
    }

    const overlay = overlayRef.current;
    const markContainer = markContainerRef.current;
    const label = labelRef.current;
    if (!overlay || !markContainer) return;

    // Hard safety timer — overlay disappears within 2s max
    const safetyTimer = setTimeout(() => {
      if (overlay) {
        overlay.style.display = "none";
        setShouldRender(false);
      }
    }, 2000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(safetyTimer);
          if (overlay) overlay.style.display = "none";
          setShouldRender(false);
        },
      });

      // 1. Initial State — everything hidden
      gsap.set(overlay, { opacity: 1 });
      gsap.set(markContainer, { opacity: 0, scale: 0.78, y: 16 });
      if (label) gsap.set(label, { opacity: 0, y: 10 });

      // 2. MONK appears — face rises from below the void
      tl.to(markContainer, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
      })
        // 3. Brief presence — label slides in
        .to(
          label,
          {
            opacity: 0.9,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.1"
        )
        // 4. Subtle breath — face pulses once
        .to(
          markContainer,
          {
            scale: 1.05,
            duration: 0.35,
            ease: "sine.inOut",
          },
          "-=0.15"
        )
        .to(
          markContainer,
          {
            scale: 1,
            duration: 0.25,
            ease: "sine.inOut",
          }
        )
        // 5. Hold — let the identity register
        .to({}, { duration: 0.2 })
        // 6. Elegant wipe transition to Hero
        .to(overlay, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.5,
          ease: "power3.inOut",
        })
        .to(
          markContainer,
          {
            y: -48,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.45"
        );
    }, overlay);

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [shouldRender, reducedMotion]);

  if (!shouldRender || reducedMotion) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-void)] select-none"
    >
      {/* Atmospheric amber-orange radial aura — the MONK warmth */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(200,122,0,0.15)_0%,rgba(255,85,0,0.04)_50%,transparent_70%)] blur-2xl opacity-90 sm:h-96 sm:w-96" />

      {/* Center: the MONK identity — the monkey face */}
      <div ref={markContainerRef} className="relative z-10 flex flex-col items-center gap-6">
        <MonkFace
          className="h-28 w-28 drop-shadow-[0_0_32px_rgba(200,122,0,0.30)] sm:h-32 sm:w-32"
          showCut
          outerColor="var(--color-monk-face)"
          innerColor="var(--color-void)"
        />

        {/* Brand label beneath the face */}
        <div ref={labelRef} className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-dim)]">
              MONK CUTS STUDIO
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-monk-face)] opacity-70">
            Monkey energy. Monk focus.
          </span>
        </div>
      </div>
    </div>
  );
}
