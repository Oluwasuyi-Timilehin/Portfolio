import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { LuMoon, LuSun } from "react-icons/lu";
import Homeabout from "./Homeabout";
import Hero from "./Hero";
import Homeskill from "./Homeskill";
import Homeproject from "./Homeproject";
import Contact from "./Contact";
import Footer from "./Footer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setOpen(!open);
    // It prevents scrolling when the mobile menu is open
    document.body.style.overflow = open ? "auto" : "hidden";
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set initial theme
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Closes the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`w-full fixed z-50 transition-all duration-300 border-b dark:border-zinc-800 ${
          darkMode ? "dark:bg-zinc-900" : "bg-white"
        } ${
          scrolled
            ? "py-4 shadow-lg backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
            : "py-5"
        }`}
      >
        <div className="flex items-center px-4 sm:px-6 lg:px-8 justify-between">
          {/* Logo */}
          <RouterLink
            to="/"
            className="text-2xl font-bold flex items-center gap-2 group"
          >
            <span className="text-emerald-600">Timicodes</span>
            <FaCode className="text-emerald-600" />
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <div className="flex items-center gap-8">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-zinc-600 duration-300 transition-colors hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
                activeClass="text-secondary"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-zinc-600 duration-300 transition-colors hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
                activeClass="text-secondary"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-zinc-600 duration-300 transition-colors hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
                activeClass="text-secondary"
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-zinc-600 duration-300 transition-colors hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
                activeClass="text-secondary"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-zinc-600 duration-300 transition-colors hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
                activeClass="text-secondary"
              >
                Contact
              </ScrollLink>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-zinc-600 dark:text-zinc-300 rounded-full p-2 transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <LuSun className="text-md" />
              ) : (
                <LuMoon className="text-md" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden gap-4">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="text-zinc-600 dark:text-zinc-300 rounded-full p-2 transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <LuSun className="text-md" />
              ) : (
                <LuMoon className="text-md" />
              )}
            </button>
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-zinc-600 dark:text-zinc-300 rounded-full p-2 transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              aria-label="Toggle Menu"
            >
              {open ? (
                <IoIosClose className="text-md" />
              ) : (
                <AiOutlineMenu className="text-md" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 h-[330px] w-full z-40 shadow-lg transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        } bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 shadow-lg flex flex-col items-center justify-start lg:hidden`}
      >
        <div className="w-full px-6 flex flex-col items-center gap-4 py-6">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full text-left text-lg text-zinc-600 duration-300 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            activeClass="text-emerald-600 dark:text-emerald-500"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full text-left text-lg text-zinc-600 duration-300 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            activeClass="text-emerald-600 dark:text-emerald-500"
            onClick={closeMobileMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full text-left text-lg text-zinc-600 duration-300 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            activeClass="text-emerald-600 dark:text-emerald-500"
            onClick={closeMobileMenu}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full text-left text-lg text-zinc-600 duration-300 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            activeClass="text-emerald-600 dark:text-emerald-500"
            onClick={closeMobileMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full text-left text-lg text-zinc-600 duration-300 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            activeClass="text-emerald-600 dark:text-emerald-500"
            onClick={closeMobileMenu}
          >
            Contact
          </ScrollLink>
        </div>
      </div>

      {/* Page Content */}
      <div className="">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <Homeabout />
        </Element>
        <Element name="skills">
          <Homeskill />
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
