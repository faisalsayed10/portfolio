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
import ts from "@iconify/icons-simple-icons/typescript";
import dart from "@iconify/icons-simple-icons/dart";
import flutter from "@iconify/icons-simple-icons/flutter";

interface Props {}

const Skills: React.FC<Props> = (props) => {
	return (
    <>
      <div className="mb-20 ml-6">
        <h3 className="flex items-center text-blue-800 lg:mb-12 mb-4 xl:ml-40 text-xl font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>My Skills
        </h3>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:gap-10 gap-3 sm:grid-cols-3 sm:text-xl text-md font-semibold antialiased sm:place-items-center"
        >
          <p>
            <span className="text-blue-800">○</span>{" "}
            <FontAwesomeIcon icon={faHtml5} /> Vanilla HTML
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={ts} /> TypeScript
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <FontAwesomeIcon icon={faReact} /> React
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
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={dart} /> Dart
          </p>
          <p>
            <span className="text-blue-800">○</span>{" "}
            <InlineIcon className="inline" icon={flutter} /> Flutter
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
