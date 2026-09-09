"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const particles = useMemo(() => {
    const positions = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      const angle = i * 2.399963;
      const radius = 2.1 + ((i * 17) % 23) / 11;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.8;
      positions[i * 3 + 2] = Math.sin(i * 0.9) * 1.8;
    }
    return positions;
  }, []);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += Math.min(delta, 0.04) * 0.09;
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        0.35 + state.pointer.y * 0.15,
        2,
        delta,
      );
      group.current.position.x = THREE.MathUtils.damp(
        group.current.position.x,
        state.pointer.x * 0.15,
        2,
        delta,
      );
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
    if (ring.current) ring.current.rotation.z += Math.min(delta, 0.04) * 0.03;
  });
  return (
    <>
      <group ref={group} rotation={[0.35, 0, -0.35]}>
        <mesh>
          <torusKnotGeometry args={[1.26, 0.36, 180, 18, 2, 3]} />
          <meshBasicMaterial
            color="#52e4d8"
            wireframe
            transparent
            opacity={0.44}
          />
        </mesh>
        <mesh scale={0.98}>
          <torusKnotGeometry args={[1.26, 0.36, 180, 18, 2, 3]} />
          <meshBasicMaterial color="#061817" />
        </mesh>
        <mesh rotation={[Math.PI / 2.8, 0.2, 0]}>
          <torusGeometry args={[2.1, 0.004, 6, 160]} />
          <meshBasicMaterial color="#73baae" transparent opacity={0.38} />
        </mesh>
        <mesh ref={ring} rotation={[-0.5, 0.7, 0]}>
          <torusGeometry args={[2.35, 0.003, 6, 160]} />
          <meshBasicMaterial color="#73baae" transparent opacity={0.3} />
        </mesh>
      </group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.014}
          color="#80ddcd"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
    </>
  );
}
export default function Scene({ active }: { active: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.6], fov: 44 }}
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Sculpture />
    </Canvas>
  );
}
