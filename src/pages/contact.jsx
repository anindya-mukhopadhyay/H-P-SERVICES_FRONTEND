export default function Contact() {
  const handleSendQuery = () => {
    window.open(
      "https://forms.gle/bAQxbin5FzJqi3hcA",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center py-10 px-5 max-md:py-8 max-sm:py-6 max-sm:px-3" style={{backgroundImage: "url('/src/assets/contact-bg.jpg')"}}>
      <div className="bg-white max-w-[780px] w-full py-[50px] px-[60px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-lg max-lg:py-10 max-lg:px-12 max-md:py-[35px] max-md:px-[25px] max-sm:py-6 max-sm:px-5">
        <h1 className="font-['Georgia',serif] text-4xl mb-[25px] max-lg:text-3xl max-md:text-[28px] max-sm:text-2xl max-sm:mb-4">Contact Us</h1>

        <h2 className="text-[22px] mb-2.5 max-lg:text-xl max-md:text-lg max-sm:text-base max-sm:mb-2">Your Queries</h2>
        <p className="text-[#666] text-[15px] mb-[25px] max-md:text-sm max-md:mb-5 max-sm:text-xs max-sm:mb-4">
          We'd love to hear from you! Please reach out at your convenience so we
          can discuss your project.
        </p>

        <h3 className="my-[25px] mt-[25px] mb-[15px] text-xl tracking-wide max-md:text-lg max-md:my-5 max-sm:text-base max-sm:my-4 max-sm:mb-3">DUST SOLUTION SYSTEM</h3>

        <p className="text-sm text-[#444] leading-[1.8] mb-[15px] max-md:text-xs max-md:mb-3 max-sm:leading-[1.6]">
          Email: <br />
          kp4283462009@gmail.com <br />
          abhradeephazra99@gmail.com
        </p>

        <p className="text-sm text-[#444] leading-[1.8] mb-[15px] max-md:text-xs max-md:mb-3 max-sm:leading-[1.6]">
          B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur,
          West Bengal - 721124
        </p>

        <p className="text-sm text-[#444] leading-[1.8] mb-[15px] max-md:text-xs max-md:mb-3 max-sm:leading-[1.6]">Ph: 8984030821 , 9332627903</p>

        {/* ✅ GOOGLE FORM */}
        <button className="mt-[30px] py-3.5 px-10 bg-[#5a543a] text-white border-none text-sm tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-[#3f3a28] rounded max-md:mt-6 max-md:py-3 max-md:px-8 max-md:text-xs max-sm:mt-5 max-sm:py-2.5 max-sm:px-6 max-sm:tracking-wide" onClick={handleSendQuery}>
          SEND YOUR QUERY
        </button>
      </div>
    </div>
  );
}
