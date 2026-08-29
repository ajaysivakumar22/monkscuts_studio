import { socialLinks, footerSignature } from "@/data/social";
import { contact } from "@/data/contact";
import { navItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { MonkLogo } from "@/components/brand/MonkLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-footer)] border-t border-[var(--color-line-subtle)] py-12 md:py-14 relative overflow-hidden">
      {/* Subtle Warm MONK Orange Atmospheric Field Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_100%,rgba(255,85,0,0.05)_0%,transparent_60%)] opacity-80"
      />
      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="group flex flex-col gap-2">
            <MonkLogo className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80" variant="light" />
            <p className="mt-1 font-mono text-[var(--text-label)] uppercase tracking-[0.2em] text-[var(--color-dim)]">
              {footerSignature}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4" aria-label="Footer">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-monk)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-monk)]"
            >
              {contact.email}
            </a>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] hover:text-[var(--color-monk)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 md:mt-12 font-mono text-[var(--text-meta)] text-[var(--color-dim)]">
          &copy; {year} Monk Cuts Studio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
