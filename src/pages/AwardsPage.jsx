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
    title: <>Excellence in<br />Project Execution<br />Award</>,
    img: award1,
    desc:
      "Recognized nationally for delivering complex turnkey and industrial projects with precision, on time, and under budget.",
  },
  {
    title: <>Innovation &<br />Green Building<br />Award</>,
    img: award2,
    desc:
      "Honored for integrating sustainable, smart IT integration, and eco-friendly design into our projects.",
  },
  {
    title: <>Safety &<br />Compliance<br />Leadership Award</>,
    img: award3,
    desc:
      "Acknowledged for maintaining high safety standards, regulatory compliance, and workforce welfare across all operations.",
  },
  {
    title: <>Community &<br />Rural Upliftment<br />Recognition</>,
    img: award4,
    desc:
      "Applauded for efforts in rural development, job creation, skill training, and contributions to local infrastructure.",
  },
  {
    title: <>Quality &<br />Standards<br />Distinction</>,
    img: award5,
    desc:
      "Certified and awarded for maintaining ISO and statutory certifications, GST, EPF/ESI compliance, achieving superior quality in all deliverables.",
  },
];

const certifications = [
  { title: "ISO 9001", desc: "Quality Management System certification." },
  { title: "ISO 45001", desc: "Occupational Health & Safety standards." },
  { title: "ISO 14001", desc: "Environmental Management System." },
  { title: "Trade License", desc: "Municipal and legal compliance." },
  { title: "GST Registration", desc: "Registered under GST regulations." },
  { title: "EPF & ESI", desc: "Employee welfare & statutory compliance." },
];

function AwardCard({ award }) {
  return (
    <div
      className="
        bg-[#075056]
        rounded-xl
        relative
        overflow-hidden
        transition-all
        duration-500
        group
        min-h-[280px]
        max-lg:min-h-[240px]
        max-md:min-h-[220px]
        max-sm:min-h-[200px]
      "
    >
      <div
        className="
          absolute
          top-[18px]
          right-[18px]
          w-[60%]
          text-right
          transition-all
          duration-500
          will-change-transform
          group-hover:left-[18px]
          group-hover:right-auto
          group-hover:text-left
          group-hover:w-[70%]
          max-md:top-3
          max-md:right-3
          max-sm:top-2
          max-sm:right-2
        "
      >
        <p className="text-white text-[17px] font-bold max-lg:text-[15px] max-md:text-sm max-sm:text-xs">
          {award.title}
        </p>

        <p
          className="
            text-white
            text-[13px]
            opacity-0
            max-h-0
            overflow-hidden
            transition-all
            duration-500
            will-change-[opacity,max-height]
            whitespace-normal
            break-words
            group-hover:opacity-100
            group-hover:max-h-[200px]
            group-hover:text-[11.5px]
            group-hover:leading-[1.3]
            max-lg:text-xs
            max-md:text-[11px]
            max-sm:text-[10px]
          "
        >
          {award.desc}
        </p>
      </div>

      <img
        src={award.img}
        alt="Award"
        className="
          w-[120px]
          absolute
          left-[15px]
          bottom-2.5
          transition-all
          duration-500
          will-change-transform
          group-hover:w-[70px]
          group-hover:left-auto
          group-hover:right-3
          group-hover:bottom-0
          max-lg:w-[100px]
          max-lg:left-3
          max-md:w-[80px]
          max-md:left-2
          max-md:bottom-2
          max-sm:w-[60px]
          max-sm:left-1.5
          max-sm:bottom-1.5
          max-sm:group-hover:w-[45px]
          max-sm:group-hover:right-2
        "
      />
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <div className="bg-[#075056] rounded-xl py-6 px-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
      <p className="text-sm leading-[1.6] opacity-95">{certificate.desc}</p>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <>
      <Header />

      <div className="bg-[#e4eef0] pt-[110px] pb-24">

        {/* AWARDS GRID */}
        <section className="mt-16 px-10 max-md:px-5 max-sm:px-4">
          <div className="max-w-[1280px] mx-auto grid grid-cols-5 gap-[25px]
                          max-lg:grid-cols-4
                          max-md:grid-cols-3
                          max-sm:grid-cols-2">
            {awards.map((award, i) => (
              <AwardCard key={i} award={award} />
            ))}
          </div>
        </section>

        {/* CERTIFICATES GRID */}
        <section className="mt-24 px-10 max-md:px-5 max-sm:px-4">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {certifications.map((cert, i) => (
              <CertificateCard key={i} certificate={cert} />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
