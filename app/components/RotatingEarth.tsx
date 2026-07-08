"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y += delta * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.8, 28, 20]} />
        <meshBasicMaterial color="#4a4a4a" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.79, 28, 20]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.2}
          roughness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>
      <points>
        <sphereGeometry args={[1.82, 48, 32]} />
        <pointsMaterial color="#e8e8e8" size={0.02} transparent opacity={0.6} />
      </points>
    </group>
  );
}

export default function RotatingEarth() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 4]} intensity={60} color="#ffffff" />
        <pointLight position={[-4, -2, -2]} intensity={30} color="#8a8a8a" />
        <Globe />
      </Canvas>
    </div>
  );
}
