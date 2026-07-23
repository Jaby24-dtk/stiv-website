import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ShieldCheck, Scale } from "lucide-react";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import DemoForm from "../components/DemoForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with STIV — book a demo, or reach the right team for careers, privacy, or legal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — STIV",
    description:
      "Get in touch with STIV — book a demo, or reach the right team for careers, privacy, or legal.",
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
        eyebrow="CONTACT"
        title="Let's talk."
        description="Tell us which division is loudest about its bottleneck right now, and we'll show you STIV running against a copy of your own data."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              Book a demo
            </h2>
            <p className="mt-2 text-base text-muted">
              A 30-minute call — no sales deck, just the workspace.
            </p>

            <DemoForm source="contact_page" />
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-2xl font-semibold tracking-tight">
              Other ways to reach us
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              {otherChannels.map(
                ({ icon: Icon, title, description, email, href, linkLabel }) => (
                  <div key={title}>
                    <div className="flex items-center gap-3">
                      <IconTile icon={Icon} size="sm" />
                      <h3 className="text-base font-medium">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted">{description}</p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 inline-block text-sm text-accent-gold hover:underline"
                    >
                      {email}
                    </a>
                    <div>
                      <Link
                        href={href}
                        className="mt-1 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
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
    </>
  );
}
