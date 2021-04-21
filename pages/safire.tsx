import ProjectNavbar from "@components/ProjectNavbar";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { defaultVariant } from "util/variants";

interface Props {}

const safire = (props: Props) => {
  return (
    <>
      <Head>
        <title>Project - Safire</title>
        <link rel="icon" href="/safire.png" type="image"></link>
      </Head>
      <div className="bg-no-repeat bg-bottom bg-cover">
        <ProjectNavbar title="Safire" git_url="safire_web" />
        <div className="flex flex-col items-center text-center justify-center my-24">
          <motion.img
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            src="/safire.png"
            className="w-40 mb-4"
          />
          <motion.h1
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="text-4xl tracking-normal leading-tight font-medium antialiased mb-4"
          >
            Safire
          </motion.h1>
          <motion.p
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="mb-4"
          >
            Open-source end-to-end encrypted social media platform for genZ.
          </motion.p>
          <div>
            <button className="bg-blue-400 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline">
              GET IT (WIP)
            </button>
          </div>
        </div>
        <div className="bg-blue-500 text-white font-medium antialiased">
          <div className="text-xl lg:ml-20  ml-6 mb-20">
            <h3 className="flex items-center text-blue-800 text-2xl mb-6 pt-6">
              <div className="bar bg-blue-800 mr-3"></div>Stack Used
            </h3>
            <p>
              <span className="text-blue-800">○</span> NextJS
            </p>
            <p>
              <span className="text-blue-800">○</span> Chakra UI
            </p>
            <p>
              <span className="text-blue-800">○</span> SWR
            </p>
            <p>
              <span className="text-blue-800">○</span> Prisma
            </p>
            <p>
              <span className="text-blue-800">○</span> Postgresql
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
              Every Social Media which exists today is not at all open-source.
              This means that those companies can do whatever they want with the
              users' data. Also, data leak has become common nowadays{" "}
              <i>cough cough facebook</i>. So I decided that I want to build my
              own social media which will be not only open-sourced but also
              end-to-end encrypted (chats and private posts)! Once this project
              is complete I even plan to make it an inclusive social media which
              will be invite-only just like clubhouse. Now you may ask the
              reason behind this and it is simple. I aim to keep all the
              negativity away from this platform, so only worthy people are
              allowed to be on this platform! <br /> PS. Nothing is confirmed
              right now as it is still WIP.
            </p>
          </div>
          <div className="text-xl lg:ml-20 ml-6 pb-6  lg:w-1/2">
            <h3 className="flex items-center text-2xl text-blue-800 mb-6">
              <div className="bar bg-blue-800 mr-3"></div>What I Learned And
              Conclusion
            </h3>
            <p>
              I'm getting experience building a real world application + I am
              learning many new concepts of security. And for the conclusion
              part, I'll write it in the future!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default safire;
