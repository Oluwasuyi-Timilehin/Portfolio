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
      <div className="bg-primary py-10 text-white lg:py-0">
        <div className="container mx-auto px-4 space-y-10 flex flex-col lg:h-screen lg:justify-center lg:flex-row lg:space-x-20 lg:items-center lg:px-7 transition ease-out duration-1000">
          <div className="flex flex-col space-y-4 lg:w-1/2">
            <div className="space-y-1">
              <p className="text-white text-sm font-medium">MY SKILLS</p>
              <p className="text-2xl font-semibold lg:text-3xl">
                What <span className="text-secondary">i can do</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ducimus nobis fuga quibusdam, quaerat mollitia voluptatum,
                maxime quidem dolor aperiam, repellendus similique. Labore
                deleniti similique doloremque alias, vel expedita temporibus
              </p>
              <p className="tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus magnam explicabo ex nemo mollitia officiis, modi
                voluptates hic, doloremque nostrum voluptate. Laudantium, beatae
                expedita dolor reiciendis quam porro cumque odio
              </p>
            </div>
          </div>
          <div className="px- grid grid-cols-2 gap-7 lg:grid-cols-3 lg:w-1/2">
            <div className="border border-gray-400 py-10 px-4 rounded-md space-y-3 text-white flex flex-col text-center items-center lg:py-5">
              <FaHtml5 className="text-[#82A9F2] text-5xl" />
              <p className="text-white font-semibold">Html</p>
            </div>
            <div className="border border-gray-400 py-10 px-4 rounded-md space-y-3 text-white flex flex-col text-center items-center lg:py-5">
              <IoLogoCss3 className="text-[#82A9F2] text-5xl" />
              <p className="text-white font-semibold">Css</p>
            </div>
            <div className="border border-gray-400 py-10 px-4 rounded-md space-y-3 text-white flex flex-col text-center items-center lg:py-5">
              <DiJavascript className="text-[#ffff00] text-5xl" />
              <p className="text-white font-semibold">Javascript</p>
            </div>
            <div className="border border-gray-400 py-10 px-4 rounded-md space-y-3 text-white flex flex-col text-center items-center lg:py-5">
              <FaReact className="text-[#82A9F2] text-5xl" />
              <p className="text-white font-semibold">React.Js</p>
            </div>
            <div className="border border-gray-400 py-10 px-4 rounded-md space-y-3 text-white flex flex-col text-center items-center lg:py-5">
              <SiTailwindcss className="text-[#82A9F2] text-5xl" />
              <p className="text-white font-semibold">Tailwind css</p>
            </div>
            <div className="border border-gray-400 py-10 px-4 rounded-md space-y-3 text-white flex flex-col text-center items-center lg:py-5">
              <FaGithub className="text-5xl" />
              <p className="text-white font-semibold">Github</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeskill;
