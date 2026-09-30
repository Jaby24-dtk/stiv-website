"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CyclingText({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const first = container.querySelector<HTMLElement>('[data-word="0"]');
      if (first) gsap.set(first, { opacity: 1, y: 0 });
      return;
    }

    const items = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll("[data-word]")
    );
    if (items.length === 0) return;

    gsap.set(items, { opacity: 0, y: 16, position: "absolute", left: 0, top: 0 });
    gsap.set(items[0], { opacity: 1, y: 0, position: "relative" });

    const tl = gsap.timeline({ repeat: -1 });
    items.forEach((item, i) => {
      const next = items[(i + 1) % items.length];
      tl.to(item, { opacity: 0, y: -16, duration: 0.4, ease: "power2.in" }, "+=1.0")
        .set(item, { position: "absolute" })
        .set(next, { position: "relative" })
        .fromTo(
          next,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            immediateRender: false,
          },
          "<"
        );
    });

    return () => {
      tl.kill();
    };
  }, [words]);

  return (
    <span ref={containerRef} className="relative inline-block align-bottom">
      {words.map((word, i) => (
        <span
          key={word}
          data-word={i}
          className={`whitespace-nowrap ${className}`}
          // Server-render the same stacked state GSAP sets on mount (only the
          // first word in flow). Otherwise all seven words render inline,
          // wrap onto several lines, and the hero collapses on hydration.
          style={
            i === 0
              ? { position: "relative" }
              : { position: "absolute", left: 0, top: 0, opacity: 0 }
          }
        >
          {word}
        </span>
      ))}
    </span>
  );
}
