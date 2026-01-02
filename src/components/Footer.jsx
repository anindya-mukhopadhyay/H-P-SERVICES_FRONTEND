import React from "react";

import logo from "../assets/logo.png";

import facebookIcon from "../assets/footer1.png";
import instagramIcon from "../assets/footer2.png";
import twitterIcon from "../assets/footer3.png";
import linkedinIcon from "../assets/footer4.png";
import youtubeIcon from "../assets/footer5.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#075056] py-[45px] text-white box-border">
      <div className="w-full max-w-[1400px] mx-auto px-[5%] flex justify-between items-start gap-10 max-[900px]:flex-col max-[900px]:items-center max-[900px]:text-center">
        {/* LEFT */}
        <div className="w-[48%] max-[900px]:w-full">
          <div className="flex items-center gap-3.5">
            <img src={logo} alt="H&P Logo" className="w-14 h-14 object-contain" />
            <h2 className="m-0 text-[30px] font-bold font-['Montserrat',sans-serif] max-sm:text-2xl">H&P Projects</h2>
          </div>

          <p className="mt-3 text-[15px] leading-[150%] max-w-[450px] opacity-95 max-sm:text-sm">
            Ready to transform your vision into reality? Our team is prepared to
            guide you through every step.
          </p>

          {/* SOCIAL MEDIA LINKS */}
          <div className="mt-[18px] flex gap-5 max-[900px]:justify-center">
            <a
              href="https://www.facebook.com/share/1Bgz1SJfZx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110" />
            </a>

            <a
              href="https://www.instagram.com/hpprojectspvtltd?igsh=NnEyZXY3dGQ0YWhp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src={twitterIcon} alt="Twitter / X" className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/company/h-p-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110" />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110" />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-px h-[218px] bg-[rgba(255,255,255,0.25)] max-[900px]:w-full max-[900px]:h-px max-[900px]:my-7"></div>

        {/* RIGHT */}
        <div className="w-[48%] flex flex-col gap-[22px] max-[900px]:w-full max-[900px]:items-center">
          <div>
            <h4 className="m-0 text-[17px] font-bold">Email</h4>
            <a href="mailto:info@hpprojects.com.au" className="mt-1 text-sm leading-[140%] text-[#d8f3f3] no-underline hover:underline">
              hpprojects.adm@gmail.com
            </a>
          </div>

          <div>
            <h4 className="m-0 text-[17px] font-bold">Phone</h4>
            <a href="tel:+918984030821" className="mt-1 text-sm leading-[140%] text-[#d8f3f3] no-underline hover:underline">+91 8984030821</a>
            <br />
            <a href="tel:+919332627903" className="mt-1 text-sm leading-[140%] text-[#d8f3f3] no-underline hover:underline">+91 9332627903</a>
          </div>

          <div>
            <h4 className="m-0 text-[17px] font-bold">Office</h4>
            <p className="mt-1 text-sm leading-[140%] text-[#d8f3f3] no-underline">
              Address: B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur,
              West Bengal – 721124
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="w-full max-w-[1400px] mx-auto mt-8 pt-3.5 px-[5%] border-t border-[rgba(255,255,255,0.22)] flex justify-between items-center text-[13px] text-[#d9f2f2] max-sm:flex-col max-sm:gap-3 max-sm:text-center">
        <p>© 2024 H&P Projects. All rights reserved.</p>

        <div className="flex gap-[26px] max-sm:gap-[18px] max-sm:flex-wrap max-sm:justify-center">
          <a href="#" className="text-[#d9f2f2] no-underline hover:underline">Privacy policy</a>
          <a href="#" className="text-[#d9f2f2] no-underline hover:underline">Terms of service</a>
          <a href="#" className="text-[#d9f2f2] no-underline hover:underline">Cookies settings</a>
        </div>
      </div>
    </footer>
  );
}
