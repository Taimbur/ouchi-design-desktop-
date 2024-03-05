import React from "react";

const HighLign = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="text-white w-full h-screen font-[ants] font-[600] capitalize border-t-2  "
    >
      <div className="masker mt-[100px]  w-auto px-16 text-9xl  tracking-tight">
        {["we create", "eye-opening", "presentation"].map((item, index) => {
          return <h1 key={index}>{item}</h1>;
        })}
      </div>

      <div className=" border top-2   mt-20  "></div>
      <div className=" public px-4 py-4 flex justify-around items-center">
        <div className="1P">1start</div>
        <div className="12P">2start</div>
        <div className="13P">3start</div>
      </div>
    </div>
  );
};

export default HighLign;
