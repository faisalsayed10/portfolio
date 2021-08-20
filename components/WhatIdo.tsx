import { Stickyroll } from "@stickyroll/stickyroll";
import React from "react";

const headlines = ["Think 🧠", "Build 🔨", "Ship 🚀"];

const WhatIdo: React.FC = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center">
        <div className="flex items-start relative xl:ml-40 ml-6 flex-1 justify-center lg:min-h-screen flex-col">
          <h1 className="text-6xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-semibold antialiased">
            <ReactRotatingText
              items={["I Think 🧠", "I Build 🔨", "I Ship 🚀"]}
            />
          </h1>
          <img className="absolute bottom-1/2 w-1/3" src="/figure-1.png" />
          <img
            className="absolute top-1/3 left-1/4 w-2/3"
            src="/figure-3.png"
          />
          <img className="absolute top-2/3 w-2/3" src="/figure-2.png" />
        </div>
      </div> */}
      <div className="flex items-center justify-center min-h-screen">
        <Stickyroll pages={headlines} factor={0.75}>
          {({ pageIndex, progress }) => (
            <div
              style={{
                paddingTop: "40vh",
                position: "relative",
              }}
            >
              <h1
                style={{ opacity: progress }}
                className="text-6xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-semibold antialiased"
              >
                {headlines[pageIndex]}
              </h1>
            </div>
          )}
        </Stickyroll>
      </div>
    </>
  );
};

export default WhatIdo;
