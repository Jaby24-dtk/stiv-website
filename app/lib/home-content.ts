// Homepage content for the "Intelligence, orchestrated." design.
// Shared by the server-rendered markup (app/page.tsx) and the client-side
// interactions (app/components/home/HomeInteractions.tsx) so copy lives in
// one place and the first state of every interactive block is in the HTML.
//
// Command Center facts are grounded in the live STIV Command Center
// (command.iamstivai.com): its capability catalog, scheduled monitors,
// workspace modules, channels, and approval model.

export type Node = {
  name: string;
  trait: string;
  note: string;
};

// Platform constellation — the seven STIV divisions.
export const nodes: Node[] = [
  {
    name: "Executive AI",
    trait: "Perspective",
    note: "Executive AI pulls every division's activity into one briefing — decisions, risks and what needs your sign-off.",
  },
  {
    name: "Sales AI",
    trait: "Opportunity",
    note: "Sales AI qualifies inbound leads, drafts follow-ups and flags deals going quiet between calls.",
  },
  {
    name: "Marketing AI",
    trait: "Momentum",
    note: "Marketing AI plans campaigns, drafts on-brand copy and reports on what actually drives pipeline.",
  },
  {
    name: "Finance AI",
    trait: "Clarity",
    note: "Finance AI reconciles accounts, flags variance and keeps every number traceable to its source.",
  },
  {
    name: "Operations AI",
    trait: "Continuity",
    note: "Operations AI watches workflows for bottlenecks and clears busywork before it piles up.",
  },
  {
    name: "Legal AI",
    trait: "Confidence",
    note: "Legal AI reviews agreements against your playbook and redlines only what needs a human's eyes.",
  },
  {
    name: "Support AI",
    trait: "Resolution",
    note: "Support AI resolves the requests it can and hands off the rest with full context attached.",
  },
];

export type Role = {
  name: string;
  trait: string;
  description: string;
  tasks: string[];
  symbol: string;
  href: string;
};

// AI workforce — one tab per division, linking to its product page.
export const roles: Role[] = [
  {
    name: "Executive AI",
    trait: "Perspective",
    description:
      "Connects every division's activity into decisions, risks and the priorities that need your attention — without checking seven separate systems.",
    tasks: ["Daily and weekly briefings", "Risk and blocker flags", "Decision record"],
    symbol: "◎",
    href: "/software/executive",
  },
  {
    name: "Sales AI",
    trait: "Opportunity",
    description:
      "Qualifies inbound leads against your criteria and keeps the pipeline moving between calls. Every outbound message waits for approval.",
    tasks: ["Lead qualification", "Follow-up drafts", "Quiet-deal alerts"],
    symbol: "◈",
    href: "/software/sales",
  },
  {
    name: "Marketing AI",
    trait: "Momentum",
    description:
      "Plans campaigns against your calendar and goals, drafts copy in your voice and reports on what's actually driving pipeline.",
    tasks: ["Campaign planning", "On-brand copy", "Pipeline reporting"],
    symbol: "◒",
    href: "/software/marketing",
  },
  {
    name: "Finance AI",
    trait: "Clarity",
    description:
      "Reconciles accounts, flags variance before close and drafts the reports your controller usually stays late for.",
    tasks: ["Account reconciliation", "Variance analysis", "Financial reporting"],
    symbol: "⌁",
    href: "/software/finance",
  },
  {
    name: "Operations AI",
    trait: "Continuity",
    description:
      "Watches recurring workflows for delays and repeated manual steps, then prepares bounded process actions for review.",
    tasks: ["Workflow monitoring", "Bottleneck identification", "Change record"],
    symbol: "≋",
    href: "/software/operations",
  },
  {
    name: "Legal AI",
    trait: "Confidence",
    description:
      "Compares agreements with your approved playbook, explains material deviations and prepares focused redlines for human legal review.",
    tasks: ["Contract review", "Playbook comparison", "Focused redlines"],
    symbol: "◇",
    href: "/software/legal",
  },
  {
    name: "Support AI",
    trait: "Resolution",
    description:
      "Resolves bounded requests against your policies and prepares complete escalations when a person needs to take over.",
    tasks: ["Policy-based responses", "Ticket triage", "Context-rich handoffs"],
    symbol: "◌",
    href: "/software/support",
  },
];

export type Integration = { label: string; note: string };

