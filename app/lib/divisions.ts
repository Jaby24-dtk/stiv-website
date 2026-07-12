import {
  BarChart3,
  Briefcase,
  Megaphone,
  Landmark,
  Settings,
  Scale,
  Headset,
  type LucideIcon,
} from "lucide-react";

export type Division = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  summary: string;
  capabilities: string[];
  approvalNote: string;
};

export const divisions: Division[] = [
  {
    slug: "executive",
    name: "Executive",
    icon: BarChart3,
    description:
      "Synthesizes every division's activity into a single briefing — decisions, risks, and what needs your sign-off.",
    summary:
      "STIV's Executive system pulls every division's activity into one briefing, so leadership sees decisions, risks, and open sign-offs without checking seven separate systems.",
    capabilities: [
      "Pulls a daily or weekly briefing together from every connected division, so nothing requires checking seven separate systems.",
      "Flags risks and blockers before they become surprises in a leadership meeting.",
      "Surfaces exactly what needs your sign-off, and nothing you don't need to see.",
      "Keeps a running record of what was decided and why, for accountability.",
    ],
    approvalNote:
      "Briefings and risk flags are informational by default — any action item that needs follow-through still routes through the relevant division's own approval gate.",
  },
  {
    slug: "sales",
    name: "Sales",
    icon: Briefcase,
    description:
      "Qualifies inbound leads, drafts follow-ups, and keeps your pipeline moving between calls.",
    summary:
      "STIV's Sales system qualifies inbound leads, drafts follow-ups, and keeps a pipeline moving between calls — without a rep having to chase every step manually.",
    capabilities: [
      "Qualifies inbound leads against your criteria before they reach a rep.",
      "Drafts follow-ups so a pipeline keeps moving between calls.",
      "Flags deals going quiet so nothing falls through unnoticed.",
      "Reports on what's actually driving pipeline, not just activity volume.",
    ],
    approvalNote:
      "Every outbound email or proposal routes through an approval gate you define before it reaches a prospect.",
  },
  {
    slug: "marketing",
    name: "Marketing",
    icon: Megaphone,
    description:
      "Plans campaigns, drafts copy on-brand, and reports on what's actually driving pipeline.",
    summary:
      "STIV's Marketing system plans campaigns, drafts on-brand copy, and reports on what's actually driving pipeline — not vanity metrics.",
    capabilities: [
      "Plans campaigns against your calendar and goals.",
      "Drafts on-brand copy in your voice, ready for review.",
      "Reports on what's actually driving pipeline, not vanity metrics.",
      "Keeps messaging consistent across channels without a style-guide re-read every time.",
    ],
    approvalNote:
      "Every piece of copy or campaign routes through an approval gate you define before it goes live.",
  },
  {
    slug: "finance",
    name: "Finance",
    icon: Landmark,
    description:
      "Reconciles accounts, flags variance, and drafts the reports your controller usually stays late for.",
    summary:
      "STIV's Finance system reconciles accounts, flags variance, and drafts the reports a controller usually stays late for.",
    capabilities: [
      "Reconciles accounts and flags variance before it becomes a surprise at close.",
      "Drafts the reports your controller usually stays late for.",
      "Watches for anomalies against historical patterns.",
      "Keeps every number traceable back to its source.",
    ],
    approvalNote:
      "Every entry, adjustment, or report routes through an approval gate you define before it's finalized.",
  },
  {
    slug: "operations",
    name: "Operations",
    icon: Settings,
    description:
      "Watches your workflows for bottlenecks and quietly clears the busywork before it piles up.",
    summary:
      "STIV's Operations system watches your workflows for bottlenecks and quietly clears the busywork before it piles up.",
    capabilities: [
      "Watches your workflows for bottlenecks in real time.",
      "Clears busywork before it piles up.",
      "Flags process breakdowns before they cascade.",
      "Keeps a record of what changed and why.",
    ],
    approvalNote:
      "Every workflow change routes through an approval gate you define before it takes effect.",
  },
  {
    slug: "legal",
    name: "Legal",
    icon: Scale,
    description:
      "Reviews contracts against your playbook and redlines the parts that need a human's eyes.",
    summary:
      "STIV's Legal system reviews contracts against your playbook and redlines the parts that need a human's eyes.",
    capabilities: [
      "Reviews contracts against your playbook.",
      "Redlines the parts that need a human's eyes, and leaves the rest alone.",
      "Flags clauses that deviate from your standard terms.",
      "Keeps a paper trail of every review and decision.",
    ],
    approvalNote:
      "Every contract redline or executed document routes through an approval gate you define before it's sent.",
  },
  {
    slug: "support",
    name: "Support",
    icon: Headset,
    description:
      "Resolves the tickets it can, and hands off the rest with full context already attached.",
    summary:
      "STIV's Support system resolves the tickets it can on its own, and hands off the rest with full context already attached.",
    capabilities: [
      "Resolves the tickets it can, on its own.",
      "Hands off the rest with full context already attached — no re-explaining.",
      "Watches for patterns across tickets that signal a bigger issue.",
      "Keeps response times consistent even during volume spikes.",
    ],
    approvalNote:
      "Every ticket response that isn't fully resolved by policy routes through an approval gate you define before it reaches a customer.",
  },
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((division) => division.slug === slug);
}
