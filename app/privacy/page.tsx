import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { LegalBody, LegalSection } from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy — STIV",
  description: "How STIV collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="Last updated July 8, 2026"
      />

      <LegalBody>
        <LegalSection title="1. Overview">
          <p>
            This Privacy Policy explains how STIV (&quot;STIV,&quot;
            &quot;we,&quot; &quot;us&quot;) collects, uses, discloses, and
            protects information in connection with our website and software
            (the &quot;Service&quot;). By using the Service, you agree to the
            practices described here.
          </p>
        </LegalSection>

        <LegalSection title="2. Information We Collect">
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

        <LegalSection title="3. How We Use Information">
          <ul className="list-disc space-y-2 pl-5">
            <li>To operate, maintain, and improve the Service.</li>
            <li>
              To power the software&apos;s underlying AI systems within the scope
              you configure for each division.
            </li>
            <li>To provide support and respond to your requests.</li>
            <li>To detect, investigate, and prevent misuse or fraud.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Data Sharing & Disclosure">
          <p>
            We do not sell your information. We share information only with:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Subprocessors who help us operate the Service, under contractual
              confidentiality and security obligations (see our{" "}
              <Link href="/subprocessors" className="underline hover:text-foreground">
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

        <LegalSection title="5. Data Security">
          <p>
            Data is encrypted in transit and at rest. Access within STIV is
            scoped by role, and access by each division&apos;s software is limited
            to what that division requires. Every consequential action is
            logged and auditable. No method of transmission or storage is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </LegalSection>

        <LegalSection title="6. Data Retention">
          <p>
            We retain information for as long as needed to provide the
            Service, comply with legal obligations, resolve disputes, and
            enforce our agreements. You may request deletion of your data
            subject to any retention required by law or active contractual
            obligations.
          </p>
        </LegalSection>

        <LegalSection title="7. Your Rights">
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, export, or delete your personal information, and to
            object to or restrict certain processing. To exercise these
            rights, contact us using the details below.
          </p>
        </LegalSection>

        <LegalSection title="8. Cookies & Tracking">
          <p>
            We use cookies and similar technologies to operate the Service,
            remember preferences, and understand usage. You can control
            cookies through your browser settings.
          </p>
        </LegalSection>

        <LegalSection title="9. International Transfers">
          <p>
            STIV is based in Singapore. Information may be processed in
            countries other than your own, which may have different data
            protection laws. Where required, we put appropriate safeguards in
            place for such transfers.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by an updated &quot;Last updated&quot;
            date above.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact Us">
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
