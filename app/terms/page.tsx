import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { LegalBody, LegalSection } from "../components/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service — STIV",
  description: "The terms that govern your use of STIV's software.",
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
            and use of STIV&apos;s website and software (the
            &quot;Service&quot;). By accessing or using the Service, you
            agree to be bound by these Terms. If you are entering into these
            Terms on behalf of a company, you represent that you have
            authority to bind that company.
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
            checkout or in your order form. Fees are non-refundable except as
            required by law or expressly stated in your agreement with STIV.
            We may change pricing on renewal with reasonable prior notice.
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

        <LegalSection title="6. Intellectual Property">
          <p>
            STIV retains all rights, title, and interest in the Service,
            including its software, design, and underlying technology. You
            retain all rights to the data and content you submit to the
            Service (&quot;Customer Data&quot;). You grant STIV a limited
            license to process Customer Data solely to provide the Service.
          </p>
        </LegalSection>

        <LegalSection title="7. Confidentiality">
          <p>
            Each party agrees to protect the other&apos;s confidential information
            with the same degree of care it uses for its own confidential
            information, and not less than a reasonable standard of care, and
            to use such information only as needed to fulfill its obligations
            under these Terms.
          </p>
        </LegalSection>

        <LegalSection title="8. Warranties & Disclaimers">
          <p>
            Except as expressly stated in an order form or separate written
            agreement, the Service is provided &quot;as is&quot; without
            warranties of any kind, whether express, implied, or statutory,
            including implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </LegalSection>

        <LegalSection title="9. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, STIV will not be liable
            for indirect, incidental, special, consequential, or punitive
            damages, or for lost profits or revenues, arising from your use
            of the Service, even if advised of the possibility of such
            damages.
          </p>
        </LegalSection>

        <LegalSection title="10. Termination">
          <p>
            Either party may terminate these Terms as set out in your order
            form or, absent one, with 30 days&apos; written notice. We may suspend
            or terminate access immediately for material breach, non-payment,
            or conduct that poses a security or legal risk to the Service or
            other customers.
          </p>
        </LegalSection>

        <LegalSection title="11. Governing Law">
          <p>
            These Terms are governed by the laws of Singapore, without regard
            to conflict-of-law principles, unless a separate signed agreement
            between you and STIV specifies otherwise.
          </p>
        </LegalSection>

        <LegalSection title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Material changes
            will be reflected by an updated &quot;Last updated&quot; date
            above, and, where required, communicated to active customers.
          </p>
        </LegalSection>

        <LegalSection title="13. Contact Us">
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
