"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import IconTile from "./IconTile";
import ScrambleText from "./ScrambleText";
import RotatingEarth from "./RotatingEarth";
import { ensureGsapPlugins, gsap } from "./gsapConfig";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!section || cards.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(cards, { yPercent: 0, xPercent: 0, opacity: 1, position: "relative" });
      return;
    }

    ensureGsapPlugins();

    let raf = 0;

    const ctx = gsap.context(() => {
      gsap.set(cards, { yPercent: -140, opacity: 0 });
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${cards.length * 90}%`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        const at = i - 0.35;
        tl.to(card, { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }, at);
        tl.to(
          cards[i - 1],
          { xPercent: -130, opacity: 0, duration: 1, ease: "power2.in" },
          at
        );
      });

      // Track which card is actually the most-visible one on every frame,
      // rather than reverse-engineering it from scroll progress: the
      // timeline's card-to-card timing isn't evenly spaced, so a linear
      // progress formula drifts out of sync with what's really on screen.
      function tick() {
        let bestIndex = 0;
        let bestOpacity = -1;
        cards.forEach((card, i) => {
          const opacity = Number(gsap.getProperty(card, "opacity"));
          if (opacity > bestOpacity) {
            bestOpacity = opacity;
            bestIndex = i;
          }
        });
        if (bestIndex !== activeIndexRef.current) {
          activeIndexRef.current = bestIndex;
          setActiveIndex(bestIndex);
        }
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }, section);

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [divisions]);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden bg-background">
      <RotatingEarth />
      <div className="pointer-events-none absolute inset-x-0 top-8 z-10 flex justify-center">
        <p className="font-mono text-xs tracking-widest text-accent-gold">
          SOFTWARE — SCROLL TO EXPLORE
        </p>
      </div>
      <div className="relative mx-auto flex h-full max-w-2xl items-center px-6">
        {divisions.map(({ name, icon: Icon, description }, i) => (
          <div
            key={name}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="absolute inset-x-6 flex flex-col items-center text-center"
          >
            <IconTile icon={Icon} size="lg" />
            <h3 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              <ScrambleText text={name} active={activeIndex === i} />
            </h3>
            <p className="mt-4 max-w-md text-xl leading-relaxed text-muted">
              {description}
            </p>
            <span className="mt-6 font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")} / {String(divisions.length).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
