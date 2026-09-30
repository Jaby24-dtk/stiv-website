"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 7;

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
          color="#e0e0e0"
          metalness={0.85}
          roughness={0.2}
          emissive="#2a2a2a"
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
            color="#8a8a8a"
            metalness={0.7}
            roughness={0.3}
            emissive="#1e1e1e"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function UnifiedCanvas({
  progressRef,
  active,
}: {
  progressRef: React.RefObject<number>;
  active: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={90} color="#ffffff" />
      <pointLight position={[-4, -2, 2]} intensity={45} color="#8a8a8a" />
      <Nodes progressRef={progressRef} />
    </Canvas>
  );
}
