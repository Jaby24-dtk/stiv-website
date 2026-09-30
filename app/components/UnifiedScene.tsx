"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ensureGsapPlugins, gsap } from "./gsapConfig";
import SceneSlot from "./SceneSlot";

// The Three.js node graph is its own lazy chunk, only fetched once
// SceneSlot decides this device should render 3D (see useSceneGate).
const UnifiedCanvas = dynamic(() => import("./UnifiedCanvas"), { ssr: false });

const stages = [
  {
    eyebrow: "STIV UNIFIED",
    title: "Seven systems.",
    body: "Executive, Sales, Marketing, Finance, Operations, Legal, Support — each running independently today.",
  },
  {
    eyebrow: "STIV UNIFIED",
    title: "One command layer.",
    body: "Every division fused into a single exclusive assistant, briefed on everything, answerable only to you.",
  },
  {
    eyebrow: "STIV UNIFIED",
    title: "Trained on your business.",
    body: "Custom-trained on your data, your brand voice, and your approval gates — not a generic model.",
  },
  {
    eyebrow: "STIV UNIFIED",
    title: "One point of accountability.",
    body: "Dedicated infrastructure, white-glove onboarding, and a single team accountable across your company.",
  },
];

export default function UnifiedScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const stageEls = stageRefs.current.filter(Boolean) as HTMLDivElement[];
      stageEls.forEach((el, i) => {
        gsap.set(el, { opacity: i === stages.length - 1 ? 1 : 0 });
      });
      return;
    }

    ensureGsapPlugins();

    const ctx = gsap.context(() => {
      const stageEls = stageRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(stageEls, { opacity: 0, y: 16 });
      gsap.set(stageEls[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${stages.length * 90}%`,
          scrub: 0.6,
          fastScrollEnd: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
          },
        },
      });

      stageEls.forEach((el, i) => {
        if (i === 0) return;
        const at = i - 0.4;
        tl.to(stageEls[i - 1], { opacity: 0, y: -16, duration: 0.6 }, at);
        tl.fromTo(
          el,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, immediateRender: false },
          at + 0.1
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen overflow-hidden border-t border-white/10 bg-background"
    >
      <SceneSlot className="absolute inset-y-0 right-0 left-[38%]">
        {(active) => <UnifiedCanvas progressRef={progressRef} active={active} />}
      </SceneSlot>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

      <div className="pointer-events-none relative flex h-full items-center px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative max-w-lg">
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                ref={(el) => {
                  stageRefs.current[i] = el;
                }}
                className="absolute inset-0"
              >
                <p className="font-mono text-xs tracking-widest text-accent-gold">
                  {stage.eyebrow}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stage.title}
                </h2>
                <p className="mt-4 text-xl text-muted">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
