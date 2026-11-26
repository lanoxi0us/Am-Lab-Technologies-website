"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { FormInput } from "@/components/forms/FormInput";
import { FormTextarea } from "@/components/forms/FormTextarea";
import { FormSelect } from "@/components/forms/FormSelect";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";
import { projectTypeOptions, budgetOptions, timelineOptions } from "@/lib/content/contact";
import { siteConfig } from "@/lib/content/site";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  projectDescription: "",
  budget: "",
  timeline: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-lg border border-brand-500/30 bg-brand-50 p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-brand-700" aria-hidden="true" />
        <h2 className="text-2xl">Thanks — we&rsquo;ve got it.</h2>
        <p className="text-base text-neutral-500">
          We&rsquo;ll get back to you shortly. In the meantime, feel free to
          reach out on WhatsApp if it&rsquo;s urgent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div aria-live="polite">
        {status === "error" && (
          <p role="alert" className="text-sm text-red-600">
            Something went wrong sending your message. Please try again, or
            reach out on WhatsApp below.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          label="Name"
          required
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <FormInput
          label="Email"
          type="email"
          required
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <FormInput
          label="Phone"
          type="tel"
          required
          value={values.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          error={errors.phone}
          autoComplete="tel"
        />
        <FormInput
          label="Company"
          value={values.company}
          onChange={(e) => updateField("company", e.target.value)}
          hint="Optional"
          autoComplete="organization"
        />
      </div>

      <FormSelect
        label="Project type"
        required
        placeholder="Select a project type"
        options={projectTypeOptions}
        value={values.projectType}
        onChange={(e) => updateField("projectType", e.target.value)}
        error={errors.projectType}
      />

      <FormTextarea
        label="Project description"
        required
        value={values.projectDescription}
        onChange={(e) => updateField("projectDescription", e.target.value)}
        error={errors.projectDescription}
        placeholder="Tell us a little about what you're building."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormSelect
          label="Budget range"
          required
          placeholder="Select a budget range"
          options={budgetOptions}
          value={values.budget}
          onChange={(e) => updateField("budget", e.target.value)}
          error={errors.budget}
        />
        <FormSelect
          label="Timeline"
          required
          placeholder="Select a timeline"
          options={timelineOptions}
          value={values.timeline}
          onChange={(e) => updateField("timeline", e.target.value)}
          error={errors.timeline}
        />
      </div>

      <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Project Details"}
        </Button>
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-neutral-700 hover:text-neutral-900"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Or message us on WhatsApp
        </a>
      </div>
    </form>
  );
}
