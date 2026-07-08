import { Sparkles, ArrowRight } from "lucide-react";
import WorkspacePreview from "./WorkspacePreview";
import HeroParallax from "./HeroParallax";
import Tilt from "./Tilt";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid px-6 pb-24 pt-20 lg:px-8 lg:pt-28"
    >
      <HeroParallax />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
            Est. 2026 · Singapore
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Premium software,
            <br />
            <span className="text-gradient">division by division.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            STIV designs exclusive, purpose-built software for every division
            of your enterprise — Executive, Sales, Marketing, Finance,
            Operations, Legal, Support. Prefer a single system across the
            whole company? STIV Unified brings every division under one
            exclusive assistant.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#divisions"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore the software
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-6">
            <span className="text-3xl font-semibold tabular-nums text-gradient">
              14,382
            </span>
            <span className="max-w-[14rem] text-sm text-muted">
              hours reclaimed by customers this week
            </span>
          </div>
        </div>

        <div className="relative">
          <Tilt max={8} className="rounded-2xl">
            <WorkspacePreview />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
