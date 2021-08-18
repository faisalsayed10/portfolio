import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ReactRotatingText from "react-rotating-text";

const WhatIdo: React.FC = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) controls.start("show");
		if (!inView) controls.start("hidden");
	}, [controls, inView]);

	return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        {/* <div className="flex items-start relative xl:ml-40 ml-6 flex-1 justify-center lg:min-h-screen flex-col"> */}
          {/* <h3 className="flex items-center text-blue-800 lg:mb-12 mb-4 text-xl font-medium antialiased">
            <div className="bar bg-blue-800 mr-3"></div>What I Do
          </h3> */}
          <h1 className="text-6xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-semibold antialiased">
            <ReactRotatingText items={["I Think 🧠", "I Build 🔨", "I Ship 🚀"]} />
          </h1>
          {/* <img className="absolute bottom-1/2 w-1/3" src="/figure-1.png" />
          <img
            className="absolute top-1/3 left-1/4 w-2/3"
            src="/figure-3.png"
          />
          <img className="absolute top-2/3 w-2/3" src="/figure-2.png" /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default WhatIdo;
