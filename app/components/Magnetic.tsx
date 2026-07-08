"use client";

import { useRef, type ReactNode, type CSSProperties, useState } from "react";

export default function Magnetic({
  children,
  strength = 0.5,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setStyle({
      transform: `translate3d(${x}px, ${y}px, 0)`,
      transition: "transform 0.15s ease-out",
    });
  }

  function handleLeave() {
    setStyle({
      transform: "translate3d(0,0,0)",
      transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block will-change-transform"
      style={style}
    >
      {children}
    </div>
  );
}
