"use client";

import dynamic from "next/dynamic";

// Same rationale as DynamicHeroScene: defer the Three.js bundle until after
// the critical path. UnifiedScene's own root div is `h-screen`, a fixed
// height independent of the canvas content, so there's no layout shift
// while it loads in.
const UnifiedScene = dynamic(() => import("./UnifiedScene"), { ssr: false });

export default UnifiedScene;
