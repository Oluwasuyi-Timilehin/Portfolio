import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import webImage from "/Images/avater1.png";

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-zinc-950 pt-28 pb-20 md:pt-36 md:pb-32 ">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-zinc-900 text-4xl font-semibold md:text-5xl lg:text-6xl dark:text-white">
                Hi, I'm{" "}
                <span className="text-emerald-600">
                  Oluwasuyi Oluwatimilehin
                </span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-2xl md:text-xl dark:text-zinc-300">
                A passionate Frontend Web Developer based in lagos, Nigeria,
                with over 3 years experience creating user friendly and
                responsive websites.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 text-xl text-zinc-900 dark:text-zinc-300">
                <a
                  href="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin-b474b629a"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/timicodess"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://github.com/Oluwasuyi-Timilehin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/dxrkfacee/"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects">
                  <button className="inline-flex justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-offset-zinc-950">
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
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-emerald-500/70 dark:border-emerald-500 overflow-hidden">
                <img
                  alt="Oluwasuyi Oluwatimilehin"
                  className="w-full h-full object-cover  rounded-full"
                  src={webImage}
                  style={{
                    objectPosition: "top center",
                    transform: "scale(1.0)", // Adjust this value as needed
                  }}
                />
                <div className="absolute inset-1 rounded-full flex items-center justify-center overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
