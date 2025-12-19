import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 78; // Height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
    setOpen(false); // Close side menu after clicking
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    // If not on landing page, navigate to it first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 300);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection("home");
    }
    setOpen(false);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="hp-navbar">
        <div className="hp-left">
          <div className="hp-ham" onClick={() => setOpen(true)}>
            <div></div><div></div><div></div>
          </div>

          <img src={logo} alt="logo" className="hp-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }} />

          <span className="hp-title" onClick={handleLogoClick} style={{ cursor: "pointer" }}>H&P PROJECTS</span>
        </div>

        <div className="hp-right">
          <a href="#careers" onClick={(e) => handleNavClick(e, "careers")}>CAREERS</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>CONTACT US</a>
        </div>
      </header>

      {/* SIDE MENU EXACT LIKE FIGMA */}
      <div className={`side-panel ${open ? "open" : ""}`}>
        <div className="side-close" onClick={() => setOpen(false)}>←</div>

        <ul className="side-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>HOME</a></li>
          <li><a href="#presence" onClick={(e) => handleNavClick(e, "presence")}>OUR PRESENCE</a></li>
          <li><a href="#business" onClick={(e) => handleNavClick(e, "business")}>OUR BUSINESS</a></li>
          <li><a href="#technology-innovation" onClick={(e) => handleNavClick(e, "technology-innovation")}>TECHNOLOGY AND INNOVATION</a></li>
          <li><a href="#full-service-supply" onClick={(e) => handleNavClick(e, "full-service-supply")}>FULL SERVICE CAPABILITY</a></li>
          <li><Link to="/awards" onClick={() => setOpen(false)}>AWARDS AND CERTIFICATES</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT US</Link></li>
        </ul>
      </div>

      {/* BLUR OVERLAY */}
      {open && <div className="side-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}