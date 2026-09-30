"use client";

import { useRef, type ReactNode } from "react";
import { useSceneGate } from "./useSceneGate";

// Positioned placeholder for a decorative WebGL scene. The scene's children
// (normally a next/dynamic import) only mount once useSceneGate enables them,
// so the Three.js chunk isn't even downloaded on devices that skip 3D.
export default function SceneSlot({
  className,
  children,
}: {
  className: string;
  children: (active: boolean) => ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, active } = useSceneGate(ref);

  return (
    <div ref={ref} className={className}>
      {enabled && children(active)}
    </div>
  );
}
