"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.y += delta * 0.18;
    mesh.rotation.x += delta * 0.06;

    const px = (state.pointer.x - target.x) * 0.4;
    const py = (state.pointer.y - target.y) * 0.4;
    setTarget((t) => ({ x: t.x + px * delta * 2, y: t.y + py * delta * 2 }));

    mesh.rotation.z = THREE.MathUtils.lerp(
      mesh.rotation.z,
      state.pointer.x * 0.15,
      0.05
    );
    mesh.position.y = THREE.MathUtils.lerp(
      mesh.position.y,
      state.pointer.y * 0.25,
      0.05
    );
  });

  return (
    <mesh ref={meshRef} position={[1.6, 0, -1]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#b8b8b8"
        metalness={0.9}
        roughness={0.15}
        emissive="#1a1a1a"
        emissiveIntensity={0.25}
        flatShading
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[4, 4, 4]} intensity={80} color="#ffffff" />
          <pointLight position={[-4, -2, 2]} intensity={40} color="#8a8a8a" />
          <Crystal />
          <Sparkles
            count={40}
            scale={6}
            size={2}
            speed={0.3}
            opacity={0.5}
            color="#ffffff"
          />
          {/* Procedural lighting rig instead of a preset: presets fetch an
              HDR from a third-party CDN at runtime, which has been getting
              rate-limited (429) in production and taking down the WebGL
              context. This renders the same soft studio reflections with
              no network dependency. */}
          <Environment resolution={256} environmentIntensity={0.3}>
            <Lightformer
              form="rect"
              color="#ffffff"
              intensity={4}
              scale={[6, 3, 1]}
              position={[0, 3, -2]}
            />
            <Lightformer
              form="rect"
              color="#8a8a8a"
              intensity={2}
              scale={[4, 2, 1]}
              position={[-3, -1, 2]}
            />
            <Lightformer
              form="rect"
              color="#d4af6a"
              intensity={1.5}
              scale={[3, 3, 1]}
              position={[3, 0, 1]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
