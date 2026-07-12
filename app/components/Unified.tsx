import Link from "next/link";
import UnifiedScene from "./DynamicUnifiedScene";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Unified() {
  return (
    <section id="unified" className="relative border-t border-white/10">
      <UnifiedScene />

      <div className="border-t border-white/10 px-6 py-20 text-center lg:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One assistant. Every division. Exclusively yours.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="shine-sweep inline-flex rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
              >
                Enquire about Unified
              </Link>
            </Magnetic>
            <span className="text-sm text-muted">
              Custom pricing · by application
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
