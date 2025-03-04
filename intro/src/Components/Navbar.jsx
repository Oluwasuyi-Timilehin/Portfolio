import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs"; // Icons for light and dark mode
import Homeabout from "./Homeabout";
import Hero from "./Hero";
import Homeskill from "./Homeskill";
import Homeproject from "./Homeproject";
import Contact from "./Contact";
import Footer from "./Footer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-white dark:bg-primary py-5 text-primary dark:text-white w-full sticky top-0 z-50">
        <div className="flex items-center px-3 container mx-auto justify-between">
          {/* Logo */}
          <RouterLink to="/" className="text-2xl text-secondary">
            <FaCode />
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10 font-semibold">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer transition-all duration-500"
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer transition-all duration-500"
            >
              SKILLS
            </ScrollLink>
            <ScrollLink
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer transition-all duration-500"
            >
              PROJECT
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer transition-all duration-500"
            >
              CONTACT
            </ScrollLink>
            <a
              href="/Oluwasuyi OluwatimilehinCV.pdf"
              download
              className="border py-1.5 px-3 border-secondary rounded-md transition-all duration-500 hover:bg-secondary hover:text-white"
            >
              Resume
            </a>
            {/* Dark Mode Toggle for Large Screens */}
            <button
              onClick={toggleDarkMode}
              className="text-secondary text-xl"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden space-x-5">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="text-secondary text-xl"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
            {/* Hamburger Menu */}
            <button onClick={toggleMenu} className="text-secondary">
              {open ? (
                <IoIosClose fontSize="25" />
              ) : (
                <AiOutlineMenu fontSize="25" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed ${
          open ? "block" : "hidden"
        } bg-white dark:bg-primary text-primary dark:text-white top-12 w-full z-40 lg:hidden h-screen flex flex-col items-center justify-center space-y-16`}
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer transition-all duration-500 text-xl font-semibold"
          onClick={toggleMenu}
        >
          ABOUT
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer transition-all duration-500 text-xl font-semibold"
          onClick={toggleMenu}
        >
          SKILLS
        </ScrollLink>
        <ScrollLink
          to="resume"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer transition-all duration-500 text-xl font-semibold"
          onClick={toggleMenu}
        >
          PROJECT
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer transition-all duration-500 text-xl font-semibold"
          onClick={toggleMenu}
        >
          CONTACT
        </ScrollLink>
        <a
          href="/Oluwasuyi OluwatimilehinCV.pdf"
          download
          className="border p-3 text-xl font-semibold border-secondary rounded-md transition-all duration-500 hover:bg-secondary hover:text-white"
        >
          Resume
        </a>
      </div>

      {/* Page Content */}
      <div>
        <Element>
          <Hero />
        </Element>
        <Element name="skills">
          <Homeskill />
        </Element>
        <Element name="about">
          <Homeabout />
        </Element>
        <Element name="resume">
          <Homeproject />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element>
          <Footer />
        </Element>
      </div>
    </>
  );
};

export default Navbar;
