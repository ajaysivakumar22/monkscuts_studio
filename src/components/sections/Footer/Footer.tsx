import { socialLinks, footerSignature } from "@/data/social";
import { contact } from "@/data/contact";
import { navItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { MonkMark } from "@/components/brand/MonkMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3 text-[var(--color-text)]">
            <MonkMark className="h-8 w-8" />
            <div>
              <p className="font-mono text-[var(--text-label)] uppercase tracking-[0.2em]">Monk Cuts Studio</p>
              <p className="mt-1 font-mono text-[var(--text-label)] uppercase tracking-[0.2em] text-[var(--color-dim)]">
                {footerSignature}
              </p>
            </div>
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

        <p className="mt-16 font-mono text-[var(--text-meta)] text-[var(--color-dim)]">
          &copy; {year} Monk Cuts Studio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
