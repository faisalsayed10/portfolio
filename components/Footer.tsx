import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {}

const Footer: React.FC<Props> = (props) => {
	return (
		<>
			<div className="flex text-white text-lg items-center justify-around pb-6">
				<a href="https://github.com/faisalsayed10/portfolio" target="_blank">
					<p>
						<FontAwesomeIcon icon={faGithubAlt} className="mr-2" /> Source
					</p>
				</a>
				<a href="#home">
					<p>
						<FontAwesomeIcon icon={faLevelUpAlt} className="mr-2" />
						Back to top
					</p>
				</a>
			</div>
		</>
	);
};

export default Footer;
