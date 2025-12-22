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
      <div className="relative w-full max-w-[1400px] mx-auto -mb-10 h-0 max-md:hidden">
        <div className="absolute w-20 h-20 bg-[#075056] rounded-full -top-10 left-[5%]"></div>
        <div className="absolute w-20 h-20 bg-[#075056] rounded-full -top-10 right-[5%]"></div>
      </div>

      <h2 className="flex justify-center items-start gap-2 mb-[70px] max-md:mb-10 max-sm:mb-8 max-sm:gap-1" data-aos="fade-up">
        <span className="text-[110px] font-extrabold text-[#075056] -mt-8 max-lg:text-[90px] max-md:text-[70px] max-sm:text-[50px] max-sm:-mt-6">P</span>
        <span className="text-[50px] font-extrabold mt-[15px] max-lg:text-[42px] max-md:text-[32px] max-sm:text-[22px] max-sm:mt-3">ARTNERS PROFILE</span>
      </h2>

      <div className="relative w-full max-w-[1400px] mx-auto my-5 mb-[70px] h-0 max-md:hidden">
        <div className="absolute w-1 h-[400px] bg-[#075056] top-0 left-[5%]"></div>
        <div className="absolute w-1 h-[400px] bg-[#075056] top-0 right-[5%]"></div>
      </div>

      <div className="flex justify-center gap-[90px] mt-[70px] pb-[100px] items-start max-lg:gap-[60px] max-md:flex-col max-md:gap-10 max-md:pb-[60px] max-md:mt-10 max-sm:gap-6 max-sm:pb-10 max-sm:mt-8">
        <div
          className={`w-[330px] bg-[#0d5a5b] rounded-[18px] overflow-hidden cursor-pointer flex flex-col relative transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-md:w-full max-md:max-w-[360px] max-md:mx-auto max-sm:max-w-[320px] ${activeIndex === 0 ? "active" : ""}`}
          data-aos="fade-up"
          onClick={() => toggleCard(0)}
        >
          <div className="h-[350px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center pt-10 overflow-hidden max-md:h-[300px] max-md:pt-[30px] max-sm:h-[260px] max-sm:pt-6">
            <img src={koushik11} alt="Koushik Paul" className="w-[260px] object-contain transition-transform duration-[450ms] origin-center hover:scale-110 hover:-translate-y-1.5 max-md:w-[220px] max-sm:w-[190px]" />
          </div>

          <div className={`bg-[#004D4F] text-white py-3.5 text-xl font-bold mt-5 text-center relative z-[5] transition-all duration-300 max-md:text-lg max-md:py-3 max-sm:text-base max-sm:py-2.5 ${activeIndex === 0 ? "!mt-0 !bg-[#0c5b5f]" : ""}`}>KOUSHIK PAUL</div>

          <div className={`bg-[#0c5b5f] text-white opacity-0 invisible max-h-0 overflow-hidden -translate-y-2 transition-all duration-300 px-5 max-sm:px-4 ${activeIndex === 0 ? "!opacity-100 !visible !max-h-[500px] !translate-y-0 !py-5 max-sm:!py-4" : ""}`}>
            <h4 className="text-[13px] font-semibold mb-2.5 text-[#a4dfe3] max-sm:text-xs max-sm:mb-2">Partner – Operations & Decision-Making Head of Projects</h4>
            <p className="text-[13px] leading-[1.6] m-0 max-sm:text-xs">
              Koushik Paul oversees project execution, operational compliance,
              and project-level strategic decisions. Drawing from his
              experience at Jindal Steel Ltd., he ensures timely, high-quality
              project delivery while managing teams and also operational
              processes across all sites.
            </p>
          </div>
        </div>

        <div
          className={`w-[330px] bg-[#0d5a5b] rounded-[18px] overflow-hidden cursor-pointer flex flex-col relative transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-md:w-full max-md:max-w-[360px] max-md:mx-auto max-sm:max-w-[320px] ${activeIndex === 1 ? "active" : ""}`}
          data-aos="fade-up"
          data-aos-delay="150"
          onClick={() => toggleCard(1)}
        >
          <div className="h-[350px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center pt-10 overflow-hidden max-md:h-[300px] max-md:pt-[30px] max-sm:h-[260px] max-sm:pt-6">
            <img src={koushik12} alt="Abhradeep Hazra" className="w-[260px] object-contain transition-transform duration-[450ms] origin-center hover:scale-110 hover:-translate-y-1.5 max-md:w-[220px] max-sm:w-[190px]" />
          </div>

          <div className={`bg-[#004D4F] text-white py-3.5 text-xl font-bold mt-5 text-center relative z-[5] transition-all duration-300 max-md:text-lg max-md:py-3 max-sm:text-base max-sm:py-2.5 ${activeIndex === 1 ? "!mt-0 !bg-[#0c5b5f]" : ""}`}>ABHRADEEP HAZRA</div>

          <div className={`bg-[#0c5b5f] text-white opacity-0 invisible max-h-0 overflow-hidden -translate-y-2 transition-all duration-300 px-5 max-sm:px-4 ${activeIndex === 1 ? "!opacity-100 !visible !max-h-[500px] !translate-y-0 !py-5 max-sm:!py-4" : ""}`}>
            <h4 className="text-[13px] font-semibold mb-2.5 text-[#a4dfe3] max-sm:text-xs max-sm:mb-2">Partner – Administrative Head & Group Decision-Making</h4>
            <p className="text-[13px] leading-[1.6] m-0 max-sm:text-xs">
              Koushik Paul leads the administrative functions, finance,
              legal compliance, and corporate governance. With extensive
              experience at DSS Group, he is pivotal in group-level strategic
              decision-making, ensuring H & P Projects operates efficiently,
              ethically, and in line with best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
