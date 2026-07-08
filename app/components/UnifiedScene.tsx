"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ensureGsapPlugins, gsap } from "./gsapConfig";

const NODE_COUNT = 7;

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

function Nodes({ progressRef }: { progressRef: React.RefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const coreRef = useRef<THREE.Mesh>(null);

  const basePositions = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, (_, i) => {
        const angle = (i / NODE_COUNT) * Math.PI * 2;
        const radius = 2.3;
        return new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.55,
          Math.sin(angle * 1.7) * 0.9
        );
      }),
    []
  );

  useFrame((_, delta) => {
    const progress = progressRef.current ?? 0;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (0.12 + progress * 0.25);
    }
    if (coreRef.current) {
      const s = THREE.MathUtils.lerp(0.8, 1.3, progress);
      coreRef.current.scale.setScalar(s);
    }
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const base = basePositions[i];
      const target = base.clone().lerp(new THREE.Vector3(0, 0, 0), progress * 0.85);
      mesh.position.lerp(target, 0.1);
      const scale = THREE.MathUtils.lerp(1, 0.35, progress);
      mesh.scale.setScalar(scale);
    });
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#ecca9c"
          metalness={0.85}
          roughness={0.2}
          emissive="#c98a5e"
          emissiveIntensity={0.35}
          flatShading
        />
      </mesh>
      {basePositions.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.26, 16, 16]} />
          <meshStandardMaterial
            color="#b8734a"
            metalness={0.7}
            roughness={0.3}
            emissive="#7a4a2c"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

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
      <div className="absolute inset-y-0 right-0 left-[38%]">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.6} />
          <pointLight position={[4, 3, 4]} intensity={90} color="#ecca9c" />
          <pointLight position={[-4, -2, 2]} intensity={45} color="#b8734a" />
          <Nodes progressRef={progressRef} />
        </Canvas>
      </div>

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
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stage.title}
                </h2>
                <p className="mt-4 text-lg text-muted">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
