import React from "react";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { TOKENS } from "../lib/constants.js";

export default function Footer() {
  return (
    <footer className="wrap footer">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <MapPin size={15} color={TOKENS.teal} /> Shady Shores, TX — serving DFW, remote & on-site
      </div>
      <div className="footer-links">
        <a href="mailto:amir9Rah@gmail.com">
          <Mail size={15} />
          amir9Rah@gmail.com
        </a>
        <a href="https://github.com/RezR777" target="_blank" rel="noreferrer">
          <Github size={15} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/amir-reza-rahimi-09289423b/" target="_blank" rel="noreferrer">
          <Linkedin size={15} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
