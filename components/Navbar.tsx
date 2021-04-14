import React, { useState } from "react";
import Link from "next/link";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie-player";
import animationData from "@lottie/40209-hamburger-with-colors.json";
import Wave from "@public/wave.svg"

interface Props {}

export const Navbar: React.FC<Props> = (props) => {
  const [play, setPlay] = useState(false);
  const [segmentFrom, setSegmentFrom] = useState(0);
  const [segmentTo, setSegmentTo] = useState(45);
  const [open, setOpen] = useState(false)
  const segments = [segmentFrom, segmentTo];

  return (
    <>
    <div className="flex justify-between items-center mt-10 mx-10">
      <div className="flex items-center">
        <Link href="/">
          <h2 className="uppercase tracking-widest text-2xl mr-16">
            Faisal Sayed<span className="text-red-600">.</span>
          </h2>
        </Link>
        <a href="https://github.com/faisalsayed10" target="_blank">
          <div className="flex items-center mr-10">
            <FontAwesomeIcon className="text-gray-400 mr-3" icon={faGithub} />
            <h2 className="tracking-wider text-l text-gray-400">Github</h2>
          </div>
        </a>
        <a href="https://twitter.com/faisal_sayed05" target="_blank">
          <div className="flex items-center">
            <FontAwesomeIcon className="text-gray-400 mr-3" icon={faTwitter} />
            <h2 className="tracking-wider text-l text-gray-400">Twitter</h2>
          </div>
        </a>
      </div>
      <button onClick={() => setPlay(true)}>
        <Lottie
          loop={false}
          animationData={animationData}
          segments={segments}
          play={play}
          onComplete={() => {
            setPlay(false);
            if (segmentFrom === 0) {
              setOpen(true)
              setSegmentFrom(45);
              setSegmentTo(91)
            } else if (segmentFrom === 45) {
              setOpen(false)
              setSegmentFrom(0)
              setSegmentTo(45)
            }
          }}
          className="w-11 h-11"
        />
      </button>
    </div>
    <Wave />
    </>
  );
};
