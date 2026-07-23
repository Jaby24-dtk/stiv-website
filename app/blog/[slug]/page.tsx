import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/Reveal";
import { getPostBySlug, posts } from "../posts";
import { serializeJsonLd } from "../../lib/json-ld";
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "../../lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} — STIV`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [SITE_URL],
      section: post.category,
      tags: ["enterprise AI", "business automation", post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — STIV`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: "en",
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        image: `${SITE_URL}/opengraph-image`,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${SITE_URL}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      <PageHeader
        eyebrow={post.category.toUpperCase()}
        title={post.title}
        description={post.description}
      />

      <article className="px-6 py-16 lg:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-4 text-2xl font-semibold tracking-tight"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="flex flex-col gap-2.5 pl-1">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-gold"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 transition-colors hover:text-accent-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Book a demo
            </Link>
          </div>
        </Reveal>
      </article>
    </>
  );
}
