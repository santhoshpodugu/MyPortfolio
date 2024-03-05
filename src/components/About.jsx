import React from "react";
import Title from "./Title";

function About() {
  return (
    <section id="about" className="flex flex-col justify-evenly pt-8 h-[700px]">
      <div>
        <Title>
          About{" "}
          <span className=" bg-gradient-to-t from-primary-main to-primary-special bg-clip-text text-transparent">
            Me
          </span>
        </Title>
      </div>
      <div className="text-[32px] text-center md:text-[22px]">
        Having obtained a Bachelor of Technology degree, Santhosh dedicated the
        past two years to intensive preparation for government exams. Now, he is
        poised to re-enter the IT sector, combining the technical expertise
        acquired during his academic pursuits with the disciplined approach
        cultivated through exhaustive exam preparation. He is enthusiastic about
        contributing to the IT industry with a blend of theoretical knowledge
        and practical resilience.
      </div>
    </section>
  );
}

export default About;
