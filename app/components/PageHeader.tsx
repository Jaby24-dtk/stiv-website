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
    <div className="relative overflow-hidden border-b border-[#20242a] px-[7%] pb-20 pt-36 lg:pt-44">
      <AuroraBackground variant="subtle" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-baseline justify-between gap-5">
          <p className="eyebrow">{eyebrow.toUpperCase()}</p>
          <p className="eyebrow hidden text-[#778594] sm:block">
            STIV / INTELLIGENCE, ORCHESTRATED.
          </p>
        </div>
        <h1 className="max-w-4xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.06] tracking-[-0.058em]">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.8] tracking-[-0.016em] text-[#aeb7c2]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
