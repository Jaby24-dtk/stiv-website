"use client";

import {
  BarChart3,
  Briefcase,
  Megaphone,
  Landmark,
  Settings,
  Scale,
  Headset,
} from "lucide-react";
import DivisionsSwipe from "./DivisionsSwipe";
import Reveal from "./Reveal";

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
    <section id="divisions" className="relative border-t border-white/10">
      <div className="px-6 pb-16 pt-24 lg:px-8">
        <Reveal variant="text" className="mx-auto max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            SOFTWARE
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Seven divisions, seven premium systems.
          </h2>
          <p className="mt-4 text-xl text-muted">
            STIV builds a dedicated, exclusive system for each division of
            your enterprise — licensed independently, so you invest only in
            what your teams actually run.
          </p>
        </Reveal>
      </div>

      <DivisionsSwipe divisions={divisions} />

      <div className="border-t border-white/10 px-6 py-16 text-center lg:px-8">
        <p className="text-sm text-muted">
          Want every division running as one exclusive system?
        </p>
        <a
          href="#unified"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-gold hover:underline"
        >
          See STIV Unified →
        </a>
      </div>
    </section>
  );
}
