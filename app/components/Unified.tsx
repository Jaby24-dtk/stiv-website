import { Sparkles } from "lucide-react";
import Tilt from "./Tilt";
import AuroraBackground from "./AuroraBackground";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const highlights = [
  "Every division fused into one command layer",
  "Custom-trained on your business and brand voice",
  "Dedicated infrastructure and white-glove onboarding",
  "A single point of accountability across your company",
];

export default function Unified() {
  return (
    <section id="unified" className="border-t border-white/10 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
        <Tilt max={3} glare={false} className="rounded-3xl">
          <div className="glass-panel glow-ring relative overflow-hidden rounded-3xl p-10 sm:p-14">
            <AuroraBackground variant="subtle" />
            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent-gold">
                  <Sparkles className="h-3.5 w-3.5" />
                  STIV UNIFIED
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  One assistant. Every division.
                  <br />
                  Exclusively yours.
                </h2>
                <p className="mt-4 max-w-xl text-lg text-muted">
                  Rather than seven separate systems, STIV Unified fuses
                  Executive, Sales, Marketing, Finance, Operations, Legal, and
                  Support into a single exclusive assistant — trained on your
                  business, briefed on everything, answerable only to you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <a
                      href="#book-demo"
                      className="shine-sweep inline-flex rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
                    >
                      Enquire about Unified
                    </a>
                  </Magnetic>
                  <span className="text-sm text-muted">
                    Custom pricing · by application
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-5">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-bronze), var(--accent-gold))",
                        boxShadow: "0 0 12px rgba(236,202,156,0.6)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
