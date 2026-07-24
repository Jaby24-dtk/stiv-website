import type { LucideIcon } from "lucide-react";
import IconTile from "./IconTile";

type Division = {
  name: string;
  icon: LucideIcon;
  description: string;
};

export default function DivisionsSwipe({
  divisions,
}: {
  divisions: Division[];
}) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {divisions.map(({ name, icon: Icon, description }, i) => (
          <article
            key={name}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            <IconTile icon={Icon} size="lg" />
            <p className="mt-8 font-mono text-xs text-muted" aria-hidden="true">
              {String(i + 1).padStart(2, "0")} / {String(divisions.length).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
              {name}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {description}
            </p>
          </article>
        ))}
    </div>
  );
}
