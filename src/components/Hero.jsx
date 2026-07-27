import React from "react";
import { useNavigate } from "react-router-dom";
import NetworkSignature from "./NetworkSignature.jsx";

export default function Hero({ onOpenChat }) {
  const navigate = useNavigate();

  return (
    <header className="wrap hero">
      <div>
        <div className="eyebrow">
          // SCANNING NETWORK<span className="cursor" />
        </div>
        <h1 className="headline">
          Security you can verify. <span className="accent">AI</span> you can trust.
        </h1>
        <p className="sub">
          Fortline helps Denton-area small businesses close real security gaps and adopt AI tools
          safely — without the overhead of hiring a full IT or security team.
        </p>
        <div className="hero-ctas">
          <button className="btn-amber" onClick={() => navigate("/ai-tools")}>
            Get your free readiness score
          </button>
          <button className="btn-outline" onClick={onOpenChat}>
            Talk to Fortline AI
          </button>
        </div>
      </div>
      <div className="net-wrap">
        <NetworkSignature />
      </div>
    </header>
  );
}
