import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

const base =
  "group inline-flex items-center gap-2.5 font-mono text-[var(--text-label)] uppercase tracking-[0.15em] px-6 py-4 transition-colors duration-300 rounded-[var(--radius-sm)]";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--color-monk)] text-[var(--color-on-monk)] hover:bg-[var(--color-monk-hover)]",
  outline: "border border-[var(--color-line)] text-[var(--color-text)] hover:border-[var(--color-monk)] hover:text-[var(--color-monk)]",
  ghost: "text-[var(--color-text)] hover:text-[var(--color-monk)]",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", children, className, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
