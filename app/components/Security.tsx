import { ShieldCheck, KeyRound, ScrollText, UserCheck } from "lucide-react";

const items = [
  {
    icon: KeyRound,
    title: "Encrypted by default",
    description:
      "Data is encrypted in transit and at rest. Every agent's access is scoped to only what its role requires.",
  },
  {
    icon: UserCheck,
    title: "Human approval gates",
    description:
      "You define which actions need sign-off. Nothing external — emails, contracts, payments — ships without one.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    description:
      "Every decision an agent makes is logged, timestamped, and reversible. Nothing happens off the record.",
  },
  {
    icon: ShieldCheck,
    title: "Built for compliance",
    description:
      "Architected around SOC 2 control objectives from day one, with data residency options for regulated teams.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <p className="font-mono text-xs tracking-widest text-accent-teal">
              SECURITY
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Autonomy you can audit.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Giving AI agents real access to your business only works if you
              can trust — and verify — everything they touch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent-teal">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
