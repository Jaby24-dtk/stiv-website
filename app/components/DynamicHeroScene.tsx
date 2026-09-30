"use client";

import dynamic from "next/dynamic";
import SceneSlot from "./SceneSlot";

// HeroScene pulls in @react-three/fiber + drei (~1MB of JS). It's a purely
// decorative, absolutely-positioned background layer with pointer-events
// disabled, so deferring it off the critical render path costs nothing
// visually but keeps it out of the JS the page needs to become interactive.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function DynamicHeroScene() {
  return (
    <SceneSlot className="pointer-events-none absolute inset-0 -z-10">
      {(active) => <HeroScene active={active} />}
    </SceneSlot>
  );
}
