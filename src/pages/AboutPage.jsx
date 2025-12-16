import React, { useState } from "react";
import "./styles/AboutPage.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import maskImage from "../assets/Mask.jpg";

export default function About() {
  const cards = [
    {
      id: 1,
      title: "Our Facility",
      para:
        "State-of-the-art infrastructure equipped to deliver integrated civil, mechanical, electrical, IT, and manpower solutions across India."
    },
    {
      id: 2,
      title: "Full-Service Supplier",
      para:
        "One partner, many solutions — engineering, IT, manpower, and business support services, all tailored for client success."
    },
    {
      id: 3,
      title: "The Largest Repository",
      para:
        "A strong pool of skilled, semi-skilled, and unskilled manpower, backed by on-site training and compliance, ready for diverse industries."
    },

    // ⭐ CARD 4 — HOVER CARD (Committed → Green Works)
    {
      id: 4,
      title: "Committed to Community",
      para:
        "Committed to eco-friendly practices, sustainable construction, and clean technologies, we build with responsibility towards the environment."
    },

    {
      id: 5,
      title: "Our R & D Facility",
      para:
        "A dedicated Research & Development wing focused on innovation, smart technologies, and sustainable solutions, driving continuous improvement in every project."
    },
    {
      id: 6,
      title: "Diversified Business",
      para:
        "From turnkey construction and industrial works to electrical systems, IT solutions, and workforce services, we cater to multiple sectors under one roof."
    },
    {
      id: 7,
      title: "Trusted Excellence",
      para:
        "Built on expertise, innovation, and reliability, our projects stand as proof of safe, sustainable, and timely delivery."
    },
    {
      id: 8,
      title: "Revitalizing Rural India",
      para:
        "Through employment, training, and infrastructure development, we actively contribute to rural upliftment and inclusive growth."
    },
    {
      id: 9,
      title: "Industry Pioneer",
      para:
        "Pushing boundaries with cutting-edge technologies and integrated approaches, we set benchmarks for modern engineering and business solutions."
    },
    {
      id: 10,
      title: "The Exporter",
      para:
        "Expanding our footprint with export-ready services and solutions, we aim to represent Indian excellence on a global stage."
    },

    // ⭐ CARD 11 — NO HOVER, CSR TEXT
    {
      id: 11,
      title: "Committed to Community",
      para:
        "Our business goes beyond profits—CSR initiatives, skill development, and social programs reflect our dedication to people and progress."
    },

    {
      id: 12,
      title: "Global Leader",
      para:
        "With a vision to compete internationally, we combine global standards with local expertise to create impactful solutions."
    }
  ];

  return (
    <>
      <Header />
      <div id="about" className="about-page-wrapper"> 
        <div className="about-wrapper">
          <div className="about-hero">
            <img src={maskImage} alt="hero" className="about-hero-img" />
          </div>

          {/* TITLE + BUBBLES */}
          <div className="about-heading-row">
            <div className="about-title">
              <span className="about-title-big">A</span>
              <span className="about-title-small">BOUT US</span>
            </div>

            <div className="about-bubbles">
              <div className="bubble-large"></div>
              <div className="bubble-small"></div>
            </div>
          </div>

          {/* LINES */}
          <div className="about-lines-figma">
            <div className="figma-line-upper"></div>
            <div className="figma-line-lower"></div>
          </div>

          {/* GRID */}
          <div className="about-grid">
            {cards.map((c) => (
              <Card key={c.id} id={c.id} title={c.title} para={c.para} />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* UPDATED CARD COMPONENT */
function Card({ id, title, para }) {
  const [hover, setHover] = useState(false);

  // ⭐ Only card with ID = 4 changes to "Green Works" on hover
  const finalTitle = id === 4 && hover ? "Green Works" : title;

  // ⭐ Paragraph never changes
  const finalPara = para;

  return (
    <div
      className={`about-card ${hover ? "hovered" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="card-title">{finalTitle}</h3>
      <p className="card-para">{finalPara}</p>
    </div>
  );
}
