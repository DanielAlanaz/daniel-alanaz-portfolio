"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/** Keep a mounted R3F canvas recoverable across viewport and WebGL lifecycle changes. */
export function CanvasLifecycle({
  active,
  onContextChange,
}: {
  active: boolean;
  onContextChange: (ready: boolean) => void;
}) {
  const { gl, invalidate } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    const handleLost = (event: Event) => {
      event.preventDefault();
      onContextChange(false);
    };
    const handleRestored = () => {
      onContextChange(true);
      invalidate();
    };

    canvas.addEventListener("webglcontextlost", handleLost);
    canvas.addEventListener("webglcontextrestored", handleRestored);
    return () => {
      canvas.removeEventListener("webglcontextlost", handleLost);
      canvas.removeEventListener("webglcontextrestored", handleRestored);
    };
  }, [gl, invalidate, onContextChange]);

  useEffect(() => {
    if (!active) return;
    const frame = requestAnimationFrame(() => invalidate());
    return () => cancelAnimationFrame(frame);
  }, [active, invalidate]);

  return null;
}
