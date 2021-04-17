import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mockData from "util/mockData";
import ProjectCard from "./ProjectCard";

interface Props {}

const Projects: React.FC<Props> = (props) => {
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
          {mockData.map((data) => (
            <ProjectCard {...data} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Projects;