export const integrationsLeft: Integration[] = [
  { label: "Email", note: "Gmail · Microsoft 365 · Zoho Mail" },
  { label: "Calendar", note: "Google Calendar · Outlook Calendar" },
  { label: "Messaging", note: "WhatsApp · Telegram · STIV Chat" },
  { label: "Meetings", note: "A STIV meeting assistant joins, records and summarises" },
];

export const integrationsRight: Integration[] = [
  { label: "Documents", note: "Google Drive · OneDrive · Notion" },
  { label: "CRM & pipeline", note: "Deals, contacts and relationship history" },
  { label: "Accounting", note: "Ledger, reporting and payroll systems" },
  { label: "Business systems", note: "Single sign-on into the systems you already run" },
];

// ── Command Center ────────────────────────────────────────────────────────

export type Outcome = {
  outcome: string;
  description: string;
  capabilities: { label: string; example: string }[];
};

// Mirrors the Command Center's "What can STIV do?" capability catalog.
export const outcomes: Outcome[] = [
  {
    outcome: "Understand",
    description: "Ask STIV to read, research and explain.",
    capabilities: [
      { label: "Analyze the business", example: "Review the pipeline and recommend the top priorities" },
      { label: "Research a topic", example: "Market and competitor developments in your region" },
      { label: "Compare options", example: "Your offer and pricing against the top three competitors" },
      { label: "Plan business travel", example: "Flights, hotels and a working itinerary" },
      { label: "Summarize", example: "Your latest important meeting or email thread" },
    ],
  },
  {
    outcome: "Decide",
    description: "Ask STIV to model, weigh and recommend.",
    capabilities: [
      { label: "Forecast", example: "Near-term performance and growth opportunities" },
      { label: "Run a scenario", example: "The impact of a 10% pricing change, assumptions stated" },
      { label: "Evaluate risk", example: "Operational, financial, legal and market risk — evidence kept separate from assumption" },
      { label: "Get a recommendation", example: "What to prioritize this week, and why" },
    ],
  },
  {
    outcome: "Create",
    description: "Ask STIV to draft — ready to review and send.",
    capabilities: [
      { label: "Reports", example: "Management reports, exported to PDF or Word" },
      { label: "Presentations", example: "A leadership briefing for the next meeting" },
      { label: "Communications", example: "LinkedIn posts and stakeholder emails in your voice" },
      { label: "Board materials", example: "Monthly stakeholder updates from verified information" },
    ],
  },
  {
    outcome: "Execute",
    description: "Ask STIV to act — every send or post still waits for your approval.",
    capabilities: [
      { label: "Send", example: "Team updates over email, WhatsApp or Telegram" },
      { label: "Schedule", example: "Follow-ups and meetings with the right contact" },
      { label: "Prepare reservations", example: "Restaurants and venues, compared and ready to confirm" },
      { label: "Assign", example: "Commitments with an owner and a due date" },
      { label: "Follow up", example: "Find stuck tasks and what's blocking them" },
    ],
  },
  {
    outcome: "Monitor",
    description: "Ask STIV what it's already watching.",
    capabilities: [
      { label: "Business performance", example: "What changed this week, with unverified items marked" },
      { label: "Risks", example: "Verified operational risks — no guessed root causes" },
      { label: "Commitments", example: "Open commitments and what's overdue" },
      { label: "External developments", example: "Sourced intelligence scans with confidence labels" },
    ],
  },
];

// Scheduled monitors the Command Center runs on your behalf.
export const monitors: { what: string; detail: string; cadence: string }[] = [
  { what: "Urgent email triage", detail: "Flags messages that need you now and notifies you", cadence: "Every 10 min" },
  { what: "File organization", detail: "Sorts and renames new files in Google Drive and OneDrive — with undo", cadence: "Every 15 min" },
  { what: "Cross-division signals", detail: "Connects activity in one division to what it means for another", cadence: "Every 20 min" },
  { what: "Operational risk", detail: "Watches connected systems for verified operational risk", cadence: "Every 20 min" },
  { what: "Meeting intelligence", detail: "Collects transcripts, writes summaries and drafts attendee follow-ups", cadence: "Every 30 min" },
  { what: "LinkedIn engagement", detail: "Tracks responses to your posts and surfaces what needs a reply", cadence: "Every 30 min" },
  { what: "Executive briefing", detail: "Keeps your briefing current with what changed since you last looked", cadence: "Hourly" },
  { what: "External intelligence", detail: "Scans for market, competitor and regulatory developments, with sources", cadence: "Weekly" },
  { what: "Memory consolidation", detail: "Distils the week's conversations into lasting organizational memory", cadence: "Weekly" },
];

