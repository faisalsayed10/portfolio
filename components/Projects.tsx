import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { Project } from "util/types";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(null)

  useEffect(() => {
    (async () => {
      const res = await fetch('projects.json')
      const data: Project[] = await res.json()
      setProjects(data)
    })()
  })

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    easing: "easeInCubic",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  return (
    <>
      <div className="ml-40 mb-20">
        <h3 className="flex items-center text-blue-800 mb-12 text-xl font-medium antialiased">
          <div className="bar bg-blue-800 mr-3"></div>Few Projects I've Worked
          On
        </h3>
        <Slider {...settings}>
          {projects.map((data, i) => (
            <ProjectCard key={i} {...data} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Projects;
