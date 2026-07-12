export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: BlogContentBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-one-assistant-cant-run-your-company",
    title: "Why one AI assistant can't run your whole company",
    description:
      "A generalist assistant treats Finance and Legal the same way. Here's why STIV builds a dedicated system for each division instead.",
    date: "2026-07-08",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "Most AI platforms treat a company as one undifferentiated blob: a single assistant, trained on a single generic model, pointed at whatever data you connect. It's a reasonable place to start, but it breaks down fast once you look at how a real enterprise actually runs.",
      },
      {
        type: "p",
        text: "Finance, Legal, Sales, and Support aren't the same job wearing different hats. They have different playbooks, different tolerance for risk, different definitions of \"done,\" and different consequences when something goes wrong. A contract redline and a sales follow-up email are not the same task with different inputs — they require different judgment.",
      },
      {
        type: "h2",
        text: "Division-first, not department-agnostic",
      },
      {
        type: "p",
        text: "STIV's answer is to build a dedicated, exclusive system for each division — Executive, Sales, Marketing, Finance, Operations, Legal, and Support — rather than one model expected to be equally fluent in all seven. Each division's system is licensed independently, so a company invests only in the systems its teams actually run: a Sales team can start with just the Sales system, without paying for or configuring six systems it doesn't need yet.",
      },
      {
        type: "p",
        text: "This isn't just a packaging decision. It shows up in what each system is actually built to do:",
      },
      {
        type: "ul",
        items: [
          "Executive synthesizes every division's activity into a single briefing — decisions, risks, and what needs sign-off.",
          "Sales qualifies inbound leads, drafts follow-ups, and keeps the pipeline moving between calls.",
          "Marketing plans campaigns, drafts on-brand copy, and reports on what's actually driving pipeline.",
          "Finance reconciles accounts, flags variance, and drafts the reports a controller usually stays late for.",
          "Operations watches workflows for bottlenecks and clears busywork before it piles up.",
          "Legal reviews contracts against a playbook and redlines the parts that need a human's eyes.",
          "Support resolves the tickets it can, and hands off the rest with full context already attached.",
        ],
      },
      {
        type: "h2",
        text: "Unify when you've earned it, not before",
      },
      {
        type: "p",
        text: "Some companies eventually want one system across the whole company — a single exclusive assistant briefed on everything, answerable only to leadership. That's what STIV Unified is for. But we think that's a decision to make once you've outgrown running divisions independently, not a default you're locked into on day one.",
      },
    ],
  },
  {
    slug: "how-stivs-approval-gates-work",
    title: "Inside STIV's approval gates: how agents earn autonomy",
    description:
      "Giving software real access to your business only works if you can trust — and verify — everything it touches. Here's how STIV's approval model is built.",
    date: "2026-07-09",
    readTime: "5 min read",
    category: "Security",
    content: [
      {
        type: "p",
        text: "The moment you give an AI agent write access to your inbox, your CRM, or your accounting system, the question stops being \"is it accurate\" and becomes \"what happens when it's wrong.\" That's the question STIV's approval model is built to answer.",
      },
      {
        type: "h2",
        text: "Software recommends, drafts, and flags — your team decides",
      },
      {
        type: "p",
        text: "Every consequential action a STIV agent takes routes through an approval gate you define. Nothing external — emails, contracts, payments — ships without one. The system decides what to draft, propose, or flag; a human decides what actually goes out. That division of labor doesn't change as an agent gets better at its job; only the scope of what's pre-approved does.",
      },
      {
        type: "h2",
        text: "Four building blocks",
      },
      {
        type: "ul",
        items: [
          "Encrypted by default — data is encrypted in transit and at rest, and every agent's access is scoped to only what its role requires.",
          "Human approval gates — you define which actions need sign-off, and the gate applies uniformly, not case by case.",
          "Full audit trail — every decision an agent makes is logged, timestamped, and reversible. Nothing happens off the record.",
          "Built for compliance — STIV is architected around SOC 2 control objectives from day one, with data residency options for regulated teams.",
        ],
      },
      {
        type: "h2",
        text: "Autonomy is earned, not assumed",
      },
      {
        type: "p",
        text: "In practice, this means a new STIV deployment starts narrow: agents draft, a human approves, and every approval or rejection becomes a signal the agent learns from. As trust builds — and as the audit trail shows a consistent track record — teams widen what's allowed to run autonomously. Most teams reclaim their first full day of manual work within a month, not because the system stopped asking for approval, but because fewer of its actions still need it.",
      },
      {
        type: "p",
        text: "The goal isn't a system you have to supervise forever. It's a system whose judgment you can verify early, so that trusting it later is a decision backed by evidence — not a leap of faith.",
      },
    ],
  },
  {
    slug: "first-30-days-with-stiv",
    title: "The first 30 days with STIV: connect, learn, act, compound",
    description:
      "What actually happens between signing up and running division software on autopilot — in four stages, not one big migration.",
    date: "2026-07-10",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "Enterprise software rollouts have a reputation for being slow because they usually start with a migration: move your data, rebuild your workflows, retrain your team, then hope the new system earns its keep. STIV is built to skip that step entirely. Here's what the first month actually looks like, stage by stage.",
      },
      {
        type: "h2",
        text: "01 — Connect your stack",
      },
      {
        type: "p",
        text: "You link your inbox, CRM, accounting, and docs. Agents read what's already there — no migration required. This is the whole point of starting division-by-division: there's nothing to re-platform, because STIV reads your existing tools rather than replacing them.",
      },
      {
        type: "h2",
        text: "02 — Agents learn your business",
      },
      {
        type: "p",
        text: "Before an agent drafts anything a human sees, it studies your playbooks, past decisions, and tone until its output looks like something your own team wrote. This stage is intentionally quiet — the goal is for the agent's first real output to already sound like you, not like a generic template with your logo on it.",
      },
      {
        type: "h2",
        text: "03 — They act, you approve",
      },
      {
        type: "p",
        text: "Every consequential action routes through an approval gate you define — nothing ships without a human in the loop. This is where an agent's judgment gets tested against reality, and where the audit trail starts accumulating a real track record instead of a theoretical one.",
      },
      {
        type: "h2",
        text: "04 — Leverage compounds",
      },
      {
        type: "p",
        text: "As trust builds, you widen what runs autonomously. Most teams reclaim their first full day within a month — not from one dramatic cutover, but from a steady accumulation of small, verified approvals that eventually add up to a division running mostly on its own, with a human still holding the gate on anything that matters.",
      },
    ],
  },
  {
    slug: "stiv-unified-explained",
    title: "STIV Unified: one assistant, every division, still yours",
    description:
      "Seven independent systems are the starting point. Here's what changes — and what doesn't — when a company moves to one exclusive assistant instead.",
    date: "2026-07-11",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "Running Executive, Sales, Marketing, Finance, Operations, Legal, and Support as seven independent systems works well for most companies, most of the time — you invest only in what a given team actually runs, and each system stays exclusively built for its division. STIV Unified exists for the companies that have outgrown that arrangement and want one system that sees the whole company at once.",
      },
      {
        type: "h2",
        text: "Four things that change under Unified",
      },
      {
        type: "ul",
        items: [
          "Seven systems become one command layer — every division fused into a single exclusive assistant, briefed on everything, answerable only to you.",
          "It's trained on your business specifically — custom-trained on your data, your brand voice, and your approval gates, not a generic model.",
          "Infrastructure becomes dedicated — a single deployment built and hosted for one company, not shared tenancy.",
          "Accountability becomes singular — one team, dedicated infrastructure, and white-glove onboarding, rather than seven systems each with their own operational surface.",
        ],
      },
      {
        type: "h2",
        text: "What doesn't change",
      },
      {
        type: "p",
        text: "The approval model doesn't change. Every consequential action — emails, contracts, payments — still routes through a human-defined approval gate, the same as it does for a single division system. Unifying seven divisions into one assistant doesn't mean giving up the audit trail or the sign-off requirements; it means one assistant now carries all seven, with the same accountability standards applied uniformly across the company instead of division by division.",
      },
      {
        type: "h2",
        text: "Who it's for",
      },
      {
        type: "p",
        text: "STIV Unified is priced custom and by application, deliberately: it's a bespoke build on a specific company's business, not a fourth pricing tier to self-serve into. In practice, that means it tends to fit companies that already know exactly which divisions they'd unify and why — not companies still deciding whether they need division software at all. For that earlier stage, starting with a single division, or the Full Suite of all seven run independently, is the more honest starting point.",
      },
    ],
  },
  {
    slug: "choosing-single-division-full-suite-or-unified",
    title: "Single Division, Full Suite, or Unified: how to choose where to start",
    description:
      "Three ways to license STIV, and the honest answer for which one fits a company that's never run division-specific software before.",
    date: "2026-07-12",
    readTime: "4 min read",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "STIV is licensed three ways, and the right starting point depends less on company size than on how confident you already are about which division needs software built specifically for it.",
      },
      {
        type: "h2",
        text: "Single Division — $1,500/mo",
      },
      {
        type: "p",
        text: "One division of your choice, one workspace, standard integrations, and email support. This is the starting point for a company that has one clear, painful bottleneck — a Finance team drowning in reconciliation, a Legal team behind on contract review — and wants to prove the model against that one workflow before expanding. It's also the lowest-commitment way to see how an approval-gated agent behaves against your own playbooks before trusting it with more.",
      },
      {
        type: "h2",
        text: "Full Suite — $8,200/mo",
      },
      {
        type: "p",
        text: "All seven divisions, licensed and deployed independently, with unlimited workspaces, custom integrations, approval workflows, and priority support. This fits a company that already knows it wants Executive, Sales, Marketing, Finance, Operations, Legal, and Support each running their own dedicated system — without waiting to unify them into a single assistant. Each division still operates independently under Full Suite; you're licensing breadth, not fusing the systems together.",
      },
      {
        type: "h2",
        text: "STIV Unified — custom, by application",
      },
      {
        type: "p",
        text: "One exclusive assistant that runs the whole company: every division unified, a bespoke build on your business, dedicated infrastructure, white-glove onboarding, and a dedicated success manager. This is the right fit once a company has already run divisions independently long enough to know exactly which ones it wants fused into a single command layer — not a default for a company still evaluating whether division-specific software is worth it at all.",
      },
      {
        type: "h2",
        text: "The honest recommendation",
      },
      {
        type: "p",
        text: "If you're not sure yet, start with Single Division on whichever team is loudest about its bottleneck right now. The approval gate, audit trail, and onboarding sequence are the same regardless of tier — Full Suite and Unified just apply that same model to more of the company at once, once you've seen it work on one division first.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
