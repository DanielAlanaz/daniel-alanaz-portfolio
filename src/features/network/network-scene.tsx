"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import { BufferGeometry, Float32BufferAttribute, Vector3 } from "three";
import { OrbitController } from "@/features/hero-scene/orbit-controller";
import { CanvasLifecycle } from "@/features/hero-scene/canvas-lifecycle";
import { clusters, networkEdges, type NetworkNode } from "@/content/network";

function Graph({
  nodes,
  labels,
  selected,
}: {
  nodes: NetworkNode[];
  labels: RefObject<Map<string, HTMLButtonElement>>;
  selected: string | null;
}) {
  const point = useRef(new Vector3());
  const lines = useMemo(() => {
    const positions: number[] = [];
    for (const edge of networkEdges) {
      const a = nodes.find((n) => n.id === edge.from);
      const b = nodes.find((n) => n.id === edge.to);
      if (a && b) positions.push(...a.position, ...b.position);
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);
  useEffect(() => () => lines.dispose(), [lines]);
  useFrame(({ camera, size }) => {
    for (const n of nodes) {
      const label = labels.current.get(n.id);
      if (!label) continue;
      point.current.set(...n.position).project(camera);
      label.style.left = `${(point.current.x * 0.5 + 0.5) * size.width}px`;
      label.style.top = `${(-point.current.y * 0.5 + 0.5) * size.height}px`;
      label.style.visibility =
        Math.abs(point.current.z) > 1 ? "hidden" : "visible";
    }
  });
  return (
    <>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#7e9ab2" transparent opacity={0.3} />
      </lineSegments>
      {nodes.map((n) => (
        <group key={n.id} position={n.position}>
          <mesh>
            <sphereGeometry args={[n.primary ? 0.11 : 0.065, 16, 12]} />
            <meshBasicMaterial
              color={clusters.find((c) => c.id === n.cluster)!.color}
            />
          </mesh>
          {(n.primary || n.id === selected) && (
            <mesh>
              <sphereGeometry args={[n.id === selected ? 0.3 : 0.22, 20, 12]} />
              <meshBasicMaterial
                color={clusters.find((c) => c.id === n.cluster)!.color}
                wireframe
                transparent
                opacity={n.id === selected ? 0.6 : 0.18}
              />
            </mesh>
          )}
        </group>
      ))}
    </>
  );
}

export default function NetworkScene({
  nodes,
  labels,
  selected,
  resetKey,
  visible,
  onContextChange,
}: {
  nodes: NetworkNode[];
  labels: RefObject<Map<string, HTMLButtonElement>>;
  selected: string | null;
  resetKey: number;
  visible: boolean;
  onContextChange: (ready: boolean) => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 17], fov: 43 }}
      dpr={[1, 1.5]}
      frameloop="demand"
      gl={{ alpha: true, antialias: true, powerPreference: "default" }}
    >
      <CanvasLifecycle active={visible} onContextChange={onContextChange} />
      <OrbitController
        playing={false}
        resetKey={resetKey}
        fitWidth={17}
        label="Interactive expertise network. Drag empty space or use arrow keys to rotate. Press Home to reset. Select a labeled node to explore."
      />
      <Graph nodes={nodes} labels={labels} selected={selected} />
    </Canvas>
  );
}
