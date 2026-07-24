import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "STIV Unified",
  description:
    "STIV Unified combines all seven divisions into one exclusive assistant — a bespoke build on your business, dedicated infrastructure, and a dedicated success manager. Custom pricing, by application.",
  alternates: { canonical: "/unified" },
  openGraph: {
    title: "STIV Unified — STIV",
    description:
      "STIV Unified combines all seven divisions into one exclusive assistant — a bespoke build on your business, dedicated infrastructure, and a dedicated success manager. Custom pricing, by application.",
    url: "/unified",
  },
};

const changes = [
  {
    title: "Seven systems become one command layer",
    description:
      "Every division fused into a single exclusive assistant, briefed on everything, answerable only to you.",
  },
  {
    title: "Trained on your business specifically",
    description:
      "Custom-trained on your data, your brand voice, and your approval gates — not a generic model.",
  },
  {
    title: "Dedicated infrastructure",
    description:
      "A deployment built and hosted for one company, not shared tenancy.",
  },
  {
    title: "Singular accountability",
    description:
      "One team, dedicated infrastructure, and white-glove onboarding, rather than seven systems each with their own operational surface.",
  },
];

export default function UnifiedPage() {
  return (
    <>
      <PageHeader
        eyebrow="STIV UNIFIED"
        title="One assistant. Every division. Exclusively yours."
        description="Seven independent systems are the starting point. STIV Unified is for companies that have outgrown that arrangement and want one system that sees the whole company at once."
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            What changes under Unified
          </h2>
          <ul className="mt-8 flex flex-col gap-6">
            {changes.map(({ title, description }) => (
              <li key={title} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-gold" />
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="mt-1 text-base leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-white/10 bg-panel/40 p-6">
            <h3 className="font-medium">What doesn&apos;t change</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The approval model stays the same. Every consequential action —
              emails, contracts, payments — still routes through a
              human-defined approval gate, the same as it does for a single
              division system. Unifying seven divisions into one assistant
              doesn&apos;t mean giving up the audit trail or the sign-off
              requirements.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-medium">STIV Unified</p>
              <p className="mt-1 text-sm text-muted">
                Custom pricing · by application
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Apply for Unified
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Not sure yet?{" "}
            <Link
              href="/software/executive"
              className="text-accent-gold hover:underline"
            >
              Start with a single division
            </Link>{" "}
            first.
          </p>
        </Reveal>
      </section>
    </>
  );
}
