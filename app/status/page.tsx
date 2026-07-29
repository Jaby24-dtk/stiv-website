import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import { divisions } from "../lib/divisions";

export const metadata: Metadata = {
  title: "System Status",
  description: "STIV's uptime commitment across all seven division systems.",
  alternates: { canonical: "/status" },
  openGraph: {
    title: "System Status — STIV",
    description:
      "STIV's uptime commitment across all seven division systems.",
    url: "/status",
  },
};

export default function StatusPage() {
  return (
    <>
      <PageHeader
        eyebrow="STATUS"
        title="Built for 99.5% uptime."
        description="Our uptime commitment across each division system — see the audit trail and SLA details below."
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
            {divisions.map((division) => (
              <div
                key={division.slug}
                className="flex items-center justify-between py-5"
              >
                <div className="flex items-center gap-3">
                  <IconTile icon={division.icon} size="sm" />
                  <span className="font-medium">{division.name}</span>
                </div>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Operational
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-panel/40 p-6">
            <p className="text-sm leading-relaxed text-muted">
              STIV operates against a 99.5% uptime commitment; the list above
              reflects that commitment rather than a live monitoring feed.
              Every agent decision is logged and timestamped as part of the
              standard{" "}
              <Link href="/security" className="text-accent-gold hover:underline">
                audit trail
              </Link>
              . For incident history or a formal SLA, contact your account
              team via{" "}
              <Link href="/contact" className="text-accent-gold hover:underline">
                Contact
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
