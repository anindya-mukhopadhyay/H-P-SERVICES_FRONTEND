import "./styles/landing.css";
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
    <div className="landing-page">
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* CITIES MARQUEE */}
      <section id="presence" className="cities-strip">
        <h3>Serving major cities across India</h3>

        <div className="cities-marquee">
          <div className="cities-track">
            {[...CITIES, ...CITIES].map((city, index) => (
              <div className="city-pill" key={index}>
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section id="business" className="business-section">
        <div className="business-line long" />
        <div className="business-line short" />

        <div className="business-bubbles-right">
          <div className="bubble-big" />
          <div className="bubble-small" />
        </div>

        <div className="business-title-wrapper">
          <span className="business-title-o">O</span>
          <h2 className="business-title-text">UR BUSINESSES</h2>
        </div>

        <div className="business-center-line" />

        <p className="business-text">
          H &amp; P Projects is a complete solutions partner, delivering
          precision, efficiency, and consistency across the entire project
          lifecycle—from planning to execution. With expertise in civil,
          mechanical, electrical, IT, and manpower solutions, we provide
          integrated, turnkey support tailored to client needs.
        </p>

        <BusinessGrid />
      </section>

      {/* TECHNOLOGY & INNOVATION SECTION */}
      <section id="technology-innovation" className="tech-innovation-section">
        <div className="tech-line long" />
        <div className="tech-line short" />

        <div className="tech-innovation-main-content">
          {/* LEFT TEXT BLOCK */}
          <div className="tech-innovation-content">
            <h2 className="tech-heading">
              <span className="tech-big-t">T</span>
              ECHNOLOGY AND <br /> INNOVATION
            </h2>

            <p className="tech-innovation-description">
              At H &amp; P Projects, technology is not just about machines and
              systems—it is about creating smarter, safer, and more sustainable
              ways of working. We believe innovation should solve real problems,
              open new opportunities, and empower industries, businesses, and
              communities alike.
            </p>
          </div>

          {/* IMAGE + BUBBLES */}
          <div className="tech-innovation-image-container">
            <div className="img-bubble-small" />
            <div className="img-bubble-big" />

            <img
              src={techInnovationImage}
              alt="Technology and Innovation"
              className="tech-innovation-image"
            />
          </div>
        </div>

        {/* FULL WIDTH PARAGRAPH */}
        <p className="tech-innovation-full-text">
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
          don’t just deliver projects—we create value chains, generate
          employment, train skilled manpower, and help industries achieve
          long-term competitiveness. Each project we undertake becomes a
          platform for progress, innovation, and new possibilities.
        </p>
      </section>

      {/* PARTNER SECTION */}
      <Partner />

      {/* SUPPLY CAPABILITY SECTION */}
      <section id="full-service-supply" className="supply-capability-section">
        <div className="supply-capability-content">

          <div className="supply-title-container">
            <h2 className="supply-title-graphic-f">F</h2>
            <h2 className="supply-title-text">ULL SERVICE SUPPLY CAPABILITY</h2>
          </div>

          <div className="supply-lines-top">
            <div className="supply-top-line-short"></div>
            <div className="supply-top-line-long"></div>
          </div>

          <p className="supply-description">
          At H &amp; P Projects, we are more than just a service provider—we are a complete solutions partner. Our approach ensures that every stage of the project lifecycle, from planning to execution, is delivered with precision, efficiency, and consistency. We bring together expertise across civil, mechanical, electrical, IT, and manpower solutions, creating a strong foundation for multi-sector support. This integrated approach enables us to provide turnkey solutions tailored to client needs. Our robust supply chain, in-house quality control, and agile processes ensure timely delivery, compliance with standards, and the flexibility to adapt to evolving requirements. This helps us handle even the most complex and large-scale projects with ease. By combining technical know-how with client-focused assurance, we consistently deliver outcomes that inspire trust. With H &amp; P Projects, clients can rely on a partner committed to full-service excellence and long-term progress.

          </p>

          <div className="supply-bottom-lines">
            <div className="supply-bottom-line short"></div>
            <div className="supply-bottom-line long"></div>
          </div>
        </div>
      </section>

      {/* -------------- FOOTER COMPONENT -------------- */}
      <Footer />
    </div>
  );
}
