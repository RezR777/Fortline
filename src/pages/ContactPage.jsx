import React from "react";
import { Mail, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";
import { TOKENS } from "../lib/constants.js";

export default function ContactPage({ onOpenChat }) {
  return (
    <div className="page-pad wrap contact-page">
      <div className="section-head">
        <div className="kicker">Get in touch</div>
        <h2 className="section-title">Let's fix your tech</h2>
      </div>
      <p className="about-text" style={{ maxWidth: 560, marginBottom: 32 }}>
        Reach out directly, or get an instant answer from the Fortline AI assistant if you just
        have a quick question about services or pricing.
      </p>
      <div className="contact-grid">
        <a className="contact-card" href="mailto:amir9Rah@gmail.com">
          <Mail size={20} color={TOKENS.teal} />
          <div>
            <div className="contact-card-label">Email</div>
            <div className="contact-card-value">amir9Rah@gmail.com</div>
          </div>
        </a>
        <div className="contact-card">
          <MapPin size={20} color={TOKENS.teal} />
          <div>
            <div className="contact-card-label">Service area</div>
            <div className="contact-card-value">Shady Shores, TX — serving DFW, remote & on-site</div>
          </div>
        </div>
        <a className="contact-card" href="https://github.com/RezR777" target="_blank" rel="noreferrer">
          <Github size={20} color={TOKENS.teal} />
          <div>
            <div className="contact-card-label">GitHub</div>
            <div className="contact-card-value">github.com/RezR777</div>
          </div>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/amir-reza-rahimi-09289423b/" target="_blank" rel="noreferrer">
          <Linkedin size={20} color={TOKENS.teal} />
          <div>
            <div className="contact-card-label">LinkedIn</div>
            <div className="contact-card-value">Connect on LinkedIn</div>
          </div>
        </a>
      </div>
      <button className="btn-outline" style={{ marginTop: 28 }} onClick={onOpenChat}>
        <MessageCircle size={14} style={{ marginRight: 6, verticalAlign: "-2px" }} />
        Talk to Fortline AI instead
      </button>
    </div>
  );
}
