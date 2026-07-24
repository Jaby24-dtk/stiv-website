import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { LegalBody, LegalSection } from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How STIV collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — STIV",
    description: "How STIV collects, uses, and protects your information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="Last updated July 23, 2026"
      />

      <LegalBody>
        <LegalSection title="1. Overview">
          <p>
            This Privacy Policy explains how{" "}
            <span className="text-foreground/90">
              STIV Pte. Ltd. (Singapore UEN 202630466E), registered at 50
              Raffles Place #30-00, Singapore Land Towers, Singapore 048623
            </span>{" "}
            (&quot;STIV,&quot; &quot;we,&quot; &quot;us&quot;) collects, uses,
            discloses, and protects information in connection with our
            website and software (the &quot;Service&quot;), in accordance
            with Singapore&apos;s Personal Data Protection Act 2012, as
            amended (the &quot;PDPA&quot;). By using the Service, you agree
            to the practices described here.
          </p>
        </LegalSection>

        <LegalSection title="2. Controller & Processor Roles">
          <p>
            For account, billing, and website usage data, STIV acts as the
            data controller. For Customer Data you submit to a
            division&apos;s software or STIV Unified (e.g. documents,
            records, and communications processed through your
            organization&apos;s integrations), STIV acts as a data processor
            on your organization&apos;s behalf as controller. Enterprise
            customers may request a Data Processing Agreement (DPA) governing
            this relationship by contacting us below.
          </p>
        </LegalSection>

        <LegalSection title="3. Information We Collect">
          <p>We collect information in the following ways:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground/90">
                Information you provide
              </strong>{" "}
              — account details, billing information, and content you submit
              when using a division&apos;s software (e.g. documents, messages,
              records connected through integrations you authorize).
            </li>
            <li>
              <strong className="text-foreground/90">
                Information collected automatically
              </strong>{" "}
              — usage data, device and browser information, and log data
              generated as you interact with the Service.
            </li>
            <li>
              <strong className="text-foreground/90">
                Information from integrations
              </strong>{" "}
              — data from third-party systems (such as your CRM, accounting,
              or email tools) that you explicitly connect to STIV.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. How We Use Information">
          <ul className="list-disc space-y-2 pl-5">
            <li>To operate, maintain, and improve the Service.</li>
            <li>
              To power the software&apos;s underlying AI systems within the
              scope you configure for each division.
            </li>
            <li>To provide support and respond to your requests.</li>
            <li>To detect, investigate, and prevent misuse or fraud.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. AI Systems & Model Training">
          <p>
            Customer Data processed by a division&apos;s software or STIV
            Unified is used solely to provide the Service to your
            organization. We do not use Customer Data to train foundation
            models — ours or our AI subprocessors&apos; — and our
            subprocessor agreements require the same commitment from them.
            Customer Data is never used to improve models for the benefit of
            other customers or the public.
          </p>
        </LegalSection>

        <LegalSection title="6. Data Sharing & Disclosure">
          <p>
            We do not sell your information. We share information only with:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Subprocessors who help us operate the Service, under
              contractual confidentiality, security, and (where applicable)
              data processing obligations (see our{" "}
              <Link
                href="/subprocessors"
                className="underline hover:text-foreground"
              >
                Subprocessors
              </Link>{" "}
              page).
            </li>
            <li>Authorities, where required by law or valid legal process.</li>
            <li>
              A successor entity in the event of a merger, acquisition, or
              asset sale, subject to the same protections described here.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Data Security & Breach Notification">
          <p>
            Data is encrypted in transit and at rest. Access within STIV is
            scoped by role, and access by each division&apos;s software is
            limited to what that division requires. Every consequential
            action is logged and auditable. No method of transmission or
            storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
          <p>
            Where a data breach is likely to result in significant harm, we
            will notify Singapore&apos;s Personal Data Protection Commission
            (PDPC) within 3 calendar days as required under the PDPA, and
            notify affected individuals without undue delay.
          </p>
        </LegalSection>

        <LegalSection title="8. Data Retention">
          <p>We retain information according to the following schedule:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Account and billing records: for the duration of your
              subscription, plus the period required by applicable tax and
              accounting law.
            </li>
            <li>Usage and log data: up to 12 months.</li>
            <li>
              Customer Data processed by a division&apos;s software: retained
              per your organization&apos;s configured retention settings, and
              deleted within 30 days of contract termination unless a longer
              period is legally required.
            </li>
          </ul>
          <p>
            You may request deletion of your data subject to any retention
            required by law or active contractual obligations.
          </p>
        </LegalSection>

        <LegalSection title="9. Your Rights">
          <p>
            Under the PDPA and, where applicable, other data protection
            laws, you may have rights to access, correct, export, or delete
            your personal information, and to withdraw consent or object to
            certain processing. To exercise these rights, contact us using
            the details below; we aim to respond to access and correction
            requests within 30 days. If you are not satisfied with our
            response, you may lodge a complaint with the PDPC (pdpc.gov.sg)
            or your local data protection authority.
          </p>
        </LegalSection>

        <LegalSection title="10. Cookies & Tracking">
          <p>
            We use cookies and similar technologies to operate the Service,
            remember preferences, and understand usage, including
            third-party analytics cookies (see our{" "}
            <Link
              href="/subprocessors"
              className="underline hover:text-foreground"
            >
              Subprocessors
            </Link>{" "}
            page). Where required by law, we will request your consent
            before setting non-essential cookies. You can control cookies
            through your browser settings at any time.
          </p>
        </LegalSection>

        <LegalSection title="11. International Transfers">
          <p>
            STIV is based in Singapore. Information may be processed by
            subprocessors located outside Singapore, including in the United
            States and India, which may have different data protection laws.
            Where required by the PDPA&apos;s Transfer Limitation
            obligation, we put in place contractual safeguards comparable to
            Singapore&apos;s data protection standards before transferring
            personal data outside Singapore.
          </p>
        </LegalSection>

        <LegalSection title="12. Data Protection Officer">
          <p>
            Our Data Protection Officer can be reached at{" "}
            <a
              href="mailto:privacy@iamstivai.com"
              className="underline hover:text-foreground"
            >
              privacy@iamstivai.com
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="13. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by an updated &quot;Last updated&quot;
            date above.
          </p>
        </LegalSection>

        <LegalSection title="14. Contact Us">
          <p>
            Questions about this Privacy Policy can be sent to{" "}
            <a
              href="mailto:privacy@iamstivai.com"
              className="underline hover:text-foreground"
            >
              privacy@iamstivai.com
            </a>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
