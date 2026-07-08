"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "card",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "card" | "text";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    function check() {
      if (shownRef.current) return;
      const el2 = ref.current;
      if (!el2) return;
      const rect = el2.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (inView) {
        shownRef.current = true;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    }

    // Also try IntersectionObserver as a first-class signal where it works;
    // the scroll-position check above covers any environment where it doesn't.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          shownRef.current = true;
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const base = variant === "text" ? "reveal-text" : "reveal";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
