import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Gem, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "STIV builds exclusive, purpose-built software for every division of your enterprise — founded in Singapore, 2026.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — STIV",
    description:
      "STIV builds exclusive, purpose-built software for every division of your enterprise — founded in Singapore, 2026.",
    url: "/about",
  },
};

const values = [
  {
    icon: Layers,
    title: "Division-first architecture",
    description:
      "We don't believe one generic assistant can understand Finance and Legal equally well. Each division gets software built for how it actually works.",
  },
  {
    icon: ShieldCheck,
    title: "Human accountability",
    description:
      "Software recommends, drafts, and flags — your team decides. Every consequential action passes through an approval gate you define.",
  },
  {
    icon: Gem,
    title: "Built for the boardroom",
    description:
      "STIV is priced and engineered for enterprises that expect software to meet the same standard as their people.",
  },
  {
    icon: Users,
    title: "A small, exacting team",
    description:
      "We'd rather ship seven systems well than twenty poorly. STIV stays deliberately focused on doing division software properly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title="Software built the way real companies are run."
        description="Most platforms treat a company as one undifferentiated blob. We think Finance, Legal, and Sales deserve software built specifically for them — with the option to unify once you've outgrown silos."
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
          <p>
            STIV was founded in 2026 in Singapore on a simple observation:
            enterprise software usually forces a choice between generic
            all-in-one platforms that do everything shallowly, or a patchwork
            of point solutions that never talk to each other.
          </p>
          <p className="mt-6">
            We build the third option — a dedicated, premium system for each
            division of your business, engineered to the standard of the
            people who run it. And for companies ready to run everything
            through a single exclusive assistant, STIV Unified brings every
            division under one command layer.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What we believe
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 80} className="flex gap-4">
                <IconTile icon={Icon} />
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See it running against your own business.
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Request private access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
