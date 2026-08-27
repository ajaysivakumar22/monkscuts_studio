import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, primaryCta } from "@/data/navigation";
import { MonkMark } from "@/components/brand/MonkMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + focus management + Escape to close
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-[var(--bg-hero)]/90 backdrop-blur border-b border-[var(--color-line-subtle)]" : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-[var(--color-text)]">
          <MonkMark className="h-7 w-7 text-[var(--color-text)]" />
          <span className="text-[var(--text-label)] font-semibold uppercase tracking-[0.18em]">Monk Cuts</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-10" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--text-label)] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-monk)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={primaryCta.href} variant="outline">
            {primaryCta.label}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center text-[var(--color-text)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-20 z-40 bg-[var(--bg-hero)] transition-opacity duration-300 md:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col gap-8 px-[var(--edge)] pt-12" aria-label="Mobile">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstMenuLinkRef : undefined}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold tracking-tight text-[var(--color-text)] hover:text-[var(--color-monk)]"
            >
              {item.label}
            </a>
          ))}
          <Button href={primaryCta.href} className="mt-4 w-fit" onClick={() => setMenuOpen(false)}>
            {primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
