import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import animationData from "@lottie/boy-vr.json";
import { container, introListVariant } from "util/variants";

const Intro: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) controls.start("show");
    if (!inView) controls.start("hidden");
  }, [controls, inView]);

  const items = [
    "Hello, my",
    "name's Faisal.",
    "I'm a Full",
    "Stack Developer.",
  ];

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:mb-0 mb-20 pt-20 lg:min-h-screen justify-center lg:justify-between xl:justify-around">
        <motion.h1
          variants={container}
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl lg:ml-20 xl:ml-40 text-center lg:text-left tracking-normal leading-tight font-extrabold antialiased"
        >
          {items.map((item, i) => (
            <motion.p key={i} variants={introListVariant}>
              {item}
            </motion.p>
          ))}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:-mt-40 mb-10"
        >
          <Lottie loop play animationData={animationData} className="w-auto vr" />
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
