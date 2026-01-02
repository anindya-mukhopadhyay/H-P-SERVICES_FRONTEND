import React from "react";

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
    <section className="w-full bg-[#e4eef0] pt-2.5 pb-[60px] max-md:pb-10">
      <div className="w-[86%] mx-auto flex gap-7 overflow-x-auto py-2.5 max-md:gap-5 max-sm:gap-4 max-sm:w-[92%]">
        {businesses.map((b, index) => (
          <div 
            className="flex-[0_0_341.33px] w-[341.33px] h-[336.89px] bg-[#075056] rounded-[15.11px] shadow-[0px_3.56px_3.56px_rgba(0,0,0,0.25)] p-[30px] text-white flex flex-col justify-center items-start relative overflow-hidden cursor-pointer group max-lg:flex-[0_0_300px] max-lg:w-[300px] max-lg:h-[300px] max-md:flex-[0_0_280px] max-md:w-[280px] max-md:h-[280px] max-md:p-6 max-sm:flex-[0_0_260px] max-sm:w-[260px] max-sm:h-[260px] max-sm:p-5" 
            key={index}
          >
            <h3 className="text-[22px] font-extrabold leading-[1.25] m-0 relative z-[2] transition-transform duration-300 group-hover:-translate-y-2.5 max-lg:text-xl max-md:text-lg max-sm:text-base">{b.title}</h3>
            <p className="mt-3 text-[15px] font-normal leading-[1.5] text-[rgba(255,255,255,0.92)] opacity-0 max-h-0 translate-y-2.5 overflow-hidden transition-all duration-[350ms] group-hover:opacity-100 group-hover:max-h-[260px] group-hover:translate-y-0 max-lg:text-sm max-sm:text-[13px]">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



