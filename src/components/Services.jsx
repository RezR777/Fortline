import React from "react";
import { SERVICE_TIERS } from "../lib/constants.js";

export default function Services() {
  return (
    <section className="section wrap" id="services">
      <div className="section-head">
        <div className="kicker">How engagements work</div>
        <h2 className="section-title">Three steps, no long-term commitment required</h2>
      </div>
      <div className="tiers">
        {SERVICE_TIERS.map((t) => (
          <div className="tier-card" key={t.n}>
            <div className="tier-n">{t.n}</div>
            <div className="tier-name">{t.name}</div>
            <div className="tier-price">{t.price}</div>
            <div className="tier-desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
