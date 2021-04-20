import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { defaultVariant } from "util/variants";

const carbonSlack = () => {
  return (
    <>
      <Head>
        <title>Carbon Slack</title>
        <link rel="icon" href="/carbon-slack.png" type="image"></link>
      </Head>
      <div className="px-10">
        <div className="flex pt-10 items-center">
          <h2 className="tracking-wider font-medium text-xl md:text-2xl sm:mr-16 z-20">
            Carbon Slack
          </h2>
          <a href="https://github.com/faisalsayed10" target="_blank">
            <div className="mr-10 font-medium text-gray-600 hover:text-gray-600">
              <h2 className="tracking-wider hidden sm:block text-l">
                Open Source
              </h2>
            </div>
          </a>
          <a href="mailto:faisal.sayed502@gmail.com" target="_blank">
            <div className="font-medium text-gray-600 hover:text-gray-600">
              <h2 className="tracking-wider hidden sm:block text-l">
                Contact me
              </h2>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center text-center justify-center my-24">
          <motion.h1
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="text-4xl tracking-normal leading-tight font-medium antialiased mb-4"
          >
            <span className="text-purple-700">Carbon</span> All-in-one directly
            on <span className="underline">Slack</span>
          </motion.h1>
          <motion.p
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="mb-4"
          >
            Create beautiful images of your code directly from slack.
          </motion.p>
          <div>
            <a href="https://carbon-slack.netlify.app/slack" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline">
                GET IT
              </button>
            </a>
            <a href="https://carbon.now.sh" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 ml-6 rounded focus:outline-none focus:shadow-outline">
                Carbon Official Website
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src="/carbon-ss-1.png"
            className="shadow-2xl md:w-1/3 rounded-md mr-6 mb-6"
          />
          <img
            src="/carbon-ss-2.png"
            className=" md:w-1/2 shadow-2xl rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default carbonSlack;
