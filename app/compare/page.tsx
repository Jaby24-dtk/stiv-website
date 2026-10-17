import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { serializeJsonLd } from "../lib/json-ld";
import { SITE_URL } from "../lib/site";

const description =
  "How an AI command center compares with AI chat assistants, workflow automation tools, and single-department AI tools, and when each one is the right fit.";

export const metadata: Metadata = {
  title: "AI Command Center vs AI Assistants vs Workflow Automation",
  description,
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "AI Command Center vs AI Assistants vs Workflow Automation — STIV",
    description,
    url: "/compare",
  },
};

const approaches = [
  "AI chat assistant",
  "Workflow automation",
  "Department AI tools",
  "STIV command center",
];

const rows: { label: string; values: string[] }[] = [
  {
    label: "What it does",
    values: [
      "Answers questions and drafts content when someone asks.",
      "Runs fixed steps when a trigger fires.",
      "Automates one function, such as sales or support.",
      "Runs AI agents across every division from one command layer.",
    ],
  },
  {
    label: "Who starts the work",
    values: [
      "A person, one prompt at a time.",
      "A trigger you configured in advance.",
      "The tool, inside its own department.",
      "Agents on schedules and signals, or a person asking once.",
    ],
  },
  {
    label: "Business context",
    values: [
      "What is pasted into the conversation.",
      "The fields passed between steps.",
      "One department's data.",
      "Approved context from every connected division, with shared memory.",
    ],
  },
  {
    label: "Approval before action",
    values: [
      "Not applicable; a person copies the output.",
      "Usually none once the flow is live.",
      "Varies by vendor.",
      "Built in: consequential actions wait for an authorized person.",
    ],
  },
  {
    label: "Audit trail",
    values: [
      "Chat history.",
      "Run logs per flow.",
      "Separate in each tool.",
      "One record of recommendations, approvals, and changes.",
    ],
  },
  {
    label: "Leadership view",
    values: [
      "None.",
      "None.",
      "One dashboard per tool.",
      "One briefing across every division.",
    ],
  },
];

const fits = [
  {
    title: "Choose an AI chat assistant",
    body: "when individuals need help writing, researching, or answering questions, and nothing should happen in your systems without a person doing it.",
  },
  {
    title: "Choose workflow automation",
    body: "when a process is stable, rule-based, and low-risk, so the same fixed steps can run every time without judgment.",
  },
  {
    title: "Choose a department AI tool",
    body: "when one team has a single, well-defined problem and does not need to coordinate with the rest of the business.",
  },
  {
    title: "Choose an AI command center",
    body: "when several divisions need AI agents that share context, act only with approval, and report to leadership in one place.",
  },
];

const faqs = [
  {
    question: "What is an AI command center?",
    answer:
      "Software that coordinates AI agents across an organization's divisions from one place. It connects people, business systems, and agents, routes consequential actions through human approval, and gives leadership one view of what is happening.",
  },
  {
    question: "Does STIV replace our AI assistant or automation tools?",
    answer:
      "Not necessarily. Many teams keep a chat assistant for individual work and automation for simple fixed flows. STIV covers the work that needs cross-division context, approval, and accountability.",
  },
  {
    question: "Why not connect separate department tools instead?",
    answer:
      "You can, but each tool keeps its own data, permissions, and logs. A command center gives the divisions shared context, one approval model, and one audit trail.",
  },
  {
    question: "Do STIV agents act without approval?",
    answer:
      "Consequential actions are routed through an approval gate you define. Teams can widen pre-approved activity once the recorded results support it.",
  },
];

export default function ComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "How STIV compares",
            item: `${SITE_URL}/compare`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <PageHeader
        eyebrow="HOW STIV COMPARES"
        title="Assistant, automation, or command center?"
        description="Four ways companies bring AI into their operations, what each one is good at, and where an AI command center like STIV fits."
      />

      <section className="px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Side by side
          </h2>
          {/* Phones: one card per approach, STIV first */}
          <div className="mt-10 flex flex-col gap-5 md:hidden">
            {approaches
              .map((name, column) => ({ name, column }))
              .reverse()
              .map(({ name, column }) => (
                <div
                  key={name}
                  className="rounded-3xl border border-white/10 bg-panel/40 p-6"
                >
                  <h3
                    className={`text-lg font-semibold ${
                      column === approaches.length - 1 ? "text-accent-gold" : ""
                    }`}
                  >
                    {name}
                  </h3>
                  <dl className="mt-4 flex flex-col gap-3 text-sm">
                    {rows.map(({ label, values }) => (
                      <div key={label}>
                        <dt className="font-medium">{label}</dt>
                        <dd className="mt-0.5 leading-relaxed text-muted">
                          {values[column]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
          </div>
          <div className="mt-10 hidden overflow-x-auto rounded-3xl border border-white/10 bg-panel/40 md:block">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="p-5 font-medium text-muted">
                    <span className="sr-only">Criteria</span>
                  </th>
                  {approaches.map((name, index) => (
                    <th
                      key={name}
                      scope="col"
                      className={`p-5 font-semibold ${
                        index === approaches.length - 1 ? "text-accent-gold" : ""
                      }`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, values }) => (
                  <tr
                    key={label}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <th scope="row" className="p-5 align-top font-medium">
                      {label}
                    </th>
                    {values.map((value, index) => (
                      <td
                        key={index}
                        className={`p-5 align-top leading-relaxed ${
                          index === values.length - 1
                            ? "font-medium"
                            : "text-muted"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            General categories, not specific products. Individual products
            within each category vary.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Which one fits
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {fits.map(({ title, body }, index) => (
              <Reveal
                key={title}
                delay={index * 70}
                className="rounded-3xl border border-white/10 bg-panel/40 p-7"
              >
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Questions, answered
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="py-6">
                <h3 className="text-lg font-medium">{question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{answer}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See where STIV fits in your business.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              data-analytics-cta="compare_contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#f0efea] hover:bg-[#bfd9ef] px-6 py-3 text-sm font-medium text-[#101216] transition-transform hover:-translate-y-0.5"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
            >
              Explore solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
