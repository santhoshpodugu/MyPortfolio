import React from "react";
import arrow from "../assets/arrow.svg";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="h-20 bg-primary-main flex justify-between items-center px-5 shadow-[0_0_5px_5px] shadow-primary-shadow">
      <p className="font-bold hover:text-primary-special cursor-pointer">Santhosh Podugu.</p>
      <HashLink smooth to="#">
        <img src={arrow} title="Back to Top" className="w-10" />
      </HashLink>
    </footer>
  );
}

export default Footer;
