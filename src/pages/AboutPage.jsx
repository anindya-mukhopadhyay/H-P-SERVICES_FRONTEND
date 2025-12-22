import React, { useState } from "react";

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
      <div id="about" className="mb-20 max-md:mb-12 max-sm:mb-8"> 
        <div className="w-full flex flex-col items-center">
          <div className="w-full m-0 p-0 relative z-[1]">
            <img src={maskImage} alt="hero" className="w-full h-[420px] object-cover object-bottom block max-lg:h-[350px] max-md:h-[280px] max-sm:h-[200px]" />
          </div>

          {/* TITLE + BUBBLES */}
          <div className="w-full max-w-[1200px] flex items-start justify-between mt-5 px-[90px] relative z-[50] box-border max-lg:px-12 max-md:px-8 max-md:mt-3 max-sm:px-5 max-sm:mt-2">
            <div className="flex items-end">
              <span className="font-['Montserrat',sans-serif] text-[125px] font-bold leading-[120%] text-[#075056] mr-2.5 max-lg:text-[90px] max-md:text-[70px] max-md:mr-2 max-sm:text-[50px] max-sm:mr-1">A</span>
              <span className="font-['Montserrat',sans-serif] font-bold text-[68px] text-black leading-[0.95] relative -top-7 max-lg:text-[48px] max-lg:-top-5 max-md:text-[38px] max-md:-top-4 max-sm:text-[28px] max-sm:-top-3">BOUT US</span>
            </div>

            <div className="relative w-[200px] h-40 mt-2.5 max-md:hidden">
              <div className="w-[136px] h-[136px] bg-[#075056] rounded-full absolute -top-2.5 -right-[5px]"></div>
              <div className="w-[54.4px] h-[54.4px] bg-[#075056] rounded-full absolute top-[60px] right-[130px]"></div>
            </div>
          </div>

          {/* LINES */}
          <div className="w-full max-w-[1200px] pl-[90px] mt-2.5 mb-[30px] flex flex-col gap-3 relative z-[200] box-border max-lg:pl-12 max-md:pl-8 max-md:gap-2 max-md:mb-5 max-sm:pl-5 max-sm:mt-2 max-sm:mb-4">
            <div className="w-[419.56px] h-[9.78px] bg-[#075056] rounded max-lg:w-[300px] max-md:w-[250px] max-md:h-2 max-sm:w-[180px] max-sm:h-1.5"></div>
            <div className="w-[628.44px] h-[9.78px] bg-[#075056] rounded max-lg:w-[450px] max-md:w-[350px] max-md:h-2 max-sm:w-[250px] max-sm:h-1.5"></div>
          </div>

          {/* GRID */}
          <div className="w-full max-w-[1200px] grid grid-cols-2 gap-y-7 gap-x-10 justify-items-center px-5 box-border max-lg:gap-x-6 max-md:grid-cols-1 max-md:gap-y-5">
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
      className={`w-[560px] h-[190px] bg-[#075056] rounded-[17px] p-8 text-white font-['Montserrat',sans-serif] flex flex-col justify-start overflow-hidden transition-all duration-[350ms] max-lg:w-[480px] max-lg:h-[180px] max-lg:p-6 max-md:w-full max-md:max-w-[600px] max-md:h-auto max-md:min-h-[160px] max-md:p-6 max-sm:p-5 ${hover ? "hovered" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className={`text-2xl font-bold m-0 transition-transform duration-[350ms] max-lg:text-xl max-md:text-lg ${hover ? "-translate-y-2" : ""}`}>{finalTitle}</h3>
      <p className={`text-xl font-normal leading-[130%] mt-3.5 transition-all duration-[450ms] max-lg:text-lg max-lg:mt-3 max-md:text-base max-sm:text-sm max-sm:mt-2 ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 max-md:opacity-100 max-md:translate-y-0"}`}>{finalPara}</p>
    </div>
  );
}
