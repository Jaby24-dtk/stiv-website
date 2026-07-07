import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$490",
    period: "/mo",
    description: "For small teams automating their first function.",
    features: [
      "2 agents of your choice",
      "1 workspace",
      "Standard integrations",
      "Email support",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,900",
    period: "/mo",
    description: "For teams ready to run most of the business through STIV.",
    features: [
      "All 7 agents",
      "Unlimited workspaces",
      "Custom integrations",
      "Approval workflows",
      "Priority support",
    ],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For regulated orgs that need dedicated infrastructure.",
    features: [
      "Everything in Growth",
      "Dedicated data residency",
      "Custom agent development",
      "SSO & audit exports",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/10 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-teal">
            PRICING
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Priced like a hire. Works like seven.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-accent-indigo/40 bg-panel shadow-[0_0_60px_-20px_rgba(124,134,255,0.45)]"
                  : "border-white/10 bg-panel/40"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-accent-indigo to-accent-teal px-3 py-1 text-xs font-semibold text-slate-950">
                  Most popular
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
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book-demo"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  tier.featured
                    ? "bg-gradient-to-r from-accent-indigo to-accent-teal text-slate-950"
                    : "border border-white/15 text-foreground/90 hover:bg-white/5"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
