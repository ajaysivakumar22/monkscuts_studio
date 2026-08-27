import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type MonkLogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  className?: string;
  alt?: string;
  variant?: "light" | "dark";
};

/**
 * MONK CUTS STUDIO — Official Logo Component
 *
 * Renders the exact approved MONK CUTS STUDIO logo asset (`/brand/monk-logo-clean.png`)
 * trimmed to content boundaries for 100% complete, unclipped rendering.
 */
export function MonkLogo({
  className,
  alt = "Monk Cuts Studio Official Logo",
  variant: _variant,
  ...rest
}: MonkLogoProps) {
  return (
    <img
      src="/brand/monk-logo-clean.png"
      alt={alt}
      className={cn("h-11 w-auto object-contain select-none", className)}
      loading="eager"
      decoding="async"
      {...rest}
    />
  );
}
