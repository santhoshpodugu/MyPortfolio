import React from "react";
import Title from "./Title";
import medicine from "../assets/medicine.jpeg";
import social from "../assets/social.jpeg";

function Projects() {
  const projectsBlock = [
    {
      Img: social,
      tech: "HTML, JavaScript, CSS, MySQL",
      name: "Social Media Sentiment Analysis",
    },
    {
      Img: medicine,
      tech: "Python, Machine Learning, Django",
      name: "Detecting Serendipitous Drug Usage",
    },
  ];
  return (
    <section
      id="projects"
      className="h-[700px] pt-[72px] flex flex-col items-center md:h-[950px]"
    >
      <Title>Projects</Title>
      <div className="flex gap-x-20 justify-center my-24 md:flex-col gap-y-14">
        {projectsBlock.map((project) => {
          return (
            <div
              key={project.name}
              className="hover:border p-2 hover:shadow-[0_0_5px_5px] hover:shadow-primary-shadow hover:scale-125 transition-all duration-500 rounded-2xl cursor-pointer flex flex-col md:w-[350px] md:hover:scale-110"
            >
              <img
                src={project.Img}
                className="w-[400px] h-[250px] object-cover rounded-xl"
              />
              <p className="font-bold text-[14px] bg-gradient-to-r from-primary-main to-primary-special rounded-lg mt-2 p-[2px] text-center">
                {project.tech}
              </p>
              <p className="font-bold text-xl mt-2 md:text-[17px]">
                {project.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
