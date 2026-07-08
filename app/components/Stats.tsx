import Reveal from "./Reveal";

const stats = [
  { value: "7", label: "Dedicated divisions" },
  { value: "99.5%", label: "Uptime commitment" },
  { value: "2026", label: "Founded" },
  { value: "SG", label: "Singapore HQ" },
];

export default function Stats() {
  return (
    <section className="border-b border-white/10 px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <Reveal key={label} delay={i * 80}>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
