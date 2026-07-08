import AuroraBackground from "./AuroraBackground";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-grid px-6 pb-16 pt-16 lg:px-8 lg:pt-20">
      <AuroraBackground variant="subtle" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs tracking-widest text-accent-gold">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-xl leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
