import React from "react";
import { images } from "@/data/images";

// Render static impact distribution visual provided as an image
export function VisualWaste() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-secondary" />
      <img
        src={images.visuals.wasteImpactDistribution}
        alt="Impact Distribution"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export function VisualWomen() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute right-[-20%] top-[-10%] h-[70%] w-[70%] rounded-full bg-accent/30 blur-2xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 480">
        <defs>
          <pattern id="weave" width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M0 7 H14 M7 0 V14" stroke="#38C172" strokeOpacity="0.35" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="400" height="480" fill="url(#weave)" />
      </svg>
      {/* three silhouettes */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 240" fill="#F5F5F0">
        {[80, 200, 320].map((cx, i) => (
          <g key={i} transform={`translate(${cx} 240)`}>
            <circle cx="0" cy="-150" r="28" />
            <path d={`M -40 0 Q 0 -120, 40 0 Z`} />
          </g>
        ))}
      </svg>
      <p className="absolute left-6 top-6 eyebrow text-accent">Artisans · UP</p>
    </div>
  );
}

export function VisualCircular() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-background" />
      <svg viewBox="0 0 400 480" className="absolute inset-0 h-full w-full">
        <g stroke="#103B2D" fill="none" strokeWidth="1">
          {Array.from({ length: 7 }).map((_, i) => (
            <circle key={i} cx="200" cy="240" r={40 + i * 28} opacity={0.15 + i * 0.05} />
          ))}
        </g>
        <g>
          {[0, 90, 180, 270].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 240)`}>
              <circle cx="200" cy="40" r="14" fill="#38C172" />
            </g>
          ))}
        </g>
        <circle cx="200" cy="240" r="34" fill="#103B2D" />
        <text x="200" y="246" textAnchor="middle" fill="#F5F5F0" fontFamily="General Sans" fontSize="14" fontWeight="600">
          LOOP
        </text>
      </svg>
    </div>
  );
}

export function VisualEPR() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-secondary" />
      <svg viewBox="0 0 400 480" className="absolute inset-0 h-full w-full">
        {/* Grid blocks */}
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => {
            const filled = (r + c) % 3 === 0;
            return (
              <rect
                key={`${r}-${c}`}
                x={20 + c * 72}
                y={40 + r * 68}
                width={56}
                height={52}
                fill={filled ? "#103B2D" : "transparent"}
                stroke="#103B2D"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
            );
          }),
        )}
      </svg>
      <div className="absolute bottom-6 right-6 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
        Compliance
      </div>
    </div>
  );
}
