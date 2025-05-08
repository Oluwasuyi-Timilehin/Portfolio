import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import spiderImg from "/Images/spidey.webp";

const Homeabout = () => {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-primary">
        <div className="container mx-auto py-40 px-4 items-center justify-center flex flex-col space-y-5 lg:px-7 lg:space-x-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center -space-y-5 lg:w-2/4 xl:w-1/4">
          {/* Profile Image */}
            <img
              className="rounded-full object-cover h-80 w-80"
              src={spiderImg}
              alt=""
            />
            
            <div className="border border-slate-500 text-center bg-white w-60 py-3 space-y-1 px-4 text-primary rounded-md dark:text-white dark:bg-primary dark:border-grey">
              <p>Oluwasuyi Timilehin</p>
              <div className="flex justify-center px-4 space-x-3">
                <Link
                  to="https://github.com/Oluwasuyi-Timilehin"
                  className="text-xl"
                >
                  <FaGithub className="text-primary dark:text-white" />
                </Link>
                <Link
                  to="https://twitter.com/OluwasuyiOlumi3"
                  className="text-xl"
                >
                  <FaTwitter className="text-primary dark:text-white" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin-b474b629a"
                  className="text-xl"
                >
                  <FaLinkedin className="text-primary dark:text-white" />
                </Link>
                <Link
                  to="https://www.instagram.com/dxrkfacee/"
                  className="text-xl"
                >
                  <FaInstagram className="text-primary dark:text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-10 space-y-4 lg:w-2/3">
            <div className="space-y-1 text-center flex flex-col">
              <p className="text-primary dark:text-white font-medium text-sm">
                ABOUT ME
              </p>
              <span className="text-secondary font-semibold tracking-widest lg:tracking-wide text-xl lg:text-3xl">
                Transforming visions into exceptional portfolio
              </span>
            </div>
            <p className="text-primary dark:text-white text-left lg:text-justify leading-relaxed">
              Hello and welcome to my portfolio! I'm Oluwasuyi Timilehin, a
              Frontend developer who is passionate about creating beautiful,
              interactive, responsive and user-friendly websites. I enjoy
              researching new design trends and technologies as a creative
              problem solver. Thank you for visiting my portfolio! Please feel
              free to browse through my projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
