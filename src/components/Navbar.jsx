import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const NAVBAR_HEIGHT = 78;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 400);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection("home");
    }
    setOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
    setOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection("home");
    }
    setOpen(false);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full h-[78px] bg-[rgba(22,35,42,0.85)] flex items-center justify-between px-10 z-[9999] max-md:px-[22px] max-md:h-[70px] max-sm:px-4 max-sm:h-[65px] max-[360px]:px-3.5 max-[360px]:h-[68px] max-lg:px-7 max-lg:h-[86px]">
        <div className="flex items-center gap-[15px]">
          <div className="cursor-pointer flex flex-col gap-[5px]" onClick={() => setOpen(true)}>
            <div className="w-[25px] h-[3px] bg-white max-md:w-7 max-[360px]:w-[26px]"></div>
            <div className="w-[25px] h-[3px] bg-white max-md:w-7 max-[360px]:w-[26px]"></div>
            <div className="w-[25px] h-[3px] bg-white max-md:w-7 max-[360px]:w-[26px]"></div>
          </div>

          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 rounded-full object-cover cursor-pointer max-md:w-[60px] max-md:h-[60px] max-sm:w-[52px] max-sm:h-[52px] max-[360px]:w-[46px] max-[360px]:h-[46px] max-lg:w-[70px] max-lg:h-[70px]"
            onClick={handleLogoClick}
          />

          <span
            className="text-xl font-bold text-white tracking-wide cursor-pointer max-md:text-lg max-sm:text-[17px] max-[360px]:text-base max-lg:text-[19px]"
            onClick={handleLogoClick}
          >
            H & P PROJECTS
          </span>
        </div>

        <div className="flex gap-7 max-md:hidden">
          <a href="/" onClick={handleHomeClick} className="text-white text-[15px] font-medium no-underline cursor-pointer transition-opacity duration-200 hover:opacity-80 max-lg:text-sm">
            HOME
          </a>

          <a
            href="https://forms.gle/uCcqNftGXYULELzY6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[15px] font-medium no-underline cursor-pointer transition-opacity duration-200 hover:opacity-80 max-lg:text-sm"
          >
          CAREERS
          </a>

          <a href="/contact" onClick={handleContactClick} className="text-white text-[15px] font-medium no-underline cursor-pointer transition-opacity duration-200 hover:opacity-80 max-lg:text-sm">
            CONTACT US
          </a>
        </div>
      </header>

      {/* SIDE MENU */}
      <div className={`fixed top-0 w-[260px] h-screen bg-[#0e3c42] pt-20 px-5 pb-5 transition-all duration-[350ms] ease-in-out z-[99999] max-md:w-[250px] max-sm:w-[230px] max-sm:pt-[70px] max-sm:px-[18px] max-[360px]:w-[210px] ${open ? "left-0" : "-left-[280px] max-md:-left-[260px]"}`}>
        <div className="text-[26px] text-white cursor-pointer mb-[30px]" onClick={() => setOpen(false)}>
          ←
        </div>

        <ul className="list-none p-0">
          <li className="my-[18px]">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base">
              HOME
            </a>
          </li>
          <li className="my-[18px]">
            <a
              href="#presence"
              onClick={(e) => handleNavClick(e, "presence")}
              className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base"
            >
              OUR PRESENCE
            </a>
          </li>
          <li className="my-[18px]">
            <a
              href="#business"
              onClick={(e) => handleNavClick(e, "business")}
              className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base"
            >
              OUR BUSINESS
            </a>
          </li>
          <li className="my-[18px]">
            <a
              href="#technology-innovation"
              onClick={(e) =>
                handleNavClick(e, "technology-innovation")
              }
              className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base"
            >
              TECHNOLOGY AND INNOVATION
            </a>
          </li>
          <li className="my-[18px]">
            <a
              href="#full-service-supply"
              onClick={(e) =>
                handleNavClick(e, "full-service-supply")
              }
              className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base"
            >
              FULL SERVICE CAPABILITY
            </a>
          </li>
          <li className="my-[18px]">
            <Link to="/awards" onClick={() => setOpen(false)} className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base">
              AWARDS AND CERTIFICATES
            </Link>
          </li>
          <li className="my-[18px]">
            <Link to="/about" onClick={() => setOpen(false)} className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base">
              ABOUT US
            </Link>
          </li>
          <li className="my-[18px]">
            <a
              href="https://forms.gle/uCcqNftGXYULELzY6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base"
            >
              CAREERS
            </a>
          </li>
          <li className="my-[18px]">
            <Link to="/contact" onClick={() => setOpen(false)} className="text-white text-lg no-underline cursor-pointer transition-opacity duration-200 block hover:opacity-80 max-sm:text-[17px] max-[360px]:text-base">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.4)] backdrop-blur-[3px] z-[9999]" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
