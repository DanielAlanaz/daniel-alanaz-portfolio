"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Spherical, Vector3 } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/** Keep camera interaction separate from the sculpture's ambient motion. */
export function OrbitController({
  playing,
  resetKey,
  fitWidth,
  label = "Interactive 3D sculpture. Drag to rotate, or use arrow keys when focused. Press Home to reset.",
}: {
  playing: boolean;
  resetKey: number;
  fitWidth?: number;
  label?: string;
}) {
  const { camera, gl, invalidate, size } = useThree();
  const controls = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const canvas = gl.domElement;
    if (fitWidth)
      camera.position.set(
        0,
        0,
        Math.max(
          17,
          fitWidth /
            (2 * Math.tan((43 * Math.PI) / 360) * (size.width / size.height)),
        ),
      );
    const orbit = new OrbitControls(camera, canvas);
    orbit.enablePan = false;
    orbit.enableZoom = false;
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.075;
    orbit.rotateSpeed = 0.65;
    orbit.autoRotateSpeed = 0.35;
    orbit.minPolarAngle = 0.25;
    orbit.maxPolarAngle = Math.PI - 0.25;
    orbit.saveState();
    controls.current = orbit;
    canvas.setAttribute("tabindex", "0");
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", label);
    const start = () => {
      canvas.setAttribute("data-dragging", "true");
      canvas.focus({ preventScroll: true });
    };
    const end = () => {
      canvas.removeAttribute("data-dragging");
    };
    const keydown = (event: KeyboardEvent) => {
      if (
        !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(
          event.key,
        )
      )
        return;
      event.preventDefault();
      if (event.key === "Home") orbit.reset();
      else {
        const offset = new Vector3().subVectors(camera.position, orbit.target);
        const spherical = new Spherical().setFromVector3(offset);
        const step = 0.16;
        if (event.key === "ArrowLeft") spherical.theta -= step;
        if (event.key === "ArrowRight") spherical.theta += step;
        if (event.key === "ArrowUp") spherical.phi -= step;
        if (event.key === "ArrowDown") spherical.phi += step;
        spherical.phi = MathUtils.clamp(
          spherical.phi,
          orbit.minPolarAngle,
          orbit.maxPolarAngle,
        );
        camera.position
          .copy(orbit.target)
          .add(offset.setFromSpherical(spherical));
        orbit.update();
      }
      invalidate();
    };
    const redraw = () => invalidate();
    orbit.addEventListener("change", redraw);
    orbit.addEventListener("start", start);
    orbit.addEventListener("end", end);
    canvas.addEventListener("keydown", keydown);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("lostpointercapture", end);
    return () => {
      orbit.removeEventListener("change", redraw);
      orbit.removeEventListener("start", start);
      orbit.removeEventListener("end", end);
      canvas.removeEventListener("keydown", keydown);
      canvas.removeEventListener("pointercancel", end);
      canvas.removeEventListener("lostpointercapture", end);
      orbit.dispose();
      controls.current = null;
      canvas.removeAttribute("data-dragging");
    };
  }, [camera, gl, invalidate, label, fitWidth, size.width, size.height]);

  useEffect(() => {
    controls.current?.reset();
    invalidate();
  }, [resetKey, invalidate]);
  useFrame((_, delta) => {
    if (!controls.current) return;
    controls.current.autoRotate = playing;
    controls.current.update(Math.min(delta, 0.04));
  });
  return null;
}
