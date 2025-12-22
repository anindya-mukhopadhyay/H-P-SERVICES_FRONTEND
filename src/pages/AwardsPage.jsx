import React from "react";
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
    <div className="bg-[#075056] h-[280px] rounded-xl relative overflow-hidden transition-all duration-500 group max-lg:h-[240px] max-md:h-[220px] max-sm:h-[200px]">
      <div className="absolute top-[18px] right-[18px] w-[60%] text-right group-hover:left-[18px] group-hover:right-auto group-hover:text-left group-hover:w-[70%] transition-all duration-500 max-md:top-3 max-md:right-3 max-sm:top-2 max-sm:right-2">
        <p className="text-white text-[17px] font-bold max-lg:text-[15px] max-md:text-sm max-sm:text-xs">{award.title}</p>
        <p className="text-white text-[13px] opacity-0 h-0 transition-all duration-500 whitespace-normal break-words group-hover:opacity-100 group-hover:h-auto group-hover:text-[11.5px] group-hover:leading-[1.3] max-lg:text-xs max-md:text-[11px] max-sm:text-[10px] max-sm:group-hover:text-[10px]">{award.desc}</p>
      </div>
      <img src={award.img} alt="Award" className="w-[120px] absolute left-[15px] bottom-2.5 transition-all duration-500 group-hover:w-[70px] group-hover:left-auto group-hover:right-3 group-hover:bottom-0 max-lg:w-[100px] max-lg:left-3 max-md:w-[80px] max-md:left-2 max-md:bottom-2 max-sm:w-[60px] max-sm:left-1.5 max-sm:bottom-1.5 max-sm:group-hover:w-[45px] max-sm:group-hover:right-2" />
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <div className="bg-[#075056] rounded-xl py-6 px-7 text-white font-['Montserrat',sans-serif] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(7,80,86,0.3)] max-md:py-5 max-md:px-6 max-sm:py-4 max-sm:px-5">
      <h3 className="text-xl font-bold m-0 mb-3 text-white max-md:text-lg max-md:mb-2 max-sm:text-base">{certificate.title}</h3>
      <p className="text-sm font-normal leading-[1.6] m-0 text-[rgba(255,255,255,0.95)] max-sm:text-xs">{certificate.desc}</p>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <>
      <div id="awards" className="mb-20 max-md:mb-12 max-sm:mb-8">
        <div className="bg-[#e4eef0] w-full relative font-['Montserrat',sans-serif] pt-[100px] max-md:pt-[80px] max-sm:pt-[70px]">
          <Header />
          <section className="w-[1280px] h-[330px] mx-auto relative max-w-full px-5 max-lg:h-[280px] max-md:h-[240px] max-sm:h-auto max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <div className="absolute -top-[60px] left-0 max-lg:-top-[50px] max-md:-top-[40px] max-sm:static max-sm:mb-2">
              <h1 className="absolute top-0 left-[60px] text-[140px] font-bold text-[#075056] leading-[0.8] max-lg:text-[100px] max-lg:left-8 max-md:text-[80px] max-md:left-5 max-sm:static max-sm:text-[60px]">A</h1>
              <h1 className="absolute top-[82px] left-[165px] text-[60px] font-bold text-black max-lg:text-[50px] max-lg:top-[60px] max-lg:left-[135px] max-md:text-[40px] max-md:top-[50px] max-md:left-[105px] max-sm:static max-sm:text-[32px] max-sm:ml-2">WARDS</h1>
            </div>
            {/* Right-side big + small Figma bubbles */}
            <div className="absolute w-[136px] h-[136px] top-[109px] left-[1111px] bg-[#075056] rounded-full max-lg:w-[100px] max-lg:h-[100px] max-lg:left-auto max-lg:right-8 max-md:hidden"></div>
            <div className="absolute w-[54.4px] h-[54.4px] top-[194px] left-[1042px] bg-[#075056] rounded-full max-lg:w-[40px] max-lg:h-[40px] max-lg:left-auto max-lg:right-[130px] max-md:hidden"></div>
            <div className="absolute top-[153px] left-0 w-[450px] h-2.5 bg-[#075056] rounded-xl max-lg:w-[350px] max-lg:top-[130px] max-md:w-[280px] max-md:top-[110px] max-md:h-2 max-sm:static max-sm:w-[200px] max-sm:h-1.5 max-sm:mb-2"></div>
            <div className="absolute top-[180px] left-0 w-[680px] h-2.5 bg-[#075056] rounded-xl max-lg:w-[500px] max-lg:top-[150px] max-md:w-[400px] max-md:top-[130px] max-md:h-2 max-sm:static max-sm:w-[280px] max-sm:h-1.5 max-sm:mb-4"></div>
            <p className="absolute top-[275px] left-[72px] w-[1125px] text-base font-normal leading-[150%] text-black whitespace-normal h-auto overflow-visible max-lg:w-[90%] max-lg:left-8 max-lg:top-[230px] max-md:text-sm max-md:left-5 max-md:top-[190px] max-sm:static max-sm:w-full max-sm:text-sm">
              H &amp; P Projects is proud to have earned recognition for excellence,
              innovation, and impact across its services. Our commitment to
              quality, safety, sustainability, and service has been acknowledged
              through multiple awards.
            </p>
          </section>

          {/* AWARDS GRID */}
          <section className="mt-[70px] px-10 max-md:mt-12 max-md:px-5 max-sm:mt-8 max-sm:px-4">
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-5 gap-[25px] max-lg:grid-cols-4 max-lg:gap-5 max-md:grid-cols-3 max-md:gap-4 max-sm:grid-cols-2 max-sm:gap-3">
              {awards.map((a, i) => (
                <AwardCard key={i} award={a} />
              ))}
            </div>
          </section>

          {/* CERTIFICATES HEADER BLOCK */}
          <section className="w-[1252px] h-[275px] relative mt-[120px] mx-auto left-7 max-w-full px-5 max-lg:h-[250px] max-lg:mt-[100px] max-lg:left-0 max-md:h-auto max-md:mt-20 max-md:flex max-md:flex-col max-md:items-center max-sm:mt-12">
            {/* Left bubbles */}
            <div className="absolute -top-[35px] left-0 max-md:hidden">
              <div className="w-[140px] h-[140px] rounded-full bg-[#075056] absolute left-[85px] max-lg:w-[100px] max-lg:h-[100px] max-lg:left-12"></div>
              <div className="w-[55px] h-[55px] rounded-full bg-[#075056] absolute top-[95px] left-7 max-lg:w-[40px] max-lg:h-[40px] max-lg:top-[70px]"></div>
            </div>
            {/* Top lines */}
            <div className="absolute top-[35px] right-0 w-[639px] flex flex-col items-end max-lg:w-[480px] max-lg:right-5 max-md:static max-md:w-full max-md:mb-4 max-md:items-start">
              <div className="w-[426px] h-2.5 bg-[#075056] rounded-xl mb-2 max-lg:w-[320px] max-md:w-[200px] max-md:h-2 max-sm:w-[150px] max-sm:h-1.5"></div>
              <div className="w-[639px] h-2.5 bg-[#075056] rounded-xl max-lg:w-[480px] max-md:w-[280px] max-md:h-2 max-sm:w-[220px] max-sm:h-1.5"></div>
            </div>
            {/* Title */}
            <div className="absolute top-5 left-[390px] flex items-end gap-3 max-lg:left-[280px] max-lg:gap-2 max-md:static max-md:mb-4 max-md:justify-center max-sm:gap-1">
              <h1 className="text-[125px] font-bold text-[#075056] leading-[0.85] max-lg:text-[90px] max-md:text-[70px] max-sm:text-[50px]">C</h1>
              <h1 className="text-[56px] font-bold text-black pb-[55px] max-lg:text-[42px] max-lg:pb-10 max-md:text-[34px] max-md:pb-8 max-sm:text-[24px] max-sm:pb-6">ERTIFICATES</h1>
            </div>
            {/* Paragraph */}
            <p className="absolute top-[200px] left-[67px] w-[1144px] text-base font-normal leading-[150%] text-black text-center max-lg:w-[90%] max-lg:left-[5%] max-lg:top-[180px] max-md:static max-md:w-full max-md:text-sm max-sm:text-xs">
              Our company maintains ISO and statutory certifications, trade licenses, GST, EPF/ESI compliance, and upholds the highest industry standards in all deliverables.
            </p>
          </section>

          {/* CERTIFICATES GRID */}
          <section className="mt-10 px-10 max-md:mt-8 max-md:px-5 max-sm:mt-6 max-sm:px-4">
            <div className="w-full max-w-[1280px] mx-auto grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-4 max-sm:gap-3">
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
