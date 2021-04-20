import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  git_url: string;
}

const ProjectNavbar: React.FC<Props> = ({ title, git_url }) => {
  return (
    <div className="flex pt-10 px-10 items-center">
      <h2 className="tracking-wider font-medium text-xl md:text-2xl sm:mr-16 z-20">
        {title}
      </h2>
      <a href={`https://github.com/faisalsayed10/${git_url}`} target="_blank">
        <div className="mr-6 font-medium text-gray-600 hover:text-gray-600">
          <h2 className="tracking-wider hidden sm:block text-l">Open Source</h2>
        </div>
      </a>
      <a href="mailto:faisal.sayed502@gmail.com" target="_blank">
        <div className="mr-6 font-medium text-gray-600 hover:text-gray-600">
          <h2 className="tracking-wider hidden sm:block text-l">Contact me</h2>
        </div>
      </a>
      <a href="/">
        <div className="mr-6 font-medium text-gray-600 hover:text-gray-600">
          <h2 className="tracking-wider text-l">Home</h2>
        </div>
      </a>
    </div>
  );
};

export default ProjectNavbar;
