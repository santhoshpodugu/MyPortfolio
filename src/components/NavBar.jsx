import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Education",
    link: "/#education",
  },
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const bars =
    "block bg-white w-[25px] h-[3px] my-[5px] mx-auto transition-all duration-300 ease-in-out";
  return (
    <nav className="fixed flex justify-around items-center h-20 bg-primary-main top-0 inset-x-0 z-10 md:justify-between md:px-4">
      <div className="font-black text-2xl hover:text-primary-hover cursor-pointer">
        <a href="">Santhosh Podugu</a>
      </div>
      <div
        className={`flex md:flex-col md:w-full md:fixed top-20 ${
          isOpen ? "md:right-0" : "md:-right-full"
        } md:text-center md:bg-gradient-to-br md:to-primary-menu md:from-black backdrop-blur transition-all duration-300`}
      >
        {navLinks.map((link) => {
          return (
            <HashLink
              smooth
              key={link.name}
              to={link.link}
              className="p-6 hover:underline underline-offset-[10px] hover:text-primary-hover md:hover:no-underline md:hover:text-white md:p-2 md:text-[25px] md:hover:bg-gradient-to-tr md:hover:from-primary-main md:hover:to-primary-special"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {link.name}
            </HashLink>
          );
        })}
      </div>
      <div
        className={`${
          isOpen ? "active" : ""
        } hamburger-menu cursor-pointer hidden md:block`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span
          className={`${bars} ${isOpen ? "translate-y-2 rotate-45" : ""} `}
        ></span>
        <span className={`${bars} ${isOpen ? "opacity-0" : ""} `}></span>
        <span
          className={`${bars} ${isOpen ? "-translate-y-2 -rotate-45" : ""} `}
        ></span>
      </div>
    </nav>
  );
}

export default NavBar;
