import { contact, serviceOptions } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { useContactForm } from "@/hooks/useContactForm";
import { Loader2 } from "lucide-react";

const fieldClasses =
  "w-full border-b border-[var(--color-line-strong)] bg-transparent py-3 text-[var(--text-body-lg)] text-[var(--color-text)] placeholder:text-[var(--color-dim)] transition-colors focus:border-[var(--color-monk)] focus:outline-none";

export function Contact() {
  const { values, updateField, errors, status, handleSubmit } = useContactForm();

  return (
    <Section id="contact" className="bg-[var(--bg-contact)]">
      <Container>
        <div className="grid gap-10 md:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-[var(--text-h1)] font-semibold leading-[0.96] tracking-tight text-[var(--color-text)]">
              {contact.statementLine1}
              <br />
              {contact.statementLine2}
              <br />
              <span className="text-[var(--color-monk)]">{contact.statementLine3}</span>
            </h2>
            <p className="mt-8 max-w-md text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              {contact.body}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-block font-mono text-[var(--text-caption)] uppercase tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-monk)]"
            >
              {contact.email}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            {status === "success" ? (
              <div
                role="status"
                className="flex h-full min-h-[320px] flex-col justify-center gap-3 border border-[var(--color-line-subtle)] bg-[var(--color-surface-card)] rounded-[var(--radius-md)] p-10"
              >
                <p className="text-[var(--text-h4)] font-semibold text-[var(--color-text)]">Message received.</p>
                <p className="text-[var(--text-body)] leading-relaxed text-[var(--color-muted)]">
                  This form is currently a front-end preview — no email service is connected yet, so nothing was
                  sent. Wire it up to your email or CRM provider to start receiving real enquiries.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="group">
                  <label htmlFor="name" className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={fieldClasses}
                    value={values.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-[var(--text-caption)] text-[var(--color-monk)]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="email" className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClasses}
                    value={values.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-[var(--text-caption)] text-[var(--color-monk)]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="service" className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)]">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={fieldClasses}
                    value={values.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-2 text-[var(--text-caption)] text-[var(--color-monk)]">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="details" className="font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)]">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className={fieldClasses}
                    value={values.details}
                    onChange={(e) => updateField("details", e.target.value)}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? "details-error" : undefined}
                  />
                  {errors.details && (
                    <p id="details-error" className="mt-2 text-[var(--text-caption)] text-[var(--color-monk)]">
                      {errors.details}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-[var(--radius-sm)] bg-[var(--color-monk)] px-6 py-4 font-mono text-[var(--text-label)] uppercase tracking-[0.15em] text-[var(--color-on-monk)] transition-all duration-300 hover:bg-[var(--color-monk-hover)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  {status === "submitting" ? "Sending" : "Send message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
