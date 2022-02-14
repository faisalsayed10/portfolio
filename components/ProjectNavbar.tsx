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
		<div className="hidden sm:flex pt-4 px-5 items-baseline">
			<h2 className="tracking-wider font-medium text-xl md:text-2xl sm:mr-10 z-20">{title}</h2>
			{git_url && (
				<a
					href={git_url}
					target="_blank"
					className="mr-6 font-medium text-gray-400 hover:text-gray-600 tracking-wider"
				>
					Open Source
				</a>
			)}
			<a
				href="mailto:faisal.sayed502@gmail.com"
				target="_blank"
				className="font-medium text-gray-400 hover:text-gray-600 tracking-wider"
			>
				Contact me
			</a>
		</div>
	);
};

export default ProjectNavbar;
