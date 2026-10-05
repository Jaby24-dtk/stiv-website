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
    <div className="relative overflow-hidden px-[7%] pb-20 pt-32 text-center lg:pt-40">
      <AuroraBackground variant="subtle" />
      <div className="relative mx-auto max-w-[980px]">
        <p className="text-[1.3125rem] font-semibold tracking-[-0.01em] text-[#9aa3af]">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-3 max-w-4xl text-balance text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-[1.3125rem] leading-[1.45] tracking-[-0.012em] text-[#c3c8cf]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
