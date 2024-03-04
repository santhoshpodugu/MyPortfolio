import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const navLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/#about'
  },
  {
    name: 'Education',
    link: '/#education'
  },
  {
    name: 'Skills',
    link: '/#skills'
  },
  {
    name: 'Projects',
    link: '/#projects'
  },
  {
    name: 'Contact',
    link: '/#contact'
  }
];

function NavBar() {
  return (
    <nav className="fixed flex justify-around items-center h-20 bg-primary-main top-0 inset-x-0 md:justify-between md:px-4">
      <div className="font-black text-2xl hover:text-primary-hover cursor-pointer"><a href="#">Santhosh Podugu</a></div>
      <div className="flex">
        {navLinks.map((link) => {
          return(
          <NavLink key={link.name} to={link.link} className="p-6 hover:underline underline-offset-[10px] hover:text-primary-hover">{link.name}</NavLink>
          )
        } )}
      </div>
      <div className="hamburger-menu hidden md:block">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default NavBar;
