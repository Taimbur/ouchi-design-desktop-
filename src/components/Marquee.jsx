import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full  py-10 px-10 bg-[#004d43] rounded-lg  overflow-hidden"
    >
      <div className=" flex justify-between  leading-none gap-5 py-5 items-center border-t-2 border-b-2 border-zinc-300 capitalize font whitespace-nowrap font-semibold font-serif text-9xl">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          <h1>hey sahil</h1>
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          hey sahil
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
          hey sahil
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
