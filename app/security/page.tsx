import type { Metadata } from "next";
import Link from "next/link";
import { KeyRound, UserCheck, ScrollText, ShieldCheck, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import { serializeJsonLd } from "../lib/json-ld";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "How STIV secures agent access, keeps humans in the loop, and stays audit-ready — encryption, approval gates, audit trails, and SOC 2 control objectives.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security & Trust — STIV",
    description:
      "How STIV secures agent access, keeps humans in the loop, and stays audit-ready — encryption, approval gates, audit trails, and SOC 2 control objectives.",
    url: "/security",
  },
};

const pillars = [
  {
    icon: KeyRound,
    title: "Encrypted by default",
    description:
      "Data is encrypted in transit and at rest. Every agent's access is scoped to only what its role requires — a Sales agent cannot read Finance's data, and vice versa.",
  },
  {
    icon: UserCheck,
    title: "Human approval gates",
    description:
      "You define which actions need sign-off. Nothing external — emails, contracts, payments — ships without one. The gate applies uniformly, not case by case, so coverage doesn't depend on someone remembering to check.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    description:
      "Every decision an agent makes is logged, timestamped, and reversible. Nothing happens off the record, and every approval or rejection is traceable back to the human who made the call.",
  },
  {
    icon: ShieldCheck,
    title: "Built for compliance",
    description:
      "Architected around SOC 2 control objectives from day one, with data residency options for regulated teams. Compliance was a design constraint from the start, not a retrofit.",
  },
];

const faqs = [
  {
    question: "Is STIV SOC 2 certified?",
    answer:
      "STIV is architected around SOC 2 control objectives from day one — access scoping, audit logging, and approval gates are built into the system rather than bolted on. Ask your account contact for the current status of formal certification and audit reports.",
  },
  {
    question: "Who can see what?",
    answer:
      "Every agent's access is scoped to only what its role requires. A division's agent operates within that division's connected data — it doesn't have standing access to other divisions unless you explicitly configure it that way.",
  },
  {
    question: "What happens if an agent gets something wrong?",
    answer:
      "Every consequential action — emails, contracts, payments — routes through a human approval gate you define before it ships. Nothing external goes out unreviewed, and every decision is logged and reversible.",
  },
  {
    question: "Where is data hosted?",
    answer:
      "STIV offers data residency options for regulated teams. Third parties engaged to help deliver the service are listed on the subprocessors page.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="SECURITY & TRUST"
        title="Autonomy you can audit."
        description="Giving AI agents real access to your business only works if you can trust — and verify — everything they touch."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <IconTile icon={Icon} size="md" />
              <h2 className="mt-4 text-lg font-medium">{title}</h2>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Questions security teams ask.
          </h2>

          <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/subprocessors"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              View subprocessors
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Privacy policy
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:underline"
            >
              Talk to us about a security review
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
