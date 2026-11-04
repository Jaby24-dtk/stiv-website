import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Users, Landmark, FileText, ArrowRight, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import FaqBlock from "../components/FaqBlock";
import { DEFAULT_OG_IMAGE } from "../lib/site";

export const metadata: Metadata = {
  title: "Integrations for Inbox, CRM, Accounting & Docs",
  description:
    "STIV connects to your inbox, CRM, accounting and docs with no migration. Standard integrations on Single Division; custom ones on Full Suite and Unified.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Integrations for Inbox, CRM, Accounting & Docs — STIV",
    description:
      "STIV connects to your inbox, CRM, accounting and docs with no migration. Standard integrations on Single Division; custom ones on Full Suite and Unified.",
    url: "/integrations",
  },
};

const categories = [
  {
    icon: Mail,
    title: "Inbox",
    description:
      "Agents read what's already in your inbox to draft follow-ups, summaries, and responses — no separate mailbox to manage.",
  },
  {
    icon: Users,
    title: "CRM",
    description:
      "Pipeline, contacts, and deal history feed directly into Sales and Marketing agents without a data re-entry step.",
  },
  {
    icon: Landmark,
    title: "Accounting",
    description:
      "Finance agents reconcile against your existing ledger and reporting tools instead of a parallel system.",
  },
  {
    icon: FileText,
    title: "Docs",
    description:
      "Contracts, playbooks, and internal documentation are read in place so agents work from your actual source of truth.",
  },
];

const tiers = [
  {
    name: "Standard integrations",
    plan: "Single Division",
    description:
      "Included with Single Division at $1,500/mo — connect one division's inbox, CRM, accounting, or docs as applicable to that system.",
  },
  {
    name: "Custom integrations",
    plan: "Full Suite & STIV Unified",
    description:
      "Included with Full Suite and STIV Unified — integrations tailored to your specific stack across all seven divisions.",
  },
];

// Every answer restates facts already published on this page, pricing, security
// and the homepage FAQ — no new claims.
const faqs = [
  {
    question: "Do we need to migrate our data to use STIV?",
    answer:
      "No. STIV reads your existing tools instead of replacing them. You link your inbox, CRM, accounting and docs, and agents work from what's already there — no migration and no parallel system.",
  },
  {
    question: "Which tools can STIV connect to?",
    answer:
      "STIV connects to your inbox, CRM, accounting and docs, plus calendars, files and messaging. Sales and Marketing agents use pipeline and deal history from your CRM, Finance agents reconcile against your existing ledger, and contracts and playbooks are read in place.",
  },
  {
    question: "What's the difference between standard and custom integrations?",
    answer:
      "Standard integrations are included with Single Division at $1,500/mo and connect one division's inbox, CRM, accounting or docs as applicable. Custom integrations, tailored to your specific stack across all seven divisions, are included with Full Suite ($8,200/mo) and STIV Unified.",
  },
  {
    question: "Can a connected agent act on our systems without approval?",
    answer:
      "No. Every integration, standard or custom, runs under the same approval-gated model: agents read what's connected, and every consequential action — emails, contracts, payments — routes through an approval gate you define, with every decision logged.",
  },
  {
    question: "Can one agent see another division's data?",
    answer:
      "No. Each agent's access is scoped to only what its role requires — a Sales agent cannot read Finance's data, and vice versa. Data is encrypted in transit and at rest.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="INTEGRATIONS"
        title="Connects to what you already run."
        description="STIV reads your existing tools instead of replacing them — link your inbox, CRM, accounting, and docs, and agents read what's already there. No migration required."
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {categories.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <IconTile icon={Icon} size="md" />
                <h2 className="mt-4 text-lg font-medium">{title}</h2>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            BY TIER
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Standard, or custom.
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            {tiers.map(({ name, plan, description }) => (
              <div
                key={name}
                className="flex items-start gap-3 rounded-3xl border border-white/10 bg-panel/40 p-6"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-gold" />
                <div>
                  <p className="font-medium">
                    {name} <span className="text-muted">— {plan}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed text-muted">
            Every integration, standard or custom, operates under the same
            approval-gated model — agents read what&apos;s connected during
            onboarding, and every consequential action still routes through
            an{" "}
            <Link href="/security" className="text-accent-gold hover:underline">
              approval gate you define
            </Link>
            .
          </p>

          <FaqBlock faqs={faqs} />

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f0efea] hover:bg-[#bfd9ef] px-6 py-3 text-sm font-medium text-[#101216] transition-transform hover:-translate-y-0.5"
            >
              Ask about your specific stack
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              See pricing
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
