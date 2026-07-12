import {
  BarChart3,
  Briefcase,
  Megaphone,
  Landmark,
  Settings,
  Scale,
  Headset,
} from "lucide-react";

const sidebarItems = [
  { label: "Executive", icon: BarChart3 },
  { label: "Sales", icon: Briefcase },
  { label: "Marketing", icon: Megaphone },
  { label: "Finance", icon: Landmark, active: true },
  { label: "Operations", icon: Settings },
  { label: "Legal", icon: Scale },
  { label: "Support", icon: Headset },
];

export default function WorkspacePreview() {
  return (
    <div className="glass-panel glow-ring relative overflow-hidden rounded-2xl shadow-[0_0_90px_-20px_rgba(255,255,255,0.45)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-muted">
            stiv.app / workspace
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-accent-gold">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-gold" />
          live
        </div>
      </div>

      <div className="grid grid-cols-[128px_1fr] sm:grid-cols-[150px_1fr]">
        <div className="border-r border-white/10 p-3">
          <p className="px-2 pb-2 font-mono text-[10px] tracking-widest text-muted">
            DIVISIONS
          </p>
          <div className="flex flex-col gap-1">
            {sidebarItems.map(({ label, icon: Icon, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                  active
                    ? "bg-white/10 text-foreground"
                    : "text-muted"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="mb-1 font-mono text-[10px] tracking-widest text-muted">
              YOU
            </p>
            <p className="text-sm">what&apos;s blocking Q3 close?</p>
          </div>

          <div className="rounded-xl border border-accent-bronze/30 bg-accent-bronze/10 p-3">
            <p className="mb-1 font-mono text-[10px] tracking-widest text-accent-gold">
              FINANCE SYSTEM
            </p>
            <p className="text-sm text-foreground/90">
              3 accounts unreconciled — drafting variance summary now...
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="mb-1 font-mono text-[10px] tracking-widest text-muted">
              EXECUTIVE SYSTEM
            </p>
            <p className="text-sm text-foreground/90">
              Adding this to Monday&apos;s briefing under Risks.
            </p>
          </div>

          <p className="px-1 text-xs text-muted">
            <span className="inline-flex gap-1">
              <span className="h-1 w-1 animate-pulse-soft rounded-full bg-muted [animation-delay:0ms]" />
              <span className="h-1 w-1 animate-pulse-soft rounded-full bg-muted [animation-delay:200ms]" />
              <span className="h-1 w-1 animate-pulse-soft rounded-full bg-muted [animation-delay:400ms]" />
            </span>{" "}
            Finance System is drafting…
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="mb-2 font-mono text-[10px] tracking-widest text-muted">
              Q3 VARIANCE · DRAFT
            </p>
            <svg viewBox="0 0 200 50" className="h-10 w-full">
              <polyline
                fill="none"
                stroke="url(#chart-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,38 20,32 40,40 60,28 80,30 100,18 120,24 140,14 160,20 180,8 200,12"
              />
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--accent-bronze)" />
                  <stop offset="100%" stopColor="var(--accent-gold)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
