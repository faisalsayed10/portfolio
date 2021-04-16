import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { defaultVariant } from "util/variants";

interface Props {}

const About: React.FC<Props> = (props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) controls.start("show");
    if (!inView) controls.start("hidden");
  }, [controls, inView]);

  return (
    <>
      <div className="flex max-w-screen-prose bg-gradient-to-r mb-20 from-blue-700 to-blue-300 flex-row-reverse">
        <motion.div
          variants={defaultVariant}
          ref={ref}
          initial="hidden"
          animate={controls}
          className="flex flex-col align-center justify-center mx-20 flex-1 min-h-screen"
        >
          <h3 className="flex items-center text-blue-800 mb-12 text-xl font-medium antialiased">
            <div className="bar bg-blue-800 mr-3"></div>About Me
          </h3>
          <h2 className="text-2xl text-white text-justify font-medium antialiased">
            I'm a 16-year-old student currently studying in high school.
            <br />
            <br />
            I started coding when I was 12. So far I've created many
            side-projects and simultaneously tried to improve my skills and
            standards.
            <br />
            <br />
            I've always tried to create memorable products that are not only
            enjoyable to use but are written in code that's maintainable and
            easy to understand.
          </h2>
        </motion.div>
        <div className="flex-1">
          <img className="h-auto" src="/gummy-coding.png" />
        </div>
      </div>
    </>
  );
};

export default About;
