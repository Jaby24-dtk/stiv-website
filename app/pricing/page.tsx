import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Pricing from "../components/Pricing";

export const metadata: Metadata = {
  title: "Pricing for Enterprise Division Software",
  description:
    "STIV pricing: Single Division at $1,500/mo, Full Suite at $8,200/mo for all seven divisions, or STIV Unified at custom pricing. Available by private application.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing for Enterprise Division Software — STIV",
    description:
    "STIV pricing: Single Division at $1,500/mo, Full Suite at $8,200/mo for all seven divisions, or STIV Unified at custom pricing. Available by private application.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="PRICING"
        title="License by division. Or license it all."
        description="Every tier runs on the same approval-gated model — you invest only in what your teams actually run."
      />
      <Pricing showHeading={false} />
    </>
  );
}
