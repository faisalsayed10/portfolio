import React from "react";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie-player";
import animationData from "@lottie/49075-cube-loader-representing-module-or-logic.json";

interface Props {}

const NavbarOverlay: React.FC<Props> = (props) => {
  return (
    <>
      <div className="absolute z-10 bg-white w-full">
        <div className="flex items-center justify-left min-h-screen">
          <div className="flex bg-p_dark h-screen w-1/5">
            <Lottie
              loop
              play
              animationData={animationData}
            />
          </div>
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
              <h1 className="text-6xl mb-8 font-bold">About</h1>
              <h1 className="text-6xl mb-8 font-bold">Projects</h1>
              <h1 className="text-6xl font-bold">Contact</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarOverlay;
