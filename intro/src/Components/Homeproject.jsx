import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import fastImg from "/Images/fastcare.png";
import spiderImg from "/Images/movieapp.png";

const Homeproject = () => {
  return (
    <>
      <section  id="projects" className="bg-zinc-50 dark:bg-zinc-900 py-10 text-primary dark:text-white lg:py-20">
        <div className="container mx-auto space-y-16 px-4 lg:space-y-24">
          <div className="flex flex-col space-y-1">
            <p className="text-primary dark:text-white text-sm font-medium">
              MY PROJECT
            </p>
            <p className="text-2xl font-semibold lg:text-3xl">
              What <span className="text-secondary">i have built</span>
            </p>
          </div>

          {/* My Projects */}
          <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
            <div className="flex flex-col lg:w-1/2">
              <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-200 dark:bg-slate-700 lg:px-5">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3">
                      <p className="text-secondary text-3xl font-bold">
                        Movie App
                      </p>
                      <Link
                        className="text-xl"
                        to="https://github.com/Oluwasuyi-Timilehin/Movieapp"
                      >
                        <FaGithub />
                      </Link>
                    </div>
                    <p className="text-slate-500 dark:text-slate-300 font-semibold text-xl">
                      Personal Project
                    </p>
                  </div>
                  <div className="hidden md:flex">
                    <Link
                      to="https://movieapp-fawn-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary px-3 py-1 rounded-md font-medium"
                    >
                      View Live
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    React.Js
                  </div>
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Tailwind css
                  </div>
                </div>
                <p className="text-primary dark:text-white text-left lg:text-justify leading-relaxed">
                  This movie app allows users to discover new films
                  effortlessly, featuring a search function and a curated list
                  of the top 20 movies. It offers an easy and enjoyable way to
                  explore and expand your cinematic horizons.
                </p>
                <div className="flex md:hidden justify-end">
                  <Link
                    to="https://movieapp-fawn-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary px-3 py-1 rounded-md text-center font-medium"
                  >
                    View Live
                  </Link>
                </div>
              </div>
            </div>

            <img
              src={spiderImg}
              className="rounded-sm mx-auto w-full h-40 lg:h-80 lg:w-1/2 object-cover"
            />
          </div>

          <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center">
            <div className="flex flex-col lg:w-1/2">
              <div className="space-y-4 flex flex-col lg:space-y-6 rounded-xl px-3 py-7 bg-slate-200 dark:bg-slate-700 lg:px-5">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3">
                    <p className="text-secondary text-3xl font-bold">
                      Fast Care
                    </p>
                    <Link
                      className="text-xl"
                      to="https://github.com/Zino234/FastCare"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <p className="text-slate-500 dark:text-slate-300 font-semibold text-xl">
                    Personal Project
                  </p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Html
                  </div>
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Tailwind
                  </div>
                  <div className="bg-secondary font-medium px-3 py-1 rounded-md">
                    Javascript
                  </div>
                </div>
                <p className="text-primary dark:text-white text-left lg:text-justify leading-relaxed">
                  Fast Care is an application designed for emergency situations,
                  enabling users to quickly contact medical units. It ensures
                  swift and efficient access to emergency medical assistance.
                </p>
              </div>
            </div>

            <img
              src={fastImg}
              className="rounded-sm mx-auto w-full h-40 lg:h-80 lg:w-1/2 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homeproject;
