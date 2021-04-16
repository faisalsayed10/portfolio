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
      <div className="flex bg-wave bg-cover flex-col-reverse lg:flex-row items-center lg:items-end mb-20 lg:pb-60 min-h-screen justify-between">
        <motion.h1
          variants={container}
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-5xl lg:text-7xl ml-40 tracking-normal leading-tight font-semibold antialiased"
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
        >
          <Lottie loop play animationData={animationData} className="w-auto" />
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
