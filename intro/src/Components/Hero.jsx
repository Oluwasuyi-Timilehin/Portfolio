import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import webImage from "/Images/myavater.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-zinc-950 pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
        {/* Floating animated elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-lg bg-emerald-500/15 dark:bg-emerald-400/15 animate-float2"></div>
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 animate-float3"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 rounded-lg bg-emerald-500/20 dark:bg-emerald-400/20 animate-float4"></div>
        <div className="absolute bottom-1/3 left-1/5 w-14 h-14 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 animate-float5"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 dark:opacity-10"></div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6" data-aos="fade-right">
              <h1 className="text-zinc-900 text-4xl font-semibold md:text-5xl lg:text-6xl dark:text-white">
                Hello, I'm{" "}
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
                  href="https://www.linkedin.com/in/oluwasuyi-oluwatimilehin/"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/timicodess"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="https://www.instagram.com/timiturn3r/"
                  className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects" onClick={scrollToProjects}>
                  <button className="inline-flex justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-offset-zinc-950">
                    View my work
                  </button>
                </a>
                <a href="/resume.pdf" download>
                  <button className="gap-2 rounded-md text-sm font-medium whitespace-nowrap border border-emerald-600 text-emerald-600 px-4 py-2 hover:bg-emerald-50 hover:text-zinc-600 dark:hover:text-white dark:hover:bg-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950">
                    Download cv
                  </button>
                </a>
              </div>
            </div>
            <div
              className="flex-1 flex justify-center relative"
              data-aos="fade-left"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-emerald-500/70 dark:border-emerald-500 overflow-hidden z-10">
                <img
                  alt="Oluwasuyi Oluwatimilehin"
                  className="w-full h-full object-cover rounded-full"
                  src={webImage}
                  style={{
                    objectPosition: "center",
                    transform: "scale(1.0)",
                  }}
                />
              </div>
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 dark:bg-emerald-400/20 blur-3xl w-72 h-72 md:w-96 md:h-96 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
