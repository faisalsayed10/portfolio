import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { Project } from "util/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faChevronLeft, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Projects: React.FC = () => {
	const [projects, setProjects] = useState<Project[]>(null);
	const slider = useRef(null);

	useEffect(() => {
		(async () => {
			const res = await fetch("projects.json");
			const data: Project[] = await res.json();
			setProjects(data);
		})();
	}, []);

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 3,
		swipeToSlide: true,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<>
			<div className="mb-20" id="projects">
				<h3 className="flex items-center text-blue-800 xl:ml-40 lg:mb-10 mb-4 text-lg md:text-xl ml-6 font-medium antialiased">
					<div className="bar bg-blue-800 mr-3"></div>Projects I've Worked On
				</h3>

				<Slider ref={slider} {...settings}>
					{projects?.map((data, i) => (
						<div className="pb-10" key={i}>
							<ProjectCard {...data} />
						</div>
					))}
				</Slider>
				<div className="flex items-center justify-center">
					<button
						className="mr-4 arrow focus:outline-none"
						onClick={() => slider.current.slickPrev()}
					>
						<FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
					</button>
					<button
						className="ml-4 arrow focus:outline-none"
						onClick={() => slider.current.slickNext()}
					>
						<FontAwesomeIcon icon={faLongArrowAltRight} size="2x" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Projects;
