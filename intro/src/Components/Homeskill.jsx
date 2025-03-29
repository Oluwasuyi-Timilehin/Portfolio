import React from "react";
import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Homeskill = () => {
  return (
    <>
      <div className="bg-white dark:bg-primary py-10 text-primary dark:text-white lg:py-40">
        <div className="container mx-auto px-4 space-y-10 flex flex-col transition ease-out duration-1000 lg:justify-center lg:flex-row lg:space-x-20 lg:items-center lg:px-7">
          <div className="flex flex-col space-y-4 lg:w-1/2">
            <div className="space-y-1">
              <p className="text-primary dark:text-white text-sm font-medium">
                MY SKILLS
              </p>
              <p className="text-2xl font-semibold lg:text-3xl">
                What <span className="text-secondary">i can do</span>
              </p>
            </div>
            <div className="space-y-3 text-primary dark:text-white text-left lg:text-justify leading-relaxed">
              <p className="tracking-wide">
                With a strong foundation in web development, I have the ability
                to create dynamic and visually appealing web applications. My
                skills span across HTML, CSS, JavaScript, and frameworks like
                React.js, allowing me to bring interactive and responsive
                designs to life.
              </p>
              <p className="tracking-wide">
                Leveraging Tailwind CSS, I can efficiently style and customize
                user interfaces while maintaining clean and maintainable code.
                My experience with GitHub ensures seamless version control and
                collaboration, making teamwork and project management smooth and
                efficient.
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="grid grid-cols-2 gap-7 lg:grid-cols-3 lg:w-1/2">
            <div className="border border-slate-500 py-10 px-4 rounded-md space-y-3 text-primary flex flex-col text-center items-center lg:py-5 dark:border-gray-400  dark:text-white">
              <FaHtml5 className="text-[#82A9F2] text-5xl" />
              <p className="text-primary dark:text-white font-semibold">Html</p>
            </div>
            <div className="border border-slate-500 py-10 px-4 rounded-md space-y-3 text-primary flex flex-col text-center items-center lg:py-5 dark:border-gray-400 dark:text-white">
              <IoLogoCss3 className="text-[#82A9F2] text-5xl" />
              <p className="text-primary dark:text-white font-semibold">Css</p>
            </div>
            <div className="border border-slate-500 py-10 px-4 rounded-md space-y-3 text-primary flex flex-col text-center items-center lg:py-5 dark:border-gray-400 dark:text-white ">
              <DiJavascript className="text-[#ffff00] text-5xl" />
              <p className="text-primary dark:text-white font-semibold">
                Javascript
              </p>
            </div>
            <div className="border border-slate-500 py-10 px-4 rounded-md space-y-3 text-primary flex flex-col text-center items-center lg:py-5 dark:border-gray-400 dark:text-white">
              <FaReact className="text-[#82A9F2] text-5xl" />
              <p className="text-primary dark:text-white font-semibold">
                React.Js
              </p>
            </div>
            <div className="border border-slate-500 py-10 px-4 rounded-md space-y-3 text-primary flex flex-col text-center items-center lg:py-5 dark:border-gray-400 dark:text-white">
              <SiTailwindcss className="text-[#82A9F2] text-5xl" />
              <p className="text-primary dark:text-white font-semibold">
                Tailwind css
              </p>
            </div>
            <div className="border border-slate-500 py-10 px-4 rounded-md space-y-3 text-primary  flex flex-col text-center items-center lg:py-5 dark:border-gray-400 dark:text-white">
              <FaGithub className="text-5xl" />
              <p className="text-primary dark:text-white font-semibold">
                Github
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Homeskill;
