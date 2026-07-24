import Link from "next/link";
import { Check } from "lucide-react";
import Tilt from "./Tilt";
import AuroraBackground from "./AuroraBackground";
import Reveal from "./Reveal";
import { serializeJsonLd } from "../lib/json-ld";
import { ORGANIZATION_ID, SITE_URL } from "../lib/site";

const tiers = [
  {
    name: "Single Division",
    price: "$1,500",
    period: "/mo",
    description: "License one division's software — start where it matters most.",
    features: [
      "1 division of your choice",
      "1 workspace",
      "Standard integrations",
      "Email support",
    ],
    cta: "Request private access",
    badge: null as string | null,
  },
  {
    name: "Full Suite",
    price: "$8,200",
    period: "/mo",
    description: "All seven divisions, licensed and deployed independently.",
    features: [
      "All 7 divisions",
      "Unlimited workspaces",
      "Custom integrations",
      "Approval workflows",
      "Priority support",
    ],
    cta: "Apply for a briefing",
    badge: "Most popular",
  },
  {
    name: "STIV Unified",
    price: "Custom",
    period: "",
    description: "One exclusive assistant that runs the whole company.",
    features: [
      "Every division, unified",
      "Bespoke build on your business",
      "Dedicated infrastructure",
      "White-glove onboarding",
      "Dedicated success manager",
    ],
    cta: "Apply for Unified",
    badge: "By application",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/pricing#service`,
  name: "STIV enterprise software",
  serviceType: "Enterprise AI software",
  url: `${SITE_URL}/pricing`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: "Worldwide",
  description:
    "Purpose-built software licensed division by division for Executive, Sales, Marketing, Finance, Operations, Legal, and Support teams — or unified into one exclusive assistant with STIV Unified.",
  offers: tiers.map((tier) => ({
    "@type": "Offer",
    url: `${SITE_URL}/pricing`,
    name: tier.name,
    description: tier.description,
    ...(tier.price.startsWith("$")
      ? {
          price: tier.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: tier.price.replace(/[^0-9.]/g, ""),
            priceCurrency: "USD",
            billingIncrement: 1,
            unitCode: "MON",
          },
        }
      : {
          priceSpecification: {
            "@type": "PriceSpecification",
            description: "Custom pricing, by application",
          },
        }),
  })),
};

export default function Pricing({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <AuroraBackground variant="subtle" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pricingJsonLd) }}
      />
      <div className="relative mx-auto max-w-7xl">
        {showHeading && (
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-accent-gold">
              PRICING
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              License by division. Or license it all.
            </h2>
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => {
            const isPopular = tier.badge === "Most popular";
            const isUnified = tier.badge === "By application";

            return (
              <Reveal key={tier.name} delay={tierIndex * 100} className="h-full">
              <Tilt
                max={5}
                glare={false}
                className="h-full rounded-2xl"
              >
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-8 ${
                    isPopular
                      ? "glass-panel glow-ring shadow-[0_0_60px_-20px_rgba(255,255,255,0.45)]"
                      : isUnified
                        ? "glass-panel border border-accent-gold/25"
                        : "border border-white/10 bg-panel/40"
                  }`}
                >
                  {tier.badge && (
                    <span
                      className={`absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-semibold ${
                        isPopular
                          ? "bg-gradient-to-r from-accent-bronze to-accent-gold text-slate-950"
                          : "border border-accent-gold/40 bg-background text-accent-gold"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-medium">{tier.name}</h3>
                  <p className="mt-2 text-base text-muted">{tier.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-semibold tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm text-muted">{tier.period}</span>
                    )}
                  </div>

                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      isPopular
                        ? "shine-sweep bg-gradient-to-r from-accent-bronze to-accent-gold text-slate-950"
                        : "border border-white/15 text-foreground/90 hover:bg-white/5"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
