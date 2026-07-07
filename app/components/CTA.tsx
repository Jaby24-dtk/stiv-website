import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="book-demo" className="border-t border-white/10 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(124,134,255,0.18),transparent)] p-12 text-center sm:p-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Put seven agents to work this week.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          See STIV run against a copy of your own data in a 30-minute call —
          no sales deck, just the workspace.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-indigo focus:outline-none"
          />
          <button
            type="submit"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-indigo to-accent-teal px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