// Workspace modules in the Command Center sidebar.
export const modules: { group: string; items: { name: string; detail: string }[] }[] = [
  {
    group: "Command",
    items: [
      { name: "Dashboard", detail: "Executive briefing, intelligence cards and what changed while you were away" },
      { name: "Divisions", detail: "Dispatch work to each specialist and watch it progress" },
      { name: "Tasks", detail: "Every request, its owner, status and output" },
      { name: "Projects", detail: "Group related work and track it to completion" },
      { name: "Pipeline", detail: "Deals and opportunities, stage by stage" },
      { name: "Approvals", detail: "Review, edit, approve or return what STIV has prepared" },
    ],
  },
  {
    group: "Communication",
    items: [
      { name: "Messages", detail: "WhatsApp and Telegram conversations in one inbox" },
      { name: "STIV Chat", detail: "Private team messaging with read receipts and push notifications" },
      { name: "Calendar", detail: "Every connected calendar, with meeting capture" },
      { name: "Contacts", detail: "People and companies, with relationship context" },
    ],
  },
  {
    group: "Insight",
    items: [
      { name: "Insights", detail: "Patterns and signals across divisions" },
      { name: "Statistics", detail: "Activity and throughput at a glance" },
      { name: "Reports", detail: "Branded reports exported to PDF and Word" },
    ],
  },
  {
    group: "Systems",
    items: [
      { name: "Integrations", detail: "Connect email, calendars, files and channels" },
      { name: "Systems", detail: "Single sign-on into your connected business systems" },
      { name: "Files", detail: "Auto-organized Google Drive and OneDrive" },
      { name: "Resources & Brand Assets", detail: "The documents, logos and guidelines STIV works from" },
    ],
  },
];

export const connectedSystems = [
  "Accounting",
  "Payroll & HR",
  "Inventory",
  "Tender management",
  "Corporate secretarial",
  "KYC & due diligence",
  "Secure NDA data room",
  "Legal",
];

export const channels = [
  "Gmail",
  "Microsoft 365",
  "Zoho Mail",
  "Google Calendar",
  "Outlook Calendar",
  "Google Drive",
  "OneDrive",
  "Notion",
  "WhatsApp",
  "Telegram",
  "LinkedIn",
  "Video meetings",
];

// ── FAQ (also emitted as FAQPage structured data) ────────────────────────

export const faqs = [
  {
    question: "What is STIV?",
    answer:
      "STIV is a software company, founded in 2026 and headquartered in Singapore, that builds an AI command center for the whole organization. It connects purpose-built AI for seven divisions — Executive, Sales, Marketing, Finance, Operations, Legal and Support — to your people, knowledge and systems, with human approval on every consequential action.",
  },
  {
    question: "What does the STIV Command Center do?",
    answer:
      "The Command Center is where you work with STIV. You ask in plain language and STIV understands, decides, creates, executes and monitors across your divisions. It keeps an executive briefing current, triages urgent email, joins and summarises meetings, organizes your files, tracks commitments, scans for external developments and keeps an organizational memory — and every send, post or external action waits for your approval.",
  },
  {
    question: "What's the difference between STIV and STIV Unified?",
    answer:
      "STIV licenses software division by division, so a company invests only in the systems its teams actually run. STIV Unified combines all seven divisions into a single exclusive command layer, with a bespoke build on the customer's business, dedicated infrastructure and a dedicated success manager.",
  },
  {
    question: "How much does STIV cost?",
    answer:
      "Single Division is $1,500/mo for one division of your choice with standard integrations and email support. Full Suite is $8,200/mo for all 7 divisions with unlimited workspaces, custom integrations and priority support. STIV Unified is custom-priced and by application.",
  },
  {
    question: "How does STIV get implemented?",
    answer:
      "STIV connects to your existing stack — email, calendars, files, messaging, CRM and accounting — with no migration required. It learns your playbooks, past decisions and tone. Every consequential action routes through an approval gate you define, and autonomy widens over time as trust builds.",
  },
  {
    question: "Is STIV secure?",
    answer:
      "STIV is architected around SOC 2 control objectives from day one, with data residency options for regulated teams. Data is encrypted in transit and at rest, each agent's access is scoped to only what its role requires, and every decision is logged, timestamped and reversible.",
  },
  {
    question: "Where is STIV based?",
    answer: "STIV is headquartered in Singapore and was founded in 2026.",
  },
];
