const items = [
  "Executive",
  "Sales",
  "Marketing",
  "Finance",
  "Operations",
  "Legal",
  "Support",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-panel/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-12">
        {[...track, ...track].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 font-mono text-sm tracking-widest text-muted"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-bronze), var(--accent-gold))",
              }}
            />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
