import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Oluwasuyi Timilehin
            </h3>
            <p className="text-sm leading-relaxed">
              Frontend developer passionate about creating beautiful, functional
              websites. Let's connect and build something amazing together.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Oluwasuyi-Timilehin"
                aria-label="GitHub"
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                  rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://x.com/timiturn3r"
                aria-label="Twitter"
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                  rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin/"
                aria-label="LinkedIn"
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                  rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/timiturn3r/"
                aria-label="Instagram"
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                  rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm text-zinc-600 duration-300 cursor-pointer block hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors "
                  activeClass="text-emerald-600 dark:text-emerald-500"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm text-zinc-600 duration-300 cursor-pointer block hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors "
                  activeClass="text-emerald-600 dark:text-emerald-500"
                >
                  Skills
                </ScrollLink>
              </div>
              <div className="space-y-2">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm text-zinc-600 duration-300 cursor-pointer block hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors "
                  activeClass="text-emerald-600 dark:text-emerald-500"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm text-zinc-600 duration-300 cursor-pointer block hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors "
                  activeClass="text-emerald-600 dark:text-emerald-500"
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Get In Touch
            </h3>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm">Have a project or question?</p>
                <Link
                  to="mailto:oluwasuyitimilehin@gmail.com"
                  className="text-sm hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  oluwasuyitimilehin@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Oluwasuyi Timilehin. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
