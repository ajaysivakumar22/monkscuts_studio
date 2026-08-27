import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MonkFace } from "@/components/brand/MonkFace";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SESSION_KEY = "monk_intro_seen";

export function MonkEntryExperience() {
  const reducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    try { return !sessionStorage.getItem(SESSION_KEY); }
    catch { return true; }
  });

  useEffect(() => {
    if (!shouldRender || reducedMotion) return;

    try { sessionStorage.setItem(SESSION_KEY, "true"); }
    catch { /* ignore */ }

    const overlay = overlayRef.current;
    const face = faceRef.current;
    const label = labelRef.current;
    if (!overlay || !face) return;

    const safetyTimer = setTimeout(() => {
      if (overlay) { overlay.style.display = "none"; setShouldRender(false); }
    }, 3000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(safetyTimer);
          if (overlay) overlay.style.display = "none";
          setShouldRender(false);
        },
      });

      gsap.set(overlay, { opacity: 1 });
      gsap.set(face, { opacity: 0, scale: 0.72, y: 30 });
      if (label) gsap.set(label, { opacity: 0, y: 14 });

      tl
        // Face rises from the dark
        .to(face, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power2.out" })
        // Label appears
        .to(label, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.1")
        // Single breath pulse
        .to(face, { scale: 1.04, duration: 0.4, ease: "sine.inOut" })
        .to(face, { scale: 1, duration: 0.3, ease: "sine.inOut" })
        // Hold
        .to({}, { duration: 0.3 })
        // Wipe up + fade out
        .to(overlay, { clipPath: "inset(0 0 100% 0)", duration: 0.55, ease: "power3.inOut" })
        .to(face, { y: -56, opacity: 0, duration: 0.45, ease: "power2.in" }, "-=0.5");
    }, overlay);

    return () => { clearTimeout(safetyTimer); ctx.revert(); };
  }, [shouldRender, reducedMotion]);

  if (!shouldRender || reducedMotion) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-void)] select-none"
    >
      {/* Amber aura glow */}
      <div
        className="pointer-events-none absolute h-[60vw] w-[60vw] max-h-96 max-w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,122,0,0.16) 0%, rgba(255,85,0,0.05) 55%, transparent 70%)" }}
      />

      {/* Monkey face — large, recognizable, the MONK identity */}
      <div ref={faceRef} className="relative z-10 flex flex-col items-center gap-7">
        <MonkFace
          className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 drop-shadow-[0_0_48px_rgba(200,122,0,0.28)]"
          showCut
          outerColor="var(--color-monk-face)"
          innerColor="var(--color-void)"
        />
        <div ref={labelRef} className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-dim)]">
              MONK CUTS STUDIO
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-monk)]" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-monk-face)] opacity-60">
            Monkey energy. Monk focus.
          </span>
        </div>
      </div>
    </div>
  );
}
