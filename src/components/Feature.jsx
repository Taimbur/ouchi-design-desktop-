import { motion, useAnimation } from "framer-motion";
import React from "react";

const Feature = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleEvent = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleOut = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="mt-5 px-5">
      <h1 className="text-black text-6xl leading-1 from-neutral-50 tracking-tighter">
        Featured projects
      </h1>
      <hr color="black" className="mt-[55px] size-0.5 w-full" />
      <div className="flex  w-full h-full gap-12 p-10 mt-[55px] ">
        <div className="card">
          <h5 className="fw-bold text-black uppercase font-mono   mb-5  font-bold">
            • vise
          </h5>
          <motion.div
            onHoverStart={() => handleEvent(0)}
            onHoverEnd={() => handleOut(0)}
            className=" flex w-full h-[75vh] rounded-xl relative"
          >
            <h5 className=" headings absolute  top-1/2  right-0  -translate-x-50%  -translate-y-50%  fw-bold  text-yellow-400   uppercase font-mono  font-bold text-5xl ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block tracking-tighter"
                >
                  {item}
                </motion.span>
              ))}
            </h5>
            <img
              src=" https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="pitcure"
              className="w-full h-full rounded-xl  "
            />
          </motion.div>
        </div>
        <div className="card">
          <h5 className="fw-bold text-black uppercase font-mono   mb-5  font-bold">
            • vise
          </h5>
          <motion.div
            onHoverStart={() => handleEvent(1)}
            onHoverEnd={() => handleOut(1)}
            className=" flex w-full h-[75vh] rounded-xl relative"
          >
            <h5 className=" headings absolute  top-1/2  left-0  -translate-x-50%  -translate-y-50%  fw-bold  text-yellow-400   uppercase font-mono  font-bold text-5xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block tracking-tighter"
                >
                  {item}
                </motion.span>
              ))}
            </h5>
            <img
              src="  https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="pitcure"
              className="w-full h-full rounded-xl  "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
