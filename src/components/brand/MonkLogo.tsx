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
 * Renders the exact approved MONK CUTS STUDIO logo asset (`/brand/monk-logo-exact.png`)
 * directly without any redraw, font substitution, or recreation.
 */
export function MonkLogo({
  className,
  alt = "Monk Cuts Studio Official Logo",
  variant: _variant,
  ...rest
}: MonkLogoProps) {
  return (
    <img
      src="/brand/monk-logo-exact.png"
      alt={alt}
      className={cn("h-10 w-auto object-contain select-none", className)}
      loading="eager"
      decoding="async"
      {...rest}
    />
  );
}
