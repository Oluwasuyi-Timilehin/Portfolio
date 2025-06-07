import { LuGithub, LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import fastImg from "/Images/fastcare.png";
import spiderImg from "/Images/movieapp.png";

const Homeproject = () => {
  const projects = [
    {
      title: "Movie App",
      description:
        "A React application that allows users to discover new films effortlessly, featuring search functionality and curated top movie lists.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/Oluwasuyi-Timilehin/Movieapp",
      liveLink: "https://movieapp-fawn-one.vercel.app/",
      image: spiderImg,
      type: "Personal Project",
    },
    {
      title: "Fast Care",
      description:
        "Emergency medical application designed for quick access to medical units, ensuring swift connection to emergency assistance.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/Zino234/FastCare",
      image: fastImg,
      type: "Personal Project",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-zinc-50 dark:bg-zinc-900 py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            development approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg bg-white dark:bg-zinc-800/50 h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={project.image}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                  >
                    <LuGithub className="h-4 w-4" />
                    <span>Code</span>
                  </Link>

                  {project.liveLink && (
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <LuExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="https://github.com/Oluwasuyi-Timilehin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white h-10 rounded-md px-6 py-2"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homeproject;
