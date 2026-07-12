import Reveal from "./Reveal";

const faqs = [
  {
    question: "What is STIV?",
    answer:
      "STIV is a software company, founded in 2026 and headquartered in Singapore, that designs exclusive, purpose-built software for every division of an enterprise — Executive, Sales, Marketing, Finance, Operations, Legal, and Support. Each division runs its own dedicated system rather than one generic assistant.",
  },
  {
    question: "What's the difference between STIV and STIV Unified?",
    answer:
      "STIV licenses software division by division, so a company invests only in the systems its teams actually run. STIV Unified combines all seven divisions into a single exclusive assistant, with a bespoke build on the customer's business, dedicated infrastructure, and a dedicated success manager.",
  },
  {
    question: "How much does STIV cost?",
    answer:
      "Single Division is $1,500/mo for one division of your choice with standard integrations and email support. Full Suite is $8,200/mo for all 7 divisions with unlimited workspaces, custom integrations, and priority support. STIV Unified is custom-priced and by application.",
  },
  {
    question: "How does STIV get implemented?",
    answer:
      "STIV connects to your existing stack — inbox, CRM, accounting, and docs — with no migration required. Its agents study your playbooks, past decisions, and tone. Every consequential action then routes through an approval gate you define, and autonomy widens over time as trust builds.",
  },
  {
    question: "Is STIV secure?",
    answer:
      "STIV is architected around SOC 2 control objectives from day one, with data residency options for regulated teams. Data is encrypted in transit and at rest, each agent's access is scoped to only what its role requires, and every agent decision is logged, timestamped, and reversible.",
  },
  {
    question: "Where is STIV based?",
    answer:
      "STIV is headquartered in Singapore and was founded in 2026.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Reveal variant="text">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col divide-y divide-white/10 border-t border-white/10">
          {faqs.map(({ question, answer }, i) => (
            <Reveal key={question} delay={i * 60}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:content-none">
                  {question}
                  <span
                    aria-hidden
                    className="shrink-0 text-xl text-accent-gold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
