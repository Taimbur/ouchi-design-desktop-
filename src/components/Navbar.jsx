import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999] px-20 py-5 text-white text-[20px]  font-[anta] flex justify-between ">
      <div className="logo ">Navbar</div>
      <div className="links flex gap-5   ">
        {["home", "services", "links", "about us", "contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`capitalize text-[16px] justify-end ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
