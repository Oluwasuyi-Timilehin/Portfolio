import { useEffect, useRef } from "react";
import { FaReact, FaHtml5, FaGithub, FaCode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const Homeskill = () => {
  const skills = [
    {
      icon: <FaHtml5 className="text-xl" />,
      name: "HTML5",
      level: 90,
      color: "text-orange-500",
    },
    {
      icon: <IoLogoCss3 className="text-xl" />,
      name: "CSS3",
      level: 90,
      color: "text-blue-500",
    },
    {
      icon: <DiJavascript className="text-xl" />,
      name: "JavaScript",
      level: 85,
      color: "text-yellow-400",
    },
    {
      icon: <FaReact className="text-xl" />,
      name: "React.js",
      level: 85,
      color: "text-blue-400",
    },
    {
      icon: <SiTailwindcss className="text-xl" />,
      name: "Tailwind CSS",
      level: 90,
      color: "text-cyan-400",
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "Git/GitHub",
      level: 80,
      color: "text-gray-800 dark:text-white",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-bar");

            progressBars.forEach((bar) => {
              const targetWidth = bar.getAttribute("data-level");
              bar.style.width = "0%";

              // Triger reflow to restart the animation
              void bar.offsetWidth;

              // Animate to target width
              bar.style.transition = "width 1.5s ease-out";
              bar.style.width = `${targetWidth}%`;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);


  return (
    <>
      <section className="bg-white dark:bg-zinc-950 py-16 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium uppercase tracking-wider">
                  My Skills Journey
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white">
                  Growing My{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Toolbox
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  As an enthusiastic learner in web development, I'm actively
                  building my skills in core frontend technologies. Here's where
                  I currently stand in my learning journey:
                </p>

                <p>
                  I focus on mastering fundamentals before moving to advanced
                  concepts, ensuring strong foundations in HTML, CSS, and
                  JavaScript before diving deeper into frameworks like React.
                </p>

                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-lg border-l-4 border-emerald-500">
                  <p className="font-medium">
                    "Every expert was once a beginner. I embrace the learning
                    process and celebrate each new concept mastered."
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Container */}
            <div className="lg:w-1/2" ref={containerRef}>
              <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-4 border border-zinc-100 dark:border-zinc-800">
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center gap-3 p-1 rounded-lg">
                        <div className={`p-2 rounded-md ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm text-zinc-800 dark:text-zinc-300 truncate">
                              {skill.name}
                            </span>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1.5 mt-1.5 overflow-hidden">
                            <div
                              className="progress-bar bg-gradient-to-r from-emerald-400 to-emerald-600 h-full rounded-full"
                              data-level={skill.level}
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {index !== skills.length - 1 && (
                        <div className="h-px bg-zinc-200 dark:bg-zinc-700 mx-2 my-1 last:hidden"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homeskill;
