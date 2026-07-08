import { Check } from "lucide-react";
import Tilt from "./Tilt";
import AuroraBackground from "./AuroraBackground";

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
    cta: "Choose a division",
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
    cta: "Book a demo",
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
    cta: "Enquire about Unified",
    badge: "By application",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <AuroraBackground variant="subtle" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            PRICING
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            License by division. Or license it all.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const isPopular = tier.badge === "Most popular";
            const isUnified = tier.badge === "By application";

            return (
              <Tilt
                key={tier.name}
                max={5}
                glare={false}
                className="h-full rounded-2xl"
              >
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-8 ${
                    isPopular
                      ? "glass-panel glow-ring shadow-[0_0_60px_-20px_rgba(184,115,74,0.45)]"
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

                  <h3 className="text-lg font-medium">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted">{tier.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
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

                  <a
                    href="#book-demo"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      isPopular
                        ? "shine-sweep bg-gradient-to-r from-accent-bronze to-accent-gold text-slate-950"
                        : "border border-white/15 text-foreground/90 hover:bg-white/5"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
