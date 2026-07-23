"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type DemoFormProps = {
  compact?: boolean;
  source: string;
};

type FormStatus =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string; fallback?: string };

export default function DemoForm({
  compact = false,
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
          message: formData.get("message"),
          website: formData.get("website"),
          source,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fallback?: string;
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
        method: "website_form",
        form_location: source,
      });
      setStatus({
        type: "success",
        message: "Thank you. STIV will contact you shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not send your request. Please email us directly.",
        fallback:
          "mailto:director@iamstivai.com?subject=STIV%20demo%20request",
      });
    }
  }

  const inputClass = compact
    ? "w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
    : "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold";

  return (
    <form
      onSubmit={submit}
      className={
        compact
          ? "mx-auto mt-8 flex max-w-md flex-col gap-3"
          : "mt-8 flex flex-col gap-4"
      }
    >
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {!compact && (
        <>
          <div className="flex flex-col gap-2">
            <label htmlFor="demo-name" className="text-sm text-muted">
              Name
            </label>
            <input
              id="demo-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="demo-company" className="text-sm text-muted">
              Company
            </label>
            <input
              id="demo-company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputClass}
            />
          </div>
        </>
      )}

      <div className={compact ? "" : "flex flex-col gap-2"}>
        {!compact && (
          <label htmlFor="demo-email" className="text-sm text-muted">
            Work email
          </label>
        )}
        <input
          id="demo-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-label={compact ? "Work email" : undefined}
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      {!compact && (
        <div className="flex flex-col gap-2">
          <label htmlFor="demo-message" className="text-sm text-muted">
            What division or workflow is the priority?
          </label>
          <textarea
            id="demo-message"
            name="message"
            rows={4}
            className={inputClass}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === "sending"}
        className={`shine-sweep group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03] disabled:cursor-wait disabled:opacity-70 ${
          compact ? "self-center" : "mt-2 self-start"
        }`}
      >
        {status.type === "sending" ? "Sending…" : "Book a demo"}
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

