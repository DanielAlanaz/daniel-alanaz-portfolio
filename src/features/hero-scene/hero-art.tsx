"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play, RotateCcw, Move } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
const Scene = dynamic(() => import("./scene"), { ssr: false });

class SceneBoundary extends Component<
  { children: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export function HeroArt() {
  const container = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);
  const [contextReady, setContextReady] = useState(true);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const sculptureY = useTransform(progress, [0, 1], [0, 48]);
  const backgroundY = useTransform(progress, [0, 1], [0, -24]);
  useEffect(() => {
    const canvas = document.createElement("canvas");
    let available = false;
    try {
      available = !!canvas.getContext("webgl2", {
        alpha: true,
        antialias: false,
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
      });
    } catch {
      available = false;
    }
    const supportFrame = requestAnimationFrame(() => setSupported(available));
    let visible = false;
    const sync = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    if (container.current) observer.observe(container.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(supportFrame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return (
    <div
      ref={container}
      className={`hero-art ${supported && contextReady ? "has-webgl" : "is-fallback"}`}
    >
      <div className="art-coordinate coordinate-top">
        FIG. 001 <span>CONNECTED THINKING</span>
      </div>
      <motion.div
        className="scene-fallback"
        aria-hidden="true"
        style={{ y: reducedMotion ? 0 : backgroundY }}
      >
        <svg viewBox="0 0 600 600">
          <defs>
            <radialGradient id="sceneGlow">
              <stop stopColor="#153f3c" stopOpacity=".8" />
              <stop offset="1" stopColor="#090e10" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="265" fill="url(#sceneGlow)" />
          <g fill="none" stroke="#42a89e" strokeWidth=".5" opacity=".28">
            {Array.from({ length: 18 }, (_, i) => (
              <ellipse
                key={i}
                cx="300"
                cy="300"
                rx="180"
                ry="75"
                transform={`rotate(${i * 10} 300 300)`}
              />
            ))}
          </g>
        </svg>
      </motion.div>
      {supported && (
        <motion.div
          className="canvas-layer"
          style={{ y: reducedMotion ? 0 : sculptureY }}
          aria-hidden={!active}
        >
          <SceneBoundary onFailure={() => setSupported(false)}>
            <Scene
              active={active && !paused && !reducedMotion}
              resetKey={resetKey}
              onContextChange={setContextReady}
            />
          </SceneBoundary>
        </motion.div>
      )}
      <div className="art-coordinate coordinate-bottom">
        <span className="scene-hint">
          {supported ? (
            <>
              <Move size={13} /> DRAG TO ROTATE
            </>
          ) : (
            "REAL-TIME / THREE.JS"
          )}
        </span>
        {supported && (
          <div className="scene-actions">
            <button
              onClick={() => setResetKey((value) => value + 1)}
              aria-label="Reset sculpture view"
              title="Reset view (Home)"
            >
              <RotateCcw size={13} />
            </button>
            <button
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
            >
              {paused ? <Play size={12} /> : <Pause size={12} />}
              {paused ? "PLAY" : "PAUSE"}
            </button>
          </div>
        )}
      </div>
      <span className="art-axis" aria-hidden="true">
        +<br />│<br />
        └── +
      </span>
    </div>
  );
}
