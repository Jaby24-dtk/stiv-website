import AuroraBackground from "./AuroraBackground";
import Reveal from "./Reveal";
import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";

export default function CTA() {
  return (
    <section id="private-briefing" className="border-t border-white/10 px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-4xl">
      <div className="glass-panel glow-ring relative overflow-hidden rounded-3xl p-12 text-center sm:p-16">
        <AuroraBackground variant="subtle" />
        <div className="relative">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Request a private working session.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-muted">
            For qualified teams evaluating a specific high-value workflow.
            Every session is prepared around the applicant’s company—never a
            generic product tour.
          </p>
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-muted">
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            Applications reviewed individually
          </div>
          <Link
            href="/contact"
            data-analytics-cta="homepage_private_briefing"
            className="shine-sweep group mx-auto mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Apply for a private briefing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
