"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground({
  variant = "full",
}: {
  variant?: "full" | "subtle";
}) {
  const opacity = variant === "full" ? 1 : 0.55;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    function apply() {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerOffset =
        rect.top + rect.height / 2 - window.innerHeight / 2;
      const translate = centerOffset * 0.09;
      el.style.transform = `translate3d(0, ${translate}px, 0)`;
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="aurora-field will-change-transform"
      style={{ opacity }}
      aria-hidden
    >
      <div
        className="aurora-blob aurora-blob-a"
        style={{
          top: "-10%",
          left: "-5%",
          width: "45%",
          height: "45%",
          background:
            "radial-gradient(circle, rgba(184,115,74,0.55), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-b"
        style={{
          top: "10%",
          right: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(236,202,156,0.4), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-c"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(140,80,50,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
