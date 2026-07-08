import {
  BarChart3,
  Briefcase,
  Megaphone,
  Landmark,
  Settings,
  Scale,
  Headset,
} from "lucide-react";

const divisions = [
  {
    name: "Executive",
    icon: BarChart3,
    description:
      "Synthesizes every division's activity into a single briefing — decisions, risks, and what needs your sign-off.",
  },
  {
    name: "Sales",
    icon: Briefcase,
    description:
      "Qualifies inbound leads, drafts follow-ups, and keeps your pipeline moving between calls.",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    description:
      "Plans campaigns, drafts copy on-brand, and reports on what's actually driving pipeline.",
  },
  {
    name: "Finance",
    icon: Landmark,
    description:
      "Reconciles accounts, flags variance, and drafts the reports your controller usually stays late for.",
  },
  {
    name: "Operations",
    icon: Settings,
    description:
      "Watches your workflows for bottlenecks and quietly clears the busywork before it piles up.",
  },
  {
    name: "Legal",
    icon: Scale,
    description:
      "Reviews contracts against your playbook and redlines the parts that need a human's eyes.",
  },
  {
    name: "Support",
    icon: Headset,
    description:
      "Resolves the tickets it can, and hands off the rest with full context already attached.",
  },
];

export default function Divisions() {
  return (
    <section
      id="divisions"
      className="border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            SOFTWARE
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Seven divisions, seven premium systems.
          </h2>
          <p className="mt-4 text-lg text-muted">
            STIV builds a dedicated, exclusive system for each division of
            your enterprise — licensed independently, so you invest only in
            what your teams actually run.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {divisions.map(({ name, icon: Icon, description }) => (
            <div
              key={name}
              className="group relative bg-background p-7 transition-colors hover:bg-panel"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-gold transition-colors group-hover:border-accent-gold/40">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-background p-7 lg:col-span-2">
            <p className="text-sm text-muted">
              Want every division running as one exclusive system?
            </p>
            <a
              href="#unified"
              className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent-gold hover:underline"
            >
              See STIV Unified →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
