import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type MonkFaceProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  className?: string;
  alt?: string;
  showCut?: boolean;
  outerColor?: string;
  innerColor?: string;
};

/**
 * MONK CUTS STUDIO — Official Monkey Artwork Component
 *
 * Renders the exact approved MONK brand image asset (`/brand/monk-face-exact.png`)
 * directly without any redraw, re-interpretation, or tracing.
 */
export function MonkFace({
  className,
  alt = "Monk Cuts Studio — Official Monkey Mascot",
  showCut: _showCut,
  outerColor: _outerColor,
  innerColor: _innerColor,
  ...rest
}: MonkFaceProps) {
  return (
    <img
      src="/brand/monk-face-exact.png"
      alt={alt}
      className={cn("h-8 w-auto object-contain select-none", className)}
      loading="eager"
      decoding="async"
      {...rest}
    />
  );
}
