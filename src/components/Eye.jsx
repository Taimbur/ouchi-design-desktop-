import React, { useEffect, useRef, useState } from "react";
const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let Mx = e.clientX;
      let My = e.clientY;

      let Dx = Mx - window.innerWidth / 2;
      let Dy = My - window.innerHeight / 2;
      var angle = Math.atan2(Dy, Dx) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="w-full relative   h-full  bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex gap-10 left-1/2 top-1/2   -translate-x-[50%] -translate-y-[50%]">
          <div className=" w-[15vw] h-[15vw] rounded-full flex items-center  justify-center bg-white">
            <div className="flex items-center justify-center rounded-full bg-black w-2/3 h-2/3 ">
              <div
                className="relative line w-[7vw] h-[7vw]  "
                style={{
                  transform: `translate(1.1%) rotate(${rotate}deg)`,
                }}
              >
                <div className=" absolute w-7 h-7 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
          <div className=" w-[15vw] h-[15vw] rounded-full flex items-center  justify-center bg-white">
            <div className="flex items-center justify-center rounded-full bg-black w-2/3 h-2/3 ">
              <div
                className="relative line w-[7vw] h-[7vw]  "
                style={{
                  transform: `translate(10%) rotate(${rotate}deg)`,
                }}
              >
                <div className=" absolute w-7 h-7 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
