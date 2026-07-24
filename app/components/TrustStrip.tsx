import Link from "next/link";
import { Building2, CircleCheckBig, LockKeyhole, ScrollText } from "lucide-react";

const proofPoints = [
  {
    icon: Building2,
    title: "Singapore registered",
    detail: "STIV Pte. Ltd. · UEN 202630466E",
    href: "/about",
    linkLabel: "Company details",
  },
  {
    icon: CircleCheckBig,
    title: "Human approval",
    detail: "Consequential actions require your sign-off.",
    href: "/#how-it-works",
    linkLabel: "See how it works",
  },
  {
    icon: ScrollText,
    title: "Traceable decisions",
    detail: "Actions are logged, timestamped, and reversible.",
    href: "/security",
    linkLabel: "Security controls",
  },
  {
    icon: LockKeyhole,
    title: "Scoped access",
    detail: "Each system only receives the access its role needs.",
    href: "/subprocessors",
    linkLabel: "Review subprocessors",
  },
];

export default function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-white/10 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">BUILT FOR SCRUTINY</p>
          <h2 id="trust-heading" className="mt-3 text-3xl font-semibold tracking-tight">
            Verify the company. Review the controls.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            No anonymous metrics or borrowed logos—just clear company details,
            product controls, and documentation your team can inspect.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map(({ icon: Icon, title, detail, href, linkLabel }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <Icon className="h-5 w-5 text-accent-gold" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted">{detail}</p>
              <Link
                href={href}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
