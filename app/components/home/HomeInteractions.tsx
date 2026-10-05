"use client";

import { useEffect, useRef } from "react";
import { initCore, initHome, shouldEnhanceCore } from "./home-runtime";

// Wires the server-rendered homepage markup to its interactions. Renders an
// invisible anchor so it can find its .stiv-home root without global lookups.
export default function HomeInteractions() {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = anchor.current?.closest<HTMLElement>(".stiv-home");
    if (!root) return;

    const cleanupHome = initHome(root);

    let cleanupCore: (() => void) | undefined;
    let cancelled = false;
    if (shouldEnhanceCore()) {
      import("three")
        .then((THREE) => {
          if (!cancelled) cleanupCore = initCore(root, THREE);
        })
        .catch(() => {});
    }

    return () => {
      cancelled = true;
      cleanupHome();
      cleanupCore?.();
    };
  }, []);

  return <span ref={anchor} hidden />;
}
