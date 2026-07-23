import AuroraBackground from "./AuroraBackground";
import Reveal from "./Reveal";
import DemoForm from "./DemoForm";

export default function CTA() {
  return (
    <section id="book-demo" className="border-t border-white/10 px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-4xl">
      <div className="glass-panel glow-ring relative overflow-hidden rounded-3xl p-12 text-center sm:p-16">
        <AuroraBackground variant="subtle" />
        <div className="relative">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Put seven divisions to work this week.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-muted">
            See STIV run against a copy of your own data in a 30-minute call —
            no sales deck, just the workspace.
          </p>
          <DemoForm compact source="homepage_cta" />
        </div>
      </div>
      </Reveal>
    </section>
  );
}
