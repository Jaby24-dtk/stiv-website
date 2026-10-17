import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { guides } from "../lib/guides";
import { DEFAULT_OG_IMAGE } from "../lib/site";

const description =
  "Plain answers to common questions about AI command centers, AI agents for business, human-in-the-loop AI, and rolling out AI agents across a company.";

export const metadata: Metadata = {
  title: "Guides to AI Agents and AI Command Centers",
  description,
  alternates: { canonical: "/guides" },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Guides to AI Agents and AI Command Centers — STIV",
    description,
    url: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="GUIDES"
        title="Straight answers about AI at work."
        description="What AI agents and command centers are, what they can and can't do, and how to bring them into a company without losing control."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {guides.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 80}>
              <Link
                href={`/guides/${guide.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-panel/40 p-7 transition-colors hover:border-white/25 hover:bg-panel/70"
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {guide.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {guide.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Read the guide
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
