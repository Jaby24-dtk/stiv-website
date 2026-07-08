import { Plug, GraduationCap, CheckCircle2, TrendingUp } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Plug,
    title: "Connect your stack",
    description:
      "Link your inbox, CRM, accounting, and docs. Agents read what's already there — no migration required.",
  },
  {
    icon: GraduationCap,
    title: "Agents learn your business",
    description:
      "They study your playbooks, past decisions, and tone until their output looks like something your team wrote.",
  },
  {
    icon: CheckCircle2,
    title: "They act, you approve",
    description:
      "Every consequential action routes through an approval gate you define — nothing ships without a human in the loop.",
  },
  {
    icon: TrendingUp,
    title: "Leverage compounds",
    description:
      "As trust builds, you widen what runs autonomously. Most teams reclaim their first full day within a month.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent-gold">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From onboarding to autonomy.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80} className="relative">
              <div className="flex items-center gap-3">
                <IconTile icon={Icon} size="sm" />
                <span className="font-mono text-xs text-muted">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-1rem] top-5 hidden h-px w-8 bg-gradient-to-r from-white/20 to-transparent lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
