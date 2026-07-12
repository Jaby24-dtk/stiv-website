import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "./components/AuroraBackground";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-6 py-32 text-center lg:px-8">
      <AuroraBackground variant="subtle" />
      <div className="relative mx-auto max-w-xl">
        <p className="font-mono text-xs tracking-widest text-accent-gold">
          404
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
          Nothing running here.
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist, or it moved.
          Every other division is still where you left it.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="shine-sweep group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-bronze to-accent-gold px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Back to homepage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
