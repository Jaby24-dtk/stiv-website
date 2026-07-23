import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { solutions } from "../lib/solutions";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions",
  description:
    "Explore STIV solutions for finance automation, contract review, sales follow-up, and enterprise AI governance.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Enterprise AI Solutions — STIV",
    description:
      "Practical, approval-gated AI solutions for finance, legal, sales, and enterprise governance.",
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="SOLUTIONS"
        title="Start with the workflow that matters."
        description="Practical guides to how STIV applies division-specific software, human approval, and traceable decisions to high-value enterprise workflows."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={index * 80}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-panel/40 p-7 transition-colors hover:border-white/25 hover:bg-panel/70"
              >
                <p className="font-mono text-xs tracking-widest text-accent-gold">
                  {solution.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {solution.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Explore the solution
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

