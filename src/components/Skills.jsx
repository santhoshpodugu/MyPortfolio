import React from "react";
import Title from "./Title";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import python from "../assets/python.svg";
import sql from "../assets/sql.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import tailwind from "../assets/tailwind.svg";

function Skills() {
  const skills = [
    {
      Img: react,
      name: "React",
    },
    {
      Img: js,
      name: "JavaScript",
    },
    {
      Img: python,
      name: "Python",
    },
    {
      Img: sql,
      name: "SQL",
    },
    {
      Img: git,
      name: "Git",
    },
    {
      Img: html,
      name: "HTML",
    },
    {
      Img: css,
      name: "CSS",
    },
    {
      Img: tailwind,
      name: "TailwindCSS",
    },
  ];

  return (
    <section
      id="skills"
      className="h-[700px] flex flex-col items-center pt-[103px]"
    >
      <Title>My Skills</Title>
      <div className="grid grid-cols-4 gap-x-36 gap-y-20 md:gap-x-9 pt-28">
        {skills.map((skill) => {
          return (
            <img
              src={skill.Img}
              alt="skill"
              title={skill.name}
              className="w-40 cursor-pointer hover:scale-125 transition-all duration-500 hover:shadow-[0_0_5px_5px] hover:shadow-primary-shadow hover:rounded-xl hover:p-1 md:w-[70px]"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
