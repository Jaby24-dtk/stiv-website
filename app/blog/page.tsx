import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";

export const metadata: Metadata = {
  title: "Blog — STIV",
  description: "Notes from STIV on building premium enterprise software.",
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
        <div className="glass-panel mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl px-10 py-16 text-center">
          <IconTile icon={Newspaper} size="lg" />
          <h2 className="text-lg font-medium">New posts coming soon</h2>
          <p className="text-sm text-muted">
            We&apos;re heads-down on the product right now. Check back
            shortly, or follow along by booking a demo.
          </p>
          <Link
            href="/#book-demo"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </>
  );
}
