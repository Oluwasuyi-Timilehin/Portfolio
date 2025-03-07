import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

import webImage from "/Images/web.png";

const Hero = () => {
  return (
    <>
      <div className="bg-white dark:bg-primary py-10 lg:flex lg:items-center lg:py-20">
        <div className="flex justify-center space-y-20 flex-col items-center container h-screen mx-auto px-4 lg:h-auto lg:justify-between lg:flex-row lg:px-7">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
            <div className="space-y-1 flex flex-col">
              <p className="text-primary dark:text-white text-sm leading-[35px] font-semibold lg:text-xl">
                Hello, I'm{" "}
              </p>

              <p className=" text-primary dark:text-white text-3xl font-semibold lg:text-5xl">
                Oluwasuyi Timilehin
              </p>
            </div>
            <p className="text-slate-500 dark:text-grey tracking-wide opacity-100 lg:text-xl">
              A passionate
              <span className="text-secondary"> Frontend Web Developer </span>
              with 3 years experience creating user friendly websites.
            </p>
            <div className="flex space-x-4 text-xl text-white lg:text-2xl">
              <Link
                to="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin-b474b629a"
                className=""
              >
                <FaLinkedin className="" />
              </Link>
              <Link
                to="https://twitter.com/OluwasuyiOlumi3"
                className=""
              >
                <FaTwitter className="text-primary dark:text-white" />
              </Link>
              <Link
                to="https://github.com/Oluwasuyi-Timilehin"
                className=""
              >
                <FaGithub className="text-primary dark:text-white" />
              </Link>
              <Link
                to="https://www.instagram.com/dxrkfacee/"
                className=""
              >
                <FaInstagram className="text-primary dark:text-white" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img className="mx-auto" src={webImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
