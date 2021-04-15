import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import animationData from "@lottie/boy-vr.json";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, rotateX: "90deg", skewY: "-5deg" },
    show: { opacity: 1, rotateX: "0deg", skewY: "0deg" },
  };

  return (
    <>
      <div className="flex bg-wave bg-cover items-center justify-end">
        <div className="flex items-center justify-center min-h-screen flex-1 pt-32 flex-col">
          <motion.h1
            variants={container}
            ref={ref}
            initial="hidden"
            animate={controls}
            className="text-5xl lg:text-6xl tracking-normal leading-tight font-semibold antialiased"
          >
            {items.map((item, i) => (
              <motion.p key={i} variants={listItem}>
                {item}
              </motion.p>
            ))}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="h-screen flex items-center justify-center"
        >
          <Lottie loop play animationData={animationData} />
        </motion.div>
      </div>
    </>
  );
};

export default Intro;
