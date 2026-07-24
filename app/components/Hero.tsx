import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import WorkspacePreview from "./WorkspacePreview";
import AuroraBackground from "./AuroraBackground";

const divisionWords = [
  "Executive",
  "Sales",
  "Marketing",
  "Finance",
  "Operations",
  "Legal",
  "Support",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-8 lg:pt-28"
    >
      <AuroraBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
            Est. 2026 · Singapore
          </div>

          <h1 className="text-6xl font-semibold leading-[1.02] tracking-tight sm:text-8xl">
            Put routine work on autopilot—
            <span className="text-gradient">with every critical action approved.</span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
            STIV gives enterprise teams purpose-built AI software for
            Executive, Sales, Marketing, Finance, Operations, Legal, and
            Support—connected to your existing tools, governed by human
            approval, and traceable from first draft to final action.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="shine-sweep group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#divisions"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore the software
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent-gold" />
              Start with one division. No platform migration required.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Available division software">
              {divisionWords.map((division) => (
                <li
                  key={division}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-muted"
                >
                  {division}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <WorkspacePreview />
        </div>
      </div>
    </section>
  );
}
