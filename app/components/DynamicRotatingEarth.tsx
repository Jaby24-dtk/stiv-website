"use client";

import dynamic from "next/dynamic";
import SceneSlot from "./SceneSlot";

// Same rationale as DynamicHeroScene: keep Three.js out of the initial bundle.
const RotatingEarth = dynamic(() => import("./RotatingEarth"), { ssr: false });

export default function DynamicRotatingEarth() {
  return (
    <SceneSlot className="pointer-events-none absolute inset-0 -z-10">
      {(active) => <RotatingEarth active={active} />}
    </SceneSlot>
  );
}
