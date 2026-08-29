import type { CapabilityVisualType } from "@/data/services";
import { LogoVisual } from "./visuals/LogoVisual";
import { BrandingVisual } from "./visuals/BrandingVisual";
import { UiUxVisual } from "./visuals/UiUxVisual";
import { VideoVisual } from "./visuals/VideoVisual";
import { MotionVisual } from "./visuals/MotionVisual";
import { MusicVisual } from "./visuals/MusicVisual";
import { DigitalVisual } from "./visuals/DigitalVisual";

type CapabilityVisualStageProps = {
  visualType: CapabilityVisualType;
};

export function CapabilityVisualStage({ visualType }: CapabilityVisualStageProps) {
  return (
    <div className="relative w-full h-full min-h-[340px] rounded-[var(--radius-lg)] border border-[var(--color-line-subtle)] bg-[#07070a] p-3 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500">
      
      {/* Warm MONK Orange Atmospheric Field Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,85,0,0.15)_0%,rgba(255,85,0,0.03)_45%,transparent_75%)] opacity-80 transition-opacity duration-700"
      />

      {/* Structural Laser Grid Accent Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
      />

      {/* Inner Active Visual Component */}
      <div className="relative z-10 w-full h-full animate-in fade-in zoom-in-95 duration-300">
        {visualType === "logo" && <LogoVisual />}
        {visualType === "branding" && <BrandingVisual />}
        {visualType === "uiux" && <UiUxVisual />}
        {visualType === "video" && <VideoVisual />}
        {visualType === "motion" && <MotionVisual />}
        {visualType === "music" && <MusicVisual />}
        {visualType === "digital" && <DigitalVisual />}
      </div>
    </div>
  );
}
