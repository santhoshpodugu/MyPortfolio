import React, { useEffect, useRef } from "react";
import Image from "../assets/rightbg.png";
import Typed from "typed.js";

function MainSection() {
  const textStyle =
    "bg-gradient-to-t from-primary-main to-primary-special bg-clip-text text-transparent font-bold";
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["UPSC Aspirant", "Tech Enthusiast", "Web Developer."],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-around pt-[150px] md:flex-col md:pt-[120px]"
    >
      <div className="text-[3.4rem] md:text-[35px]">
        Hello,
        <div>
          I'm <span className={textStyle}>Santhosh Podugu,</span>
        </div>
        <div>a Passionate</div>
        <span ref={element} className={textStyle}></span>
      </div>
      <div>
        <img
          src={Image}
          alt="developer"
          className="mt-5 h-96 md:h-72 md:mt-14"
        />
      </div>
    </section>
  );
}

export default MainSection;
