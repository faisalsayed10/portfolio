import ProjectNavbar from "@components/ProjectNavbar";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { defaultVariant } from "util/variants";

const carbonSlack = () => {
  return (
    <>
      <Head>
        <title>Project - Carbon Slack</title>
        <link rel="icon" href="/carbon-slack.png" type="image"></link>
      </Head>
      <div className="px-10">
        <ProjectNavbar title="Carbon Slack" git_url="carbon-slack" />
        <div className="flex flex-col items-center text-center justify-center my-24">
          <motion.h1
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="text-5xl tracking-normal leading-tight font-medium antialiased mb-4"
          >
            <span className="text-purple-700">Carbon</span> All-in-one directly
            on <span className="underline">Slack</span>
          </motion.h1>
          <motion.p
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="mb-4 text-xl"
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
