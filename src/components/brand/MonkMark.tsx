import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

type MonkMarkProps = SVGAttributes<SVGSVGElement> & {
  className?: string;
  strokeWidth?: number;
  cutClassName?: string;
  cutStrokeWidth?: number;
  [dataAttribute: `data-${string}`]: string | undefined;
};

/**
 * Geometric brand glyph for MONK CUTS. A reduced, editorial line-mark of the
 * monkey identity — two ears, a focused brow, a single vertical cut through
 * the face. Built as an SVG so real brand artwork can replace this file
 * later without touching any layout code that consumes <MonkMark />.
 */
export function MonkMark({
  className,
  strokeWidth = 1.5,
  cutClassName,
  cutStrokeWidth,
  ...rest
}: MonkMarkProps) {
  const actualCutWidth = cutStrokeWidth ?? strokeWidth;

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monk Cuts Studio mark"
      {...rest}
    >
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="48" cy="16" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M14 30C14 21.163 22.059 14 32 14C41.941 14 50 21.163 50 30V40C50 48.837 41.941 56 32 56C22.059 56 14 48.837 14 40V30Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <line
        x1="32"
        y1="16"
        x2="32"
        y2="56"
        stroke="var(--color-monk)"
        strokeWidth={actualCutWidth}
        className={cn("transition-all duration-300", cutClassName)}
      />
      <line x1="23" y1="33" x2="29" y2="33" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="35" y1="33" x2="41" y2="33" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
