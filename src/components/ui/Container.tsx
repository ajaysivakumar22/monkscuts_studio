import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  bleed?: boolean;
};

export function Container({ children, className, as: Tag = "div", bleed = false }: ContainerProps) {
  const Comp = Tag as ElementType;
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-[var(--edge)]",
        !bleed && "max-w-[var(--container-max)]",
        className
      )}
    >
      {children}
    </Comp>
  );
}
