import leftImage from "../assets/hero-office.jpg";
import rightImage from "../assets/hero-title.jpg";

export default function Hero() {
  return (
    <section className="flex w-full h-[550px] relative overflow-hidden max-lg:h-[450px] max-md:h-[400px] max-sm:h-[350px] max-sm:flex-col">

      {/* LEFT IMAGE */}
      <div
        className="w-1/2 bg-cover bg-center max-sm:w-full max-sm:h-1/2"
        style={{ backgroundImage: `url(${leftImage})` }}
      ></div>

      {/* RIGHT IMAGE */}
      <div
        className="w-1/2 relative bg-cover bg-center flex items-center pl-10 max-lg:pl-7 max-md:pl-5 max-sm:w-full max-sm:h-1/2 max-sm:pl-4"
        style={{ backgroundImage: `url(${rightImage})` }}
      >
        {/* DARK DIAGONAL OVERLAY */}
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none" style={{
          background: 'linear-gradient(105deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%)'
        }}></div>

        {/* ANIMATED WORDS */}
        <div className="relative z-10 flex flex-col gap-[22px] max-lg:gap-4 max-md:gap-3 max-sm:gap-2">
          <span className="text-[40px] font-extrabold text-white bg-[rgba(255,255,255,0.2)] py-1.5 px-4 rounded-lg backdrop-blur-[4px] opacity-0 translate-x-10 animate-slide-in-1 max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px] max-sm:py-1 max-sm:px-3">Innovate</span>
          <span className="text-[40px] font-extrabold text-white bg-[rgba(255,255,255,0.2)] py-1.5 px-4 rounded-lg backdrop-blur-[4px] opacity-0 translate-x-10 animate-slide-in-2 max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px] max-sm:py-1 max-sm:px-3">Inspire</span>
          <span className="text-[40px] font-extrabold text-white bg-[rgba(255,255,255,0.2)] py-1.5 px-4 rounded-lg backdrop-blur-[4px] opacity-0 translate-x-10 animate-slide-in-3 max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px] max-sm:py-1 max-sm:px-3">Impact</span>
          <span className="text-[40px] font-extrabold text-white bg-[rgba(255,255,255,0.2)] py-1.5 px-4 rounded-lg backdrop-blur-[4px] opacity-0 translate-x-10 animate-slide-in-4 max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px] max-sm:py-1 max-sm:px-3">Repeat</span>
        </div>
      </div>
    </section>
  );
}
