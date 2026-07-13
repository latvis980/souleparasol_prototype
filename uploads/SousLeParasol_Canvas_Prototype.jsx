import { useState, useEffect, useRef } from "react";

/**
 * SOUS LE PARASOL — Floating Canvas Prototype
 * ------------------------------------------------------------
 * A visual prototype (placeholder assets) to show the client the idea.
 *
 * Concept:
 *  - A warm-paper canvas with floating tiles (images + one video per group).
 *  - Five "summers" (groups). Their tiles are MIXED across the canvas,
 *    linked only by subtle threads.
 *  - Pick a keyword up top: that summer draws forward (gathers, sharpens,
 *    lifts) while the others blur, shrink and drift to the edges.
 *
 * Notes for porting into Replit:
 *  - No external libraries — pure React + inline styles + CSS keyframes.
 *  - The "float" animation lives on an inner wrapper and the "focus"
 *    transform on the outer wrapper, so they never fight each other.
 *  - Swap the placeholder tiles for <img>/<video> when assets are ready.
 */

// ---- Palette (from the brand: warm paper, brown-foil accent) ----
const BG = "#F1ECE4";
const INK = "#231E19";
const ACCENT = "#7A5233"; // glossy brown foil

// Per-summer tonal identity (kept quiet, all within the warm world)
const GROUPS = {
  bare:     { label: "bare",     from: "#E7DCCE", to: "#DACBB6", ink: "#6a5540" },
  green:    { label: "green",    from: "#DDE0D0", to: "#C8CFB6", ink: "#586045" },
  volcanic: { label: "volcanic", from: "#E1D6CC", to: "#CDBFB2", ink: "#5b4d43" },
  saline:   { label: "saline",   from: "#D8DCDB", to: "#C2CBCA", ink: "#4c5859" },
  shade:    { label: "shade",    from: "#D6D1CB", to: "#BFB8B0", ink: "#46413b" },
};
const ORDER = ["bare", "green", "volcanic", "saline", "shade"];

// ---- Design canvas is authored in fixed units, then scaled to fit ----
const CANVAS_W = 1200;
const CANVAS_H = 760;

// Elements interspersed across the canvas (not grouped in space).
const ELEMENTS = [
  { g: "bare",     t: "image", x: 150, y: 250, w: 210, h: 260, cap: "01 · linen" },
  { g: "bare",     t: "video", x: 770, y: 150, w: 236, h: 150, cap: "film" },
  { g: "bare",     t: "text",  x: 430, y: 480, note: "warm skin,\nfaded linen" },
  { g: "bare",     t: "image", x: 992, y: 522, w: 150, h: 120, cap: "02 · breath" },

  { g: "green",    t: "image", x: 442, y: 196, w: 210, h: 150, cap: "01 · fig" },
  { g: "green",    t: "video", x: 182, y: 560, w: 190, h: 126, cap: "film" },
  { g: "green",    t: "text",  x: 720, y: 452, note: "cut grass,\nfig leaf, shade" },
  { g: "green",    t: "image", x: 1010, y: 252, w: 150, h: 200, cap: "02 · shade" },

  { g: "volcanic", t: "image", x: 560, y: 300, w: 180, h: 236, cap: "01 · basalt" },
  { g: "volcanic", t: "video", x: 918, y: 392, w: 210, h: 140, cap: "film" },
  { g: "volcanic", t: "text",  x: 252, y: 176, note: "black sand,\nmineral heat" },
  { g: "volcanic", t: "image", x: 470, y: 612, w: 140, h: 120, cap: "02 · ash" },

  { g: "saline",   t: "image", x: 300, y: 420, w: 210, h: 140, cap: "01 · salt" },
  { g: "saline",   t: "video", x: 640, y: 560, w: 196, h: 130, cap: "film" },
  { g: "saline",   t: "text",  x: 882, y: 244, note: "sea salt on\nwet stone" },
  { g: "saline",   t: "image", x: 1032, y: 470, w: 140, h: 120, cap: "02 · spray" },

  { g: "shade",    t: "image", x: 772, y: 482, w: 180, h: 210, cap: "01 · stone" },
  { g: "shade",    t: "video", x: 362, y: 300, w: 200, h: 132, cap: "film" },
  { g: "shade",    t: "text",  x: 1000, y: 128, note: "cool interior,\nstone floor" },
  { g: "shade",    t: "image", x: 252, y: 662, w: 150, h: 100, cap: "02 · dusk" },
];

