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
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

