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
  {
    slug: "how-stiv-connects-without-a-migration",
    title: "How STIV connects to your stack without a migration",
    description:
      "Agents read what's already there instead of replacing it. Here's what actually happens during the connect stage, and how access stays scoped.",
    date: "2026-07-20",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "\"Connect your stack\" is easy to say and, in most enterprise software, hard to trust. It usually means an OAuth screen asking for broad access, followed by months of a vendor's implementation team mapping your data into their schema before anything useful happens. STIV is built to skip both parts.",
      },
      {
        type: "h2",
        text: "Read first, write only through a gate",
      },
      {
        type: "p",
        text: "When a division connects to your inbox, CRM, accounting system, or docs, the agent starts read-only. It's building context — how your team writes, what a normal deal or invoice looks like, which playbooks it should be following — before it's trusted to produce anything a human sees. Write access, when it's granted, still routes through the same approval gates covered in [[how-stivs-approval-gates-work|our piece on how STIV's approval gates work]].",
      },
      {
        type: "h2",
        text: "Scoped per division, not per company",
      },
      {
        type: "p",
        text: "A Sales system doesn't get standing access to your general ledger, and a Finance system doesn't get access to inbound lead conversations. Access is scoped to what a given division's role actually requires, which means adding a second division later doesn't widen what the first one can see — each system's blast radius stays fixed to its job.",
      },
      {
        type: "ul",
        items: [
          "Standard integrations connect in minutes for common tools — email, calendar, CRM, accounting, and docs platforms most teams already run.",
          "Custom integrations (Full Suite and Unified) extend that to internal tools and less common systems via API.",
          "Nothing is migrated or re-platformed — STIV reads your existing systems of record rather than becoming a new one.",
          "Revoking access is immediate and doesn't require a support ticket or a contract amendment.",
        ],
      },
      {
        type: "h2",
        text: "Why this matters more than the demo",
      },
      {
        type: "p",
        text: "The demo of any AI product looks impressive with clean, pre-loaded data. The real test is whether it can be trusted against your actual inbox, your actual pipeline, with all the inconsistency that implies — without you first spending a quarter cleaning it up for the tool's benefit. Reading what's already there, scoped narrowly, is what makes that possible on week one instead of after a migration project.",
      },
    ],
  },
  {
    slug: "soc-2-data-residency-and-stivs-security-architecture",
    title: "SOC 2, data residency, and what \"built for compliance\" actually means",
    description:
      "Encryption and audit logs are table stakes. Here's a closer look at the control objectives STIV is architected around, and why they matter before you connect real data.",
    date: "2026-07-24",
    readTime: "5 min read",
    category: "Security",
    content: [
      {
        type: "p",
        text: "Every enterprise software vendor claims to take security seriously. The claim that actually matters is narrower: which specific controls is the architecture built around, and can you verify them before you connect a real inbox, a real CRM, or real financial data — not after.",
      },
      {
        type: "h2",
        text: "Architected around SOC 2 control objectives",
      },
      {
        type: "p",
        text: "STIV is built around SOC 2's five trust service criteria from the ground up rather than retrofitted later: security, availability, processing integrity, confidentiality, and privacy. In practice that shows up as access scoped per division and per role, encryption in transit and at rest by default, and every consequential action landing in a timestamped, reversible audit trail — the same audit trail described in [[how-stivs-approval-gates-work|our approval gates piece]].",
      },
      {
        type: "h2",
        text: "Data residency for regulated teams",
      },
      {
        type: "p",
        text: "Teams in regulated industries — finance, legal, healthcare-adjacent — often have a hard requirement about where data physically lives, not just how it's encrypted. STIV offers data residency options so that requirement is a configuration decision at onboarding, not a blocker discovered during procurement review.",
      },
      {
        type: "h2",
        text: "What this doesn't mean",
      },
      {
        type: "p",
        text: "\"Architected around SOC 2 control objectives\" is not the same claim as \"SOC 2 Type II certified,\" and we're careful not to blur the two. Certification is a point-in-time attestation from a third-party auditor; architecture is the design decisions that make passing that audit possible in the first place. If your procurement process requires a completed certification or a specific report, ask directly — the honest answer is more useful than a vague one.",
      },
      {
        type: "ul",
        items: [
          "Encryption in transit and at rest, by default, with no opt-out tier.",
          "Per-division, per-role access scoping — covered in more depth in [[how-stiv-connects-without-a-migration|how STIV connects without a migration]].",
          "Full audit trail: every agent decision logged, timestamped, and reversible.",
          "Data residency options available for regulated teams at onboarding.",
        ],
      },
      {
        type: "p",
        text: "The underlying principle is the same one behind the approval gate model: verify before you trust. Ask what's actually been built and audited, not just what's been claimed on a website — including this one.",
      },
    ],
  },
  {
    slug: "how-to-measure-whether-a-stiv-division-is-working",
    title: "How to measure whether a STIV division is working",
    description:
      "\"It feels like it's helping\" isn't a metric. Here's what to actually track in the first quarter, and what a division that isn't earning its keep looks like.",
    date: "2026-07-28",
    readTime: "4 min read",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "Most teams can tell you whether a new tool feels useful within a week. Whether it's actually worth what they're paying for it is a different question, and it's the one worth answering with numbers instead of a gut check — especially before deciding whether to expand from one division to Full Suite.",
      },
      {
        type: "h2",
        text: "The four numbers that matter",
      },
      {
        type: "ul",
        items: [
          "Approval rate over time — what share of an agent's drafted actions get approved as-is, edited, or rejected, and whether that ratio is improving week over week.",
          "Time-to-first-value — how long between connecting a division and the first agent output a human actually used, not just reviewed.",
          "Hours reclaimed — the honest version of this is self-reported by the team doing the work, cross-checked against what's actually shipping through the approval gate.",
          "Audit trail incidents — how many logged actions needed a correction after the fact. Zero forever is a red flag that approvals are being rubber-stamped, not a sign of perfection.",
        ],
      },
      {
        type: "h2",
        text: "What good looks like in month one",
      },
      {
        type: "p",
        text: "As described in [[first-30-days-with-stiv|the first 30 days with STIV]], month one is mostly the connect and learn stages — approval rates should be climbing but still well below where they'll settle, and most of a team's interaction with the system should be reviewing and correcting drafts rather than rubber-stamping them. If approval rate is already near 100% in week two, that's usually a sign the team isn't reading closely yet, not that the agent is unusually good.",
      },
      {
        type: "h2",
        text: "What a division that isn't working looks like",
      },
      {
        type: "p",
        text: "The clearest signal isn't a low approval rate — a low rate that's climbing is normal early on. It's a flat or declining approval rate past week four, combined with a team that's stopped engaging with drafts closely because they've learned not to trust them. That combination means the agent isn't learning from the correction signal it's being given, and it's worth a direct conversation about playbooks and data access before assuming the model itself is the problem.",
      },
      {
        type: "p",
        text: "None of this requires a dashboard you don't already have. The audit trail every action already generates — logged, timestamped, and reversible — is the same data you need to answer whether a division has earned its keep. The discipline is in actually looking at it monthly, not waiting for renewal to ask the question.",
      },
    ],
  },
  {
    slug: "inside-stiv-legal-contract-review",
    title: "Inside STIV Legal: what happens between upload and redline",
    description:
      "A walkthrough of how a contract actually moves through STIV Legal — from playbook match to the redline a human signs off on.",
    date: "2026-08-01",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "Ask what an AI contract review tool actually does and most vendors give you a marketing answer: it reviews contracts. STIV Legal's answer is more specific, because the mechanism is more specific — every review runs against a playbook your legal team defines, not a generic sense of what a solid contract looks like.",
      },
      {
        type: "h2",
        text: "Step one: the playbook does the judging, not the model",
      },
      {
        type: "p",
        text: "Before STIV Legal reviews anything, your team defines approved positions, fallback language, and escalation rules for the agreement types it's permitted to touch. This is the part most AI contract tools skip, and it's the part that determines whether the output is useful. A model that's merely competent at contracts in the abstract doesn't know that your standard indemnification cap is 12 months of fees, or that a specific vendor category always needs a data processing addendum attached. Your playbook does.",
      },
      {
        type: "h2",
        text: "What gets flagged, and what gets left alone",
      },
      {
        type: "ul",
        items: [
          "Clauses that match an approved position are left alone — no redline, no flag, because there's nothing for a human to weigh in on.",
          "Clauses that deviate from the playbook get a targeted redline, with the fallback language proposed alongside the original.",
          "Ambiguous language that doesn't clearly match or clearly deviate gets escalated to the designated reviewer with the relevant context attached, rather than silently guessed at.",
          "Agreement types outside what the playbook covers aren't reviewed at all — STIV Legal doesn't improvise on a contract type it wasn't configured for.",
        ],
      },
      {
        type: "p",
        text: "The result is a first pass that spends a reviewer's attention on the two or three clauses that actually depart from your standard position, instead of a full read-through of a routine NDA or MSA that was likely fine to begin with.",
      },
      {
        type: "h2",
        text: "The gate that doesn't move",
      },
      {
        type: "p",
        text: "None of this changes who has authority to send a redline or execute a document. Every output routes through the same approval model described in [[how-stivs-approval-gates-work|how STIV's approval gates work]] — an authorized reviewer signs off before anything leaves the building. What changes is how much of the document they have to read closely before they do.",
      },
      {
        type: "p",
        text: "This is deliberately not a replacement for legal judgment. It's a way of making sure the judgment your team already has gets applied to a contract in minutes instead of after end-of-day, and gets applied consistently across every agreement's routine terms — not just the ones a reviewer happens to remember to double-check.",
      },
    ],
  },
  {
    slug: "inside-stiv-support-ticket-handoffs",
    title: "Inside STIV Support: what happens when a ticket can't be resolved automatically",
    description:
      "Most of the interesting design decisions in a support agent show up in the tickets it doesn't close on its own. Here's how handoffs actually work.",
    date: "2026-08-05",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "The easy part of an AI support agent is the ticket it can resolve outright — a password reset, a status lookup, a question already answered in the docs. The design decisions that actually matter show up in the tickets it can't close on its own, and what happens next.",
      },
      {
        type: "h2",
        text: "Resolve on policy, not on confidence",
      },
      {
        type: "p",
        text: "STIV Support resolves tickets against the resolution policy your team defines — a specific, bounded set of request types with a known-correct answer. It doesn't resolve a ticket because the agent seems confident about the answer; it resolves a ticket because that request type is on the list of things it's been authorized to close without a human. That distinction matters, because a model's confidence is not an audit trail, and a policy list is.",
      },
      {
        type: "h2",
        text: "What a handoff actually carries",
      },
      {
        type: "p",
        text: "When a ticket falls outside that policy — a billing dispute, anything touching an active account issue, a customer who's clearly frustrated — it hands off. The point of building this as a real handoff rather than a rejection is what travels with it:",
      },
      {
        type: "ul",
        items: [
          "The full ticket history and any prior related tickets from the same customer, so the person picking it up isn't starting from zero.",
          "What STIV Support already checked and ruled out, so a human isn't repeating diagnostic steps that already happened.",
          "A plain note on why it escalated — not just that it did — so the reviewer knows what to look at first.",
          "No re-explaining by the customer. The context moves with the ticket, not the other way around.",
        ],
      },
      {
        type: "h2",
        text: "Watching for the pattern, not just the ticket",
      },
      {
        type: "p",
        text: "A single ticket is a data point. STIV Support also watches across tickets for the same underlying issue showing up repeatedly — a bug, a confusing product change, a documentation gap — and flags that pattern instead of treating each instance as an isolated case to close. That's the difference between a support agent that clears a queue and one that helps a team stop generating the same queue every week.",
      },
      {
        type: "p",
        text: "The measure of a support agent isn't how many tickets it closes on its own — it's whether the ones it hands off arrive better-prepared than they would have if a human had triaged them cold. Response times staying consistent during a volume spike is a side effect of that design, not the goal itself.",
      },
    ],
  },
  {
    slug: "stiv-vs-hiring-more-headcount",
    title: "STIV vs. hiring more headcount: how to actually compare the two",
    description:
      "The honest version of this comparison isn't AI versus humans. It's what a division's next dollar buys, and what it doesn't.",
    date: "2026-08-08",
    readTime: "5 min read",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "When a division is underwater — Finance behind on close, Legal behind on contract review, Support drowning in ticket volume — the default next move is usually to open a req. STIV is a real alternative to that req in some cases, and a poor substitute for it in others. The comparison is worth making honestly instead of picking a side first.",
      },
      {
        type: "h2",
        text: "What a hire buys that STIV doesn't",
      },
      {
        type: "p",
        text: "A new hire brings judgment that generalizes to situations nobody wrote a playbook for, accountability that's already legible to the rest of the org, and the ability to represent the company in a room. None of STIV's divisions are built to do those things, and pricing them as if they compete with a senior hire's judgment would be a category error. Single Division at $1,500/mo is not a claim that software replaces a controller or general counsel.",
      },
      {
        type: "h2",
        text: "What STIV buys that a hire doesn't",
      },
      {
        type: "ul",
        items: [
          "Coverage of the repetitive share of a role — reconciliation, first-pass redlines, ticket triage, follow-up drafting — that consumes a skilled hire's time without using their judgment.",
          "A start date measured by a connect-and-learn cycle, not a hiring cycle, req approval, and ramp time.",
          "Cost that scales with what you license, not with headcount added as volume grows.",
          "An audit trail on every action from day one — something you'd otherwise have to build separately around a new hire's output.",
        ],
      },
      {
        type: "h2",
        text: "The combination is usually the answer",
      },
      {
        type: "p",
        text: "In practice the two aren't mutually exclusive, and the most common outcome isn't \"STIV instead of a hire\" — it's a division that was about to justify a second or third hire on volume alone, where STIV absorbs enough of the repetitive load that the hire who does join is doing higher-judgment work from day one instead of triage. The [[how-stivs-approval-gates-work|approval gate model]] is what makes that combination safe: STIV drafts and flags, the person your team already trusts still decides.",
      },
      {
        type: "h2",
        text: "When headcount is the right answer, not STIV",
      },
      {
        type: "p",
        text: "If a division's bottleneck is judgment calls, relationship management, or novel situations with no precedent to draft against, a hire solves that and STIV doesn't. STIV is built for divisions where the pain is volume and consistency on well-understood work, not one where the pain is a lack of experienced judgment in the room. Being honest about which problem you actually have is most of the comparison.",
      },
    ],
  },
  {
    slug: "what-a-rejected-approval-looks-like",
    title: "What a rejected — or edited — approval actually looks like",
    description:
      "The approval gate isn't a yes/no switch. Here's what happens when a human edits or rejects what an agent drafted, and where that decision goes.",
    date: "2026-08-12",
    readTime: "4 min read",
    category: "Security",
    content: [
      {
        type: "p",
        text: "Most descriptions of an approval gate stop at \"a human signs off before anything ships.\" That's true, but it undersells what the gate actually does, because approval isn't the only outcome — and the other two are where most of the interesting work happens.",
      },
      {
        type: "h2",
        text: "Three outcomes, not two",
      },
      {
        type: "ul",
        items: [
          "Approved as-is — the draft goes out unchanged. This is the outcome you want to become more common over time, not the only one you should expect from the start.",
          "Edited and approved — a reviewer changes the draft before it ships. The edit itself becomes part of the record, not just the fact that a change happened.",
          "Rejected — the draft doesn't ship, and the reason is captured, not just the verdict.",
        ],
      },
      {
        type: "p",
        text: "Each of the three lands in the same audit trail — logged, timestamped, and attributable to the person who made the call — described in more depth in [[soc-2-data-residency-and-stivs-security-architecture|our piece on STIV's security architecture]]. Nothing about a rejection is quieter than an approval.",
      },
      {
        type: "h2",
        text: "Where the correction actually goes",
      },
      {
        type: "p",
        text: "An edit or a rejection isn't just a decision about that one draft — it's a signal about the playbook the agent is working from. If a Finance report keeps getting the same line item edited the same way, or a Legal redline keeps getting the same fallback clause swapped in, that's a playbook gap, not a one-off mistake. Reviewing the pattern in the audit trail, not just individual incidents, is how a playbook actually improves — the same discipline covered in [[how-to-measure-whether-a-stiv-division-is-working|how to measure whether a division is working]].",
      },
      {
        type: "h2",
        text: "Why a rejection isn't a failure state",
      },
      {
        type: "p",
        text: "Teams sometimes read a string of rejections as evidence the system isn't working. Early on, it's closer to the opposite — a healthy approval process should be rejecting and editing plenty in month one, because that's the correction signal the agent needs before autonomy expands to more of its output. A rejection rate near zero in week two, as covered in [[first-30-days-with-stiv|the first 30 days with STIV]], usually means a reviewer stopped reading closely, not that the drafts got perfect overnight.",
      },
      {
        type: "p",
        text: "The gate isn't there to eventually disappear. It's there so that when it does let more through unreviewed, that decision is backed by a record of exactly how the agent has handled disagreement — not just how often it happened to be right.",
      },
    ],
  },
  {
    slug: "a-cfos-case-for-stiv-finance",
    title: "A CFO's case for STIV Finance",
    description:
      "The pitch to a CFO isn't \"AI for finance.\" It's a specific set of guarantees about where the numbers come from and who's accountable for them.",
    date: "2026-08-15",
    readTime: "4 min read",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "A CFO evaluating STIV Finance isn't asking whether AI can draft a variance report — most tools can produce something that looks like one. The actual questions are narrower: where does every number trace back to, who signed off on it, and what happens the day it's wrong.",
      },
      {
        type: "h2",
        text: "The traceability question comes first",
      },
      {
        type: "p",
        text: "STIV Finance reconciles connected account data and drafts reports with figures traceable to their sources — not a summary generated from a prompt, but output tied back to the underlying records. That matters more to a CFO than speed, because a fast report a controller can't defend under audit is worse than a slow one they can.",
      },
      {
        type: "h2",
        text: "What still requires your sign-off",
      },
      {
        type: "ul",
        items: [
          "Every entry, adjustment, or finalized report routes through an approval gate your team defines before it's final — STIV drafts and reconciles, your controller decides.",
          "Variance flags are surfaced against patterns your team sets, not a generic anomaly model guessing at what's unusual for your business.",
          "Access is scoped to Finance's connected data specifically — a Sales or Support agent, if you run one, doesn't get standing visibility into the general ledger.",
        ],
      },
      {
        type: "h2",
        text: "The month-one math",
      },
      {
        type: "p",
        text: "Single Division pricing at $1,500/mo is the number to weigh against a specific, current cost: hours spent on reconciliation and report drafting that a controller or analyst is doing manually today. It isn't priced or positioned as a replacement for the judgment a controller applies at close — it's priced as removing the repetitive preparation work that happens before that judgment gets applied. [[how-to-measure-whether-a-stiv-division-is-working|What to actually track]] in the first quarter is approval rate trend, time-to-first-value, and audit trail incidents — not a vague sense that close felt easier.",
      },
      {
        type: "p",
        text: "The honest pitch to a CFO is the same one on the security page: verify before you trust. Ask what's traceable, what's gated, and what's logged, and treat a vendor that can't answer those three specifically as a bigger risk than one that answers slowly.",
      },
    ],
  },
  {
    slug: "inside-stiv-sales-lead-to-follow-up",
    title: "Inside STIV Sales: what happens between a lead and a follow-up",
    description:
      "A walkthrough of how STIV Sales qualifies an inbound lead and prepares the next action — without taking judgment or the relationship away from the rep.",
    date: "2026-09-03",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "Ask a Sales team what they actually want from an AI system and the honest answer is usually narrower than \"automate sales\" — it's \"stop the pipeline from going quiet between calls.\" That's the specific problem STIV Sales is built against, not lead scoring in the abstract.",
      },
      {
        type: "p",
        text: "The system reads your connected CRM and communication context, but it doesn't write to a prospect's inbox on its own judgment. Every step between a lead arriving and a message actually going out has a defined boundary, and it's worth walking through where those boundaries sit.",
      },
      {
        type: "h2",
        text: "Qualification happens before a rep ever sees the lead",
      },
      {
        type: "p",
        text: "When an inbound lead arrives, STIV Sales checks it against the qualification criteria your team has already set — company size, stated need, source, whatever your rules define as worth a rep's time. Leads that don't clear the bar aren't silently dropped; they're routed to whatever holding or nurture process you've defined, so a rep's queue only fills with leads that already match what you've told the system to prioritize.",
      },
      {
        type: "h2",
        text: "What gets drafted, and what doesn't",
      },
      {
        type: "p",
        text: "Between calls, the system prepares the next useful action on an open opportunity — a follow-up email, a check-in after a quiet stretch, a summary before a scheduled call. None of it assumes the relationship; all of it assumes a rep reads it first.",
      },
      {
        type: "ul",
        items: [
          "A deal that's gone quiet past a threshold you set gets flagged, with a drafted re-engagement message attached — not just a notification that something stalled.",
          "A follow-up after a call references what was actually discussed, pulled from connected notes or call records, not a generic template.",
          "Pipeline reporting reflects what's actually moving deals forward, not just call volume or email counts.",
          "Anything outside a rep's own active opportunities stays outside the system's scope — it isn't reassigning or touching another rep's pipeline.",
        ],
      },
      {
        type: "h2",
        text: "The gate that keeps a rep's name on every message",
      },
      {
        type: "p",
        text: "Every outbound email or proposal STIV Sales drafts routes through the same approval model covered in [[how-stivs-approval-gates-work|how STIV's approval gates work]] — a rep or manager signs off before a prospect sees anything. That's not a limitation bolted on for safety theater; it's the reason a prospect's experience of the relationship doesn't change. The message still comes from the person they've been talking to, written faster because the first draft didn't start from a blank page.",
      },
      {
        type: "p",
        text: "What STIV Sales is emphatically not built to do is replace the judgment calls that make someone good at sales — reading a prospect's hesitation, knowing when to push and when to wait, closing the deal in the room. It's built to make sure none of that judgment gets spent remembering to send a follow-up.",
      },
    ],
  },
  {
    slug: "inside-stiv-operations-what-counts-as-a-bottleneck",
    title: "Inside STIV Operations: what actually counts as a bottleneck",
    description:
      "STIV Operations doesn't guess at what's slow. Here's how it defines a bottleneck, what it does about one, and where a human still has to sign off.",
    date: "2026-09-09",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "\"Bottleneck\" is one of those words that sounds precise and usually isn't — ask five people on an operations team to point at the one thing slowing everything down and you'll often get five different answers, most of them anecdotal. STIV Operations is built to replace that guessing with something closer to a definition your team actually agreed on.",
      },
      {
        type: "p",
        text: "It doesn't arrive with an opinion about how your workflows should run. It starts by watching the ones you've connected against thresholds and expectations you set — and only then does it start flagging, and eventually acting.",
      },
      {
        type: "h2",
        text: "A bottleneck is a defined deviation, not a vibe",
      },
      {
        type: "p",
        text: "Before STIV Operations flags anything, your team defines what a normal cycle time, handoff delay, or exception rate looks like for a given workflow. A bottleneck, in this system, is a specific deviation from that baseline — a step taking measurably longer than its own history, not a general sense that \"things feel slow this week.\" That specificity is what makes the output actionable instead of another dashboard nobody checks.",
      },
      {
        type: "h2",
        text: "What it clears without asking, and what it doesn't",
      },
      {
        type: "ul",
        items: [
          "Busywork with a known, repeatable resolution — routing a stuck ticket, re-triggering a stalled step, chasing a missing field — gets cleared automatically once you've pre-approved that category of action.",
          "A process breakdown that doesn't match a known pattern gets flagged with the relevant context attached, not silently worked around.",
          "Any workflow change — a new routing rule, a changed threshold, a step removed or added — routes through an approval gate you define before it takes effect.",
          "A record of what changed and why is kept for every action, so a process that got faster is traceable back to the specific change that did it.",
        ],
      },
      {
        type: "h2",
        text: "Recommendations first, autonomy second",
      },
      {
        type: "p",
        text: "New workflows typically start in a recommendations-only mode: STIV Operations tells you what it would do and why, and a human decides whether to let it happen automatically going forward. That mirrors the same connect-learn-act-compound sequence covered in [[first-30-days-with-stiv|the first 30 days with STIV]] — trust in a given workflow gets earned by a track record, not granted upfront because the pitch sounded reasonable.",
      },
      {
        type: "p",
        text: "The honest limitation is that STIV Operations is only as good as the baseline your team defines. A workflow nobody has bothered to measure yet doesn't have a bottleneck STIV Operations can detect — it has an opportunity to define one, which is usually the more useful output of the first month anyway.",
      },
    ],
  },
  {
    slug: "inside-stiv-executive-one-briefing",
    title: "Inside STIV Executive: how one briefing replaces seven status meetings",
    description:
      "STIV Executive doesn't run a division — it synthesizes what the other six are already doing. Here's what actually goes into the briefing, and what stays out of it.",
    date: "2026-09-15",
    readTime: "4 min read",
    category: "Product",
    content: [
      {
        type: "p",
        text: "Executive is the one STIV system that doesn't own a workflow of its own. It doesn't qualify leads, reconcile accounts, or redline contracts — it reads what every other connected division is already doing and turns that into one briefing a leader can actually use.",
      },
      {
        type: "h2",
        text: "What goes into a briefing",
      },
      {
        type: "p",
        text: "STIV Executive pulls approved signals from every deployed division — decisions made, risks flagged, approvals still pending — and organizes them the way a chief of staff would prepare a leadership update, not the way a raw activity log would dump it. The point isn't more visibility into every division's day-to-day; it's the smallest set of items that actually need a leader's attention.",
      },
      {
        type: "ul",
        items: [
          "Decisions already made, with enough context to understand them without re-litigating.",
          "Risks and blockers surfaced before they turn into a surprise in a leadership meeting.",
          "Open sign-offs waiting specifically on you, distinguished from ones waiting on someone else.",
          "A running record of what was decided and why, so accountability doesn't depend on someone's memory of a meeting.",
        ],
      },
      {
        type: "h2",
        text: "Why briefings don't skip the approval gate",
      },
      {
        type: "p",
        text: "STIV Executive's output is informational by default — it doesn't act on a division's behalf. If a briefing surfaces something that needs follow-through, that action still routes through the relevant division's own approval gate, the same one described in [[how-stivs-approval-gates-work|how STIV's approval gates work]]. Executive gives you the operating picture; it deliberately doesn't collapse seven divisions' worth of authority into one system that can act on all of them.",
      },
      {
        type: "h2",
        text: "Who this replaces, and what it doesn't",
      },
      {
        type: "p",
        text: "The realistic comparison isn't to a chief of staff's judgment — it's to the standing status meeting that exists mostly to assemble information that already exists somewhere, just not in one place. STIV Executive is built for the company that's already running division-specific systems, as covered in [[why-one-assistant-cant-run-your-company|why one AI assistant can't run your whole company]], and wants the view across them without a meeting to produce it.",
      },
      {
        type: "p",
        text: "It's also, notably, not a substitute for actually deploying the divisions underneath it. A briefing synthesized from divisions you haven't connected yet has nothing to synthesize — Executive gets more useful as more of the company runs through STIV, not less necessary.",
      },
    ],
  },
  {
    slug: "a-general-counsels-case-for-stiv-legal",
    title: "A General Counsel's case for STIV Legal",
    description:
      "The pitch to a General Counsel isn't \"AI reviews your contracts.\" It's a specific set of answers about what the system can touch, and who's still accountable for it.",
    date: "2026-09-21",
    readTime: "4 min read",
    category: "Guide",
    content: [
      {
        type: "p",
        text: "A General Counsel evaluating STIV Legal isn't asking whether a model can summarize a contract — most can. The actual questions are about exposure: what is this system allowed to see, what can it commit the company to without a lawyer's sign-off, and where does the liability sit if it gets something wrong.",
      },
      {
        type: "h2",
        text: "It works from your playbook, not a generic sense of \"good contracts\"",
      },
      {
        type: "p",
        text: "STIV Legal reviews agreements against approved positions, fallback language, and escalation rules your team defines — the same mechanism covered in [[inside-stiv-legal-contract-review|our walkthrough of what happens between upload and redline]]. That's a deliberate design choice for a General Counsel's purposes: the system isn't applying its own sense of what a solid indemnification clause looks like, it's applying yours, which means its output is auditable against a standard your team actually wrote down.",
      },
      {
        type: "h2",
        text: "What never leaves the building without a lawyer",
      },
      {
        type: "ul",
        items: [
          "No redline goes to a counterparty and no document gets executed without an authorized reviewer's sign-off — the approval gate applies uniformly, not case by case.",
          "Agreement types outside the defined playbook aren't reviewed at all, rather than improvised against.",
          "Access is scoped to Legal's connected documents specifically — a Sales or Support system, if you run one, doesn't get standing visibility into contract terms.",
          "Every review, redline, and decision lands in a timestamped, reversible audit trail — the same one described in [[soc-2-data-residency-and-stivs-security-architecture|our security architecture piece]].",
        ],
      },
      {
        type: "h2",
        text: "The math a General Counsel actually cares about",
      },
      {
        type: "p",
        text: "Single Division pricing at $1,500/mo isn't weighed against a paralegal's judgment — it's weighed against the hours a lawyer currently spends reading routine terms in an NDA or MSA that were probably fine, before getting to the two or three clauses that actually needed their attention. The system doesn't change who's accountable for what gets signed; it changes how much of the routine reading happens before a lawyer's attention is spent.",
      },
      {
        type: "p",
        text: "The honest limitation is the same one that applies everywhere else on this site: a playbook nobody has finished writing yet isn't a playbook STIV Legal can review against. The upfront work of defining approved positions and escalation rules is real, and it's also the same work that would make any first-pass review consistent — STIV Legal just applies it uniformly, every time, without needing to be reminded.",
      },
    ],
  },
  {
    slug: "what-happens-when-a-stiv-agent-gets-it-wrong",
    title: "What happens when a STIV agent gets it wrong",
    description:
      "Not every mistake gets caught before it ships. Here's what STIV's reversibility guarantee actually means once something already went out the door.",
    date: "2026-09-27",
    readTime: "4 min read",
    category: "Security",
    content: [
      {
        type: "p",
        text: "Most of what's written about STIV's approval model describes the version where everything works: an agent drafts, a human reviews, a mistake gets caught before it ships. That's the common case, but it isn't the only one worth being honest about. Sometimes something ships and turns out to be wrong anyway — an approved report used a stale reconciliation, a redline missed a clause a playbook hadn't anticipated. What happens then is the more interesting question.",
      },
      {
        type: "h2",
        text: "Reversible means something specific, not just an adjective",
      },
      {
        type: "p",
        text: "Every action in STIV's audit trail is logged, timestamped, and reversible — described in general terms in [[soc-2-data-residency-and-stivs-security-architecture|our security architecture piece]]. In practice, \"reversible\" means the system retains what changed, what it was before, and who approved it, so correcting a mistake doesn't mean reconstructing what happened from memory or a scattered email thread. The correction itself becomes a new, equally logged entry — not a quiet edit to the original record.",
      },
      {
        type: "h2",
        text: "The difference between a caught mistake and a shipped one",
      },
      {
        type: "ul",
        items: [
          "A caught mistake — rejected or edited before it goes out — is covered by the approval gate itself, and the three outcomes described in [[what-a-rejected-approval-looks-like|what a rejected approval actually looks like]].",
          "A shipped mistake means a human already approved something that turned out to be wrong — the gate did its job of requiring sign-off, and the sign-off itself was the point where the error passed through.",
          "The fix in both cases routes through the same accountable review process — nobody quietly patches an output without the correction landing in the record.",
          "A pattern of shipped mistakes on the same clause, line item, or ticket type gets treated as a playbook gap to close, not an isolated incident to apologize for.",
        ],
      },
      {
        type: "h2",
        text: "Why this doesn't undermine the approval model",
      },
      {
        type: "p",
        text: "A system that never makes a mistake that reaches a human isn't a realistic claim, and STIV doesn't make it. The claim that matters is narrower: nothing an agent does is untraceable or unrecoverable, and a wrong output is a correctable, logged event rather than a silent failure discovered weeks later. That's a materially different guarantee than \"this won't happen,\" and it's the one that's actually verifiable.",
      },
      {
        type: "p",
        text: "If a vendor's answer to \"what happens when it's wrong\" is a claim that it won't be, that's worth more suspicion than a straight answer about how the correction gets made and recorded. The approval gate reduces how often something wrong ships; the audit trail is what makes it survivable on the occasions it still does.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
