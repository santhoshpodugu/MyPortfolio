import React from "react";
import Title from "./Title";
import School from "../assets/school.svg";
import College from "../assets/college.svg";
import Graduation from "../assets/graduation.svg";

const educationDetails = [
  {
    image: `${Graduation}`,
    college: "B.Tech - SV Engineering College",
    year: "2021",
    branch: "Computer Science & Engineering",
  },
  {
    image: `${College}`,
    college: "Intermediate - Triveni Junior College",
    year: "2016",
    branch: "Mathematics, Physics & Chemistry",
  },
  {
    image: `${School}`,
    college: "SSC - Sri Chaitanya School",
    year: "2014",
    branch: "Mathematics & Sciences",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="h-[610px] flex flex-col items-center pt-[80px]"
    >
      <Title>Education</Title>
      <div className="flex flex-col py-10">
        {educationDetails.map((edu) => {
          return (
            <div key={edu.college} className="flex mb-3">
              <div className="flex flex-col">
                <img
                  src={edu.image}
                  className="w-10 border-2 p-[2px] rounded-3xl md:w-8"
                  alt=""
                />
                <div className="bg-white w-[2px] h-[90px] ml-[18px] mt-2 md:ml-[14px] md:h-20"></div>
              </div>
              <div className="ml-3">
                <p className="font-bold text-2xl md:text-[18px]">
                  {edu.college}
                </p>
                <p className=" text-gray-400 text-xl my-3 md:text-[18px] md:my-2">
                  {edu.year}
                </p>
                <p className="font-bold text-xl text-primary-special md:text-[18px]">
                  {edu.branch}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
