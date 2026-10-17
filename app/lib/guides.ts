export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  /** Direct answer to the title question, written to be quotable on its own. */
  answer: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-an-ai-command-center",
    title: "What is an AI command center?",
    eyebrow: "GUIDE",
    description:
      "An AI command center is software that runs AI agents across a company's divisions from one place, with shared context, human approval, and one audit trail. Here's how it works.",
    answer:
      "An AI command center is software that coordinates AI agents across an organization from one place. It connects people, business systems, and agents; gives the agents shared context; routes consequential actions to a person for approval; and gives leadership a single view of what is happening across every division.",
    sections: [
      {
        heading: "Why the category exists",
        paragraphs: [
          "Most companies adopt AI one tool at a time: a chat assistant for writing, an automation tool for a few fixed flows, a support bot, a sales tool. Each works on its own, but none of them share context, permissions, or a record of what they did. Leadership ends up with more systems to check, not fewer.",
          "A command center treats AI as an operating layer for the whole business instead of a set of separate tools.",
        ],
      },
      {
        heading: "What an AI command center does",
        list: [
          "Runs AI agents for different divisions, such as finance, legal, sales, and support, from one place.",
          "Connects to the systems the business already uses, like email, CRM, accounting, and documents.",
          "Shares approved context between divisions, so agents don't work from partial information.",
          "Holds consequential actions until an authorized person approves them.",
          "Keeps one audit trail of recommendations, approvals, rejections, and changes.",
          "Gives leadership one briefing across every division, with the decisions waiting on them.",
        ],
      },
      {
        heading: "How it differs from an AI assistant or automation",
        paragraphs: [
          "An AI assistant answers when someone asks, and a person carries out the result. Workflow automation runs fixed steps when a trigger fires, usually with no judgment and no approval once live. A command center sits between them: agents prepare and propose work on their own schedule, people approve what matters, and everything is recorded.",
        ],
      },
      {
        heading: "Who needs one",
        paragraphs: [
          "A command center earns its place when several teams are using, or planning to use, AI agents, and the company needs consistent control over what those agents can do. A single team with one well-defined problem is usually better served by a focused tool.",
        ],
      },
      {
        heading: "Where STIV fits",
        paragraphs: [
          "STIV is an AI command center with agents for seven divisions: Executive, Sales, Marketing, Finance, Operations, Legal, and Support. Teams can start with one division and add others later, and every consequential action goes through an approval gate the company defines.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an AI command center the same as an AI agent platform?",
        answer:
          "They overlap. An agent platform is usually a toolkit for building agents. A command center is the operating layer that runs agents across divisions with shared context, approvals, and an audit trail.",
      },
      {
        question: "Does an AI command center replace existing software?",
        answer:
          "No. It connects to existing systems such as email, CRM, and accounting, and works around them rather than replacing them.",
      },
      {
        question: "Can AI agents in a command center act on their own?",
        answer:
          "Only within the limits the company sets. In STIV, consequential actions wait for an authorized person, and teams can widen pre-approved activity once results support it.",
      },
    ],
    related: [
      { href: "/compare", label: "How STIV compares" },
      { href: "/solutions/ai-chief-of-staff", label: "AI chief of staff" },
      { href: "/unified", label: "STIV Unified" },
    ],
  },
  {
    slug: "human-in-the-loop-ai",
    title: "What is human-in-the-loop AI?",
    eyebrow: "GUIDE",
    description:
      "Human-in-the-loop AI means a person reviews and approves an AI system's consequential actions before they happen. What it covers, where to draw the line, and how to keep it from slowing teams down.",
    answer:
      "Human-in-the-loop AI is a way of running AI systems where a person reviews, edits, or approves the system's consequential outputs before they take effect. The AI prepares the work; an accountable person decides what actually happens.",
    sections: [
      {
        heading: "Why it matters for business AI",
        paragraphs: [
          "AI agents can draft emails, adjust records, and change workflows. Most of that work is routine, but some of it reaches customers, money, or contracts, where a mistake is expensive and hard to undo. Human-in-the-loop keeps a person accountable for exactly those actions, without making them do the preparation by hand.",
        ],
      },
      {
        heading: "What should need approval",
        list: [
          "Anything sent outside the company: emails, proposals, posts, support replies.",
          "Changes to financial records: entries, adjustments, finalized reports.",
          "Legal outputs: redlines and anything sent for signature.",
          "Changes to how a workflow runs, or to who can access what.",
        ],
        paragraphs: [
          "Reading data, summarizing, and drafting for internal review usually don't need approval; they need good permissions. These usually do:",
        ],
      },
      {
        heading: "How to keep it fast",
        list: [
          "Approve, edit, or reject in one step, with the source context shown next to the draft.",
          "Route each approval to the role that owns it, not to one central bottleneck.",
          "Record every decision, so the team can see which kinds of action are consistently approved unchanged.",
          "Widen pre-approved activity for those actions once the record supports it, and keep reviewing exceptions.",
        ],
      },
      {
        heading: "Human-in-the-loop vs. human-on-the-loop",
        paragraphs: [
          "In human-in-the-loop, the action waits for a person. In human-on-the-loop, the system acts and a person monitors and can intervene afterwards. Many teams use both: in-the-loop for consequential actions, on-the-loop for routine ones that have earned trust.",
        ],
      },
      {
        heading: "How STIV applies it",
        paragraphs: [
          "In STIV, every consequential action routes through an approval gate the company defines, and every recommendation, approval, and change is logged. Agents start with narrow permissions and earn wider pre-approved activity over time.",
        ],
      },
    ],
    faqs: [
      {
        question: "Doesn't human approval cancel out the time AI saves?",
        answer:
          "No. Most of the time goes into preparing the work, which the AI does. Reviewing a prepared draft with its sources attached is much faster than producing it.",
      },
      {
        question: "Is human-in-the-loop required by regulation?",
        answer:
          "Requirements vary by country and industry. Human oversight is a common expectation for high-impact AI decisions, so check the rules that apply to your organization with your legal team.",
      },
      {
        question: "Who should approve AI actions?",
        answer:
          "The person who would be accountable if a human had done the work, such as the controller for finance entries or the account owner for a customer email.",
      },
    ],
    related: [
      {
        href: "/solutions/enterprise-ai-governance",
        label: "Enterprise AI governance",
      },
      { href: "/security", label: "Security & trust" },
      {
        href: "/blog/what-a-rejected-approval-looks-like",
        label: "What a rejected approval looks like",
      },
    ],
  },
  {
    slug: "ai-agents-for-business",
    title: "AI agents for business: what they can and can't do",
    eyebrow: "GUIDE",
    description:
      "A plain guide to AI agents for business: what an AI agent is, the work it handles well today, where it still needs people, and how to start safely.",
    answer:
      "An AI agent for business is software that can carry out multi-step work toward a goal, such as qualifying a lead, reconciling an account, or preparing a contract review, using the company's systems and data. Agents handle preparation and routine steps well; people still need to own judgment calls, relationships, and consequential decisions.",
    sections: [
      {
        heading: "What makes it an agent, not a chatbot",
        paragraphs: [
          "A chatbot answers a question. An agent works toward an outcome: it reads from connected systems, decides on next steps, prepares outputs, and can take actions within the permissions it has been given.",
        ],
      },
      {
        heading: "Work agents handle well",
        list: [
          "Collecting status from many sources into one briefing.",
          "Qualifying and routing inbound requests against clear criteria.",
          "Drafting follow-ups, replies, and reports for review.",
          "Comparing documents against a playbook and flagging deviations.",
          "Reconciling records and flagging variances.",
          "Watching workflows for delays and repeated manual steps.",
        ],
      },
      {
        heading: "Where people are still needed",
        list: [
          "Decisions with real financial, legal, or reputational consequences.",
          "Relationships and negotiations.",
          "Situations the company has no rules or precedent for.",
          "Setting the policies, playbooks, and limits agents follow.",
        ],
      },
      {
        heading: "How to start safely",
        list: [
          "Pick one workflow with clear rules and a measurable outcome.",
          "Give the agent read access first, then narrow write access.",
          "Require approval for anything external or financial.",
          "Review the audit trail before widening what the agent may do alone.",
        ],
      },
      {
        heading: "Where STIV fits",
        paragraphs: [
          "STIV provides AI agents for seven business divisions, run from one command center with approval gates and an audit trail. Companies can start with one division and expand when results support it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will AI agents replace employees?",
        answer:
          "In practice they take over preparation and routine steps, so people spend more time on decisions and relationships. Whether that changes headcount is a business decision, not something the software decides.",
      },
      {
        question: "What data do AI agents need?",
        answer:
          "Access to the systems involved in the workflow, scoped to what the role requires. Starting read-only limits risk while the team evaluates results.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "It depends on the workflow. Starting with one well-defined process makes results easier to measure early.",
      },
    ],
    related: [
      { href: "/solutions", label: "Solutions by division" },
      {
        href: "/blog/how-to-measure-whether-a-stiv-division-is-working",
        label: "How to measure whether a division is working",
      },
      { href: "/compare", label: "How STIV compares" },
    ],
  },
  {
    slug: "how-to-roll-out-ai-agents",
    title: "How to roll out AI agents in your company",
    eyebrow: "GUIDE",
    description:
      "A step-by-step plan for rolling out AI agents across a company: choosing the first workflow, setting permissions and approvals, measuring results, and expanding without losing control.",
    answer:
      "Roll out AI agents one workflow at a time: choose a high-value process with clear rules, connect only the systems it needs, require approval for consequential actions, measure results against a baseline, and widen the agent's scope only when the record shows it is reliable.",
    sections: [
      {
        heading: "1. Choose the first workflow",
        list: [
          "Repetitive enough that preparation takes real time.",
          "Clear enough rules that a reviewer can judge the output quickly.",
          "Measurable, with a baseline you can record before starting.",
          "Owned by one team that wants it to work.",
        ],
      },
      {
        heading: "2. Set permissions and approvals",
        paragraphs: [
          "Connect only the systems the workflow needs and scope access to the role. Decide in advance which actions need approval and who approves them. Anything external or financial should start with approval required.",
        ],
      },
      {
        heading: "3. Run it with review",
        paragraphs: [
          "For the first weeks, have the agent prepare and propose while people approve, edit, or reject. Every edit is information about where the playbook needs to be clearer.",
        ],
      },
      {
        heading: "4. Measure against the baseline",
        list: [
          "Time from request to completed work.",
          "Share of outputs approved without edits.",
          "Errors caught at review, and errors that got past it.",
          "Time the team spends reviewing compared with doing the work by hand.",
        ],
      },
      {
        heading: "5. Expand deliberately",
        paragraphs: [
          "Widen pre-approved activity for action types with a consistent record, then add the next workflow or division. Keep one approval model and one audit trail as you grow, so control doesn't fragment across tools.",
        ],
      },
      {
        heading: "Where STIV fits",
        paragraphs: [
          "STIV is built for this path: start with one division, approval gates and an audit trail from day one, and expand to more divisions, or STIV Unified, when the results support it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which department should start first?",
        answer:
          "The one with a repetitive, rules-based workflow and a team that wants it. Finance reconciliation, sales follow-up, and support triage are common starting points.",
      },
      {
        question: "How do we get employees to trust AI agents?",
        answer:
          "Keep people approving consequential actions, show the sources behind every draft, and widen autonomy only when the record supports it.",
      },
      {
        question: "Should we build our own agents or buy?",
        answer:
          "Building gives full control but requires ongoing engineering for permissions, approvals, and auditing. Buying makes sense when those controls are what you need most.",
      },
    ],
    related: [
      { href: "/contact", label: "What happens after you apply" },
      {
        href: "/blog/first-30-days-with-stiv",
        label: "The first 30 days with STIV",
      },
      { href: "/pricing", label: "Pricing" },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
