import React from "react";
import { TOKENS } from "../lib/constants.js";

export default function NetworkSignature() {
  const nodes = [
    { x: 40, y: 40, label: "Router" },
    { x: 160, y: 20, label: "Workstations" },
    { x: 160, y: 100, label: "IoT" },
    { x: 280, y: 60, label: "Cloud" },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];

  return (
    <svg viewBox="0 0 340 140" className="net-svg" role="img" aria-label="Animated network security scan">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={TOKENS.panelBorder}
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="7" fill={TOKENS.amber} className="node-base" />
          <circle
            cx={n.x}
            cy={n.y}
            r="7"
            fill={TOKENS.teal}
            className="node-lit"
            style={{ animationDelay: `${0.9 + i * 0.35}s` }}
          />
          <text x={n.x} y={n.y - 14} fontSize="9" fill={TOKENS.fog} textAnchor="middle" fontFamily="var(--font-mono)">
            {n.label}
          </text>
        </g>
      ))}
      <rect className="scan-bar" x="-20" y="0" width="20" height="140" fill={TOKENS.teal} opacity="0.18" />
    </svg>
  );
}