// Approx footprint for text tiles (so centroids/lines behave)
const TEXT_W = 150;
const TEXT_H = 70;

function center(el) {
  const w = el.w ?? TEXT_W;
  const h = el.h ?? TEXT_H;
  return { x: el.x + w / 2, y: el.y + h / 2 };
}

// Group centroids (for the "gather" motion + line anchoring)
const CENTROIDS = {};
ORDER.forEach((g) => {
  const pts = ELEMENTS.filter((e) => e.g === g).map(center);
  CENTROIDS[g] = {
    x: pts.reduce((s, p) => s + p.x, 0) / pts.length,
    y: pts.reduce((s, p) => s + p.y, 0) / pts.length,
  };
});

// Smooth-ish thread connecting a group's tiles (ordered by angle around centroid)
function groupPath(g) {
  const c = CENTROIDS[g];
  const pts = ELEMENTS.filter((e) => e.g === g)
    .map(center)
    .sort((a, b) => Math.atan2(a.y - c.y, a.x - c.x) - Math.atan2(b.y - c.y, b.x - c.x));
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const mx = (p0.x + p1.x) / 2;
    const my = (p0.y + p1.y) / 2;
    // gentle bow toward the centroid
    const cx = mx + (c.x - mx) * 0.25;
    const cy = my + (c.y - my) * 0.25;
    d += ` Q ${cx} ${cy} ${p1.x} ${p1.y}`;
  }
  return d;
}

