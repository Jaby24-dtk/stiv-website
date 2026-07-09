import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;

  // ScrollTrigger measures pin/trigger positions as soon as each effect
  // mounts, but web fonts (and async-loading 3D scenes) can still reflow
  // the page afterward, leaving those measurements stale — which shows up
  // as pinned sections overlapping the content above them. Refresh once
  // fonts have actually settled to pick up the final layout.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
  window.addEventListener("load", () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };
