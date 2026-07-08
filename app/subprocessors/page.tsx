import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { LegalBody } from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Subprocessors — STIV",
  description: "Third parties STIV engages to help deliver the Service.",
};

const subprocessors = [
  {
    name: "Vercel Inc.",
    purpose: "Application hosting and content delivery",
    location: "United States",
  },
  {
    name: "Supabase Inc.",
    purpose: "Database and data storage",
    location: "United States",
  },
  {
    name: "Anthropic, PBC",
    purpose: "AI systems within each division's software",
    location: "United States",
  },
  {
    name: "Zoho Corporation",
    purpose: "Transactional and business email delivery",
    location: "India",
  },
  {
    name: "Google LLC (Google Analytics)",
    purpose: "Website analytics",
    location: "United States",
  },
];

export default function SubprocessorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Subprocessors"
        description="Last updated July 8, 2026"
      />

      <LegalBody>
        <p className="text-sm leading-relaxed text-muted">
          STIV engages certain third-party subprocessors to help deliver the
          Service. Each subprocessor is bound by contractual confidentiality
          and data protection obligations consistent with our{" "}
          <Link href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </Link>
          . This list reflects our infrastructure subprocessors as of the
          date above; a complete, current list is available on request to
          enterprise customers under contract.
        </p>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-panel/60 text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3 font-medium">Subprocessor</th>
                <th className="px-5 py-3 font-medium">Purpose</th>
                <th className="px-5 py-3 font-medium">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {subprocessors.map((row) => (
                <tr key={row.name}>
                  <td className="px-5 py-4 font-medium text-foreground/90">
                    {row.name}
                  </td>
                  <td className="px-5 py-4 text-muted">{row.purpose}</td>
                  <td className="px-5 py-4 text-muted">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          This list will be updated as we add or change subprocessors. To
          request the current full list or be notified of changes, contact
          {" "}
          <a
            href="mailto:privacy@iamstivai.com"
            className="underline hover:text-foreground"
          >
            privacy@iamstivai.com
          </a>
          .
        </p>
      </LegalBody>
    </>
  );
}
