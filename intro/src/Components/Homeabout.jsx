import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import spiderImg from "/Images/spidey.webp";

const Homeabout = () => {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto py-40 px-4 items-center justify-center flex flex-col space-y-5 lg:px-7 lg:space-x-10 lg:flex-row">
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
