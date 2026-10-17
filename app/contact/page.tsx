import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ShieldCheck, Scale } from "lucide-react";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import DemoForm from "../components/DemoForm";
import { DEFAULT_OG_IMAGE } from "../lib/site";

const nextSteps = [
  {
    title: "We review your application",
    description:
      "Every request is read individually to understand the workflow you want to improve.",
  },
  {
    title: "Private briefing",
    description:
      "A confidential working session built around your business and the division where STIV can help first.",
  },
  {
    title: "Start with one division",
    description:
      "Deploy on a focused workflow with your approval rules, permissions, and audit trail in place from day one.",
  },
  {
    title: "Expand when it proves itself",
    description:
      "Add divisions, or unify them under STIV Unified, once the results support it.",
  },
];

export const metadata: Metadata = {
  title: "Request a Private Enterprise Briefing",
  description:
    "Apply for a private STIV briefing to see premium, purpose-built AI software for your enterprise divisions, or reach our careers, privacy, or legal teams.",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Contact STIV",
    description:
      "Apply for a private STIV briefing to see premium, purpose-built AI software for your enterprise divisions, or reach our careers, privacy, or legal teams.",
    url: "/contact",
  },
};

const otherChannels = [
  {
    icon: Briefcase,
    title: "Careers",
    description: "Open roles and general applications.",
    email: "careers@iamstivai.com",
    href: "/careers",
    linkLabel: "See open roles",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    description: "Data requests and privacy questions.",
    email: "privacy@iamstivai.com",
    href: "/privacy",
    linkLabel: "Read the privacy policy",
  },
  {
    icon: Scale,
    title: "Legal",
    description: "Contracts, terms, and legal notices.",
    email: "legal@iamstivai.com",
    href: "/terms",
    linkLabel: "Read the terms of service",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="PRIVATE ACCESS"
        title="Apply for a private briefing."
        description="STIV demonstrations are reserved for qualified teams and built around a specific high-value workflow. Tell us where the leverage is, and we’ll assess the fit."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Private demonstration application
            </h2>
            <p className="mt-2 text-base text-muted">
              Every request is reviewed individually. Qualified applicants are
              invited to a confidential working session tailored to their
              company.
            </p>

            <DemoForm source="contact_page" />
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-2xl font-semibold tracking-tight">
              Other ways to reach us
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              {otherChannels.map(
                ({
                  icon: Icon,
                  title,
                  description,
                  email,
                  href,
                  linkLabel,
                }) => (
                  <div key={title}>
                    <div className="flex items-center gap-3">
                      <IconTile icon={Icon} size="sm" />
                      <h3 className="text-base font-medium">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted">{description}</p>
                    <a
                      href={`mailto:${email}`}
                      className="-mx-2 mt-1 inline-flex min-h-11 items-center px-2 text-sm text-accent-gold hover:underline"
                    >
                      {email}
                    </a>
                    <div>
                      <Link
                        href={href}
                        className="-mx-2 mt-1 inline-flex min-h-11 items-center gap-1 px-2 text-sm text-muted hover:text-foreground"
                      >
                        {linkLabel} →
                      </Link>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            What happens after you apply
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map(({ title, description }, index) => (
              <li key={title}>
                <Reveal delay={index * 70}>
                  <p className="font-mono text-xs text-accent-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm text-muted">
            STIV is in use at I-BG Consultancy &amp; Trading and Aethrade. Read
            how we handle data on the{" "}
            <Link href="/security" className="text-accent-gold underline underline-offset-2">
              security page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
