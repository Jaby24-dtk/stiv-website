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
      className={`relative flex shrink-0 items-center justify-center rounded-[4px] border border-[#39424e] bg-[#131a22] ${dimensions.box}`}
    >
      <Icon className={`${dimensions.icon} text-accent-gold`} strokeWidth={1.75} />
    </div>
  );
}
