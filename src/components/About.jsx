import React from "react";
import { ShieldCheck } from "lucide-react";

const CREDENTIALS = [
  "Network security architecture & routing (OSPF, BGP, VLANs, VPNs)",
  "Penetration testing & web vulnerability assessment",
  "PKI, encryption, and access control implementation",
  "Network traffic analysis & threat detection",
  "Phishing & social engineering defense",
];

export default function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-head">
        <div className="kicker">Who's behind Fortline</div>
        <h2 className="section-title">Real-world expertise, practical solutions</h2>
      </div>
      <div className="about-grid">
        <p className="about-text">
          Fortline is led by an IT & Cybersecurity engineer with a strong foundation in
          Information Technology and Cybersecurity, backed by hands-on freelance consulting
          experience serving businesses throughout the Denton, TX area. Every engagement is
          grounded in practical, field-tested methods rather than generic advice by bringing the
          same rigor used to secure enterprise networks to small businesses that need it most.
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
