import React from "react";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie-player";
import animationData from "@lottie/49075-cube-loader-representing-module-or-logic.json";
import { motion } from "framer-motion";
import { container, defaultVariant, overlayListVariant } from "util/variants";

const NavbarOverlay: React.FC = () => {
  const items = ["About", "Projects", "Contact"];

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 0.5 }}
        className="absolute z-10 bg-white w-full"
        variants={defaultVariant}
      >
        <div className="flex items-center justify-left min-h-screen">
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0%" }}
            transition={{ duration: 0.3 }}
            className="flex bg-p_dark h-screen w-1/5"
          >
            <Lottie loop play animationData={animationData} />
          </motion.div>
          <div className="flex items-start ml-72">
            <div>
              <a href="mailto:faisal.sayed502@gmail.com" target="_blank">
                <div className="flex items-center mr-10 mb-4">
                  <FontAwesomeIcon
                    className="text-indigo-400 mr-3"
                    icon={faEnvelope}
                  />
                  <h2 className="tracking-wider text-md font-medium text-gray-700">
                    faisal.sayed502@gmail.com
                  </h2>
                </div>
              </a>
              <a href="https://github.com/faisalsayed10" target="_blank">
                <div className="flex items-center mr-10 mb-4">
                  <FontAwesomeIcon
                    className="text-indigo-400 mr-3"
                    icon={faGithub}
                  />
                  <h2 className="tracking-wider text-md font-medium text-gray-700">
                    faisalsayed10
                  </h2>
                </div>
              </a>
              <a href="https://twitter.com/faisal_sayed05" target="_blank">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-indigo-400 mr-3"
                    icon={faTwitter}
                  />
                  <h2 className="tracking-wider text-md font-medium text-gray-700">
                    faisal_sayed05
                  </h2>
                </div>
              </a>
            </div>
            <div className="ml-16">
              <motion.ul variants={container} initial="hidden" animate="show">
                {items.map((item, i) => (
                  <motion.li key={i} variants={overlayListVariant}>
                    <a href={`/${item.toLowerCase()}`}>
                      <h1 className="text-6xl tracking-wide mb-8 font-bold">
                        {item}
                      </h1>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavbarOverlay;
