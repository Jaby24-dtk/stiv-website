import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { LegalBody, LegalSection } from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of STIV's software.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — STIV",
    description: "The terms that govern your use of STIV's software.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        title="Terms of Service"
        description="Last updated July 8, 2026"
      />

      <LegalBody>
        <LegalSection title="1. Acceptance of Terms">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to
            and use of the website and software (the &quot;Service&quot;)
            provided by{" "}
            <span className="text-foreground/90">
              [STIV Pte. Ltd., Singapore UEN: to be confirmed]
            </span>{" "}
            (&quot;STIV,&quot; &quot;we,&quot; &quot;us&quot;). By accessing
            or using the Service, you agree to be bound by these Terms. If
            you are entering into these Terms on behalf of a company, you
            represent that you have authority to bind that company.
          </p>
        </LegalSection>

        <LegalSection title="2. Description of Service">
          <p>
            STIV provides licensed, division-specific software (and, where
            selected, a unified assistant spanning multiple divisions) that
            integrates with systems you authorize to help operate parts of
            your business. Features vary by the plan and divisions you
            license.
          </p>
        </LegalSection>

        <LegalSection title="3. Accounts & Eligibility">
          <p>
            You must provide accurate account information and are
            responsible for safeguarding your credentials and for all
            activity under your account. The Service is intended for business
            use by authorized organizational users, not consumers.
          </p>
        </LegalSection>

        <LegalSection title="4. Subscription & Payment">
          <p>
            Paid plans are billed in advance on the cycle specified at
            checkout or in your order form. Fees are exclusive of GST and
            other applicable taxes, which will be added where required. Fees
            are non-refundable except as required by law or expressly stated
            in your agreement with STIV. We may change pricing on renewal
            with reasonable prior notice.
          </p>
        </LegalSection>

        <LegalSection title="5. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the Service to violate any applicable law or regulation.</li>
            <li>
              Attempt to reverse engineer, disrupt, or circumvent security
              controls of the Service.
            </li>
            <li>
              Use the Service to process data you do not have the right to
              process.
            </li>
            <li>
              Resell or provide the Service to third parties without our
              written consent.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. AI-Generated Output">
          <p>
            The Service uses artificial intelligence to generate drafts,
            recommendations, analysis, and other output within each
            division&apos;s software. AI-generated output may be inaccurate
            or incomplete and does not constitute financial, legal, or other
            professional advice. You are responsible for configuring
            appropriate human approval gates and for reviewing AI-generated
            output before relying on it or acting on it. STIV is not
            responsible for decisions made on the basis of unreviewed
            AI-generated output.
          </p>
        </LegalSection>

        <LegalSection title="7. Intellectual Property">
          <p>
            STIV retains all rights, title, and interest in the Service,
            including its software, design, and underlying technology. You
            retain all rights to the data and content you submit to the
            Service (&quot;Customer Data&quot;). You grant STIV a limited
            license to process Customer Data solely to provide the Service.
          </p>
        </LegalSection>

        <LegalSection title="8. Confidentiality">
          <p>
            Each party agrees to protect the other&apos;s confidential
            information with the same degree of care it uses for its own
            confidential information, and not less than a reasonable
            standard of care, and to use such information only as needed to
            fulfill its obligations under these Terms. These obligations do
            not apply to information that is or becomes publicly available
            without breach of these Terms, was already known to the
            receiving party without an obligation of confidentiality, is
            independently developed without use of the confidential
            information, or is required to be disclosed by law.
          </p>
        </LegalSection>

        <LegalSection title="9. Warranties & Disclaimers">
          <p>
            Except as expressly stated in an order form or separate written
            agreement, the Service is provided &quot;as is&quot; without
            warranties of any kind, whether express, implied, or statutory,
            including implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </LegalSection>

        <LegalSection title="10. Indemnification">
          <p>
            You will indemnify and hold STIV harmless from third-party
            claims arising from Customer Data, your breach of these Terms,
            or your violation of applicable law. STIV will indemnify and
            hold you harmless from third-party claims that the Service, as
            provided by STIV and used in accordance with these Terms,
            infringes that third party&apos;s intellectual property rights.
            Each party&apos;s indemnification obligations are subject to
            prompt notice, sole control of the defense, and reasonable
            cooperation from the indemnified party.
          </p>
        </LegalSection>

        <LegalSection title="11. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, neither party will be
            liable for indirect, incidental, special, consequential, or
            punitive damages, or for lost profits or revenues, arising from
            these Terms, even if advised of the possibility of such damages.
            Except for breaches of confidentiality, infringement of
            intellectual property rights, gross negligence, willful
            misconduct, or fraud, each party&apos;s total aggregate liability
            arising out of or relating to these Terms will not exceed the
            fees paid or payable by you to STIV in the 12 months preceding
            the event giving rise to the claim.
          </p>
        </LegalSection>

        <LegalSection title="12. Service Availability">
          <p>
            STIV will use commercially reasonable efforts to maintain
            Service availability of at least 99.5% measured monthly,
            excluding scheduled maintenance and events beyond STIV&apos;s
            reasonable control. Specific service level commitments and
            remedies for Full Suite and STIV Unified plans are set out in
            your order form.
          </p>
        </LegalSection>

        <LegalSection title="13. Termination">
          <p>
            Either party may terminate these Terms for convenience with 30
            days&apos; written notice, or as otherwise set out in your order
            form. Either party may terminate for the other&apos;s material
            breach if such breach remains uncured 30 days after written
            notice. We may suspend or terminate access immediately, without
            a cure period, for non-payment or conduct that poses a security
            or legal risk to the Service or other customers. On
            termination, we will make Customer Data available for export
            for 30 days, after which it will be deleted in accordance with
            our{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="14. Force Majeure">
          <p>
            Neither party is liable for delay or failure to perform caused
            by events beyond its reasonable control, including natural
            disasters, war, government action, or pandemic, provided the
            affected party uses reasonable efforts to resume performance.
            Either party may terminate without penalty if such an event
            continues for more than 30 days. Financial inability to pay is
            not a force majeure event.
          </p>
        </LegalSection>

        <LegalSection title="15. Governing Law & Dispute Resolution">
          <p>
            These Terms are governed by the laws of Singapore, without
            regard to conflict-of-law principles, unless a separate signed
            agreement between you and STIV specifies otherwise. Any dispute
            arising out of or relating to these Terms that cannot be
            resolved informally within 30 days will be referred to and
            finally resolved by arbitration administered by the Singapore
            International Arbitration Centre (SIAC) in accordance with the
            SIAC Rules then in force, seated in Singapore and conducted in
            English. Nothing in this section prevents either party from
            seeking injunctive relief in a court of competent jurisdiction
            to protect its intellectual property or confidential
            information.
          </p>
        </LegalSection>

        <LegalSection title="16. General Provisions">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground/90">Assignment</strong> —
              Neither party may assign these Terms without the other&apos;s
              consent, except to a successor in connection with a merger,
              acquisition, or sale of substantially all assets.
            </li>
            <li>
              <strong className="text-foreground/90">Entire Agreement</strong>{" "}
              — These Terms, together with any order form, constitute the
              entire agreement between you and STIV regarding the Service
              and supersede prior agreements on the subject.
            </li>
            <li>
              <strong className="text-foreground/90">Severability</strong> —
              If any provision of these Terms is found unenforceable, the
              remaining provisions remain in full effect.
            </li>
            <li>
              <strong className="text-foreground/90">No Waiver</strong> —
              Failure to enforce any provision is not a waiver of the right
              to enforce it later.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="17. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Material changes
            will be reflected by an updated &quot;Last updated&quot; date
            above, and, where required, communicated to active customers.
          </p>
        </LegalSection>

        <LegalSection title="18. Contact Us">
          <p>
            Questions about these Terms can be sent to{" "}
            <a
              href="mailto:legal@iamstivai.com"
              className="underline hover:text-foreground"
            >
              legal@iamstivai.com
            </a>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
