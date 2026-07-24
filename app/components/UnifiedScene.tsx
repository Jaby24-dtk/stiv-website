import { Blocks, BrainCircuit, Network, UserRoundCheck } from "lucide-react";

const stages = [
  {
    icon: Blocks,
    title: "Seven systems",
    body: "Executive, Sales, Marketing, Finance, Operations, Legal, and Support can each run independently.",
  },
  {
    icon: Network,
    title: "One command layer",
    body: "Bring every division into one assistant, with a shared view of priorities, risks, and approvals.",
  },
  {
    icon: BrainCircuit,
    title: "Grounded in your business",
    body: "Configure STIV around your connected data, brand voice, playbooks, and approval policies.",
  },
  {
    icon: UserRoundCheck,
    title: "One accountable team",
    body: "Dedicated infrastructure, guided onboarding, and a single success team across the deployment.",
  },
];

export default function UnifiedScene() {
  return (
    <div className="border-t border-white/10 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            STIV UNIFIED
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Seven divisions. One governed command layer.
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-muted">
            When independent division software is no longer enough, unify it
            without giving up role-scoped access, approvals, or accountability.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stages.map(({ icon: Icon, title, body }, index) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-accent-gold" aria-hidden="true" />
                <span className="font-mono text-xs text-muted" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
