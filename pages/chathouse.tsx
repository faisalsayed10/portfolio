import ProjectNavbar from "@components/ProjectNavbar";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { defaultVariant } from "util/variants";

interface Props {}

const chathouse = (props: Props) => {
  return (
    <>
      <Head>
        <title>Project - Chathouse</title>
        <link rel="icon" href="/chathouse.png" type="image"></link>
      </Head>
      <div className="bg-no-repeat bg-bottom bg-cover">
        <ProjectNavbar title="Chathouse" git_url="chathouse" />
        <div className="flex flex-col items-center text-center justify-center my-24">
          <motion.img
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            src="/chathouse.png"
            className="w-40 mb-4"
          />
          <motion.h1
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="text-4xl tracking-normal leading-tight font-medium antialiased mb-4"
          >
            Chathouse
          </motion.h1>
          <motion.p
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="mb-4"
          >
            Simple and fun public drop-in chat app.
          </motion.p>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline">
              TRY IT
            </button>
          </div>
        </div>
        <div className="bg-blue-500 text-white font-medium antialiased">
          <div className="text-xl lg:ml-20  ml-6 mb-20">
            <h3 className="flex items-center text-blue-800 text-2xl mb-6 pt-6">
              <div className="bar bg-blue-800 mr-3"></div>Stack Used
            </h3>
            <p>
              <span className="text-blue-800">○</span> GraphQL
            </p>
            <p>
              <span className="text-blue-800">○</span> Express
            </p>
            <p>
              <span className="text-blue-800">○</span> React
            </p>
            <p>
              <span className="text-blue-800">○</span> Firebase
            </p>
            <p>
              <span className="text-blue-800">○</span> React Draft WYSIWYG
            </p>
            <p>
              <span className="text-blue-800">○</span> Chakra UI
            </p>
            <p>
              <span className="text-blue-800">○</span> Vercel
            </p>
          </div>
          <div className="text-xl lg:ml-20 ml-6  mb-20 lg:w-1/2">
            <h3 className="flex items-center text-2xl text-blue-800 mb-6">
              <div className="bar bg-blue-800 mr-3"></div>Inspiration And Goal
            </h3>
            <p>
              This was a fun little project I made with the only goal to learn
              some new and amazing technologies. I also wanted to try WYSIWYG
              editors in React. So I tried building this simple chat app.
            </p>
          </div>
          <div className="text-xl lg:ml-20 ml-6 pb-6  lg:w-1/2">
            <h3 className="flex items-center text-2xl text-blue-800 mb-6">
              <div className="bar bg-blue-800 mr-3"></div>What I Learned And
              Conclusion
            </h3>
            <p>
              I got a lot of experience with GraphQL (especially GraphQL subscriptions) and I also learnt how to
              build a full-stack application using Nodejs and Express. It was a fun
              project overall!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default chathouse;
