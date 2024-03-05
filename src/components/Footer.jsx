import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F1F1F1] text-black  ">
      <div className="flex justify-around gap-96 ">
        <div className="  capitalize">
          <h1 className=" lg:text-8xl md:text-6xl sm:text-3xl font-bold">
            eye- <br /> <span>opeing</span>{" "}
          </h1>
        </div>
        <div className="  capitalize ">
          <h1 className=" lg:text-8xl md:text-6xl sm:text-3xl font-bold ">
            presentations
          </h1>
          <p>S:</p>
          <div className="flex-col">
            <p>instagram</p>
            <p>behance </p>
            <p>facebook</p>
            <p>linkedin</p>
          </div>
        </div>
      </div>
      <h1 className=" text-9xl animate-bounce mt-[105px] font-bolder font-sans text-center capitalize sm:text-3xl">
        {" "}
        all right reserved by owner ©2024 khan
      </h1>
    </div>
  );
};

export default Footer;
