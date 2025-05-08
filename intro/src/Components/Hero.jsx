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
      <section className="bg-white dark:bg-zinc-950 pt-32 pb-20 md:pt-32 md:pb-20 md:flex md:items-center">
        <div className="flex justify-center space-y-20 flex-col items-center px-6 md:px-8  md:justify-between md:space-x-20 md:flex-row lg:space-y-0 lg:px-12">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
            <h1 className="text-zinc-900 text-4xl font-semibold md:text-5xl lg:text-6xl dark:text-white">
              Hi, I'm{" "}
              <span className="text-emerald-600">Oluwasuyi Oluwatimilehin</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl md:text-xl dark:text-zinc-300">
              A passionate Frontend Web Developer based in lagos, Nigeria, with
              over 3 years experience creating user friendly and responsive
              websites.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 text-xl text-zinc-900 dark:text-zinc-300">
              <Link
                to="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin-b474b629a"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://x.com/timicodess"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://github.com/Oluwasuyi-Timilehin"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.instagram.com/dxrkfacee/"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                <FaInstagram />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="">
                <button
                  className="inline-flex justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap bg-emerald-600 px-4 py-2 
                text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-offset-zinc-950"
                >
                  View my work
                </button>
              </a>
              <a href="/Oluwasuyi OluwatimilehinCV.pdf" download>
                <button className="gap-2 rounded-md text-sm font-medium whitespace-nowrap border border-emerald-600 text-emerald-600 px-4 py-2 hover:bg-emerald-50 hover:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950">
                  Download cv
                </button>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img className="mx-auto" src={webImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
