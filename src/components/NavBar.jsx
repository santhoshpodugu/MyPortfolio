import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navLinks = [
  {
    name: "Home",
    link: "/",
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
  return (
    <nav className="fixed flex justify-around items-center h-20 bg-primary-main top-0 inset-x-0 md:justify-between md:px-4">
      <div className="font-black text-2xl hover:text-primary-hover cursor-pointer">
        <a href="#">Santhosh Podugu</a>
      </div>
      <div
        className={`flex md:flex-col md:w-full md:fixed top-20 ${
          isOpen ? "md:right-0" : "md:-right-full"
        } md:text-center md:bg-gradient-to-br md:to-primary-menu md:from-black backdrop-blur transition-all duration-300`}
      >
        {navLinks.map((link) => {
          return (
            <Link
              key={link.name}
              to={link.link}
              className="p-6 hover:underline underline-offset-[10px] hover:text-primary-hover md:hover:no-underline md:hover:text-white md:p-2 md:text-[25px] md:hover:bg-gradient-to-tr md:hover:from-primary-main md:hover:to-primary-special"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {link.name}
            </Link>
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
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default NavBar;
