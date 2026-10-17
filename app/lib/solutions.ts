export type Solution = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  audience: string;
  problem: string;
  outcomes: string[];
  workflow: { title: string; description: string }[];
  safeguards: string[];
  divisionSlug: string;
  divisionName: string;
  faqs: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-finance-automation",
    title: "AI finance automation with a human approval gate",
    eyebrow: "FINANCE AUTOMATION",
    description:
      "Use STIV Finance to reconcile accounts, flag variance, draft reports, and keep every number traceable—while your finance team retains approval authority.",
    audience:
      "Finance leaders, controllers, and operations teams that need to reduce repetitive close and reporting work without surrendering financial control.",
    problem:
      "Finance automation often creates a false choice between manual control and opaque autonomy. STIV Finance is designed around a third model: software prepares, reconciles, flags, and drafts; authorized people approve consequential entries and reports.",
    outcomes: [
      "Reconcile connected account data and surface items that require review.",
      "Flag variance and anomalies against the patterns your team defines.",
      "Draft management reports with figures traceable to their sources.",
      "Create an audit trail for recommendations, approvals, and changes.",
    ],
    workflow: [
      {
        title: "Connect approved sources",
        description:
          "Connect the accounting, document, and communication systems your finance workflow already uses—without replacing the underlying system of record.",
      },
      {
        title: "Configure the finance playbook",
        description:
          "Define reporting conventions, review thresholds, approval roles, and the exceptions that should always reach a person.",
      },
      {
        title: "Review prepared work",
        description:
          "STIV prepares reconciliations, variance notes, and report drafts; authorized reviewers accept, revise, or reject the proposed work.",
      },
      {
        title: "Expand only after verification",
        description:
          "Teams can widen pre-approved activity after the audit trail demonstrates consistent performance against their rules.",
      },
    ],
    safeguards: [
      "Role-scoped access to connected finance data",
      "Human approval for entries, adjustments, and finalized reports",
      "Logged and timestamped recommendations and decisions",
      "Encryption in transit and at rest",
    ],
    divisionSlug: "finance",
    divisionName: "Finance",
    faqs: [
      {
        question: "Does STIV replace our accounting platform?",
        answer:
          "No. STIV is designed to connect to the systems your team already uses and operate around those systems rather than requiring a wholesale migration.",
      },
      {
        question: "Can STIV post entries without approval?",
        answer:
          "Your organization defines the approval gates. STIV's published model routes consequential entries, adjustments, and finalized reports through authorized human review.",
      },
      {
        question: "How is finance activity audited?",
        answer:
          "Recommendations, approvals, rejections, and changes are designed to be logged and timestamped so teams can trace what happened and why.",
      },
    ],
  },
  {
    slug: "ai-contract-review",
    title: "AI contract review against your legal playbook",
    eyebrow: "LEGAL OPERATIONS",
    description:
      "Use STIV Legal to compare contracts with your playbook, identify non-standard clauses, and prepare focused redlines for human legal review.",
    audience:
      "Legal and commercial teams that need a faster first pass on routine agreements while keeping lawyers responsible for judgment and execution.",
    problem:
      "Generic document summaries do not understand which deviations matter to a specific organization. STIV Legal is configured around the customer's playbook so it can focus attention on clauses that depart from approved positions.",
    outcomes: [
      "Compare incoming agreements against approved contract positions.",
      "Flag clauses that deviate from standard terms.",
      "Prepare targeted redlines for legal review.",
      "Preserve a traceable record of reviews and decisions.",
    ],
    workflow: [
      {
        title: "Define the playbook",
        description:
          "Provide approved positions, fallback language, escalation rules, and the agreement types the system is permitted to review.",
      },
      {
        title: "Review the agreement",
        description:
          "STIV identifies deviations and prepares a focused review instead of treating every clause as equally important.",
      },
      {
        title: "Route exceptions",
        description:
          "Material deviations and ambiguous language are escalated to the designated legal reviewer with the relevant context attached.",
      },
      {
        title: "Approve before sending",
        description:
          "Redlines and executable documents remain subject to the approval gates your legal team defines.",
      },
    ],
    safeguards: [
      "Access scoped to the relevant legal workspace",
      "Human approval before redlines or documents are sent",
      "Logged review history and decision trail",
      "Customer-defined playbooks and escalation thresholds",
    ],
    divisionSlug: "legal",
    divisionName: "Legal",
    faqs: [
      {
        question: "Is STIV a replacement for legal counsel?",
        answer:
          "No. STIV supports legal workflows by preparing playbook-based reviews and highlighting exceptions. Legal judgment and final approval remain with authorized people.",
      },
      {
        question: "Can we use our own contract positions?",
        answer:
          "Yes. The intended workflow is configured around the customer's approved playbook, fallback language, and escalation rules.",
      },
      {
        question: "Does STIV execute contracts?",
        answer:
          "Execution and external delivery remain subject to the approval gates defined by your organization.",
      },
    ],
  },
  {
    slug: "ai-sales-follow-up",
    title: "AI sales follow-up that keeps humans in control",
    eyebrow: "SALES AUTOMATION",
    description:
      "Use STIV Sales to qualify inbound leads, prepare follow-ups, identify quiet opportunities, and support pipeline movement between calls.",
    audience:
      "Revenue teams that want consistent pipeline follow-through without allowing unsupervised messages or proposals to reach prospects.",
    problem:
      "Sales teams lose opportunities when qualification, follow-up, and CRM context depend on repetitive manual work. STIV Sales prepares the next action from connected context while keeping outbound communication behind an approval gate.",
    outcomes: [
      "Qualify inbound leads against criteria defined by your team.",
      "Draft contextual follow-ups between calls.",
      "Flag opportunities that have gone quiet.",
      "Report on activity associated with pipeline movement.",
    ],
    workflow: [
      {
        title: "Connect sales context",
        description:
          "Connect the approved CRM, inbox, documents, and other sources that contain the history needed for a useful follow-up.",
      },
      {
        title: "Define qualification rules",
        description:
          "Configure fit criteria, routing logic, tone, and the circumstances that require a salesperson's direct attention.",
      },
      {
        title: "Prepare the next action",
        description:
          "STIV drafts follow-ups and identifies stalled opportunities with the supporting account context attached.",
      },
      {
        title: "Approve external messages",
        description:
          "Outbound emails and proposals are routed through the approval workflow defined by the customer.",
      },
    ],
    safeguards: [
      "Human approval for outbound emails and proposals",
      "Customer-defined qualification and routing criteria",
      "Role-scoped access to connected sales systems",
      "Traceable activity and approval history",
    ],
    divisionSlug: "sales",
    divisionName: "Sales",
    faqs: [
      {
        question: "Does STIV replace our CRM?",
        answer:
          "No. STIV is designed to use context from approved existing systems rather than requiring a CRM replacement.",
      },
      {
        question: "Will messages be sent automatically?",
        answer:
          "The customer controls approval policy. STIV's published sales model routes outbound emails and proposals through the approval gate the organization defines.",
      },
      {
        question: "Can STIV follow our brand voice?",
        answer:
          "The implementation process includes configuring the system around the customer's playbooks, prior decisions, and tone.",
      },
    ],
  },
  {
    slug: "enterprise-ai-governance",
    title: "Enterprise AI governance built around approval and audit",
    eyebrow: "AI GOVERNANCE",
    description:
      "Deploy division-specific AI agents with role-scoped access, human approval gates, traceable decisions, and a controlled path to greater autonomy.",
    audience:
      "Executives, security leaders, legal teams, and operations owners evaluating how AI agents can act inside the business without bypassing accountability.",
    problem:
      "The governance question is not only whether an AI output is accurate. It is who can access which systems, what actions require authorization, how decisions are recorded, and how mistakes can be reversed.",
    outcomes: [
      "Scope each agent to the systems and data required for its role.",
      "Define which actions always require human approval.",
      "Maintain a traceable record of recommendations and decisions.",
      "Increase permitted autonomy only after verified performance.",
    ],
    workflow: [
      {
        title: "Assign a division and role",
        description:
          "Start with a bounded operational purpose instead of giving one general assistant unrestricted access across the company.",
      },
      {
        title: "Scope connections and permissions",
        description:
          "Connect only the systems required for that role and define who may review or approve consequential actions.",
      },
      {
        title: "Establish approval gates",
        description:
          "Specify the emails, documents, financial actions, workflow changes, or other events that cannot proceed without authorization.",
      },
      {
        title: "Review the audit trail",
        description:
          "Use logged outcomes to evaluate performance before changing the boundaries of what the system may do.",
      },
    ],
    safeguards: [
      "Division-specific and role-scoped access",
      "Customer-defined human approval gates",
      "Logged, timestamped, and reversible decisions",
      "Architecture designed around SOC 2 control objectives",
    ],
    divisionSlug: "executive",
    divisionName: "Executive",
    faqs: [
      {
        question: "Is STIV SOC 2 certified?",
        answer:
          "STIV states that its architecture is designed around SOC 2 control objectives. Customers should request the current formal certification and audit status directly from STIV.",
      },
      {
        question: "Can different divisions have different permissions?",
        answer:
          "Yes. The division-first model is designed so access can be scoped to the role and connected systems required for each deployment.",
      },
      {
        question: "How does an agent earn more autonomy?",
        answer:
          "The intended model starts with review and approval. Teams can widen pre-approved activity after the recorded results support that decision.",
      },
    ],
  },
  {
    slug: "ai-chief-of-staff",
    title: "An AI chief of staff for leadership teams",
    eyebrow: "EXECUTIVE BRIEFING",
    description:
      "Use STIV Executive as an AI chief of staff: one briefing across every division, with the decisions, risks, and approvals that need leadership attention.",
    audience:
      "Founders, CEOs, chiefs of staff, and leadership teams who currently assemble the operating picture by hand from departmental updates, chat threads, and meetings.",
    problem:
      "Leaders spend hours collecting status from separate teams and systems, and still miss the item that needed a decision. An AI assistant that only answers questions does not fix this. STIV Executive pulls approved signals from every deployed division into one briefing, so leadership reviews the operating picture instead of building it.",
    outcomes: [
      "Prepare a daily or weekly briefing from every connected division.",
      "Surface risks and blockers before they reach a leadership meeting.",
      "List exactly which decisions and approvals are waiting on leadership.",
      "Keep a record of what was decided, by whom, and why.",
    ],
    workflow: [
      {
        title: "Connect the divisions you run",
        description:
          "Start with the divisions already deployed. The briefing covers what is connected and grows as more divisions come online.",
      },
      {
        title: "Set what leadership should see",
        description:
          "Define the thresholds, risks, and approval types that should reach leadership, and what each team should handle on its own.",
      },
      {
        title: "Review one briefing",
        description:
          "Leaders read a concise operating view with the source context behind every item, then approve, delegate, or ask for more detail.",
      },
      {
        title: "Track follow-through",
        description:
          "Decisions are recorded and routed back to the owning division, so leadership can see what happened after they signed off.",
      },
    ],
    safeguards: [
      "Briefings are informational by default",
      "Follow-up actions route through the owning division's approval gate",
      "Source context preserved for every briefing item",
      "Logged and timestamped decisions",
    ],
    divisionSlug: "executive",
    divisionName: "Executive",
    faqs: [
      {
        question: "What is an AI chief of staff?",
        answer:
          "Software that does the coordination work a chief of staff does: gathering status from every team, highlighting risks, and making sure leadership decisions are made and followed through. In STIV this is the Executive division, working across the other divisions you deploy.",
      },
      {
        question: "Does STIV Executive act on its own?",
        answer:
          "No. Briefings and risk flags are informational by default. Any action that needs follow-through goes through the relevant division's own approval gate.",
      },
      {
        question: "Do we need all seven divisions?",
        answer:
          "No. The briefing covers the divisions you have connected. Many teams start with one or two divisions and add more later.",
      },
    ],
  },
  {
    slug: "ai-marketing-operations",
    title: "AI marketing operations that stay on brand",
    eyebrow: "MARKETING OPERATIONS",
    description:
      "Use STIV Marketing to plan campaigns, draft on-brand copy, and report on what drives pipeline, with every asset approved before it goes live.",
    audience:
      "Marketing leaders and lean marketing teams responsible for campaign planning, content production, brand consistency, and pipeline reporting across several channels.",
    problem:
      "Generic AI writing tools produce volume but not consistency: every draft needs re-briefing on voice, positioning, and what was already approved. STIV Marketing works from your approved positioning and brand guidance, prepares coordinated campaign assets, and keeps a record of what the brand has signed off.",
    outcomes: [
      "Plan campaigns against your calendar and goals.",
      "Draft copy in your brand voice, ready for review.",
      "Report on what is driving pipeline rather than vanity metrics.",
      "Keep messaging consistent across channels.",
    ],
    workflow: [
      {
        title: "Load your brand and positioning",
        description:
          "Share approved messaging, voice guidance, and examples of work the brand already stands behind.",
      },
      {
        title: "Plan the campaign",
        description:
          "STIV proposes a campaign plan against your calendar, audiences, and goals for your team to adjust.",
      },
      {
        title: "Review every asset",
        description:
          "Copy and campaign assets arrive as drafts. Reviewers edit, approve, or reject each one before publication.",
      },
      {
        title: "Report on pipeline",
        description:
          "Performance summaries focus on what moved pipeline, and approved work becomes reference material for the next campaign.",
      },
    ],
    safeguards: [
      "Nothing publishes without approval",
      "Brand guidance applied to every draft",
      "Record of approved and rejected work",
      "Role-scoped access to connected channels",
    ],
    divisionSlug: "marketing",
    divisionName: "Marketing",
    faqs: [
      {
        question: "Will STIV post to our channels automatically?",
        answer:
          "Only if you allow it. Every piece of copy or campaign routes through an approval gate you define before it goes live.",
      },
      {
        question: "How does STIV learn our brand voice?",
        answer:
          "From the positioning, guidance, and approved examples you provide, and from the edits and approvals your reviewers make over time.",
      },
      {
        question: "Does it replace our marketing tools?",
        answer:
          "No. STIV is designed to work alongside the channels and tools your team already uses.",
      },
    ],
  },
  {
    slug: "ai-operations-automation",
    title: "AI operations automation without losing control",
    eyebrow: "OPERATIONS AUTOMATION",
    description:
      "Use STIV Operations to find workflow bottlenecks, clear repetitive busywork, and flag process breakdowns, with every workflow change approved first.",
    audience:
      "Operations leaders and process owners coordinating recurring workflows, handoffs, service levels, and exceptions across teams and business systems.",
    problem:
      "Rule-based automation breaks when a process changes, and fully autonomous agents are hard to trust with real operations. STIV Operations watches approved workflow signals, identifies delays and repeated manual steps, and prepares bounded actions for review, so automation grows only as fast as the results justify.",
    outcomes: [
      "Spot bottlenecks and delayed handoffs as they form.",
      "Clear repetitive manual steps before they pile up.",
      "Flag process breakdowns before they cascade to other teams.",
      "Record what changed in each workflow and why.",
    ],
    workflow: [
      {
        title: "Connect workflow signals",
        description:
          "Connect the systems where work is tracked so STIV can see queues, handoffs, and delays.",
      },
      {
        title: "Start with recommendations",
        description:
          "STIV begins by recommending actions only. Your team decides which ones to carry out.",
      },
      {
        title: "Approve bounded actions",
        description:
          "Repeated, low-risk steps can be prepared as actions for approval, with clear limits on what each action may change.",
      },
      {
        title: "Widen pre-approved activity",
        description:
          "Once the audit trail shows a workflow is reliable, teams can pre-approve it and keep reviewing exceptions.",
      },
    ],
    safeguards: [
      "Workflow changes approved before they take effect",
      "Recommendation-only mode to start",
      "Limits on what each action may change",
      "Logged and timestamped changes",
    ],
    divisionSlug: "operations",
    divisionName: "Operations",
    faqs: [
      {
        question: "How is this different from workflow automation tools?",
        answer:
          "Workflow tools run the steps you script. STIV Operations watches how work actually flows, suggests where to automate, and keeps a person approving changes until the results earn more autonomy.",
      },
      {
        question: "Can we start without any automation?",
        answer:
          "Yes. Teams can run STIV Operations in recommendation-only mode and add approved actions later.",
      },
      {
        question: "What happens when a process changes?",
        answer:
          "Because STIV watches the workflow rather than a fixed script, changes show up as new patterns to review instead of silent failures.",
      },
    ],
  },
  {
    slug: "ai-customer-support",
    title: "AI customer support with complete human handoffs",
    eyebrow: "CUSTOMER SUPPORT",
    description:
      "Use STIV Support to resolve routine tickets under your policies and hand off the rest with full context attached, so customers never repeat themselves.",
    audience:
      "Support leaders and service teams who need consistent responses, faster triage, and complete handoffs during normal operations and sudden volume spikes.",
    problem:
      "Support bots that guess frustrate customers, and handoffs that lose context make agents start over. STIV Support resolves only the requests your policies cover, and when a person needs to step in, the issue, history, attempted fix, and evidence arrive together.",
    outcomes: [
      "Resolve routine tickets that your policies fully cover.",
      "Hand off the rest with the full context attached.",
      "Spot patterns across tickets that signal a bigger issue.",
      "Keep response times steady during volume spikes.",
    ],
    workflow: [
      {
        title: "Define support policies",
        description:
          "Set which requests STIV may resolve, which need review, and which always go straight to a person.",
      },
      {
        title: "Connect customer context",
        description:
          "Connect the help desk and customer records your team uses, so responses are grounded in real account history.",
      },
      {
        title: "Review drafted responses",
        description:
          "Responses outside fully covered policies arrive as drafts for an agent to approve, edit, or take over.",
      },
      {
        title: "Act on patterns",
        description:
          "Recurring issues are surfaced to the team that can fix the cause, not just the ticket.",
      },
    ],
    safeguards: [
      "Policy-bounded automatic resolution",
      "Human approval for everything outside policy",
      "Full context on every handoff",
      "Logged responses and decisions",
    ],
    divisionSlug: "support",
    divisionName: "Support",
    faqs: [
      {
        question: "Which tickets does STIV resolve on its own?",
        answer:
          "Only the ones your policies fully cover. Everything else is drafted for an agent or handed off directly.",
      },
      {
        question: "What does an agent see on handoff?",
        answer:
          "The customer's issue, conversation history, what was already tried, and the relevant account evidence, so the customer does not have to repeat the story.",
      },
      {
        question: "Does STIV replace our help desk?",
        answer:
          "No. It is designed to work with the help desk your team already uses.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

