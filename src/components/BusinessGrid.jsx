import React from "react";
import "./styles/BusinessGrid.css";

export default function BusinessGrid() {
  const businesses = [
    {
      title: "Civil Construction & Infrastructure",
      desc: "Delivering robust infrastructure projects including residential, commercial, and industrial developments, with a focus on durability, safety, and sustainability.",
    },
    {
      title: "Mechanical Engineering Solutions",
      desc: "Expertise in fabrication, erection, maintenance, and advanced mechanical works for industries such as steel, mining, and power.",
    },
    {
      title: "Industrial Works & EPC Projects",
      desc: "Specialization in large-scale Engineering, Procurement & Construction (EPC) projects across diverse sectors with turnkey execution.",
    },
    {
      title: "Turnkey Project Solutions",
      desc: "Single-window responsibility from design and engineering to commissioning and handover, ensuring efficiency and accountability.",
    },
    {
      title: "Electrical & Energy Systems",
      desc: "Complete electrical solutions — from power distribution to automation and energy-efficient systems that meet global standards.",
    },
    {
      title: "Smart IT & Digital Solutions",
      desc: "Tailored IT services, industrial automation, IoT integration, and digital transformation for smarter enterprises.",
    },
    {
      title: "Manpower Solutions & Training",
      desc: "Providing skilled, semi-skilled, and unskilled workforce supported by training, compliance, and welfare programs.",
    },
    {
      title: "Business Support & Branding",
      desc: "Corporate support in marketing, branding, documentation, and compliance services for growth-oriented businesses.",
    },
    {
      title: "Sustainability & Green Projects",
      desc: "Committed to eco-friendly construction, energy-efficient solutions, and environment-conscious practices aligned with global sustainability goals.",
    },
    {
      title: "Innovation & R&D",
      desc: "R&D driving innovation in construction techniques, industrial automation, and digital solutions.",
    },
    {
      title: "Global & Domestic Partnerships",
      desc: "Collaborating with leading industry partners to deliver world-class projects and advanced technology integration.",
    },
    {
      title: "Rural & Community Development Works",
      desc: "Initiatives that revitalize rural India through infrastructure, employment and skill development programs.",
    },
  ];

  return (
    <section className="business-section">
      {/* NO HEADING */}
      <div className="business-row">
        {businesses.map((b, index) => (
          <div className="business-card" key={index}>
            <h3 className="business-title">{b.title}</h3>
            <p className="business-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



