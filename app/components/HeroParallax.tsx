"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax() {
  const glow = useRef<HTMLDivElement>(null);
  const ring1 = useRef<HTMLDivElement>(null);
  const ring2 = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;

    function apply() {
      const scrollY = window.scrollY;

      if (glow.current) {
        glow.current.style.transform = `translate3d(${mouseX * 18}px, ${
          mouseY * 18 + scrollY * 0.06
        }px, 0)`;
      }
      if (ring1.current) {
        ring1.current.style.transform = `translate3d(${mouseX * 16}px, ${
          mouseY * 12 + scrollY * 0.14
        }px, 0)`;
      }
      if (ring2.current) {
        ring2.current.style.transform = `translate3d(${mouseX * -12}px, ${
          mouseY * -10 + scrollY * 0.09
        }px, 0)`;
      }
      if (grid.current) {
        grid.current.style.transform = `translate3d(${mouseX * 4}px, ${
          mouseY * 4 + scrollY * 0.03
        }px, 0)`;
      }
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={grid}
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-[-10%] -z-20 will-change-transform"
      />
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(184,115,74,0.16),transparent),radial-gradient(ellipse_50%_40%_at_85%_15%,rgba(236,202,156,0.12),transparent)] will-change-transform"
      />
      <div
        ref={ring1}
        aria-hidden
        className="pointer-events-none absolute left-[-120px] top-[140px] -z-10 will-change-transform lg:left-[-40px]"
      >
        <div className="animate-drift h-[420px] w-[420px] rounded-full border border-white/10 opacity-60" />
      </div>
      <div
        ref={ring2}
        aria-hidden
        className="pointer-events-none absolute left-[-40px] top-[80px] -z-10 will-change-transform lg:left-[60px]"
      >
        <div
          className="animate-drift h-[560px] w-[560px] rounded-full border border-white/5 opacity-40"
          style={{ animationDirection: "reverse", animationDuration: "130s" }}
        />
      </div>
    </>
  );
}
