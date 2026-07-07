import { Sparkles, ArrowRight } from "lucide-react";
import WorkspacePreview from "./WorkspacePreview";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid px-6 pb-24 pt-20 lg:px-8 lg:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(124,134,255,0.16),transparent),radial-gradient(ellipse_50%_40%_at_85%_15%,rgba(74,222,157,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute left-[-120px] top-[140px] -z-10 h-[420px] w-[420px] rounded-full border border-white/10 opacity-60 lg:left-[-40px]"
        style={{ transform: "rotate(-12deg)" }}
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute left-[-40px] top-[80px] -z-10 h-[560px] w-[560px] rounded-full border border-white/5 opacity-40 lg:left-[60px]"
        style={{ animationDirection: "reverse", animationDuration: "130s" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent-teal" />
            Est. 2026 · Singapore
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Your{" "}
            <span className="text-gradient">AI-powered</span>
            <br />
            organization.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            STIV brings together specialized AI agents — Executive, Sales,
            Marketing, Finance, Operations, Legal, Support — into one unified
            workspace that runs your business in the background.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-indigo to-accent-teal px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#agents"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore the agents
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
          <WorkspacePreview />
        </div>
      </div>
    </section>
  );
}
