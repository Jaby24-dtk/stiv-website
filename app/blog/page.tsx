import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from STIV on building premium enterprise software.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — STIV",
    description: "Notes from STIV on building premium enterprise software.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="BLOG"
        title="Notes from STIV."
        description="Product updates, engineering notes, and thinking on how divisions actually run."
      />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col divide-y divide-white/10 border-t border-white/10">
          {posts.map((post, i) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            );

            return (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 py-10"
                >
                  <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent-gold">
                    <span>{post.category.toUpperCase()}</span>
                    <span aria-hidden className="text-white/20">
                      ·
                    </span>
                    <time dateTime={post.date} className="text-muted">
                      {formattedDate}
                    </time>
                    <span aria-hidden className="text-white/20">
                      ·
                    </span>
                    <span className="text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-gold sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="max-w-xl text-base leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/90">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
