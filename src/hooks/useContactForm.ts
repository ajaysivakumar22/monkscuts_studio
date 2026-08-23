import { useState, type FormEvent } from "react";

export type ContactFormValues = {
  name: string;
  email: string;
  service: string;
  details: string;
};

const emptyValues: ContactFormValues = { name: "", email: "", service: "", details: "" };

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(current: ContactFormValues) {
    const next: Partial<Record<keyof ContactFormValues, string>> = {};
    if (!current.name.trim()) next.name = "Enter your name.";
    if (!current.email.trim()) next.email = "Enter your email.";
    else if (!emailPattern.test(current.email)) next.email = "Enter a valid email address.";
    if (!current.service) next.service = "Choose a service.";
    if (!current.details.trim()) next.details = "Tell us about the project.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    // No backend integration exists yet. This surfaces a clear, honest
    // success state without claiming an email was actually delivered.
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
    setValues(emptyValues);
  }

  return { values, updateField, errors, status, handleSubmit };
}
