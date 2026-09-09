"use client";
import "./network.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  Network,
  List,
  Search,
  RotateCcw,
  X,
  Move,
  Pin,
} from "lucide-react";
import {
  clusters,
  networkEdges,
  networkNodes,
  selectNodes,
  type NetworkNode,
} from "@/content/network";
const Scene = dynamic(() => import("./network-scene"), { ssr: false });

function FallbackMap({
  nodes,
  selected,
  onSelect,
}: {
  nodes: NetworkNode[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  const positions = new Map(nodes.map((node) => [node.id, node.position]));
  const mapX = (x: number) => ((x + 6) / 12) * 86 + 7;
  const mapY = (y: number) => ((4.5 - y) / 9) * 80 + 10;

  return (
    <div className="network-fallback-map">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {networkEdges.map((edge) => {
          const from = positions.get(edge.from);
          const to = positions.get(edge.to);
          if (!from || !to) return null;
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={mapX(from[0])}
              y1={mapY(from[1])}
              x2={mapX(to[0])}
              y2={mapY(to[1])}
            />
          );
        })}
      </svg>
      {nodes.map((node) => (
        <button
          key={node.id}
          className={node.primary ? "primary" : ""}
          aria-pressed={selected === node.id}
          style={
            {
              left: `${mapX(node.position[0])}%`,
              top: `${mapY(node.position[1])}%`,
              "--node-color": clusters.find(
                (cluster) => cluster.id === node.cluster,
              )!.color,
            } as CSSProperties
          }
          onClick={() => onSelect(node.id)}
        >
          <i />
          <span>{node.title}</span>
        </button>
      ))}
      <span className="fallback-map-note">INTERACTIVE MAP MODE</span>
    </div>
  );
}

class GraphBoundary extends Component<
  { children: ReactNode; fallback: ReactNode; onFailure: () => void },
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
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function NodeDetails({
  node,
  pinned,
  onClose,
}: {
  node: NetworkNode | null;
  pinned: boolean;
  onClose: () => void;
}) {
  if (!node)
    return (
      <aside className="network-detail">
        <p className="eyebrow">EXPLORE THE CONNECTIONS</p>
        <h3>
          A broad perspective.
          <br />A deeper understanding.
        </h3>
        <p>
          Hover or select a node to explore the work, skills, and thinking
          behind it.
        </p>
        <div className="network-key">
          {clusters.map((c) => (
            <span key={c.id}>
              <i style={{ background: c.color }} />
              {c.label}
            </span>
          ))}
        </div>
      </aside>
    );
  return (
    <aside
      className="network-detail"
      aria-label="Selected node details"
      aria-live="polite"
    >
      <div className="detail-top">
        <span>
          {node.kind} {pinned && <Pin size={12} />}
        </span>
        <button onClick={onClose} aria-label="Clear node selection">
          <X size={17} />
        </button>
      </div>
      <p
        className="eyebrow"
        style={{ color: clusters.find((c) => c.id === node.cluster)!.color }}
      >
        {clusters.find((c) => c.id === node.cluster)!.label}
      </p>
      <h3>{node.title}</h3>
      <p>{node.summary}</p>
      <span className="node-relationship">{node.relationship}</span>
      <ul>
        {node.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <Link className="text-link" href={node.href}>
        Explore the story <ArrowUpRight size={16} />
      </Link>
    </aside>
  );
}
export function NetworkExplorer() {
  const [view, setView] = useState<"network" | "list">("network");
  const [ready, setReady] = useState(false);
  const [cluster, setCluster] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<string | null>("quanta-ai");
  const [pinned, setPinned] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [contextReady, setContextReady] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const resetButton = useRef<HTMLButtonElement>(null);
  const labels = useRef(new Map<string, HTMLButtonElement>());
  const press = useRef<{
    timer: ReturnType<typeof setTimeout> | null;
    x: number;
    y: number;
    moved: boolean;
  }>({ timer: null, x: 0, y: 0, moved: false });
  const nodes = useMemo(
    () => selectNodes(cluster, query, view === "list" || expanded),
    [cluster, query, view, expanded],
  );
  const current = nodes.find((n) => n.id === selected) ?? null;
  useEffect(() => {
    let supported = false;
    try {
      supported = !!document.createElement("canvas").getContext("webgl2", {
        alpha: true,
        antialias: false,
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
      });
    } catch {}
    const supportFrame = requestAnimationFrame(() => {
      setReady(supported);
      if (supported) setView("network");
    });
    return () => {
      cancelAnimationFrame(supportFrame);
      if (press.current.timer) clearTimeout(press.current.timer);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSceneVisible(entry.isIntersecting),
      { rootMargin: "160px 0px" },
    );
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  const cancelPress = () => {
    if (press.current.timer) clearTimeout(press.current.timer);
    press.current.timer = null;
  };
  const select = (id: string) => {
    setSelected(id);
    setPinned(true);
    if (window.matchMedia("(max-width: 800px)").matches)
      requestAnimationFrame(() =>
        root.current
          ?.querySelector(".network-detail")
          ?.scrollIntoView({ block: "nearest", behavior: "auto" }),
      );
  };
  const reset = () => {
    setCluster("all");
    setQuery("");
    setExpanded(false);
    setSelected(null);
    setPinned(false);
    setResetKey((v) => v + 1);
  };
  const list = (
    <div className="network-list">
      {nodes.length === 0 ? (
        <p className="network-empty">
          No matches. Try another search or reset the view.
        </p>
      ) : (
        nodes.map((n) => (
          <article
            key={n.id}
            className={selected === n.id ? "selected" : ""}
            style={
              {
                "--node-color": clusters.find((c) => c.id === n.cluster)!.color,
              } as CSSProperties
            }
          >
            <button
              onClick={() => select(n.id)}
              aria-pressed={selected === n.id}
            >
              <span className="node-kind">
                {n.kind} / {clusters.find((c) => c.id === n.cluster)!.label}
              </span>
              <strong>{n.title}</strong>
              <span>{n.summary}</span>
            </button>
            <Link href={n.href}>
              Explore <ArrowUpRight size={14} />
            </Link>
          </article>
        ))
      )}
    </div>
  );
  return (
    <div
      ref={root}
      className="network-explorer"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setSelected(null);
          setPinned(false);
          resetButton.current?.focus();
        }
      }}
    >
      <div className="network-toolbar">
        <div className="network-view" role="group" aria-label="Explorer view">
          <button
            aria-pressed={view === "network"}
            onClick={() => setView("network")}
          >
            <Network size={16} />
            Network
          </button>
          <button
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
          >
            <List size={16} />
            List
          </button>
        </div>
        <label className="network-search">
          <Search size={16} />
          <span className="sr-only">Search projects and capabilities</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a project or capability…"
          />
        </label>
        <button ref={resetButton} className="network-reset" onClick={reset}>
          <RotateCcw size={15} />
          <span>Reset view</span>
        </button>
      </div>
      <div
        className="cluster-filters"
        role="group"
        aria-label="Filter expertise clusters"
      >
        <button
          aria-pressed={cluster === "all"}
          onClick={() => {
            setCluster("all");
            setPinned(false);
          }}
        >
          All connections
        </button>
        {clusters.map((c) => (
          <button
            key={c.id}
            aria-pressed={cluster === c.id}
            onClick={() => {
              setCluster(c.id);
              setPinned(false);
            }}
          >
            <i style={{ background: c.color }} />
            {c.label}
          </button>
        ))}
      </div>
      <div className={`network-body view-${view}`}>
        <div className="network-surface">
          {view === "network" && ready ? (
            <GraphBoundary
              onFailure={() => {
                setReady(false);
              }}
              fallback={
                <FallbackMap
                  nodes={nodes}
                  selected={current?.id ?? null}
                  onSelect={select}
                />
              }
            >
              <div className="network-canvas">
                <Scene
                  nodes={
                    cluster === "all" && !query.trim() ? networkNodes : nodes
                  }
                  labels={labels}
                  selected={current?.id ?? null}
                  resetKey={resetKey}
                  visible={sceneVisible}
                  onContextChange={setContextReady}
                />
                <div className="network-labels">
                  {nodes.map((n) => (
                    <button
                      key={n.id}
                      ref={(el) => {
                        if (el) labels.current.set(n.id, el);
                        else labels.current.delete(n.id);
                      }}
                      className={`graph-label ${n.primary ? "primary" : ""}`}
                      style={
                        {
                          "--node-color": clusters.find(
                            (c) => c.id === n.cluster,
                          )!.color,
                        } as CSSProperties
                      }
                      aria-pressed={selected === n.id}
                      onFocus={() => {
                        if (!pinned) setSelected(n.id);
                      }}
                      onPointerEnter={(e) => {
                        if (e.pointerType === "mouse" && !pinned)
                          setSelected(n.id);
                      }}
                      onPointerDown={(e) => {
                        if (e.pointerType !== "mouse")
                          e.currentTarget.setPointerCapture(e.pointerId);
                        cancelPress();
                        press.current = {
                          timer: null,
                          x: e.clientX,
                          y: e.clientY,
                          moved: false,
                        };
                        if (e.pointerType !== "mouse")
                          press.current.timer = setTimeout(
                            () => select(n.id),
                            450,
                          );
                      }}
                      onPointerMove={(e) => {
                        if (
                          Math.hypot(
                            e.clientX - press.current.x,
                            e.clientY - press.current.y,
                          ) > 8
                        ) {
                          press.current.moved = true;
                          cancelPress();
                        }
                      }}
                      onPointerUp={cancelPress}
                      onContextMenu={(event) => event.preventDefault()}
                      onPointerCancel={() => {
                        press.current.moved = true;
                        cancelPress();
                      }}
                      onClick={(event) => {
                        if (event.detail === 0 || !press.current.moved)
                          select(n.id);
                      }}
                    >
                      {n.title}
                      <span>{n.kind}</span>
                    </button>
                  ))}
                </div>
                {!contextReady && (
                  <div className="network-recovery-fallback">
                    <FallbackMap
                      nodes={nodes}
                      selected={current?.id ?? null}
                      onSelect={select}
                    />
                  </div>
                )}
                {nodes.length === 0 && (
                  <p className="network-empty">
                    No matching nodes. Try another search.
                  </p>
                )}
                <div className="network-overlay-caption">
                  <span>WORK & EXPERTISE / NOT A SYSTEM ARCHITECTURE</span>
                  <span>+ + +</span>
                </div>
              </div>
            </GraphBoundary>
          ) : view === "network" ? (
            <FallbackMap
              nodes={nodes}
              selected={current?.id ?? null}
              onSelect={select}
            />
          ) : (
            list
          )}
        </div>
        <NodeDetails
          node={current}
          pinned={pinned}
          onClose={() => {
            setSelected(null);
            setPinned(false);
            resetButton.current?.focus();
          }}
        />
      </div>
      <div className="network-bottom">
        <span>
          <Move size={14} />
          {view === "network"
            ? ready && contextReady
              ? "Drag empty space to rotate · Select a node to keep its details"
              : "Tap a node to explore · The map remains available while 3D recovers"
            : "Explore every project and capability"}
        </span>
        {view === "network" && (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-pressed={expanded}
          >
            {expanded ? "Show primary nodes" : "Show all nodes"}
          </button>
        )}
        <span aria-live="polite">
          {nodes.length} / {networkNodes.length} nodes
        </span>
      </div>
    </div>
  );
}
