import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
};

export function Section({ id, children, className, divider = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        divider && "border-t border-[var(--color-line)]",
        className
      )}
    >
      {children}
    </section>
  );
}
