import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// Images
import koushik11 from "../assets/koushik11.png";
import koushik12 from "../assets/koushik12.png";

export default function Partner() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E4EEF0] py-[110px] px-[5%] text-center max-md:py-20 max-sm:py-12">
      {/* Decorative Circles (desktop only) */}
      <div className="relative w-full max-w-[1400px] mx-auto -mb-10 h-0 hidden md:block">
        <div className="absolute w-20 h-20 bg-[#075056] rounded-full -top-10 left-[5%]" />
        <div className="absolute w-20 h-20 bg-[#075056] rounded-full -top-10 right-[5%]" />
      </div>

      {/* Title */}
      <h2
        className="flex justify-center items-start gap-2 mb-[70px] max-md:mb-10 max-sm:mb-8"
        data-aos="fade-up"
      >
        <span className="text-[110px] font-extrabold text-[#075056] -mt-8 max-lg:text-[90px] max-md:text-[70px] max-sm:text-[50px] max-sm:-mt-6">
          P
        </span>
        <span className="text-[50px] font-extrabold mt-[15px] max-lg:text-[42px] max-md:text-[32px] max-sm:text-[22px]">
          ARTNERS PROFILE
        </span>
      </h2>

      {/* Vertical Lines (desktop only) */}
      <div className="relative w-full max-w-[1400px] mx-auto mb-[70px] h-0 hidden md:block">
        <div className="absolute w-1 h-[400px] bg-[#075056] left-[5%]" />
        <div className="absolute w-1 h-[400px] bg-[#075056] right-[5%]" />
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-[90px] mt-[70px] pb-[100px] items-start max-lg:gap-[60px] max-md:flex-col max-md:gap-10 max-md:pb-[60px]">

        {/* ================= CARD 1 ================= */}
        <div
          role="button"
          tabIndex={0}
          aria-expanded={activeIndex === 0}
          onClick={() => toggleCard(0)}
          onKeyDown={(e) => e.key === "Enter" && toggleCard(0)}
          className="group w-[330px] bg-[#0d5a5b] rounded-[18px] overflow-hidden cursor-pointer flex flex-col relative transition-shadow duration-300 md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] select-none max-md:w-full max-md:max-w-[360px] max-md:mx-auto"
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="h-[350px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center pt-10 overflow-hidden max-md:h-[300px] max-sm:h-[260px]">
            <img
              src={koushik11}
              alt="Koushik Paul"
              className="w-[260px] object-contain transition-transform duration-300 origin-center md:group-hover:scale-110 md:group-hover:-translate-y-1.5 max-md:w-[220px] max-sm:w-[190px]"
            />
          </div>

          {/* Name */}
          <div
            className={`
              bg-[#004D4F] text-white py-3.5 text-xl font-bold mt-5 text-center transition-all duration-300
              md:group-hover:mt-0 md:group-hover:bg-[#0c5b5f]
              ${activeIndex === 0 ? "mt-0 bg-[#0c5b5f]" : ""}
            `}
          >
            KOUSHIK PAUL
          </div>

          {/* Details */}
          <div
            className={`
              bg-[#0c5b5f] text-white overflow-hidden px-5
              transition-[max-height,opacity,transform] duration-300

              /* MOBILE (CLICK) */
              ${activeIndex === 0
                ? "opacity-100 visible max-h-[500px] translate-y-0 py-5"
                : "opacity-0 invisible max-h-0 -translate-y-2 py-0"}

              /* DESKTOP (HOVER) */
              md:group-hover:opacity-100
              md:group-hover:visible
              md:group-hover:max-h-[500px]
              md:group-hover:translate-y-0
              md:group-hover:py-5
            `}
          >
            <h4 className="text-[13px] font-semibold mb-2 text-[#a4dfe3]">
              Partner – Operations & Decision-Making Head of Projects
            </h4>
            <p className="text-[13px] leading-[1.6]">
              Koushik Paul oversees project execution, operational compliance,
              and project-level strategic decisions. Drawing from his experience
              at Jindal Steel Ltd., he ensures timely, high-quality project
              delivery while managing teams and operations.
            </p>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div
          role="button"
          tabIndex={0}
          aria-expanded={activeIndex === 1}
          onClick={() => toggleCard(1)}
          onKeyDown={(e) => e.key === "Enter" && toggleCard(1)}
          className="group w-[330px] bg-[#0d5a5b] rounded-[18px] overflow-hidden cursor-pointer flex flex-col relative transition-shadow duration-300 md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] select-none max-md:w-full max-md:max-w-[360px] max-md:mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Image */}
          <div className="h-[350px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center pt-10 overflow-hidden max-md:h-[300px] max-sm:h-[260px]">
            <img
              src={koushik12}
              alt="Abhradeep Hazra"
              className="w-[260px] object-contain transition-transform duration-300 origin-center md:group-hover:scale-110 md:group-hover:-translate-y-1.5 max-md:w-[220px] max-sm:w-[190px]"
            />
          </div>

          {/* Name */}
          <div
            className={`
              bg-[#004D4F] text-white py-3.5 text-xl font-bold mt-5 text-center transition-all duration-300
              md:group-hover:mt-0 md:group-hover:bg-[#0c5b5f]
              ${activeIndex === 1 ? "mt-0 bg-[#0c5b5f]" : ""}
            `}
          >
            ABHRADEEP HAZRA
          </div>

          {/* Details */}
          <div
            className={`
              bg-[#0c5b5f] text-white overflow-hidden px-5
              transition-[max-height,opacity,transform] duration-300

              /* MOBILE (CLICK) */
              ${activeIndex === 1
                ? "opacity-100 visible max-h-[500px] translate-y-0 py-5"
                : "opacity-0 invisible max-h-0 -translate-y-2 py-0"}

              /* DESKTOP (HOVER) */
              md:group-hover:opacity-100
              md:group-hover:visible
              md:group-hover:max-h-[500px]
              md:group-hover:translate-y-0
              md:group-hover:py-5
            `}
          >
            <h4 className="text-[13px] font-semibold mb-2 text-[#a4dfe3]">
              Partner – Administrative Head & Group Decision-Making
            </h4>
            <p className="text-[13px] leading-[1.6]">
              Abhradeep Hazra leads administrative functions, finance, legal
              compliance, and corporate governance, ensuring H & P Projects
              operates efficiently, ethically, and strategically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
