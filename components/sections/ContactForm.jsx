"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE, BUDGET_OPTIONS, SERVICE_OPTIONS } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(15, "Please describe your project (min 15 chars)"),
});

function Field({ label, error, required, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1">
        {label}{required && <span className="text-rose-400 ml-0.5" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-rose-400 text-xs mt-1 flex items-center gap-1" role="alert">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    const text = encodeURIComponent(
      `*New Project Inquiry — CodeCraft*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Service:* ${data.service}\n` +
      `*Budget:* ${data.budget}\n\n` +
      `*Project Details:*\n${data.message}\n\n` +
      `Please get in touch. Thank you!`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20
          flex items-center justify-center">
          <CheckCircle2 className="text-emerald-400" size={28} />
        </div>
        <h3 className="text-xl font-bold text-[var(--text-primary)]">Enquiry Sent!</h3>
        <p className="text-[var(--text-secondary)] text-sm max-w-sm">
          WhatsApp has opened with your project details. We'll get back to you shortly.
        </p>
        <button
          onClick={() => { setSent(false); reset(); }}
          className="mt-2 px-5 py-2.5 rounded-xl text-sm font-medium
            border border-[var(--border)] text-[var(--text-secondary)]
            hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Project enquiry form"
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            {...register("name")}
            placeholder="Your full name"
            autoComplete="name"
            className="input"
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="WhatsApp / Phone" error={errors.phone?.message} required>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            type="tel"
            className="input"
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <Field label="Email Address" error={errors.email?.message} required>
        <input
          {...register("email")}
          placeholder="you@company.com"
          autoComplete="email"
          type="email"
          className="input"
          aria-invalid={!!errors.email}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Service Required" error={errors.service?.message} required>
          <select {...register("service")} className="input" aria-invalid={!!errors.service}>
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Budget Range" error={errors.budget?.message} required>
          <select {...register("budget")} className="input" aria-invalid={!!errors.budget}>
            <option value="">Select budget</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Details" error={errors.message?.message} required>
        <textarea
          {...register("message")}
          placeholder="Describe your project — what you need, any specific features, timeline..."
          rows={compact ? 4 : 5}
          className="input resize-none"
          aria-invalid={!!errors.message}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2
          py-4 rounded-xl text-sm font-bold text-white
          bg-gradient-to-r from-violet-600 to-purple-600
          hover:from-violet-500 hover:to-purple-500
          shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40
          transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
          disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        <Send size={16} />
        Send Enquiry on WhatsApp
      </button>

      <p className="text-center text-xs text-[var(--text-muted)]">
        We respond within 24 hours. For urgent queries, WhatsApp us directly.
      </p>
    </form>
  );
}
