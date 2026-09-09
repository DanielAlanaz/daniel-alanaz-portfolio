"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
const Scene = dynamic(() => import("./scene"), { ssr: false });

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export function HeroArt() {
  const container = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canvas = document.createElement("canvas");
    let available = false;
    try {
      const gl = canvas.getContext("webgl2");
      available = !!gl;
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      available = false;
    }
    const update = () => setSupported(available && !media.matches);
    update();
    media.addEventListener("change", update);
    let visible = false;
    const sync = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    if (container.current) observer.observe(container.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return (
    <div ref={container} className="hero-art">
      <div className="art-coordinate coordinate-top">
        FIG. 001 <span>CONNECTED THINKING</span>
      </div>
      <div className="scene-fallback" aria-hidden="true">
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
      </div>
      {supported && (
        <div className="canvas-layer" aria-hidden="true">
          <SceneBoundary>
            <Scene active={active && !paused} />
          </SceneBoundary>
        </div>
      )}
      <div className="art-coordinate coordinate-bottom">
        <span>REAL-TIME / THREE.JS</span>
        {supported && (
          <button
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
            {paused ? "PLAY" : "PAUSE"}
          </button>
        )}
      </div>
      <span className="art-axis" aria-hidden="true">
        +<br />│<br />
        └── +
      </span>
    </div>
  );
}
