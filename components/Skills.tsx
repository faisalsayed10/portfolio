import React from "react";
import {
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InlineIcon } from "@iconify/react";
import firebase from "@iconify/icons-cib/firebase";
import graphql from "@iconify/icons-cib/graphql";
import mongodb from "@iconify/icons-cib/mongodb";
import sql from "@iconify/icons-cib/postgresql";
import express from "@iconify/icons-simple-icons/express";
import prisma from "@iconify/icons-simple-icons/prisma";

interface Props {}

const Skills: React.FC<Props> = (props) => {
  return (
    <>
      <div className="ml-40 mb-20">
        <h3 className="flex items-center text-blue-800 mb-12 text-xl font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>My Skills
        </h3>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 text-xl font-medium antialiased">
          <p>
            <span className="text-blue-800">○</span>{" "}
            <FontAwesomeIcon icon={faHtml5} /> HTML &amp; CSS
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <FontAwesomeIcon icon={faJs} /> JavaScript / TypeScript
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <FontAwesomeIcon icon={faReact} /> React / Next.js
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <FontAwesomeIcon icon={faGitAlt} /> Git
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={express} /> Express
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={graphql} /> GraphQL
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={firebase} /> Firebase
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={mongodb} /> MongoDB
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={sql} /> SQL
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={prisma} /> Prisma
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
