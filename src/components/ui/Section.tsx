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
        "relative py-16 md:py-20 lg:py-24 scroll-mt-20 md:scroll-mt-24",
        divider && "border-t border-[var(--color-line-subtle)]",
        className
      )}
    >
      {children}
    </section>
  );
}
