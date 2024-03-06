import React from "react";
import Title from "./Title";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";

function Contact() {
  const socialCards = [
    {
      icon: github,
      name: "Github",
      link: "https://github.com/santhoshpodugu",
    },
    {
      icon: linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/santhosh-podugu-44a713119",
    },
    {
      icon: twitter,
      name: "Twitter",
      link: "https://twitter.com/santhoshpodugu6",
    },
    {
      icon: mail,
      name: "Mail",
      link: "mailto:santhoshsanthu1973@gmail.com",
    },
  ];
  return (
    <section
      id="contact"
      className="h-[800px] flex flex-col items-center pt-20"
    >
      <Title>
        Let's{" "}
        <span className="bg-gradient-to-t from-primary-main to-primary-special bg-clip-text text-transparent">
          Connect!
        </span>
      </Title>
      <div className="mt-6">
        {socialCards.map((card) => {
          return (
            <Link
              to={card.link}
              target="_blank"
              className="flex justify-center items-center my-6 p-2 w-[370px]  rounded-lg gap-x-12 bg-gradient-to-tr from-black to-primary-menu hover:shadow-[0_0_5px_5px] hover:shadow-primary-shadow hover:-translate-x-2 hover:-translate-y-1 transition-transform ease-in duration-300"
            >
              <img src={card.icon} className="w-24" />
              <p className="text-3xl">{card.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
