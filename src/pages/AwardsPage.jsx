import React from "react";
import "./styles/AwardsPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Award Images
import award1 from "../assets/1.png";
import award2 from "../assets/2.png";
import award3 from "../assets/3.png";
import award4 from "../assets/4.png";
import award5 from "../assets/5.png";


const awards = [
  {
    title: (
      <>
        Excellence in<br />
        Project Execution<br />
        Award
      </>
    ),
    img: award1,
    desc:
      "Recognized nationally for delivering complex turnkey and industrial projects with precision, on time, and under budget.",
  },
  {
    title: (
      <>
        Innovation &<br />
        Green Building<br />
        Award
      </>
    ),
    img: award2,
    desc:
      "Honored for integrating sustainable, smart IT integration, and eco-friendly design into our projects.",
  },
  {
    title: (
      <>
        Safety &<br />
        Compliance<br />
        Leadership Award
      </>
    ),
    img: award3,
    desc:
      "Acknowledged for maintaining high safety standards, regulatory compliance, and workforce welfare across all operations.",
  },
  {
    title: (
      <>
        Community &<br />
        Rural Upliftment<br />
        Recognition
      </>
    ),
    img: award4,
    desc:
      "Applauded for efforts in rural development, job creation, skill training, and contributions to local infrastructure.",
  },
  {
    title: (
      <>
        Quality &<br />
        Standards<br />
        Distinction
      </>
    ),
    img: award5,
    desc:
      "Certified and awarded for maintaining ISO and Statutory certifications, trade license, GST, EPF/ESI compliance, achieving superior quality in all deliverables.",
  },
];

const certifications = [
  {
    title: "ISO 9001",
    desc: "H&P Projects is proud to have earned recognition for excellence, innovation, and impact across its services. Our commitment to quality, safety, sustainability, and service has been acknowledged through multiple awards.",
  },
  {
    title: "ISO 45001",
    desc: "Occupational Health & Safety: Guarantees safe working environments and adherence to strict safety protocols.",
  },
  {
    title: "ISO 14001",
    desc: "Environmental Management System: Promotes eco-friendly practices and responsible use of resources.",
  },
  {
    title: "CE / BIS / Local Regulatory Certifications",
    desc: "Compliance for electrical systems, IT solutions, and industrial equipment.",
  },
  {
    title: "Labour Law Compliance Certificates",
    desc: "Covering fair employment practices, worker welfare, and on-site training.",
  },
  {
    title: "Trade License",
    desc: "Authorizing H & P Projects to operate with full legal and municipal compliance.",
  },
  {
    title: "GST Registration",
    desc: "Enabling transparent business operations under India's Goods & Services Tax system.",
  },
  {
    title: "EPF & ESI Certificates",
    desc: "Ensuring social security, employee welfare, and statutory compliance for our workforce.",
  },
];

function AwardCard({ award }) {
  return (
    <div className="award-card">
      <div className="award-content">
        <p className="award-title">{award.title}</p>
        <p className="award-desc">{award.desc}</p>
      </div>
      <img src={award.img} alt="Award" className="award-img" />
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <div className="certificate-card">
      <h3 className="certificate-title">{certificate.title}</h3>
      <p className="certificate-desc">{certificate.desc}</p>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <>
      <div id="awards" className="awards-page-wrapper">
        <div className="awards-wrapper">
          <Header />
          <section className="hp-hero">
            <div className="awards-title-group">
              <h1 className="awards-A">A</h1>
              <h1 className="awards-WARDS">WARDS</h1>
            </div>
            {/* Right-side big + small Figma bubbles */}
            <div className="cert-bubble-right"></div>
            <div className="cert-bubble-right-small"></div>
            <div className="awards-line-small"></div>
            <div className="awards-line-big"></div>
            <p className="awards-hero-desc">
              H &amp; P Projects is proud to have earned recognition for excellence,
              innovation, and impact across its services. Our commitment to
              quality, safety, sustainability, and service has been acknowledged
              through multiple awards.
            </p>
          </section>

          {/* AWARDS GRID */}
          <section className="awards-grid-section">
            <div className="awards-grid">
              {awards.map((a, i) => (
                <AwardCard key={i} award={a} />
              ))}
            </div>
          </section>

          {/* CERTIFICATES HEADER BLOCK */}
          <section className="cert-section">
            {/* Left bubbles */}
            <div className="cert-bubbles">
              <div className="cert-bubble-big"></div>
              <div className="cert-bubble-small"></div>
            </div>
            {/* Top lines */}
            <div className="cert-lines-wrapper">
              <div className="cert-line-upper-small"></div>
              <div className="cert-line-upper-big"></div>
            </div>
            {/* Title */}
            <div className="cert-title-wrapper">
              <h1 className="cert-title-c">C</h1>
              <h1 className="cert-title-rest">ERTIFICATES</h1>
            </div>
            {/* Paragraph */}
            <p className="cert-desc">
              Our company maintains ISO and statutory certifications, trade licenses, GST, EPF/ESI compliance, and upholds the highest industry standards in all deliverables.
            </p>
          </section>

          {/* CERTIFICATES GRID */}
          <section className="certificates-grid-wrapper">
            <div className="certificates-grid">
              {certifications.map((cert, i) => (
                <CertificateCard key={i} certificate={cert} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}