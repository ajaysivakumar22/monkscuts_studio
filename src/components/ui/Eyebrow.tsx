import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  index?: string;
  className?: string;
};

export function Eyebrow({ children, index, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3 text-[var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[var(--color-monk)]", className)}>
      {index && <span className="text-[var(--color-dim)]">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
