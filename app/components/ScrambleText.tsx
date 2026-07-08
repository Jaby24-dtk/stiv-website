"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({
  text,
  active,
  className = "",
}: {
  text: string;
  active: boolean;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(0);
  const startRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rafRef.current = requestAnimationFrame(() => setDisplay(text));
      return () => cancelAnimationFrame(rafRef.current);
    }

    if (!active) {
      rafRef.current = requestAnimationFrame(() =>
        setDisplay(
          text
            .split("")
            .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
            .join("")
        )
      );
      return () => cancelAnimationFrame(rafRef.current);
    }

    const duration = 700;
    startRef.current = performance.now();

    function tick(now: number) {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const revealCount = Math.floor(progress * text.length);

      const next = text
        .split("")
        .map((c, i) => {
          if (c === " ") return " ";
          if (i < revealCount) return c;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, text]);

  return <span className={className}>{display}</span>;
}
