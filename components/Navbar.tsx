import React, { useState } from "react";
import Link from "next/link";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie-player";
import animationData from "@lottie/40209-hamburger-with-colors.json";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	play: boolean;
	setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ open, setOpen, play, setPlay }) => {
	const [segmentFrom, setSegmentFrom] = useState(0);
	const [segmentTo, setSegmentTo] = useState(45);
	const segments = [segmentFrom, segmentTo];

	return (
		<>
			<div className="flex justify-between items-center pt-10 md:px-10 px-4 absolute w-full">
				<div className="flex items-center">
					<Link href="/">
						<h2
							className={`uppercase tracking-widest text-xl md:text-2xl md:mr-16 z-20 ${
								open ? "text-white" : null
							}`}
						>
							Faisal Sayed<span className="text-red-600">.</span>
						</h2>
					</Link>
					<a href="https://github.com/faisalsayed10" target="_blank">
						<div className="md:flex hidden items-center mr-4 md:mr-10 text-gray-400 hover:text-gray-600">
							<FontAwesomeIcon className="mr-3" icon={faGithub} />
							<h2 className="tracking-wider text-l">Github</h2>
						</div>
					</a>
					<a href="https://twitter.com/faisal_sayed05" target="_blank">
						<div className="md:flex hidden items-center text-gray-400 hover:text-gray-600">
							<FontAwesomeIcon className="mr-3" icon={faTwitter} />
							<h2 className="tracking-wider text-l">Twitter</h2>
						</div>
					</a>
				</div>
				<div className="flex items-center gap-5">
					<iframe
						src="https://github.com/sponsors/faisalsayed10/button"
						title="Sponsor faisalsayed10"
						height="32"
						width="116"
						style={{ border: 0, borderRadius: 7 }}
					></iframe>
					<button className={"z-20 focus:outline-none"} onClick={() => setPlay(true)}>
						<Lottie
							loop={false}
							animationData={animationData}
							segments={segments}
							play={play}
							onEnterFrame={(frame) => {
								if (segmentFrom === 0 && frame.currentTime > 1) setOpen(true);
								else if (segmentFrom === 45 && frame.currentTime > 1) setOpen(false);
							}}
							onComplete={() => {
								setPlay(false);
								if (segmentFrom === 0) {
									setSegmentFrom(45);
									setSegmentTo(91);
								} else if (segmentFrom === 45) {
									setSegmentFrom(0);
									setSegmentTo(45);
								}
							}}
							className="w-6 h-6"
						/>
					</button>
				</div>
			</div>
		</>
	);
};
