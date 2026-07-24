"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type DemoFormProps = {
  source: string;
};

type FormStatus =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string; fallback?: string };

export default function DemoForm({
  source,
}: DemoFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "sending" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          role: formData.get("role"),
          companySize: formData.get("companySize"),
          division: formData.get("division"),
          timeline: formData.get("timeline"),
          message: formData.get("message"),
          website: formData.get("website"),
          source,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fallback?: string;
        reference?: string;
        acknowledgementSent?: boolean;
      };

      if (!response.ok || !result.ok) {
        setStatus({
          type: "error",
          message: result.error ?? "We could not send your request.",
          fallback: result.fallback,
        });
        return;
      }

      form.reset();
      window.gtag?.("event", "generate_lead", {
        method: "private_briefing_application",
        form_location: source,
        division: String(formData.get("division") ?? ""),
      });
      setStatus({
        type: "success",
        message: result.reference
          ? `Application received. Your reference is ${result.reference}. ${
              result.acknowledgementSent
                ? "A confirmation has been sent to your work email."
                : "Please save this reference for your records."
            } STIV will contact you if there is a strong fit.`
          : "Application received. STIV reviews every request individually and will contact you if there is a strong fit.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not send your application. Please email us directly.",
        fallback:
          "mailto:director@iamstivai.com?subject=STIV%20private%20briefing%20application",
      });
    }
  }

  const inputClass =
    "min-h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold";

  return (
    <form
      onSubmit={submit}
      className="mt-8 flex flex-col gap-5"
      data-analytics-form="private_briefing_application"
    >
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="application-name" className="text-sm text-muted">
            Full name
          </label>
          <input
            id="application-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="application-role" className="text-sm text-muted">
            Role
          </label>
          <input
            id="application-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="e.g. COO, VP Operations"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="application-company" className="text-sm text-muted">
            Company
          </label>
          <input
            id="application-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="application-size" className="text-sm text-muted">
            Company size
          </label>
          <select
            id="application-size"
            name="companySize"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select range</option>
            <option value="1-49">1–49 employees</option>
            <option value="50-199">50–199 employees</option>
            <option value="200-999">200–999 employees</option>
            <option value="1000+">1,000+ employees</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="application-email" className="text-sm text-muted">
          Work email
        </label>
        <input
          id="application-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="application-division" className="text-sm text-muted">
            Priority division
          </label>
          <select
            id="application-division"
            name="division"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select division</option>
            <option>Executive</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Operations</option>
            <option>Legal</option>
            <option>Support</option>
            <option>STIV Unified</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="application-timeline" className="text-sm text-muted">
            Evaluation timeline
          </label>
          <select
            id="application-timeline"
            name="timeline"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select timeline</option>
            <option value="0-3 months">Within 3 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="6-12 months">6–12 months</option>
            <option value="exploring">Exploring strategically</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="application-message" className="text-sm text-muted">
          What high-value workflow should STIV address?
        </label>
        <textarea
          id="application-message"
          name="message"
          rows={5}
          required
          minLength={30}
          placeholder="Describe the current process, systems involved, and what a successful outcome would look like."
          className={inputClass}
        />
        <p className="text-xs leading-relaxed text-muted">
          Please do not include confidential, personal, or regulated data.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-relaxed text-muted">
        Applications are reviewed individually. Qualified teams receive a
        private working session tailored to their company—not a generic
        product tour.
      </div>

      <button
        type="submit"
        disabled={status.type === "sending"}
        className="shine-sweep group mt-2 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03] disabled:cursor-wait disabled:opacity-70"
      >
        {status.type === "sending" ? "Submitting…" : "Apply for a private briefing"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {status.type === "success" && (
        <p role="status" className="text-sm text-emerald-300">
          {status.message}
        </p>
      )}
      {status.type === "error" && (
        <p role="alert" className="text-sm text-amber-200">
          {status.message}{" "}
          {status.fallback && (
            <a href={status.fallback} className="font-semibold underline">
              Email director@iamstivai.com
            </a>
          )}
        </p>
      )}
    </form>
  );
}
