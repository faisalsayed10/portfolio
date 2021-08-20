import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useMedia from "use-media";
import { defaultVariant } from "util/variants";

interface Props {}

const About: React.FC<Props> = (props) => {
	const controls = useAnimation();
	const { ref, inView } = useInView();
  const isWide = useMedia({ minWidth: 1024 });

	useEffect(() => {
		if (inView) controls.start("show");
		if (!inView) controls.start("hidden");
	}, [controls, inView]);

	return (
    <>
      <div
        id="about"
        className="flex max-w-screen-prose mb-20 items-center justify-evenly md:flex-row-reverse flex-col-reverse"
      >
        <motion.div
          // variants={defaultVariant}
          // ref={ref}
          // initial="hidden"
          // animate={controls}
          className="flex flex-col align-center md:justify-center lg:mx-20 mx-6 flex-1"
          data-aos={isWide ? "fade-left" : "fade-up"}
        >
          <h3 className="flex items-center text-blue-800 lg:mb-10 mb-6 text-xl font-medium antialiased">
            <div className="bar bg-blue-800 mr-3"></div>About Me
          </h3>
          <h2 className="md:text-xl text-lg text-gray-800 text-left font-semibold antialiased">
            Hi there 👋 I'm and 16 I thought I should code when I was 12 👦
            <br />
            So far I've created many side-projects and simultaneously tried to
            improve my skills and standards.
            <br />
            I've always tried to create memorable products that are not only
            enjoyable to use but are written in code that's maintainable and
            easy to understand.
          </h2>
        </motion.div>
        <div
          data-aos={isWide ? "fade-right" : "fade-down"}
          className="flex-1 flex flex-col items-center justify-center mt-8"
        >
          <div className="w-20 h-1 bg-black"></div>
          <img
            className="h-auto block computer my-0 mx-auto"
            src="/gummy-coding.png"
          />
        </div>
      </div>
    </>
  );
};

export default About;
