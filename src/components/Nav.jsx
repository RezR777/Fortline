import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-dot" />FORTLINE
        </Link>
        <div className="nav-links">
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>
          <NavLink to="/ai-tools" className={({ isActive }) => (isActive ? "active" : "")}>
            AI Tools
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>
        <button className="btn-amber" onClick={() => navigate("/ai-tools")}>
          Get your score
        </button>
      </div>
    </nav>
  );
}
