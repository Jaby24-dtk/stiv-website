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
  audience: string;
  workflowFit: string;
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
    audience:
      "Built for founders, chief executives, chiefs of staff, and leadership teams that need a dependable operating picture without assembling it manually from departmental updates.",
    workflowFit:
      "STIV Executive connects the approved signals from each deployed division, organizes them into decisions, risks, and pending approvals, and preserves the source context behind every briefing item. Leaders review one concise operating view while the underlying work remains owned by the relevant team.",
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
    audience:
      "Built for revenue leaders, account executives, and business-development teams managing inbound demand, active opportunities, and follow-up across a shared pipeline.",
    workflowFit:
      "STIV Sales reads approved CRM and communication context, applies your qualification rules, and prepares the next useful action for a representative to review. It supports the work between calls while keeping relationship judgment and external communication with the sales team.",
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
    audience:
      "Built for marketing leaders and lean teams responsible for campaign planning, brand consistency, content production, and pipeline reporting across multiple channels.",
    workflowFit:
      "STIV Marketing works from your approved positioning, campaign calendar, and brand guidance to prepare coordinated campaign assets and performance summaries. Reviewers can edit or reject every proposed output before publication, creating a reusable record of what the brand approves.",
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
    audience:
      "Built for finance leaders, controllers, and operations teams that need faster reconciliation and reporting without weakening review controls or traceability.",
    workflowFit:
      "STIV Finance connects to approved financial sources, prepares reconciliations and variance explanations, and links each proposed number back to its origin. Authorized reviewers remain responsible for entries, adjustments, and finalized reports, with their decisions recorded in the audit trail.",
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
    audience:
      "Built for operations leaders and process owners coordinating recurring workflows, handoffs, service levels, and exceptions across teams and business systems.",
    workflowFit:
      "STIV Operations observes approved workflow signals, identifies delays and repeated manual steps, and prepares bounded process actions for review. Teams can begin with recommendations only, then widen pre-approved activity after the recorded results demonstrate that the workflow is reliable.",
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
    audience:
      "Built for legal, procurement, and commercial teams that need a faster first pass on routine agreements while preserving lawyer-led judgment for exceptions and execution.",
    workflowFit:
      "STIV Legal compares an agreement with your approved playbook, explains material deviations, and prepares focused redlines instead of treating every clause as equally risky. Legal reviewers decide what to accept, revise, escalate, or send, and the review history remains traceable.",
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
    audience:
      "Built for support leaders and service teams that need consistent responses, faster triage, and complete handoffs during normal operations and sudden volume spikes.",
    workflowFit:
      "STIV Support uses approved policies and connected customer context to resolve bounded requests or prepare a complete escalation. When a person needs to take over, the issue, history, attempted resolution, and relevant evidence arrive together so the customer does not need to repeat the story.",
  },
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((division) => division.slug === slug);
}
