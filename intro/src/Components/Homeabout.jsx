const Homeabout = () => {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto py-20 px-4 lg:px-7 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content Section */}
            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-3">
                <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm uppercase tracking-wider">
                  About Me
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white">
                  Crafting digital experiences that{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    connect
                  </span>{" "}
                  and{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    convert
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Hello! I'm Oluwasuyi Timilehin, a Lagos-based Frontend
                  Developer with over 3 years of experience turning ideas into
                  interactive realities. I don't just build websites - I create
                  digital experiences that engage users and drive results.
                </p>

                <p>
                  My journey in web development began with curiosity about how
                  websites work, and has grown into a passion for solving
                  real-world problems through clean, efficient code. I
                  specialize in making complex technologies feel simple and
                  intuitive for end-users.
                </p>

                <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <p className="font-medium italic">
                    "What excites me most is that moment when design and
                    functionality come together perfectly - when a website not
                    only looks stunning but feels effortless to use."
                  </p>
                </div>

                <p>
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or mentoring
                  upcoming developers. I believe in continuous learning and
                  staying ahead of industry advancements to deliver cutting-edge
                  solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-zinc-800 dark:text-white">
                    User-Centric Design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-zinc-800 dark:text-white">
                    Responsive Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-zinc-800 dark:text-white">
                    Performance Optimization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-zinc-800 dark:text-white">
                    Clean Code Practices
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Element Section */}
            <div className="lg:w-1/3 relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-emerald-500/30 dark:border-emerald-400/30">
                <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-400/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-7xl text-emerald-500 dark:text-emerald-400 opacity-30">
                    {`</>`}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
