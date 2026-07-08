import type { LucideIcon } from "lucide-react";

export default function IconTile({
  icon: Icon,
  size = "md",
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { box: "h-9 w-9", icon: "h-4 w-4" },
    md: { box: "h-11 w-11", icon: "h-5 w-5" },
    lg: { box: "h-14 w-14", icon: "h-6 w-6" },
  }[size];

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-xl ${dimensions.box}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(110,110,110,0.9), rgba(255,255,255,0.9))",
        boxShadow:
          "0 8px 24px -8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.15)",
      }}
    >
      <Icon className={`${dimensions.icon} text-slate-950`} strokeWidth={2.25} />
    </div>
  );
}
