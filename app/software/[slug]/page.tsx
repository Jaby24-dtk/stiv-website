import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import IconTile from "../../components/IconTile";
import Reveal from "../../components/Reveal";
import { divisions, getDivisionBySlug } from "../../lib/divisions";
import { serializeJsonLd } from "../../lib/json-ld";
import { ORGANIZATION_ID, SITE_URL } from "../../lib/site";

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) return {};

  return {
    title: `${division.name} — STIV Software`,
    description: division.summary,
    alternates: { canonical: `/software/${division.slug}` },
    openGraph: {
      title: `STIV for ${division.name} — STIV`,
      description: division.summary,
      url: `/software/${division.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `STIV for ${division.name} — STIV`,
      description: division.summary,
    },
  };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);
  if (!division) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/software/${division.slug}#service`,
        name: `STIV ${division.name}`,
        serviceType: `Enterprise AI software for ${division.name}`,
        description: division.summary,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "Worldwide",
        url: `${SITE_URL}/software/${division.slug}`,
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/pricing`,
          availability: "https://schema.org/InStock",
          category: "subscription",
          price: "1500",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1500",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Software",
            item: `${SITE_URL}/#divisions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: division.name,
            item: `${SITE_URL}/software/${division.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
      />
      <PageHeader
        eyebrow={`SOFTWARE — ${division.name.toUpperCase()}`}
        title={`Premium software for ${division.name}.`}
        description={division.description}
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <IconTile icon={division.icon} size="lg" />
            <h2 className="text-2xl font-semibold tracking-tight">
              What STIV {division.name} does
            </h2>
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            {division.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-gold" />
                <span className="text-base leading-relaxed text-muted">
                  {capability}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-panel/40 p-6">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
            <p className="text-sm leading-relaxed text-muted">
              {division.approvalNote}
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-medium">
                License {division.name} on its own
              </p>
              <p className="mt-1 text-sm text-muted">
                Single Division starts at $1,500/mo — one workspace, standard
                integrations, email support.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Request private access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted">Explore the other divisions</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
              {divisions
                .filter((d) => d.slug !== division.slug)
                .map((d, i, arr) => (
                  <span key={d.slug} className="flex items-center gap-2">
                    <Link
                      href={`/software/${d.slug}`}
                      className="font-semibold text-foreground/90 transition-colors hover:text-accent-gold"
                    >
                      {d.name}
                    </Link>
                    {i < arr.length - 1 && (
                      <span aria-hidden className="text-white/20">
                        ·
                      </span>
                    )}
                  </span>
                ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