export default function SousLeParasolCanvas() {
  const [selected, setSelected] = useState(null);
  const [scale, setScale] = useState(1);
  const wrapRef = useRef(null);

  // Fit the fixed design canvas to the available width
  useEffect(() => {
    const fit = () => {
      const w = wrapRef.current?.clientWidth ?? CANVAS_W;
      setScale(Math.min(Math.max(w / CANVAS_W, 0.34), 1.25));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  // Focus / recede state for each element
  const stateFor = (el) => {
    const c = center(el);
    if (selected === null) {
      return { tx: 0, ty: 0, s: 1, blur: 0, op: 0.94, z: 10 };
    }
    if (el.g === selected) {
      const gc = CENTROIDS[el.g];
      return {
        tx: (gc.x - c.x) * 0.16, // gather toward the summer's centroid
        ty: (gc.y - c.y) * 0.16,
        s: 1.07,
        blur: 0,
        op: 1,
        z: 60,
      };
    }
    // recede: drift outward from canvas center, shrink, blur, fade
    return {
      tx: (c.x - CANVAS_W / 2) * 0.11,
      ty: (c.y - CANVAS_H / 2) * 0.11,
      s: 0.85,
      blur: 4.5,
      op: 0.3,
      z: 4,
    };
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", width: "100%", color: INK, fontFamily: "'Space Mono', ui-monospace, 'Courier New', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes floatA { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(6px,-9px) rotate(0.4deg)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-7px,7px) rotate(-0.5deg)} }
        @keyframes floatC { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(5px,8px) rotate(0.3deg)} }
        @keyframes floatD { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-6px,-6px) rotate(-0.3deg)} }
        @keyframes sheen { 0%{background-position:-160% 0} 100%{background-position:260% 0} }
        .slp-key { transition: color .4s ease, opacity .4s ease; cursor: pointer; background: none; border: none; padding: 0; }
        .slp-key:focus-visible { outline: 1.5px solid ${ACCENT}; outline-offset: 4px; }
        @media (prefers-reduced-motion: reduce) {
          .slp-float { animation: none !important; }
        }
      `}</style>

      {/* Top bar: wordmark + keyword selectors */}
      <div style={{ position: "sticky", top: 0, zIndex: 200, padding: "22px 30px 18px", display: "flex", flexWrap: "wrap", gap: "18px 34px", alignItems: "baseline", justifyContent: "space-between", background: `linear-gradient(${BG} 62%, rgba(241,236,228,0))` }}>
        <div>
          <div style={{ fontWeight: 700, letterSpacing: "0.34em", fontSize: 15 }}>SOUS LE PARASOL</div>
          <div style={{ fontSize: 10.5, letterSpacing: "0.22em", opacity: 0.5, marginTop: 4 }}>EAU DE PARFUM · FIVE SUMMERS</div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px 16px" }}>
          <span style={{ fontSize: 11.5, letterSpacing: "0.16em", opacity: 0.5, marginRight: 4 }}>when summer is —</span>
          {ORDER.map((g) => {
            const on = selected === g;
            return (
              <button
                key={g}
                className="slp-key"
                onClick={() => setSelected(on ? null : g)}
                aria-pressed={on}
                style={{
                  fontFamily: "inherit",
                  fontSize: 15,
                  letterSpacing: "0.08em",
                  color: on ? ACCENT : INK,
                  opacity: selected === null ? 0.85 : on ? 1 : 0.34,
                  fontWeight: on ? 700 : 400,
                  borderBottom: on ? `1.5px solid ${ACCENT}` : "1.5px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {GROUPS[g].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* The canvas */}
      <div ref={wrapRef} style={{ position: "relative", width: "100%", height: CANVAS_H * scale, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>

          {/* Connecting threads (per group) */}
          <svg width={CANVAS_W} height={CANVAS_H} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
            {ORDER.map((g) => {
              const on = selected === g;
              const dim = selected !== null && !on;
              return (
                <path
                  key={g}
                  d={groupPath(g)}
                  fill="none"
                  stroke={on ? ACCENT : INK}
                  strokeWidth={on ? 1.1 : 0.8}
                  strokeOpacity={on ? 0.55 : dim ? 0.04 : 0.13}
                  style={{ transition: "stroke-opacity .8s ease, stroke .8s ease" }}
                />
              );
            })}
          </svg>

          {/* Floating tiles */}
          {ELEMENTS.map((el, i) => {
            const st = stateFor(el);
            const gp = GROUPS[el.g];
            const floatName = ["floatA", "floatB", "floatC", "floatD"][i % 4];
            const dur = 11 + (i % 5) * 1.6;
            const delay = (i % 7) * 0.7;

            return (
              <div
                key={i}
                onClick={() => setSelected(selected === el.g ? null : el.g)}
                style={{
                  position: "absolute",
                  left: el.x,
                  top: el.y,
                  width: el.w ?? TEXT_W,
                  zIndex: st.z,
                  cursor: "pointer",
                  transform: `translate(${st.tx}px, ${st.ty}px) scale(${st.s})`,
                  filter: st.blur ? `blur(${st.blur}px)` : "none",
                  opacity: st.op,
                  transition: "transform .95s cubic-bezier(.22,.61,.36,1), filter .8s ease, opacity .8s ease",
                }}
              >
                <div className="slp-float" style={{ animation: `${floatName} ${dur}s ease-in-out ${delay}s infinite` }}>
                  {el.t === "text" ? (
                    <div style={{ whiteSpace: "pre-line", fontSize: 13, lineHeight: 1.5, letterSpacing: "0.03em", color: gp.ink }}>
                      {el.note}
                    </div>
                  ) : (
                    <div
                      style={{
                        width: el.w,
                        height: el.h,
                        background: `linear-gradient(150deg, ${gp.from}, ${gp.to})`,
                        boxShadow: "0 18px 40px -28px rgba(35,30,25,0.55)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* subtle sheen to hint that video tiles are "alive" */}
                      {el.t === "video" && (
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)", backgroundSize: "220% 100%", animation: "sheen 6s linear infinite" }} />
                      )}
                      {/* caption */}
                      <div style={{ position: "absolute", left: 10, bottom: 8, fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase", color: gp.ink, opacity: 0.72 }}>
                        {el.cap}
                      </div>
                      {/* play glyph for video */}
                      {el.t === "video" && (
                        <div style={{ position: "absolute", top: 10, right: 12, display: "flex", alignItems: "center", gap: 5, fontSize: 9.5, letterSpacing: "0.14em", color: gp.ink, opacity: 0.8 }}>
                          <svg width="9" height="10" viewBox="0 0 9 10"><path d="M0 0 L9 5 L0 10 Z" fill={gp.ink} /></svg>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* paper grain */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* footer hint */}
      <div style={{ padding: "16px 30px 30px", fontSize: 11, letterSpacing: "0.12em", opacity: 0.45 }}>
        {selected ? `↑ ${GROUPS[selected].label} — the others rest. tap the word again to release.` : "tap a summer to draw its story forward."}
      </div>
    </div>
  );
}
