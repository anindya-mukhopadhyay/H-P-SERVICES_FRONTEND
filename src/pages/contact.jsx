export default function Contact() {
  const handleSendQuery = () => {
    window.open(
      "https://forms.gle/bAQxbin5FzJqi3hcA",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-[#e4eef0] font-['Montserrat',sans-serif] flex items-center justify-center py-10 px-5 max-md:py-8 max-sm:py-6 max-sm:px-4">
      <div className="bg-white max-w-[780px] w-full py-10 px-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl max-lg:py-8 max-lg:px-10 max-md:py-6 max-md:px-6 max-sm:py-5 max-sm:px-4">
        <div className="flex items-end gap-2.5 justify-center mb-4 max-md:mb-3 max-sm:mb-2 max-sm:gap-1">
          <h1 className="text-5xl font-black leading-[1.1] relative max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            <span className="text-[65px] text-[#075056] max-lg:text-[55px] max-md:text-[45px] max-sm:text-4xl">C</span>
            ONTACT US
          </h1>
        </div>

        <div className="w-[150px] h-1.5 bg-[#075056] rounded-xl mx-auto mb-4 max-md:w-[120px] max-md:h-1 max-md:mb-3 max-sm:w-[100px] max-sm:mb-2"></div>

        <h2 className="text-xl font-bold mb-2 text-[#075056] max-lg:text-lg max-md:text-base max-sm:text-sm">Your Queries</h2>
        <p className="text-[#333] text-sm mb-4 leading-[150%] max-md:text-xs max-md:mb-3 max-sm:text-[11px] max-sm:mb-2">
          We'd love to hear from you! Please reach out at your convenience so we
          can discuss your project.
        </p>

        <h3 className="my-4 text-lg font-bold tracking-wide text-[#075056] max-md:text-base max-md:my-3 max-sm:text-sm max-sm:my-2"> H & P Projects</h3>

        <p className="text-sm text-[#333] leading-[1.6] mb-3 max-md:text-xs max-md:mb-2 max-sm:text-[11px] max-sm:leading-[1.5] max-sm:mb-1.5">
          Email: <br />
          kp4283462009@gmail.com <br />
          abhradeephazra99@gmail.com
        </p>

        <p className="text-sm text-[#333] leading-[1.6] mb-3 max-md:text-xs max-md:mb-2 max-sm:text-[11px] max-sm:leading-[1.5] max-sm:mb-1.5">
          B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur,
          West Bengal - 721124
        </p>

        <p className="text-sm text-[#333] leading-[1.6] mb-4 max-md:text-xs max-md:mb-3 max-sm:text-[11px] max-sm:mb-2 max-sm:leading-[1.5]">Ph: 8984030821 , 9332627903</p>

        <button className="mt-4 py-3 px-10 bg-[#075056] text-white border-none text-sm font-semibold tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-[#054045] rounded-lg shadow-md max-md:mt-3 max-md:py-2.5 max-md:px-8 max-md:text-xs max-sm:mt-2 max-sm:py-2 max-sm:px-6 max-sm:text-[11px] max-sm:tracking-wide" onClick={handleSendQuery}>
          SEND YOUR QUERY
        </button>
      </div>
    </div>
  );
}
