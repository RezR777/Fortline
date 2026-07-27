import React from "react";
import { TOKENS } from "../lib/constants.js";

export default function ScoreRing({ score }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const color = score >= 75 ? TOKENS.teal : score >= 45 ? TOKENS.amber : TOKENS.red;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r={r} fill="none" stroke={TOKENS.panelBorder} strokeWidth="10" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - (c * score) / 100}
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 1s ease" }}
      />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fontSize="26"
        fontWeight="600"
        fill={TOKENS.paper}
        fontFamily="var(--font-mono)"
      >
        {score}
      </text>
    </svg>
  );
}
