import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="about w-full py-20 overflow-hidden bg-[#cdea68] rounded-lg text-[#000] px-5"
    >
      <h1 className="capitalize">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <br />
      <hr />
      <br />
      <p className="capitalize">
        What you can expect: We create tailored presentations to help you
        persuade your colleagues, clients, or investors. Whether it’s live or
        digital, delivered for one or a hundred people. We believe the mix of
        strategy and design (with a bit of coffee) is what makes your message
        clear, convincing, and captivating.
      </p>
      <div className=" w-full border-t-2 bg-zinc-900 mt-5"></div>
      <div className="flex justify-between">
        <div>
          <h1 className="  sm:text-6xl  md:text-9xl capitalize pt-3 pb-3   ">
            our approach:
          </h1>
          <button className="bg-zinc-900 flex  items-center gap-2 text-white capitalize px-5 py-2 rounded-full sm:text-[20px] mt-5">
            read more <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div>
          <img
            src={`https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg`}
            alt="img"
            className=" w-full max-w-full rounded-lg pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
