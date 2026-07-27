import React from "react";
import { ShieldCheck } from "lucide-react";

const CREDENTIALS = [
  "Network security & routing (OSPF, BGP, subnetting)",
  "Penetration testing & web vulnerability labs",
  "PKI, encryption, and access control",
  "Packet-level traffic analysis (Wireshark)",
  "Phishing & social engineering research",
];

export default function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-head">
        <div className="kicker">Who's behind Fortline</div>
        <h2 className="section-title">Hands-on training, real-world consulting</h2>
      </div>
      <div className="about-grid">
        <p className="about-text">
          Fortline is run by an IT and cybersecurity consultant completing a B.S. in Information
          Technology at the University of North Texas, alongside an A.A.S. in Cybersecurity from
          North Central Texas College. Every engagement draws on direct, hands-on lab work — not
          just theory — combined with real freelance IT consulting experience serving clients in
          the Denton, TX area.
        </p>
        <ul className="cred-list">
          {CREDENTIALS.map((c) => (
            <li key={c}>
              <ShieldCheck size={18} />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
