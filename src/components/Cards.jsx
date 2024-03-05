import React from "react";

const Cards = () => {
  return (
    <div className="mt-[90px] text-black px-14 flex  gap-5 w-full h-full ">
      <div className="w-1/2 h-[26vw] rounded-lg bg-[#004D43] relative flex justify-center items-center ">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          className=" absolute w-32"
          alt="ouchi"
        />
        <div className="absolute top-3/4 mt-8 left-3">
          <button class="bg-transparent hover:bg-blue-500  text-[#CDEA68] font-semibold hover:text-white py-2 px-4 border border-[#CDEA68] hover:border-transparent rounded-full ">
            2019-2024
          </button>
        </div>
      </div>
      <div className=" h-[26vw] w-1/4 rounded-lg bg-[#212121] flex justify-center items-center relative">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          className="w-32 absolute"
          alt="clusht"
        />
        <div className="absolute top-3/4 mt-8 left-3">
          <button class="bg-transparent capitalize hover:bg-blue-500  text-[#CDEA68] font-semibold hover:text-white py-2 px-4 border border-[#CDEA68] hover:border-transparent rounded-full ">
            rating 5.0 on cluthch{" "}
          </button>
        </div>
      </div>
      <div className=" h-[26vw] w-1/4 rounded-lg bg-[#212121] relative flex justify-center items-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          alt="future"
          className="w-32 absolute"
        />
        <div className="absolute top-3/4 mt-8 left-3">
          <button class="bg-transparent capitalize hover:bg-blue-500  text-[#CDEA68] font-semibold hover:text-white py-2 px-4 border border-[#CDEA68] hover:border-transparent rounded-full ">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
