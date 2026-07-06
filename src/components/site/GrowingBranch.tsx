import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven organic branch that grows down the homepage background.
 * - SVG stroke-dashoffset tied to page scroll progress
 * - Small offshoots + leaf buds appear once the main branch passes them
 * - Respects prefers-reduced-motion (renders fully grown, no animation)
 * - Sits behind content (absolute inside the page wrapper, below sections)
 */
export function GrowingBranch() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<SVGPathElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [mainLen, setMainLen] = useState(0);
  const [height, setHeight] = useState(0);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);

  // Measure parent height (the homepage wrapper) + path length
  useEffect(() => {
    const el = wrapRef.current?.parentElement;
    if (!el) return;
    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (mainRef.current) setMainLen(mainRef.current.getTotalLength());
  }, [height]);

  // Scroll progress relative to the homepage wrapper
  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const tick = () => {
      const parent = wrapRef.current?.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const p = total > 0 ? scrolled / total : 1;
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // Viewbox: fixed width 400, dynamic height based on measured parent
  const W = 400;
  const H = Math.max(height, 800);

  // Build an organic meandering path with 7 "waypoints" (one per section)
  // Alternates gentle bends left/right around the horizontal centerline.
  // Coordinates are normalized to viewbox; SVG stretches to full parent.
  const cx = W / 2;
  const waypoints = [
    { x: cx, y: H * 0.02 },
    { x: cx - 70, y: H * 0.16 }, // hero -> about
    { x: cx + 80, y: H * 0.3 }, // about -> impact
    { x: cx - 60, y: H * 0.44 }, // impact -> projects (via founder)
    { x: cx + 90, y: H * 0.58 },
    { x: cx - 70, y: H * 0.72 }, // -> gallery/news
    { x: cx + 60, y: H * 0.86 },
    { x: cx, y: H * 0.98 }, // -> contact/CTA
  ];

  // Build a smooth cubic path through waypoints
  const d = buildSmoothPath(waypoints);

  // Offshoots: small side branches at specific progress thresholds
  const offshoots = [
    { at: 0.14, from: waypoints[1], dir: -1, len: 46, bud: true },
    { at: 0.28, from: waypoints[2], dir: 1, len: 52, bud: true },
    { at: 0.42, from: waypoints[3], dir: -1, len: 40, bud: false },
    { at: 0.56, from: waypoints[4], dir: 1, len: 58, bud: true },
    { at: 0.7, from: waypoints[5], dir: -1, len: 44, bud: true },
    { at: 0.84, from: waypoints[6], dir: 1, len: 48, bud: false },
  ];

  const dashOffset = reduced ? 0 : mainLen * (1 - progress);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMin slice"
        className="h-full w-full"
      >
        <g style={{ color: "hsl(var(--primary))", opacity: 0.75 }}>
          {/* Main branch */}
          <path
            ref={mainRef}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: mainLen || 1,
              strokeDashoffset: dashOffset,
              transition: reduced ? "none" : "stroke-dashoffset 120ms linear",
            }}
          />

          {/* Offshoots + buds */}
          {offshoots.map((o, i) => {
            const active = progress >= o.at;
            const grow = clamp((progress - o.at) / 0.06, 0, 1);
            const sx = o.from.x;
            const sy = o.from.y;
            const ex = sx + o.dir * o.len;
            const ey = sy + (i % 2 === 0 ? -18 : 22);
            const c1x = sx + o.dir * (o.len * 0.4);
            const c1y = sy + (i % 2 === 0 ? -6 : 10);
            const branchD = `M ${sx} ${sy} Q ${c1x} ${c1y} ${ex} ${ey}`;
            const budR = 2.6;
            return (
              <g key={i} style={{ opacity: active ? 1 : 0, transition: "opacity 260ms ease-out" }}>
                <path
                  d={branchD}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: reduced ? 0 : 100 * (1 - grow),
                    transition: reduced ? "none" : "stroke-dashoffset 200ms ease-out",
                  }}
                />
                {o.bud && (
                  <circle
                    cx={ex}
                    cy={ey}
                    r={budR}
                    fill="currentColor"
                    style={{
                      opacity: grow >= 1 ? 0.85 : 0,
                      transform: `scale(${grow >= 1 ? 1 : 0.2})`,
                      transformOrigin: `${ex}px ${ey}px`,
                      transition: "opacity 300ms ease-out, transform 300ms ease-out",
                    }}
                  />
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

// Catmull-Rom-ish smoothing into cubic Bezier commands
function buildSmoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const t = 0.22;
    const c1x = p1.x + (p2.x - p0.x) * t;
    const c1y = p1.y + (p2.y - p0.y) * t;
    const c2x = p2.x - (p3.x - p1.x) * t;
    const c2y = p2.y - (p3.y - p1.y) * t;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}
