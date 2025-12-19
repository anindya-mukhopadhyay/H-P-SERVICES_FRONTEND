import "./styles/Partner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import koushik11 from "../assets/koushik11.png";
import koushik12 from "../assets/koushik12.png";

export default function Partner() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="partner-section">
      {/* Decorative Circles */}
      <div className="partner-decorative-circles">
        <div className="partner-circle-left"></div>
        <div className="partner-circle-right"></div>
      </div>

      {/* Title */}
      <h2 className="partner-title" data-aos="fade-up">
        <span className="partner-title-big-p">P</span>
        <span className="partner-title-rest">ARTNERS PROFILE</span>
      </h2>

      {/* Decorative Lines */}
      <div className="partner-decorative-lines">
        <div className="partner-line-left"></div>
        <div className="partner-line-right"></div>
      </div>

      {/* Card Container */}
      <div className="partner-card-container">
        {/* CARD 1 */}
        <div className="partner-card" data-aos="fade-up">
          <div className="image-wrapper">
            <img src={koushik11} alt="Koushik Paul" />
          </div>

          {/* NAME */}
          <div className="partner-card-name">KOUSHIK PAUL</div>

          {/* DESCRIPTION APPEARS BELOW NAME */}
          <div className="partner-hover-info">
            <h4>Partner – Operations & Decision-Making Head of Projects</h4>
            <p>
              Koushik Paul oversees project execution, operational compliance,
              and project-level strategic decisions. Drawing from his
              experience at Jindal Steel Ltd., he ensures timely, high-quality
              project delivery while managing teams and also operational
              processes across all sites.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="partner-card" data-aos="fade-up" data-aos-delay="150">
          <div className="image-wrapper">
            <img src={koushik12} alt="Koushik Paul" />
          </div>

          {/* NAME */}
          <div className="partner-card-name">KOUSHIK PAUL</div>

          {/* DESCRIPTION */}
          <div className="partner-hover-info">
            <h4>Partner – Administrative Head & Group Decision-Making</h4>
            <p>
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
