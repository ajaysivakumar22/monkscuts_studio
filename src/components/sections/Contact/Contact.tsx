import { contact, serviceOptions } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { useContactForm } from "@/hooks/useContactForm";
import { Loader2, ArrowUpRight, Clock, Mail } from "lucide-react";

const fieldClasses =
  "w-full border-b border-[var(--color-line-strong)] bg-transparent py-2.5 text-[var(--text-body)] text-[var(--color-text)] placeholder:text-[var(--color-dim)] transition-colors focus:border-[var(--color-monk)] focus:outline-none";

export function Contact() {
  const { values, updateField, errors, status, handleSubmit } = useContactForm();

  return (
    <Section id="contact" className="bg-[var(--bg-contact)] relative overflow-hidden">
      
      {/* Background Radial Orange Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_80%_80%,rgba(255,85,0,0.08)_0%,transparent_60%)] opacity-80"
      />

      <Container className="relative z-10">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-2 items-stretch">
          
          {/* Left Column: Contact Statement & Studio Invitation */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-white/10 bg-[#0c0c10] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              
              {/* Top Text Block */}
              <div className="space-y-6">
                <Eyebrow>{contact.eyebrow}</Eyebrow>
                
                <h2 className="text-[var(--text-h1)] font-semibold leading-[0.96] tracking-tight text-[var(--color-text)]">
                  {contact.statementLine1}
                  <br />
                  {contact.statementLine2}
                  <br />
                  <span className="text-[var(--color-monk)] drop-shadow-[0_0_20px_rgba(255,85,0,0.3)]">
                    {contact.statementLine3}
                  </span>
                </h2>

                <p className="max-w-md text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {contact.body}
                </p>
              </div>

              {/* Bottom Email Card & Response Guarantee */}
              <div className="mt-10 border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-monk)] font-semibold">
                  <Clock className="h-3.5 w-3.5" />
                  <span>GUARANTEED RESPONSE WITHIN 2 BIZ DAYS</span>
                </div>

                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center justify-between rounded border border-[var(--color-line-subtle)] bg-[#121218] p-4 font-mono text-sm uppercase tracking-wider text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-monk)] hover:bg-[var(--color-monk)]/10 hover:text-[var(--color-monk)]"
                >
                  <span className="flex items-center gap-2.5 font-bold">
                    <Mail className="h-4 w-4 text-[var(--color-monk)]" />
                    {contact.email}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--color-monk)]" />
                </a>
              </div>

            </div>
          </Reveal>

          {/* Right Column: Project Enquiry Form */}
          <Reveal delay={0.1} className="h-full">
            {status === "success" ? (
              <div
                role="status"
                className="flex h-full min-h-[360px] flex-col justify-center gap-3 border border-white/10 bg-[#0c0c10] rounded-[var(--radius-lg)] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              >
                <p className="text-[var(--text-h4)] font-semibold text-[var(--color-text)]">Message received.</p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  This form is currently a front-end preview — no email service is connected yet, so nothing was
                  sent. Wire it up to your email or CRM provider to start receiving real enquiries.
                </p>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="flex h-full flex-col justify-between gap-5 rounded-[var(--radius-lg)] border border-white/10 bg-[#0c0c10] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              >
                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="group">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)] font-bold">
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
                      <p id="name-error" className="mt-1 text-xs text-[var(--color-monk)] font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)] font-bold">
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
                      <p id="email-error" className="mt-1 text-xs text-[var(--color-monk)] font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Input */}
                  <div className="group">
                    <label htmlFor="service" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)] font-bold">
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
                      <option value="" disabled className="bg-[#0c0c10] text-[var(--color-text)]">
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-[#0c0c10] text-[var(--color-text)]">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-xs text-[var(--color-monk)] font-mono">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Project Details Textarea */}
                  <div className="group">
                    <label htmlFor="details" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-dim)] transition-colors duration-300 group-focus-within:text-[var(--color-monk)] font-bold">
                      Project details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      className={fieldClasses}
                      value={values.details}
                      onChange={(e) => updateField("details", e.target.value)}
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? "details-error" : undefined}
                    />
                    {errors.details && (
                      <p id="details-error" className="mt-1 text-xs text-[var(--color-monk)] font-mono">
                        {errors.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-4 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-[var(--radius-sm)] bg-[var(--color-monk)] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-on-monk)] font-bold transition-all duration-300 hover:bg-[var(--color-monk-hover)] hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 shadow-[0_0_20px_rgba(255,85,0,0.25)]"
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
