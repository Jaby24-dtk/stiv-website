import type { Metadata } from "next";
import { Code2, Handshake, Headset, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Careers — STIV",
  description:
    "STIV is a small, exacting team building premium software for the enterprise. See where we're looking for talent.",
};

const areas = [
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Building the systems that power each division's software and the infrastructure STIV Unified runs on.",
  },
  {
    icon: Handshake,
    title: "Enterprise Sales",
    description:
      "Guiding enterprise buyers from first demo to a signed deployment across one or several divisions.",
  },
  {
    icon: Headset,
    title: "Customer Success",
    description:
      "Owning onboarding and adoption for accounts running STIV in production.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Keeping STIV's access model, audit trails, and data handling ahead of what enterprise customers require.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="CAREERS"
        title="Build software people bet their company on."
        description="STIV stays deliberately small. We'd rather ship seven systems well than twenty poorly — and we hire the same way."
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Where we&apos;re looking
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            We don&apos;t have specific openings posted right now, but
            we&apos;re always interested in hearing from strong people in
            these areas.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {areas.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Don&apos;t see your role listed?
          </h2>
          <p className="text-muted">
            Send us a short note about what you&apos;d want to work on — we
            read everything.
          </p>
          <a
            href="mailto:careers@iamstivai.com"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            careers@iamstivai.com
          </a>
        </div>
      </section>
    </>
  );
}
