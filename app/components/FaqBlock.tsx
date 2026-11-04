import { serializeJsonLd } from "../lib/json-ld";

export type Faq = { question: string; answer: string };

/**
 * Collapsed-by-default FAQ list with FAQPage JSON-LD, so the page stays compact
 * while AI assistants and search engines can read every answer.
 */
export default function FaqBlock({ faqs, title = "Questions, answered" }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <div className="mt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {faqs.map(({ question, answer }) => (
          <details key={question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium">
              {question}
              <span
                aria-hidden
                className="mt-0.5 text-accent-gold transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
