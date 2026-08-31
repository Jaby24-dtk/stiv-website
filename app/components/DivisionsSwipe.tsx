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
      gsap.set(cards, { yPercent: 30, xPercent: 0, opacity: 0 });
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${cards.length * 90}%`,
          scrub: 0.8,
          fastScrollEnd: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Each transition needs a hold gap after it so the card it lands on
      // has an actual resting scroll position — without one, the next
      // transition starts the instant this one ends and every middle card
      // is permanently mid-crossfade, so scroll never "settles" on it.
      // TRANSITION < HOLD keeps most of the scroll distance on a single
      // settled card — with TRANSITION=1/HOLD=0.5 (6 transitions), 63% of
      // the section was spent mid-crossfade, reading as cards overlapping.
      const TRANSITION = 0.5;
      const HOLD = 0.8;
      cards.forEach((card, i) => {
        if (i === 0) return;
        const at = HOLD + (i - 1) * (TRANSITION + HOLD);
        // Both cards move only a short distance during the swap: the incoming
        // one rises the last 30% into place, the outgoing one drifts 40% to
        // the left. Keeping the travel small means the two genuinely overlap
        // as a crossfade instead of one clearing the viewport (sliding fully
        // off / dropping from 1.4 screens up) before the next arrives, which
        // left a blank black band on every transition.
        tl.to(card, { yPercent: 0, opacity: 1, duration: TRANSITION, ease: "power2.out" }, at);
        tl.to(
          cards[i - 1],
          { xPercent: -40, opacity: 0, duration: TRANSITION, ease: "power2.out" },
          at
        );
      });

      // Trailing hold so the last card has a resting scroll position too —
      // without one the timeline ends the instant that card finishes fading
      // in, so the section unpins mid-reveal and the final division reads as
      // skipped.
      tl.to({}, { duration: HOLD });

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
      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 flex justify-center">
        <p className="font-mono text-xs tracking-widest text-accent-gold">
          SOFTWARE — SCROLL TO EXPLORE
        </p>
      </div>
      {/* pt-20 pushes the vertically-centred card clear of the sticky nav,
          which sits fixed over the top ~77px while this section is pinned
          and otherwise clips the card's icon tile. */}
      <div className="relative mx-auto flex h-full max-w-2xl items-center px-6 pt-20">
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
              <span className="sr-only">{name}</span>
              <span aria-hidden="true">
                <ScrambleText text={name} active={activeIndex === i} />
              </span>
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
