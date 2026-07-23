import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/Reveal";
import { serializeJsonLd } from "../../lib/json-ld";
import { getSolutionBySlug, solutions } from "../../lib/solutions";
import { ORGANIZATION_ID, SITE_URL } from "../../lib/site";

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const solution = getSolutionBySlug((await params).slug);
  if (!solution) return {};

  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.title} — STIV`,
      description: solution.description,
      url: `/solutions/${solution.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} — STIV`,
      description: solution.description,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const solution = getSolutionBySlug((await params).slug);
  if (!solution) notFound();

  const url = `${SITE_URL}/solutions/${solution.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: solution.title,
        description: solution.description,
        audience: {
          "@type": "Audience",
          audienceType: solution.audience,
        },
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "Worldwide",
        url,
      },
      {
        "@type": "FAQPage",
        mainEntity: solution.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${SITE_URL}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: solution.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <PageHeader
        eyebrow={solution.eyebrow}
        title={solution.title}
        description={solution.description}
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-accent-gold">
              WHO IT IS FOR
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              {solution.audience}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-semibold tracking-tight">
              The operating problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {solution.problem}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            What the workflow is designed to support
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {solution.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-panel/40 p-5"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-gold" />
                <p className="text-sm leading-relaxed text-muted">{outcome}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            How implementation works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {solution.workflow.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <p className="font-mono text-xs text-accent-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-accent-gold" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Control remains with your team
            </h2>
          </div>
          <ul className="mt-7 flex flex-col gap-3">
            {solution.safeguards.map((safeguard) => (
              <li key={safeguard} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-gold" />
                <span className="text-base text-muted">{safeguard}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Questions, answered
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {solution.faqs.map(({ question, answer }) => (
              <div key={question} className="py-6">
                <h3 className="text-lg font-medium">{question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              data-analytics-cta={`solution_${solution.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Discuss this workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/software/${solution.divisionSlug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
            >
              Explore STIV {solution.divisionName}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

