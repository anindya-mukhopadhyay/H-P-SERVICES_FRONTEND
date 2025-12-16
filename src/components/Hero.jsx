import "./styles/Hero.css";
import leftImage from "../assets/hero-office.jpg";
import rightImage from "../assets/hero-title.jpg";

export default function Hero() {
  return (
    <section className="hero-split">

      {/* LEFT IMAGE */}
      <div
        className="hero-left"
        style={{ backgroundImage: `url(${leftImage})` }}
      ></div>

      {/* RIGHT IMAGE */}
      <div
        className="hero-right"
        style={{ backgroundImage: `url(${rightImage})` }}
      >
        {/* DARK DIAGONAL OVERLAY */}
        <div className="hero-overlay"></div>

        {/* ANIMATED WORDS */}
        <div className="hero-words">
          <span className="word w1">Innovate</span>
          <span className="word w2">Inspire</span>
          <span className="word w3">Impact</span>
          <span className="word w4">Repeat</span>
        </div>
      </div>
    </section>
  );
}
