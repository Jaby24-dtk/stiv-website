import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/Reveal";
import { getGuideBySlug, guides } from "../../lib/guides";
import { serializeJsonLd } from "../../lib/json-ld";
import { ORGANIZATION_ID, SITE_URL } from "../../lib/site";

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = getGuideBySlug((await params).slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: `${guide.title} — STIV`,
      description: guide.description,
      url: `/guides/${guide.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} — STIV`,
      description: guide.description,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const guide = getGuideBySlug((await params).slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/guides/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: url,
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map(({ question, answer }) => ({
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
            name: "Guides",
            item: `${SITE_URL}/guides`,
          },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
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
        eyebrow={guide.eyebrow}
        title={guide.title}
        description={guide.description}
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            THE SHORT ANSWER
          </p>
          <p className="mt-4 text-xl leading-relaxed text-foreground/90">
            {guide.answer}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          {guide.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-5 flex flex-col gap-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent-gold" />
                      <span className="text-base leading-relaxed text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Questions, answered
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {guide.faqs.map(({ question, answer }) => (
              <div key={question} className="py-6">
                <h3 className="text-lg font-medium">{question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{answer}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Keep reading</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {guide.related.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:border-white/30"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            data-analytics-cta={`guide_${guide.slug}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f0efea] hover:bg-[#bfd9ef] px-6 py-3 text-sm font-medium text-[#101216]"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
