"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function Tilt({
  children,
  className = "",
  max = 10,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<CSSProperties>({ opacity: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015,1.015,1.015)`,
      transition: "transform 0.1s ease-out",
    });

    if (glare) {
      setGlareStyle({
        opacity: 0.14,
        background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, white, transparent 60%)`,
        transition: "opacity 0.1s ease-out",
      });
    }
  }

  function handleLeave() {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    });
    setGlareStyle({ opacity: 0, transition: "opacity 0.5s ease" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative will-change-transform ${className}`}
      style={style}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
          style={glareStyle}
        />
      )}
    </div>
  );
}
