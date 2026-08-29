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
    <div className="relative w-full h-full min-h-[320px] transition-all duration-500 animate-in fade-in zoom-in-95">
      {visualType === "logo" && <LogoVisual />}
      {visualType === "branding" && <BrandingVisual />}
      {visualType === "uiux" && <UiUxVisual />}
      {visualType === "video" && <VideoVisual />}
      {visualType === "motion" && <MotionVisual />}
      {visualType === "music" && <MusicVisual />}
      {visualType === "digital" && <DigitalVisual />}
    </div>
  );
}
