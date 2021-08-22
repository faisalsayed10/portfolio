import ProjectNavbar from "@components/ProjectNavbar";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { defaultVariant } from "util/variants";

interface Props {}

const angelfiles = (props: Props) => {
  return (
    <>
      <Head>
        <title>Project - Angel Files</title>
        <link rel="icon" href="/angel-files.png" type="image"></link>
      </Head>
      <div className="bg-no-repeat bg-bottom bg-cover">
        <ProjectNavbar title="Angel Files" git_url="angel-files" />
        <div className="flex flex-col items-center text-center justify-center my-24">
          <motion.img
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            src="/angel-files.png"
            className="w-40"
          />
          <motion.h1
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="text-4xl tracking-normal leading-tight font-medium antialiased mb-4"
          >
            Angel Files
          </motion.h1>
          <motion.p
            variants={defaultVariant}
            initial="hidden"
            animate="show"
            className="mb-4"
          >
            Fast and secure cloud storage service.
          </motion.p>
          <div>
            <a href="https://angel-files.vercel.app" target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline">
                GET IT
              </button>
            </a>
          </div>
        </div>
        <div className="bg-blue-500 text-white font-medium antialiased">
          <div className="text-xl lg:ml-20  ml-6 mb-20">
            <h3 className="flex items-center text-blue-800 text-2xl mb-4 pt-6">
              <div className="bar bg-blue-800 mr-3"></div>Stack Used
            </h3>
            <p>
              <span className="text-blue-800">○</span> React
            </p>
            <p>
              <span className="text-blue-800">○</span> Chakra UI
            </p>
            <p>
              <span className="text-blue-800">○</span> Firebase
            </p>
            <p>
              <span className="text-blue-800">○</span> Vercel
            </p>
          </div>
          <div className="text-xl lg:ml-20 ml-6  mb-20 lg:w-1/2">
            <h3 className="flex items-center text-2xl text-blue-800 mb-4">
              <div className="bar bg-blue-800 mr-3"></div>Inspiration And Goal
            </h3>
            <p>
              Cloud Storage can be expensive. This inspired me to make my own
              cloud storage service. Angel Files allows you to create folders
              and upload files which are kept highly secured in our database. I
              also implemented a highly reliable user authentication system
              which makes sure that your data is not stolen or leaked.
            </p>
          </div>
          <div className="text-xl lg:ml-20 ml-6 pb-6  lg:w-1/2">
            <h3 className="flex items-center text-2xl text-blue-800 mb-4">
              <div className="bar bg-blue-800 mr-3"></div>What I Learned And
              Conclusion
            </h3>
            <p>
              Honestly, this was not at all a simple project, I had to solve
              numerous bugs while building it. I'm happy that this project is
              actually fully complete with some complex functionalities such as
              authentication, file upload and security. Overall, I'm too proud
              of this project + I got to work with some awesome technologies!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default angelfiles;
