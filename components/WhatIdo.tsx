import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { whatIdoVariant } from "util/variants";

const WhatIdo: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) controls.start("show");
    if (!inView) controls.start("hidden");
  }, [controls, inView]);

  return (
    <>
      <div className="flex max-w-screen-prose mb-20">
        <div className="flex items-start ml-40 flex-1 justify-center min-h-screen flex-col">
          <h3 className="flex items-center text-blue-800 mb-12 text-xl font-medium antialiased">
            <div className="bar bg-blue-800 mr-3"></div>What I Do
          </h3>
          <h2 className="text-4xl mb-32 font-semibold antialiased">
            <motion.p
              variants={whatIdoVariant}
              ref={ref}
              initial="hidden"
              animate={controls}
            >
              I enjoy creating products,
            </motion.p>
            <motion.p
              variants={whatIdoVariant}
              ref={ref}
              initial="hidden"
              animate={controls}
            >
              which are fun and delightful.
            </motion.p>
          </h2>
          <h1 className="text-9xl font-semibold antialiased">
            <motion.p
              variants={whatIdoVariant}
              ref={ref}
              initial="hidden"
              animate={controls}
            >
              Think.&nbsp;Make.
            </motion.p>
            <motion.p
              variants={whatIdoVariant}
              ref={ref}
              initial="hidden"
              animate={controls}
            >
              Ship.
            </motion.p>
          </h1>
        </div>
        <div className="relative flex-1">
          <img className="absolute bottom-1/2 w-1/3" src="/figure-1.png" />
          <img
            className="absolute top-1/3 left-1/4 w-3/4"
            src="/figure-3.png"
          />
          <img className="absolute top-2/3 w-1/2" src="/figure-2.png" />
        </div>
      </div>
    </>
  );
};

export default WhatIdo;
