"use client";

import { useEffect, useState, type RefObject } from "react";

let hardwareWebGL: Promise<boolean> | null = null;

const SOFTWARE_RENDERER = /swiftshader|llvmpipe|software|basic render/i;

// Resolves true only when WebGL is backed by a real GPU. On software
// rasterizers (SwiftShader / llvmpipe — GPU-less machines, blocklisted
// drivers, and the headless Chrome that PageSpeed Insights runs) every frame
// of our Three.js scenes is drawn on the CPU, which froze the page for tens
// of seconds. The scenes are purely decorative, so on those devices we skip
// them. The probe runs in a worker because creating a WebGL context on a
// software rasterizer can itself block the main thread for seconds.
function hasHardwareWebGL() {
  if (hardwareWebGL) return hardwareWebGL;
  hardwareWebGL = new Promise<boolean>((resolve) => {
    if (typeof Worker === "undefined" || typeof OffscreenCanvas === "undefined") {
      resolve(false);
      return;
    }
    let worker: Worker;
    try {
      worker = new Worker("/webgl-probe.js");
    } catch {
      resolve(false);
      return;
    }
    const done = (ok: boolean) => {
      worker.terminate();
      resolve(ok);
    };
    worker.onmessage = (e: MessageEvent<{ gl: boolean; renderer: string }>) =>
      done(e.data.gl && !SOFTWARE_RENDERER.test(e.data.renderer));
    worker.onerror = () => done(false);
  });
  return hardwareWebGL;
}

/**
 * Gates a decorative WebGL scene:
 * - `enabled` flips true only after the browser is idle post-load (keeps
 *   Three.js setup out of the initial load) and only on hardware WebGL.
 * - `active` is true while the container is on (or near) screen, so the
 *   render loop can be paused (`frameloop="never"`) when scrolled away.
 */
export function useSceneGate(ref: RefObject<HTMLElement | null>) {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId = 0;
    let timeoutId = 0;

    const start = () => {
      hasHardwareWebGL().then((ok) => {
        if (ok && !cancelled) setEnabled(true);
      });
    };
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(start, { timeout: 3000 });
      } else {
        timeoutId = globalThis.setTimeout(start, 1500) as unknown as number;
      }
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return { enabled, active };
}
