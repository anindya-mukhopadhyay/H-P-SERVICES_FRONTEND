import Partner from "../components/Partner";
import Hero from "../components/Hero";
import BusinessGrid from "../components/BusinessGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

import techInnovationImage from "../assets/tech-innovation.png";

const CITIES = [
  "Kolkata, West Bengal",
  "New Delhi, NCR",
  "Mumbai, Maharashtra",
  "Chennai, Tamil Nadu",
  "Bengaluru, Karnataka",
  "Lucknow, UP",
];

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#eef6f7] font-['Inter',sans-serif]">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* CITIES MARQUEE */}
      <section id="presence" className="text-center py-[50px] px-5 pb-10 max-md:py-10 max-sm:py-8">
        <h3 className="text-2xl mb-[22px] font-bold max-md:text-xl max-sm:text-lg max-sm:mb-4">Serving major cities across India</h3>

        <div className="w-full overflow-hidden">
          <div className="flex gap-[18px] whitespace-nowrap animate-cities-loop max-md:gap-4 max-sm:gap-3">
            {[...CITIES, ...CITIES].map((city, index) => (
              <div className="py-3 px-5 border-[1.5px] border-[#cfcfcf] rounded-xl bg-white text-[15px] font-medium flex-shrink-0 max-md:py-2.5 max-md:px-4 max-md:text-sm max-sm:py-2 max-sm:px-3 max-sm:text-xs" key={index}>
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section id="business" className="relative mt-[90px] pb-[100px] max-md:mt-[30px] max-md:pb-[60px] max-sm:pb-10">
        <div className="absolute w-[260px] h-1 bg-[#075056] left-[12%] -top-[45px] max-md:hidden" />
        <div className="absolute w-[180px] h-1 bg-[#075056] left-[12%] -top-5 max-md:hidden" />

        <div className="absolute right-0 max-md:hidden">
          <div className="w-[170px] h-[170px] bg-[#075056] rounded-full absolute right-0 -top-[25px]" />
          <div className="w-[85px] h-[85px] bg-[#075056] rounded-full absolute right-[140px] top-[35px]" />
        </div>

        <div className="flex justify-center items-end mt-[70px] gap-2.5 max-md:mt-[30px] max-md:items-baseline max-sm:mt-5">
          <h2 className="text-5xl font-black leading-[1.1] relative max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            <span className="text-[80px] text-[#075056] max-lg:text-[60px] max-md:text-5xl max-sm:text-[40px]">O</span>
            UR BUSINESSES <br className="max-sm:hidden" />
          </h2>
        </div>
        <div className="w-40 h-1 bg-[#075056] my-5 mx-auto mb-[30px] max-md:w-32 max-sm:w-24 max-sm:mb-5" />

        <p className="max-w-[900px] mx-auto mb-[60px] text-[17px] leading-[1.8] text-center px-5 max-md:text-base max-md:mb-10 max-sm:text-sm max-sm:mb-8">
          H &amp; P Projects is a complete solutions partner, delivering
          precision, efficiency, and consistency across the entire project
          lifecycle—from planning to execution. With expertise in civil,
          mechanical, electrical, IT, and manpower solutions, we provide
          integrated, turnkey support tailored to client needs.
        </p>

        <BusinessGrid />
      </section>

      {/* TECHNOLOGY & INNOVATION SECTION */}
      <section id="technology-innovation" className="relative py-20 px-5 max-md:py-12 max-sm:py-8">
        <div className="absolute right-[12%] h-1 bg-[#075056] w-[260px] top-2.5 max-md:hidden" />
        <div className="absolute right-[12%] h-1 bg-[#075056] w-40 top-8 max-md:hidden" />

        <div className="mt-[140px] flex gap-[60px] max-w-[1200px] mx-auto max-lg:gap-10 max-md:mt-10 max-md:flex-col max-md:gap-8 max-sm:mt-5">
          {/* LEFT TEXT BLOCK */}
          <div className="w-1/2 pl-[65px] max-lg:pl-8 max-md:w-full max-md:pl-0 max-md:text-center">
            <h2 className="text-5xl font-black leading-[1.1] relative max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
              <span className="text-[80px] text-[#075056] max-lg:text-[60px] max-md:text-5xl max-sm:text-[40px]">T</span>
              ECHNOLOGY AND <br className="max-sm:hidden" /> INNOVATION
            </h2>
            <div className="w-[170px] h-1 bg-[#075056] absolute -bottom-[18px] left-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-32 max-sm:w-24" style={{ content: '' }}></div>

            <p className="mt-[35px] text-[17px] leading-[1.8] max-w-[540px] max-md:mx-auto max-md:text-base max-md:mt-8 max-sm:text-sm max-sm:mt-6">
              At H &amp; P Projects, technology is not just about machines and
              systems—it is about creating smarter, safer, and more sustainable
              ways of working. We believe innovation should solve real problems,
              open new opportunities, and empower industries, businesses, and
              communities alike.
            </p>
          </div>

          {/* IMAGE + BUBBLES */}
          <div className="w-1/2 max-md:w-full max-md:px-4">
            <img
              src={techInnovationImage}
              alt="Technology and Innovation"
              className="w-full rounded-[20px] max-sm:rounded-xl"
            />
          </div>
        </div>

        {/* FULL WIDTH PARAGRAPH */}
        <p className="max-w-[1153px] ml-[65px] mt-10 text-[17px] leading-[1.6] max-lg:ml-8 max-md:mx-5 max-md:mt-[30px] max-md:text-base max-sm:text-sm max-sm:mt-6">
          From AI-driven project planning and IoT-enabled monitoring systems to
          energy-efficient electrical networks and digital construction
          management, we embed technology into every step of our projects. This
          ensures faster execution, optimized resources, and reduced costs,
          while maintaining the highest standards of safety and compliance. Our
          Research &amp; Development (R&amp;D) facility is a hub of creativity
          and problem-solving. Here, we design new construction techniques, test
          automation tools, and explore eco-friendly practices such as green
          buildings, smart water management, and renewable energy integration.
          These innovations not only serve industries but also bring sustainable
          growth to rural and urban communities. What makes us different is our
          opportunity-driven innovation. By adopting emerging technologies, we
          don't just deliver projects—we create value chains, generate
          employment, train skilled manpower, and help industries achieve
          long-term competitiveness. Each project we undertake becomes a
          platform for progress, innovation, and new possibilities.
        </p>
      </section>

      {/* PARTNER SECTION */}
      <Partner />

      {/* SUPPLY CAPABILITY SECTION */}
      <section id="full-service-supply" className="py-[120px] px-5 mt-[60px] max-md:py-[60px] max-md:mt-[30px] max-sm:py-10 max-sm:mt-5">
        <div className="max-w-[1100px] mx-auto">

          <h2 className="text-5xl font-black leading-[1.1] relative max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            <span className="text-[80px] text-[#075056] max-lg:text-[60px] max-md:text-5xl max-sm:text-[40px]">F</span>
            ULL SERVICE SUPPLY CAPABILITY <br className="max-sm:hidden" />
          </h2>

          <div className="flex flex-col items-end mt-5 mb-[30px] max-md:mb-5 max-sm:mb-4">
            <div className="w-[180px] h-2.5 bg-[#075056] rounded-xl mb-2 max-md:w-32 max-md:h-2 max-sm:w-24"></div>
            <div className="w-40 h-2.5 bg-[#075056] rounded-xl max-md:w-28 max-md:h-2 max-sm:w-20"></div>
          </div>

          <p className="text-[17px] leading-[1.6] max-md:text-base max-sm:text-sm">
            At H &amp; P Projects, we are more than just a service provider—we are a complete solutions partner. Our approach ensures that every stage of the project lifecycle, from planning to execution, is delivered with precision, efficiency, and consistency. We bring together expertise across civil, mechanical, electrical, IT, and manpower solutions, creating a strong foundation for multi-sector support. This integrated approach enables us to provide turnkey solutions tailored to client needs. Our robust supply chain, in-house quality control, and agile processes ensure timely delivery, compliance with standards, and the flexibility to adapt to evolving requirements. This helps us handle even the most complex and large-scale projects with ease. By combining technical know-how with client-focused assurance, we consistently deliver outcomes that inspire trust. With H &amp; P Projects, clients can rely on a partner committed to full-service excellence and long-term progress.

          </p>

          <div className="flex flex-col mt-5 max-md:mt-4 max-sm:mt-3">
            <div className="w-40 h-2.5 bg-[#075056] rounded-xl mb-2 max-md:w-28 max-md:h-2 max-sm:w-20"></div>
            <div className="w-[180px] h-2.5 bg-[#075056] rounded-xl max-md:w-32 max-md:h-2 max-sm:w-24"></div>
          </div>
        </div>
      </section>

      {/* -------------- FOOTER COMPONENT -------------- */}
      <Footer />
    </div>
  );
}
